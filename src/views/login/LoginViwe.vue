<template>
  <div class="wrap">
    <div class="content">
      <div class="left">
        <div class="icon">
          <img
            src="https://allstatics.wondershare.cn/neveragain/2019/assets/icon/logo/wondershare-zh-vertical.svg"
            alt=""
          />
        </div>
        <div class="bgimgs">
          <img
            src="https://dc-static.wondershare.cn/wsid/cn/static/feature_new.png"
            alt=""
          />
        </div>
      </div>
      <div class="right">
        <div class="login">
          <div class="content">
            <div class="title">
              <img
                src="https://allstatics.wondershare.cn/neveragain/2019/assets/icon/logo/ai-drawing-zh-horizontal.svg"
                alt=""
              />
              <p>登录万兴</p>
            </div>
            <div class="inpt">
              <input
                type="text"
                placeholder="请输入用户名"
                v-model="username"
              /><br />
              <input
                type="password"
                placeholder="请输入密码"
                v-model="pwd"
              /><br />
              <input
                type="text"
                placeholder="请输入验证码"
                v-model="usercode"
              />
              <span>{{ code }}</span
              ><br />
              <button @click="loginfun()">立即登录</button>
            </div>
            <div class="footer">
              <p>
                未注册将会自动创建账号。注册登录即代表您已阅读并同意万兴科技<span>许可协议</span>和<span>隐私政策</span>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getcode, postlogin } from "@/api/http";
import { ElNotification } from "element-plus";
let code = ref("");
let username = ref("");
let pwd = ref("");
let usercode = ref("");

onMounted(() => {
  codefun();
});
const router = useRouter();
// 验证码
function codefun() {
  getcode().then((res: any) => {
    code.value = res.msg;
  });
}
// 登录
function loginfun() {
  let data = {
    name: username.value,
    pwd: pwd.value,
    vercode: usercode.value,
  };
  postlogin(data).then((res: any) => {
    if (res.code == 0) {
      open1();
      router.push({ path: "/index" });
    } else {
      open2(res);
    }
  });
}
// 提示框
const open1 = () => {
  ElNotification({
    title: "成功",
    message: "登陆成功",
    type: "success",
  });
};
const open2 = (test: any) => {
  ElNotification({
    title: "警告",
    message: test.msg,
    type: "warning",
  });
};
</script>

<style scoped lang="scss">
.wrap {
  background: linear-gradient(
      180.46deg,
      hsla(0, 0%, 100%, 0) -0.36%,
      rgba(247, 249, 253, 0.81) 99.61%
    ),
    linear-gradient(
      268.63deg,
      rgba(42, 240, 228, 0.22) 1.51%,
      rgba(140, 51, 255, 0.22) 38.82%,
      rgba(255, 39, 118, 0.22) 69.91%,
      rgba(255, 188, 15, 0.22) 101%
    ),
    #fff;
  .content {
    width: 100%;
    height: 100vh;
    .left {
      width: 55%;
      height: 100%;
      float: left;
      .icon {
        img {
          width: 200px;
          margin-left: 50px;
        }
      }
      .bgimgs {
        img {
          width: 700px;
          margin-left: 150px;
        }
      }
    }
    .right {
      width: 45%;
      height: 100%;
      float: right;
      .login {
        width: 70%;
        height: 70%;
        margin-top: 150px;
        margin-left: 50px;
        border-radius: 10px;
        background-color: white;
        .content {
          width: 90%;
          height: 90%;
          float: left;
          margin-top: 5%;
          margin-left: 5%;
          .title {
            width: 100%;
            height: 90px;
            img {
              height: 40px;
            }
            p {
              margin-top: 10px;
              font-size: 22px;
              font-weight: bolder;
            }
          }
          .inpt {
            width: 100%;
            text-align: center;
            position: relative;
            input {
              width: 80%;
              height: 50px;
              margin-top: 40px;
              outline: none;
              border: none;
              font-size: 18px;
              border-bottom: 1px gray solid;
            }
            input:nth-child(5) {
              width: 50%;
              float: left;
              margin-left: 46px;
            }
            span {
              width: 100px;
              height: 50px;
              right: 47px;
              top: 220px;
              font-size: 20px;
              font-weight: bolder;
              line-height: 50px;
              position: absolute;
              display: inline-block;
              border: 1px gray solid;
            }
            button {
              width: 80%;
              height: 40px;
              border: none;
              color: white;
              font-size: 17px;
              cursor: pointer;
              margin-top: 40px;
              border-radius: 10px;
              background-color: #006bde;
            }
          }
          .footer {
            height: 80px;
            margin-top: 40px;
            line-height: 40px;
            color: gray;
            span {
              cursor: pointer;
              color: #006bde;
            }
          }
        }
      }
    }
  }
}
</style>
