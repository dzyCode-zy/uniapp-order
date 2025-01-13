import { createSSRApp } from 'vue'
import pinia from './stores'
import './utils/http.ts' // 全局加载，此后的页面都不用引入了

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app
  }
}
