<template>
  <div>
    <div class="box">
      <div class="title">
        <select name="" id="" v-model="states" @change="stafun()">
          <option value="角色状态">角色状态</option>
          <option value="启用中">启用中</option>
          <option value="停用中">停用中</option>
        </select>
        <input
          type="text"
          v-model="searchs"
          placeholder="请输入角色名称进行模糊搜索"
        />
        <button class="big" @click="ussearch()">🔍︎</button>
        <button class="adduser" @click="addfun()">+添加系统角色</button>
      </div>
      <div class="userlist">
        <table style="border-collapse: collapse">
          <thead>
            <tr>
              <th>
                <input type="checkbox" v-model="all" @change="allbox()" />
              </th>
              <th>角色名称</th>
              <th>角色描述</th>
              <th>角色权限配置</th>
              <th>角色启用状态</th>
              <th>最后编辑时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in userList" :key="item.id">
              <td>
                <input
                  type="checkbox"
                  v-model="item.chbox"
                  @change="chboxfun()"
                />
              </td>
              <td>{{ item.rolename }}</td>
              <td>{{ item.describe }}</td>
              <td>{{ item.powers }}</td>
              <td>
                <span :class="item.status ? 'gren' : 'red'">●</span>
                <span v-text="item.status ? '启用中' : '已停用'"></span>
              </td>
              <td>{{ item.lasttime }}</td>
              <td>
                <el-icon @click="edit(item)"><EditPen /></el-icon>
                <el-icon @click="delfun(item)"><DeleteFilled /></el-icon>
                <el-icon v-if="item.status === 0" @click="open(item)"
                  ><SwitchButton
                /></el-icon>
                <el-icon v-else @click="stop(item)"><VideoPlay /></el-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="block">
        <div class="all">
          <p>
            全选(已选 <span>{{ modnum }}</span> 条)
          </p>
          <span>批量删除</span>
          <span>批量启用/停用角色</span>
        </div>
      </div>
    </div>
    <div class="add" v-show="addshow">
      <div class="addlist">
        <div class="title">
          <p>添加系统角色</p>
          <span @click="addshow = !addshow">
            <i class="el-icon-close"></i>
          </span>
        </div>
        <div class="inpt">
          <sup>*</sup>角色名称<input type="text" v-model="username" /><br />
          <sup> </sup>描&emsp;&emsp;述
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="usertext"
          ></textarea
          ><br />
          <sup>*</sup>是否启用
          <el-radio v-model="radio" label="1" style="margin-left: 10px"
            >启用</el-radio
          >
          <el-radio v-model="radio" label="2">停用</el-radio><br />
          <sup>*</sup>权限配置
          <div class="tury">
            <input type="text" v-model="power" />
          </div>
        </div>
        <div class="footer">
          <button @click="addshow = !addshow">取消</button>
          <button @click="add()">保存</button>
          <button @click="usereditfun()">修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import {
  getlist,
  userstate,
  userdel,
  useradd,
  usersearch,
} from "../../api/http";

let ture = ref(null);
let userList = ref<any>([]);

let states = ref<any>();
let searchs = ref<any>();
let all = ref<any>(false);

let modnum = ref<any>(0);

let username = ref<any>();
let usertext = ref<any>([]);
let power = ref<any>();
let radio = ref<any>(0);

let addshow = ref<any>(false);

onBeforeMount(() => {
  getuser();
});

// 用户列表获取
function getuser() {
  getlist().then((res: any) => {
    res.data.forEach((item: any) => {
      item.chbox = false;
    });
    console.log(res.data);

    userList.value = res.data;
  });
}
// 全选
function allbox() {
  userList.value.forEach((item: any) => {
    if (all) {
      item.chbox = true;
    } else {
      item.chbox = false;
    }
  });
}
function chboxfun() {
  userList.value.every((item: any) => {
    return item.chbox ? (all = true) : (all = false);
  });
}
// 角色状态更改
function open(item: any) {
  ElMessageBox.confirm(`确定启用${item.rolename}角色是否继续?`, "Warning", {
    confirmButtonText: "继续",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "修改成功",
      });
      stat(item);
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
}
function stop(item: any) {
  ElMessageBox.confirm(`确定停用${item.rolename}角色是否继续?`, "Warning", {
    confirmButtonText: "继续",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "修改成功",
      });
      stat(item);
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
}
function stat(test: any) {
  test.status = test.status === 1 ? 0 : 1;
  let data = {
    id: test.id,
    status: test.status,
  };
  userstate(data).then((ser: any) => {
    console.log(ser);
  });
}
// 角色删除
function del(test: any) {
  let data = {
    id: test.id,
  };
  userdel(data).then((res: any) => {
    getuser();
  });
}
function delfun(item: any) {
  ElMessageBox.confirm(
    `删除后${item.rolename}用户将不再具备角色相应权限, 是否继续?`,
    "Warning",
    {
      confirmButtonText: "继续",
      cancelButtonText: "取消",
      type: "warning",
    }
  )
    .then(() => {
      ElMessage({
        type: "success",
        message: "删除成功",
      });
      del(item);
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "已取消",
      });
    });
}
// 角色添加
function addfun() {
  addshow.value = !addshow.value;
}
function add() {
  let data = {
    rolename: username.value,
    describe: usertext.value,
    powers: power.value,
    status: radio.value,
  };
  useradd(data).then((res: any) => {
    console.log(res);
  });
  addfun();
  getuser();
}

// 角色搜索
function ussearch() {
  let data = {
    rolename: searchs.value,
  };
  usersearch(data).then((res: any) => {
    userList.value = res.data;
  });
}

function stafun() {}

function edit(item: any) {}
function usereditfun() {}
</script>

<style lang="scss" scoped>
.box {
  width: 97%;
  margin: auto;
  margin-top: 2vh;
  background-color: white;
  .title {
    height: 70px;
    line-height: 70px;
    // background-color: aqua;
    position: relative;
    select {
      width: 150px;
      height: 40px;
      border: none;
      outline: none;
      margin-left: 30px;
      color: rgb(34, 157, 255);
      background-color: rgb(233, 243, 251);
    }
    select {
      float: left;
      margin-top: 17px;
    }
    input {
      width: 300px;
      height: 40px;
      outline: none;
      float: left;
      margin-top: 16.5px;
      border-radius: 3px;
      margin-left: 20px;
      padding-left: 20px;
      border: 0.5px gray solid;
    }
    .big {
      width: 40px;
      height: 41.5px;
      position: absolute;
      top: 16.5px;
      left: 519px;
      font-size: 20px;
      color: gray;
      cursor: pointer;
    }
    .adduser {
      width: 200px;
      height: 40px;
      color: white;
      border: none;
      float: right;
      margin-top: 15px;
      margin-right: 27px;
      cursor: pointer;
      background-color: rgb(34, 157, 255);
    }
  }
  .userlist {
    margin-top: 30px;
    table {
      width: 96%;
      margin: auto;
      thead {
        background-color: rgb(236, 238, 245);
      }
      th,
      td {
        text-align: center;
        padding: 10px;
        height: 30px;
        border-bottom: 1px rgb(235, 238, 245) solid;
        .gren {
          color: rgb(56, 216, 143);
        }
        .red {
          color: red;
        }
        i {
          cursor: pointer;
          margin-left: 5px;
        }
      }
    }
  }
  .block {
    width: 100%;
    height: 70px;
    .all {
      width: 40%;
      height: 50px;
      float: left;
      margin-top: 10px;
      line-height: 50px;
      margin-left: 25px;
      p {
        display: inline-block;
        span {
          color: orange;
          margin: 0;
          cursor: auto;
        }
      }
      span {
        color: gray;
        cursor: pointer;
        margin-left: 20px;
      }
    }
  }
}
.add {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .addlist {
    width: 700px;
    height: 500px;
    margin-left: 350px;
    margin-top: 200px;
    background-color: white;
    .title {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px gray solid;
      p {
        display: inline-block;
        margin-left: 20px;
        font-size: 20px;
      }
      span {
        float: right;
        color: gray;
        cursor: pointer;
        margin-right: 20px;
      }
    }
    .inpt {
      height: 400px;
      line-height: 70px;
      font-size: 18px;
      sup {
        color: red;
        margin-left: 40px;
      }
      input {
        margin-left: 10px;
        height: 30px;
        width: 300px;
      }
      textarea {
        height: 30px;
        width: 500px;
        margin-left: 5px;
        margin-top: 30px;
      }
      .tury {
        width: 500px;
        height: 40px;
        float: right;
        margin-right: 70px;
        margin-top: 25px;
        input {
          float: left;
        }
      }
    }
    .footer {
      float: left;
      height: 50px;
      width: 100%;
      text-align: center;
      line-height: 50px;
      border-top: 1px gray solid;
      button {
        width: 150px;
        height: 40px;
        border: none;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
      }
      button:nth-child(2) {
        width: 150px;
        height: 40px;
        margin-left: 10px;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        background-color: rgb(34, 157, 255);
      }
    }
  }
}
</style>
