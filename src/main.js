import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
// 註冊成全局組件
import TypeNav from "./components/TypeNav";
import store from "./store";
// 引入mock模擬數據
import "./mock/mockServer";
// 引入swiper樣式
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// 第一個參數:全局組件的名字，第二個參數:哪一個組件
Vue.component(TypeNav.name, TypeNav);
Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router: router,
  store,
}).$mount("#app");
