import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    // 可以写 if 判断，提前拦截错误信息
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
