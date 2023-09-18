<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img
        src="https://img1.baidu.com/it/u=1392122218,2682797773&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=746"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://p7.itc.cn/q_70/images03/20210619/103d0b88c70840a49abfd5ea672ac2e5.jpeg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img1.baidu.com/it/u=3137270769,3389774076&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=700"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img1.baidu.com/it/u=157843554,46301365&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.zcool.cn/community/019e205e23cf07a8012165187e53b2.jpg@3000w_1l_0o_100sh.jpg"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  height: 300px;
  margin-top: 50px;
}
</style>
