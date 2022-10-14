import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
// 註冊成全局組件
import TypeNav from "./pages/TypeNav";

// 第一個參數:全局組件的名字，第二個參數:哪一個組件
Vue.component(TypeNav.name, TypeNav);
Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
