<template>
  <div class="box">
    <img
      src="https://neveragain.allstatics.com/2019/assets/icon/logo/wondershare-zh-horizontal-white.svg"
      alt=""
    />
    <div class="user">
      <span class="icon">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3a2f9e13-ac28-467f-8ccc-e024f5e81c0a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1696558580&t=4e9ab06429577a94544d4116720f61ed"
          alt=""
        />
      </span>
      <el-dropdown>
        <span class="el-dropdown-link">
          解脱-精神支柱<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">烧香</el-dropdown-item>
            <el-dropdown-item command="b">拜佛</el-dropdown-item>
            <el-dropdown-item command="c">拜财神</el-dropdown-item>
            <el-dropdown-item command="d">拜月老</el-dropdown-item>
            <el-dropdown-item command="e" divided>原地升仙</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: black;
  img {
    height: 60px;
  }
  .user {
    width: 300px;
    height: 100%;
    float: right;
    .icon {
      img {
        height: 60px;
        border-radius: 50%;
        margin-left: 40px;
      }
    }
    .el-dropdown {
      margin-top: 20px;
      float: right;
      margin-right: 50px;
      cursor: pointer;
      span {
        color: white;
      }
    }
  }
}
</style>
