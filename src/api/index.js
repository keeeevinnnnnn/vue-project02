// 所有api模塊進行統一管理
import request from "./request";
import mockRequests from "./mockAjax";
export const reqCategoryList = () =>
  request({ url: "/product/getBaseCategoryList", method: "get" });

// 獲取banner ( Home首頁輪播圖接口 )
export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });

// 獲取floor數據
export const reqFloorList = () => mockRequests.get("/floor");

// 獲取search數據 地址:/api/list 請求方式:post 參數:需要帶參數
export const reqGetSearchInfo = (params) =>
  request({ url: "/list", method: "post", data: params });
