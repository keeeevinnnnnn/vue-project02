// home組件的小倉庫
import { reqCategoryList } from "../../api";
const state = {};
const mutations = {};
const actions = {
  categoryList() {
    let result = reqCategoryList();
    console.log(result);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
