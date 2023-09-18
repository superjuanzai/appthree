<template>
  <div class="wrap">
    <div class="header">
      <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="头像">
          <update @imgfun="getimg" />
        </el-form-item>

        <el-form-item label="昵称">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.resource">
            <el-radio label="0" />
            <el-radio label="1" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="籍贯">
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.numb" />
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="form.emails" />
        </el-form-item>
        <el-form-item label="入职日期">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date2"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="个人介绍">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">打印</el-button>
          <el-button>取消</el-button>
          <button @click="postlist()" class="butn">点击实现请求头</button>
        </el-form-item>
      </el-form>
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { postwork, postuser } from "@/api/http";
import { Md5 } from "ts-md5";
import { reactive, ref } from "vue";
import update from "../../components/element/update.vue";

// do not use same name with ref
const form = reactive({
  name: "",
  date1: "",
  date2: "",
  resource: "",
  desc: "",
  nickname: "",
  numb: ref<Number>(),
  emails: "",
});
let imgs = ref<any>("");

const value = ref([]);

const props = {
  expandTrigger: "hover" as const,
};

const handleChange = (value: any) => {
  console.log(value);
};

const options = [
  {
    value: "province1",
    label: "北京市",
    children: [
      {
        value: "city1",
        label: "北京市",
        children: [
          {
            value: "area1",
            label: "东城区",
          },
          {
            value: "area2",
            label: "西城区",
          },
          {
            value: "area3",
            label: "朝阳区",
          },
          {
            value: "area4",
            label: "海淀区",
          },
          {
            value: "area5",
            label: "丰台区",
          },
          {
            value: "area6",
            label: "石景山区",
          },
          {
            value: "area7",
            label: "门头沟区",
          },
          {
            value: "area8",
            label: "房山区",
          },
          {
            value: "area9",
            label: "通州区",
          },
          {
            value: "area10",
            label: "顺义区",
          },
        ],
      },
    ],
  },
  {
    value: "province2",
    label: "上海市",
    children: [
      {
        value: "city2",

        label: "上海市",
        children: [
          {
            value: "area11",
            label: "黄浦区",
          },
          {
            value: "area12",
            label: "徐汇区",
          },
          {
            value: "area13",
            label: "长宁区",
          },
          {
            value: "area14",
            label: "静安区",
          },
          {
            value: "area15",
            label: "普陀区",
          },
          {
            value: "area16",
            label: "虹口区",
          },
          {
            value: "area17",
            label: "杨浦区",
          },
          {
            value: "area18",
            label: "闵行区",
          },
          {
            value: "area19",
            label: "宝山区",
          },
          {
            value: "area20",
            label: "嘉定区",
          },
        ],
      },
    ],
  },
];

const headers = {
  "Content-Type": "application/json",
  strheader: "111",
};
const str = "nbsp123ok";
const name = "呆洲";
const role = "洲桑";
let userid = 23;

// 请求头接口
function postlist() {
  let data = {
    name: name,
    role: role,
    sign: Md5.hashStr(name + role + str + "111"),
  };
  postwork(data, { headers }).then((ser) => {
    console.log(ser);
  });
}

// 子组件传参
function getimg(e: any) {
  imgs = e;
}

// 提交
function onSubmit() {
  let data = {
    name: form.name,
    userid: userid++,
    img: imgs,
    nick: form.nickname,
    sex: form.resource,
    iphone: form.numb,
  };
  postuser(data).then((ser) => {
    console.log(ser);
  });
}
</script>

<style lang="scss" scoped>
.wrap {
  .header {
    width: 70%;
    margin: auto;
    padding: 20px;
    margin-top: 50px;
    background-color: white;
  }
  .butn {
    height: 30px;
    margin-left: 20px;
  }
}
</style>
