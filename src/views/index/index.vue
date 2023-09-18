<template>
  <div class="box">
    <el-container>
      <el-aside width="200px">
        <leftnav></leftnav>
      </el-aside>
      <el-container>
        <el-header>
          <headers></headers>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import leftnav from "./leftNav.vue";
import headers from "./header.vue";
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  .el-aside {
    height: 100vh;
  }
  .el-header {
    background-color: gray;
  }
  .el-main {
    background-color: #f1f1f1;
  }
}
</style>
