<script setup lang="ts">
import { useMemberStore } from "@/stores";
import { http } from "@/utils/http";
const memberStore = useMemberStore();

const request = async ()=>{
  const res = await http<number>({
    method:'GET',
    url:'/home/banner', // 需要凭借完整地址
  })
  // return res.data
  console.log(res)
}

</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="memberStore.setProfile({
        name:'123',
        token:'1323'
      })"
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
