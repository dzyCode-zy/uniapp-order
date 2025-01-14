<template>
  <view class="navbar" :style="{paddingTop:safeAreaInsets?.top+'px'}">
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script setup lang="ts">
const logoText: string = "新鲜 亲民 便捷";
// 获取屏幕边界到安全区域距离
const {safeAreaInsets} = uni.getSystemInfoSync()

console.log(safeAreaInsets)
</script>

<style scoped lang="scss">
.navbar {
  // background-color: #e7a8f2;
  background-image: url("@/static/images/navigator_bg.png");
  background-size: cover; // 缩放图片，覆盖背景
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20rpx;
  .logo {
    display: flex;
    align-items: center;
    padding-left: 20rpx;
    padding-top: 20rpx;
    height: 64rpx;
    .logo-image{

        width: 166rpx;
        height: 40rpx;
    }
    .logo-text{
        color: white;
        flex:1;
        border-left: solid 1px white;
        padding-left: 20rpx;
        line-height: 28rpx;
        font-size: 26rpx;
        margin: 2rpx 0 0 20rpx;
    }
  }
  .search{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: white;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f6eeeee1;
    .icon-search{
        &::before{
            margin-right: 10rpx;
        }
    }
    .icon-scan{
        font-size: 30rpx;
        padding: 15rpx;
    }
  }
}
</style>
``
