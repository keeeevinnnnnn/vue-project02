import VueRouter from "vue-router";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
      props: true,
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    // 路由的跳轉，在專案跑起來的時候，跳轉到首頁
    {
      path: "*",
      redirect: "/Home",
    },
  ],
});
