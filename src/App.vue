<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- 在Home、Search顯示的，在登錄、註冊隱藏 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  mounted() {
    // 通知vuex發API，獲取數據，存儲在倉庫當中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style></style>
