// 所有api模塊進行統一管理
import request from "./request";
import mockRequests from "./mockAjax";
export const reqCategoryList = () =>
  request({ url: "/product/getBaseCategoryList", method: "get" });

// 獲取banner ( Home首頁輪播圖接口 )
export const reqBannerList = () =>
  mockRequests({ url: "/banner", method: "get" });
