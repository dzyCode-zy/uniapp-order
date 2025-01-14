<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import cutomNavbar  from './components/cutomNavbar.vue';
import { getHomeBannerApi,getClassifyApi,getHotApi } from '@/services/home';
import {ref} from 'vue'
import type { bannerItem ,classifyItems,hotItems} from '@/types/home'
import categoryPanel from './components/categoryPanel.vue';
import HotPanel from './components/HotPanel.vue';

const bannerList = ref<bannerItem[]>([])
const classifyList = ref<classifyItems[]>([])
const hotList = ref<hotItems[]>([])
//获取轮播图数据
const getHomeBanner = async ()=>{
  let res = await getHomeBannerApi()
  bannerList.value = res.result
}
//获取分类数据
const getClassify  = async()=>{
  let res = await getClassifyApi()
  classifyList.value = res.result
}
// 获取热门推荐数据
const getHotData = async()=>{
  let res = await getHotApi()
  hotList.value = res.result
  console.log(res)
}
// 页面加载时候的生命周期
onLoad(()=>{
  getHomeBanner()
  getClassify()
  getHotData()
})
</script>

<template>
  <!-- 导航栏 搜索栏 -->
  <cutomNavbar/>
  <txSwiper :list="bannerList"></txSwiper>
  <categoryPanel :list = "classifyList"></categoryPanel>
  <HotPanel :list="hotList"></HotPanel>
</template>

<style lang="scss">
.pages{
  background-color:#F6F6F6;
}

</style>
