// home組件的小倉庫
import { reqCategoryList } from "../../api";
const state = {
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // 這裡的categoryList參數 = commit傳過來的res.data
    state.categoryList = categoryList;
  },
};
const actions = {
  async categoryList({ commit }) {
    // 通過 api，獲取商品分類數據
    let result = reqCategoryList();
    // res 是 promise對象，透過then函數取值 // res = { code: 200, message: '成功', data: Array(17), ok: true }
    result.then((res) => {
      if (res.code == 200) {
        commit("CATEGORYLIST", res.data);
      }
    });
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
