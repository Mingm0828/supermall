<template>
  <div id="home">
    <nar-bar class="home-nav"><div slot="center">购物街</div></nar-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore" >
      <div>
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control
          class="tab-control"
          :titles="['流行', '新款', '精选']"
          v-on:tabClick="tabClick"  />
        <goods-list :goods="showGoods" />
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isshowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NarBar from "components/common/navbar/NarBar.vue";
import TabControl from "components/context/tabControl/TabControl.vue";
import GoodsList from "components/context/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/context/backTop/BackTop.vue";

import { getHomeMuItidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NarBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //流行 新款 精选 对象保存请求的数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isshowBackTop: true,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //1、请求多个数据
    this.getHomeMuItidata();
    //2、请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*事件监听相关的方法 */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isshowBackTop = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType); //直接加载商品数据
    },

    /*网络请求相关的方法 */
    getHomeMuItidata() {
      getHomeMuItidata().then((res) => {
        // console.log(res);
        // this.result=res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh; /*vh视口大小*/
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky; /* 页面不浮动 不根据页面上下浮动 */
  top: 44px;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>



