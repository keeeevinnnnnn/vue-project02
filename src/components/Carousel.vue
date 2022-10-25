<template>
  <!-- 輪播圖的地方 -->
  <div class="swiper" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="v in bannerList" :key="v.id">
        <img :src="v.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分頁器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要導航按鈕 -->
    <div class="swiper-button-prev swiper-button-black"></div>
    <div class="swiper-button-next swiper-button-black"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["bannerList"],
  watch: {
    //监听父组件给子组件传递过来的props属性
    //没有执行：为什么没有执行啊？
    //floor是父组件传递过来的数据，因为没有发生变化，导致监听不到？
    bannerList: {
      //监听属性：立即监听，不管你属性有没有发生变化，立即执行一次。
      immediate: true,
      //监听回调
      handler() {
        //监听到属性变化，立即初始化swiper实例
        this.$nextTick(() => {
          //回调里面写代码的时候:1:服务器数据回来了 2:v-for执行完毕，结构已经有了
          new Swiper(this.$refs.floor1Swiper, {
            loop: false,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //分页器小球点击的时候切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.swiper {
  --swiper-theme-color: #0c0c0b;
}
</style>
