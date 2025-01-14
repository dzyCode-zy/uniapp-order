<template>
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.alt }}</text>
        <text class="title-desc">{{ item.title }}</text>
      </view>
      <navigator
        class="cards"
        url="/pages/hot/hot"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <image
          v-for="url in item.pictures"
          :key="url"
          class="image"
          :src="url"
          mode="scaleToFill"
        />
        <!-- <image
        class="image"
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/goods_small_1.jpg"
            mode="scaleToFill"
        /> -->
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import type { hotItems } from "../../../types/home";
const props = defineProps<{
  list: hotItems[];
}>();
</script>

<style lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  background-color: #fff;
  border-radius: 10rpx;
  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      //选中的是第 1 和第 2 个子元素
      border-top: 0 none;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .cards {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex: 1;
    padding: 15rpx 20rpx;
  }
}
</style>
