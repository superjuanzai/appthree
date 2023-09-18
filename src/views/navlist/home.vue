<template>
  <div class="computd">
    <ban />
  </div>
  <div class="box">
    <ech />
  </div>
</template>

<script lang="ts" setup>
import ech from "../../components/echarts/userecharts.vue";
import ban from "../../components/banner/userbanner.vue";
</script>

<style lang="scss" scoped>
.computd {
  width: 100%;
  height: 50%;
}
.box {
  width: 100%;
  height: 40%;
}
</style>
