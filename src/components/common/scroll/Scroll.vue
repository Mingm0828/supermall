<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
 


  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
       pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll : null,
        
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        observeDOM: true     //observe-dom 这个属性会在 better-scroll 内部帮我们监听 content 的高度变化，自动的帮我们调用内部的 refresh，再也不用为了图片内容早better-scroll对象创建的时候没加载出来导致不能滚动而到处的refresh了。
      })
        //2、监听滚动的位置
        this.scroll.on('scroll',(position) =>{
          // console.log(position);  //打印监听的位置
          this.$emit('scroll',position)  //通过自定义事件发送传出事件
        })

        //3、监听上拉加载事件
        this.scroll.on('pullingUp',()=>{
          // console.log('上拉加载更多');
          this.$emit('pullingUp')
        })
    },

    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }

  }
</script>

<style scoped>
</style>