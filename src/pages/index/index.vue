<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import cutomNavbar  from './components/cutomNavbar.vue';
import { getHomeBannerApi } from '@/services/home';
import {ref} from 'vue'
import type { bannerItem } from '@/types/home'

const bannerList = ref<bannerItem[]>([])
//获取接口数据
const getHomeBanner = async ()=>{
  let res = await getHomeBannerApi()
  bannerList.value = res.result
  console.log(res)
}
// 页面加载时候的生命周期
onLoad(()=>{
  getHomeBanner()
})
</script>

<template>
  <!-- 导航栏 搜索栏 -->
  <cutomNavbar/>
  <txSwiper :list="bannerList"></txSwiper>
  <view class="index">首页内</view>
</template>

<style lang="scss">
//
</style>
