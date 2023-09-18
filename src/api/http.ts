import { apiGet, apiPost } from "@/api/api";

// 获取验证码
export function getcode() {
  return new Promise((resolve, reject) => {
    apiGet("http://47.94.4.201/index.php/index/index/getcode")
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

// 登录接口
export function postlogin(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/index/login", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

// 获取角色列表
export function getlist() {
  return new Promise((resolve, reject) => {
    apiGet("http://47.94.4.201/index.php/index/role/getroleslist")
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err.data);
      });
  });
}

// 系统用户停用/启用
export function userstate(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/role/stoproles", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

//  系统用户删除
export function userdel(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/role/delroles", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

//  系统用户添加
export function useradd(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/role/addroles", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

//  系统用户搜索
export function usersearch(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/role/getsearchroles", str)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err.data);
      });
  });
}

// 作业接口
export function postwork(str: any, headers: any) {
  headers = {
    "Content-Type": "application/json",
    strheader: "111",
  };
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/callcenter/getheaders", str, {
      headers,
    })
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function postuser(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/index/mycenter", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
// 头像接口
export function postimg(str: any) {
  return new Promise((resolve, reject) => {
    apiPost("http://47.94.4.201/index.php/index/upload/uploadimg", str)
      .then((res: any) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
