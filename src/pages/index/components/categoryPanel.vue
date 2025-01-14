<template>
  <view class="category">
    <navigator
      url="/pages/index/index"
      class="category-item"
      hover-class="none"
      v-for="item in list"
      :key="item.id"
    >
      <image
        class="icon"
        :src="item.icon"
      >
      </image>
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>
<script lang="ts" setup>
import type { bannerItem ,classifyItems} from '@/types/home'
import {ref ,defineProps} from 'vue'

const props = defineProps<{
  list:classifyItems[]
}>()
</script>

<style lang="scss">
.category{
    display:flex;
    flex-wrap:wrap;
    min-width: 328rpx;
    padding: 10rpx 0;
    margin: 20rpx 0 0;
    .category-item{
      width:150rpx;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      .icon{
        width:100rpx;
        height: 100rpx;
      }
      .text{
        font-size: 26rpx;
        color:#666
      }

    }


}

</style>
