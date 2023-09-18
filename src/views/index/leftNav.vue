<template>
  <div class="box">
    <el-row class="tac">
      <el-col :span="12">
        <div class="title">
          <img
            src="https://allstatics.wondershare.cn/neveragain/2019/assets/icon/logo/wondershare-zh-vertical.svg"
            alt=""
          />
        </div>
        <el-menu default-active="/home" class="el-menu-vertical-demo" router>
          <el-menu-item index="/home">
            <el-icon><setting /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/userlist">
            <el-icon><icon-menu /></el-icon>
            <span>user list</span>
          </el-menu-item>
          <el-menu-item index="/newlist">
            <el-icon><icon-menu /></el-icon>
            <span>练习</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .tac {
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    .el-col-12 {
      max-width: 100%;
      ul {
        border: none;
      }
    }
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px gray solid;
      img {
        height: 60px;
      }
    }
  }
}
</style>
