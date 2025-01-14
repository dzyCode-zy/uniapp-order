<template>
  <view class="carousel">
    <swiper :autoplay="true" :circular="true" :current="0" @change="onchange">
      <swiper-item>
        <navigator
          class="navigator"
          url="/pages/index/index"
          open-type="navigate"
          hover-class="navigator-hover"
        >
          <image
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg"
            mode="aspectFill"
          />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            mode="aspectFill"
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_2.jpg"
          ></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            mode="aspectFill"
            class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_3.jpg"
          ></image>
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text v-for="(item, index) in 3" :key="item" class="dot" :class="{active:index === activeIndex}"></text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeIndex = ref(0)
const onchange : UniHelper.SwiperOnChange= (val)=>{
  // const event = val.detail as {current:string}
  console.log(val.detail.current)
  activeIndex.value = val.detail.current

}
</script>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}

.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }

  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
