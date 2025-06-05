/**
 * Google Analytics 跟踪设置
 * 用于在客户端安装 Google Analytics 并跟踪路由
 */
import type { UserModule } from 'valaxy'
import VueGtag, { trackRouter } from 'vue-gtag-next'

export const install: UserModule = ({ isClient, app, router }) => {
  if (isClient) {
    app.use(VueGtag, {
      property: { id: 'G-P7JMCRBXMR' }, // 用户提供的 GA4 衡量ID
    })
    trackRouter(router)
  }
} 