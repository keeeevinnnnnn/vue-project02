// 先引入mockjs
import Mock from "mockjs";
// 把JSON數據格式引進來
import banner from "./banner.json";
import floor from "./floor.json";

// mock數據:第一個參數請求地址 第二個參數:請求數據
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
