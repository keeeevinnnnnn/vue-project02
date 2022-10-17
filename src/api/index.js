// 所有api模塊進行統一管理
import requests from "./request";

export const reqCategoryList = () => {
  // 發請求: axios發請求返回結果 Promise 物件
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};
