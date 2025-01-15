<template>
  <view class="viewpoint" :style="{paddingTop:safeAreaInsets?.top+'px'}">
    <text class="title">title</text>
    <view class="cover">
      <!-- // 顶部图片 -->
      <image
      class="image"
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
        mode="scaleToFill"
      />
    </view>

    <view class="tabs">
      <text class="text active">'title'</text>
      <text class="text">'title'</text>

      </view>

      <scroll-view scroll-y class="scroll-view">
        <view  class="goods">
          <navigator
        class="navigator"
        v-for="item in 10"
        :key="item"
        :url="`/pages/goods/goods?id=`"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <image
          class="thumb"
          src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          mode="scaleToFill"
        />
        <view class="name ellipsis"> 不含酒精，使用安心爽肤清洁湿巾</view>
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">29.90</text>
        </view>
      </navigator> 
        </view>
  <view class="loading-text">正在加载...</view>

        
      </scroll-view>

  </view>
</template>

<script lang="ts" setup>
const {safeAreaInsets} = uni.getSystemInfoSync()
// 页面周期函数--监听页面加载
// onLoad() {},
// // 页面周期函数--监听页面初次渲染完成
// onReady() {},
// // 页面周期函数--监听页面显示(not-nvue)
// onShow() {},
// // 页面周期函数--监听页面隐藏
// onHide() {},
// // 页面周期函数--监听页面卸载
// onUnload() {},
// 页面处理函数--监听用户下拉动作
// onPullDownRefresh() { uni.stopPullDownRefresh(); },
// 页面处理函数--监听用户上拉触底
// onReachBottom() {},
// 页面处理函数--监听页面滚动(not-nvue)
// onPageScroll(event) {},
// 页面处理函数--用户点击右上角分享
// onShareAppMessage(options) {},
</script>

<style scoped lang="scss">
.viewpoint{
  display: flex;
  flex-direction: column;
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 38rpx;

  }
  .cover{
    height: 300rpx;
    width: 100%;
    border-radius: 0 0 40rpx 40rpx;
    overflow: hidden;
    left: 0;
  top: 0;
    
    .image{
    //   border-end-end-radius: 40rpx;
    //   border-end-end-radius: 40rpx;

    // border:1px solid white;
    // border-block: cover;

    }
  }
  .tabs{
    display: flex;
    justify-content: space-evenly;
    height: 100rpx;
    border: 1px solid white;
    box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
    border-radius: 10rpx;
    font-size: 28rpx;
    color: #333;
    background-color: #fff;
    z-index: 9;
    margin: 0 20rpx;
    line-height: 90rpx;
    position: relative;
    .text{
      margin:0 20rpx;
    position: relative;

    }
    .active{
      &::after{
        content: "";
        width: 40rpx;
        height: 4rpx;
        transform: translate(-50%);
        background-color: #27ba9b;
        position: absolute;
      left: 50%;
      bottom: 24rpx;

      }

    }

    // flex-direction: row;
    // flex-wrap: nowrap;
  }
  .goods{
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
  }
  .loading-text{
    text-align: center;
    font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
  }
}
</style>
