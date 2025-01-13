<script setup lang="ts">
import { useMemberStore } from "@/stores";
const memberStore = useMemberStore();

const request = ()=>{
  uni.request({
    method:'GET',
    url:'/home/banner', // 需要凭借完整地址
  })
}

</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="memberStore.setProfile('hahah')"
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @tap="request()">request</button>
  </view>
</template>

<style lang="scss">
//
</style>
