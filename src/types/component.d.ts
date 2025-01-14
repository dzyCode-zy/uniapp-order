/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import txSwiper from '@/components/txSwiper.vue'
import txGuess from '@/components/txGuess.vue'

declare module 'vue' {
  //**全局组件类型声明** //导入组件时会有类型提示
  export interface GlobalComponents {
    txSwiper: typeof txSwiper
    txGuess: typeof txGuess

    //
  }
}

// 组件实例类型

export type guessInterface = InstanceType<typeof txGuess>
