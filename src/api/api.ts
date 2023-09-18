import axios from "axios";

axios.defaults.timeout = 1000;

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    if (process.env.VUE_APP_MODE === "development") {
      //开发环境下的执行操作
      console.log("开发");
    } else if (process.env.VUE_APP_MODE === "test") {
      //测试环境下的执行操作
      console.log("测试");
    } else {
      //生产环境下的执行操作
      console.log("正式");
    }
    //可以写if判断，提前拦截错误信息
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export function apiGet(url: any, params?: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        headers: { token: sessionStorage.getItem("token") },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function apiPost(url: any, params?: any, headers?: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, headers)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
