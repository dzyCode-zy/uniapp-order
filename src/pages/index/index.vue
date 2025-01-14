<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import cutomNavbar from "./components/cutomNavbar.vue";
import {
  getHomeBannerApi,
  getClassifyApi,
  getHotApi,
} from "@/services/home";
import { ref } from "vue";
import type {
  bannerItem,
  classifyItems,
  hotItems,
  guessLikeItems,
} from "@/types/home";
import type { GuessItem } from '@/types/global'

import categoryPanel from "./components/categoryPanel.vue";
import HotPanel from "./components/HotPanel.vue";
import type {guessInterface} from '@/types/component'
const bannerList = ref<bannerItem[]>([]);
const classifyList = ref<classifyItems[]>([]);
const hotList = ref<hotItems[]>([]);
//获取轮播图数据
const getHomeBanner = async () => {
  let res = await getHomeBannerApi();
  bannerList.value = res.result;
};
//获取分类数据
const getClassify = async () => {
  let res = await getClassifyApi();
  classifyList.value = res.result;
};
// 获取热门推荐数据
const getHotData = async () => {
  let res = await getHotApi();
  hotList.value = res.result;
};

// 页面加载时候的生命周期
onLoad(() => {
  getHomeBanner();
  getClassify();
  getHotData();
  // getGuessLike();
});
const guessref = ref<guessInterface>() // 需要定义组件的实例类型
//滚动触底
const scrolltolower = ()=>{
  // 调用子组件方法，继续获取数据
  console.log('123')
  guessref.value?.getMoreData()

}
</script>

<template>
  <!-- 导航栏 搜索栏 -->
  <cutomNavbar />
  <scroll-view @scrolltolower="scrolltolower" scroll-y class="scroll-view" >
    <txSwiper :list="bannerList"></txSwiper>
    <categoryPanel :list="classifyList"></categoryPanel>
    <HotPanel :list="hotList"></HotPanel>
    <txGuess ref="guessref"></txGuess>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  //当希望某个区域自动填充剩余空间时
  flex: 1;
}
</style>
