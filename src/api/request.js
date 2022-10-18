// 對axios進行第二次封裝
import axios from "axios";
// 引入進度條
import nProgress from "nprogress";
// 引入進度條css
import "nprogress/nprogress.css";
// start:進度條開始，done:進度條結束
// console.log(nProgress);

// 利用axios對象的方法create，去創建一個axios實例
const requests = axios.create({
  // 基礎路徑，發請求的時候，路徑當中會出現api
  baseURL: "/api",
  // 代表請求超時的時間
  timeout: 5000,
});

// 請求攔截器，在發請求之前，請求攔截器可以監測到，可以在請求發出去之前做一些事情
requests.interceptors.request.request.use((config) => {
  // config: 配置對象，對象裡面有一個屬性很重要，header請求頭
  // 進度條開始
  nProgress.start();
  return config;
});

// 響應攔截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回調函數: 富霧氣響應數據回來後，攔截器可以檢查到，可以做一些事情
    // 進度條結束
    nProgress.done();
    return res.data;
  },
  (error) => {
    // 響應失敗的回調函數
    return Promise.reject(new Error("faile"));
  }
);

export default requests;
