<template>
  <div id="home">
    <nar-bar class="home-nav"><div slot="center">购物街</div></nar-bar>
    <home-swiper :banners="banners"/>
    <recommend-view  :recommends="recommends"/>
  </div>
</template>

<script>
import NarBar from "components/common/navbar/NarBar.vue";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMuItidata } from "network/home";


export default {
  name: "Home",
  components: {
    NarBar,
    HomeSwiper,
    RecommendView

  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //1、请求多个数据
    getHomeMuItidata().then((res) => {
      // console.log(res);
      // this.result=res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>