// search組件的小倉庫
import { reqGetSearchInfo } from "@/api";
const state = {
  // 初始狀態
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    // params形參: 是當用戶派發action的時候，第二個參數傳遞過來的，至少是一個空物件
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 計算屬性
// 項目當中getters主要的作用是: 簡化倉庫中的數據(簡化數據而生)
// 可以把我們將來組件當中需要用的數據簡化一下【將來組件在獲獲取數據的時候就方便了】
const getters = {
  // 當前型參state，當前倉庫中的state，並非大倉庫中的那個state
  goodsList(state) {
    // 防呆設定: 假如沒網路，返回的是undefined，至少給一個空陣列
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
