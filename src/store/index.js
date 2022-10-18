// vuex-大倉庫
import Vue from "vue";
import Vuex from "vuex";
// 使用插件
Vue.use(Vuex);
// 引入相關組件的小倉庫
import home from "./home";
import search from "./search";
// 導出store實例
export default new Vuex.Store({
  // 組件:務必註冊，各個小倉庫切記別不注册，不註冊就和沒寫沒區別了
  modules: {
    home,
    search,
  },
});
