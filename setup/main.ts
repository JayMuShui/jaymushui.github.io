/**
 * 主应用设置文件
 * 用于初始化应用并安装 Google Analytics 跟踪
 */
import { defineAppSetup } from 'valaxy'
import { install as installGtag } from './gtag'
 
export default defineAppSetup((ctx) => {
  installGtag(ctx)
}) 