import App from './App.vue'

import 'virtual:uno.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupGlobalComponents } from '@/components'

/**
 * 定义初始化函数
 */
function bootstrap() {
  const app = createApp(App)

  // 挂载路由
  setupRouter(app)
  // 挂载数据仓库
  setupStore(app)
  // 挂载全局组件
  setupGlobalComponents(app)

  app.mount('#app')
}

bootstrap()
