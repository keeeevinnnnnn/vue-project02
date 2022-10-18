// 所有api模塊進行統一管理
import request from "./request";

export const reqCategoryList = () =>
  request({ url: "/product/getBaseCategoryList", method: "get" });
