// home組件的小倉庫
import { reqCategoryList, reqBannerList, reqFloorList } from "../../api";
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // 這裡的categoryList參數 = commit傳過來的res.data
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
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
  // 獲取首頁輪播圖的數據
  async getBannerList({ commit }) {
    let result = await reqBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  // 獲取floor數據
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      // 提交mutation
      commit("GETFLOORLIST", result.data);
    }
  },
};

// 計算屬性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
