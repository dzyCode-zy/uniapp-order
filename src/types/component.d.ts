/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import txSwiper from '@/components/txSwiper.vue'

declare module 'vue' {
  //**全局组件类型声明** //导入组件时会有类型提示
  export interface GlobalComponents {
    txSwiper: typeof txSwiper
    //
  }
}
