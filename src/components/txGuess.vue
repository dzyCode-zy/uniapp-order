<template>
  <view class="caption">
    <text class="text">{{ guessLikeText }}</text>
  </view>
  <view class="guess">
    <navigator
        open-type="navigate"
        hover-class="navigator-hover"
        class="guess-item"
        v-for="item in guessLikeList"
        :key="item.id"
        :url="`/pages/goods/goods?id=4007498`"
    >
    <image
    class="image"
        :src=item.picture
        mode="scaleToFill"
    />
     <view class="name"> {{ item.name }}</view>
    <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>

    </navigator>
  </view>
   <view class="loading-text">{{ loadText }}</view>
</template>

<script lang="ts" setup>

import { ref,defineProps, onMounted ,defineExpose} from "vue";
import type {guessLikeItems} from '@/types/home'
import type { GuessItem,pageParams } from '@/types/global'
import {
  getGuessLikeApi,
} from "@/services/home";
import { onLoad } from "@dcloudio/uni-app";
// const props = defineProps<{
//   list:guessLikeItems<GuessItem>[]
// }>()
const guessLikeText = ref('猜你喜欢')
const loadText = ref('加载中...')
const pageParams:Required<pageParams>= {
  page:1,
  pageSize:10
}
const guessLikeList = ref<GuessItem[]>([])
const finish = ref(false)
const getGuessLike = async () => {
  if(finish.value === true){
    return uni.showToast({ icon: 'none', title: '没有更多数据'})
  }
  let res = await getGuessLikeApi(pageParams);
  guessLikeList.value.push(...res.result.items)

  if(pageParams.page < res.result.pages){
    pageParams.page++
  }else{
    // 数据加载完了
    finish.value = true
  }

};
const reset = ()=>{
  pageParams.page = 1
  guessLikeList.value = []
}

// 组件挂载时调用方法
onMounted(()=>{
  getGuessLike()
})
// 暴露方法供外部使用
defineExpose({
  getMoreData:getGuessLike,
  reset:reset
})
</script>

<style lang="scss">
.caption{
  display: flex;
  justify-content: center; // 水平居中
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size:32rpx;
  color:black;
  .text{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,&::after{
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size:contain;
      margin:0 10rpx
    }

  }

}
.guess{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
   .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-line-clamp: 2;
    // -webkit-box-orient: vertical;
  }
    .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}


</style>
