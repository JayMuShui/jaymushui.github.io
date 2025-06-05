import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  // 主题类型：'strato'(层云) 或 'nimbo'(雨云)
  type: 'nimbo',

  // 文章目录标题
  outlineTitle: 'On this page',

  // 主题配色
  colors: {
    // 主题色
    primary: '#e5aa82',
  },

  // 暗色模式配置
  valaxyDarkOptions: {
    useDarkOptions: {
      disableTransition: true,
    },
    circleTransition: true,
    themeColor: {
      light: '#e5aa82',
      dark: '#e5aa82',
    },
  },

  // 文章目录配置
  //outline: 
  // 首页标语配置
  banner: {
    enable: true,
    title: ['沐', '佚', '苑', '阁', 'MuYi', 'Pavilion'],
    cloud: {
      enable: true,
    },
    // 站点名称的 CSS 类名
    siteNameClass: 'site-name',
  },

  // 背景图片配置
  bg_image: {
    enable: true,
    url: ' https://cloudflare-imgbed-telegraph.pages.dev/file/1741887074652_light_wallpaper.jpg', // 背景图片URL
    dark: '', // 暗色模式下的背景图片URL
    opacity: 0.5, // 背景图片透明度
  },

  // 说点什么配置
  say: {
    enable: true,
    api: 'https://cdn.jsdelivr.net/gh/ElpsyCN/say@gh-pages/sentences.json', // 自定义API链接
    //  api: https://say.elpsy.cn/sentences.json
    // /data/sentences.json
    // api: https://el-bot-api.vercel.app/api/words/young
    // https://developer.hitokoto.cn/sentence/
    hitokoto: {
      enable: true,
      api: 'https://v1.hitokoto.cn/',
    },
  },

  // 公告配置
  notice: {
    enable: true,
    hideInPages: false,
    content: {
      'zh-CN': '※置顶： Who am I ? |  (UTC+8)2025-03-06 14:27:19',
      'en': '※Pinned: Who am I ? |  (UTC+8)2025-03-06 14:27:19'
    } as any,
  },

  // 点击烟花效果配置
  fireworks: {
    enable: true,
    colors: ['#66A7DD', '#3E83E1', '#214EC2'], // 烟花颜色
  },

  // 导航栏配置
  nav: [
    {
      text: 'nav.home',
      link: '/',
      icon: 'i-ri-home-4-line',
    },
  ],

  // 页面配置
  pages: [
    {
      name: 'nav.about',
      url: 'https://mushui.pages.dev/',
      icon: 'i-material-symbols:3p-outline',
      color: '#0078E7',
    },
  ],

  // 侧边栏配置
  sidebar: {
    bg_image: {
      enable: true,
      url: 'https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_2025_05_14_FOR_MU.png',
      dark: '', // 暗色模式下的背景图片URL
      position: 'bottom 0rem center', // 背景图片位置
    },
  },

  // 页脚配置
  footer: {
    since: 2021,
    cloud: {
      enable: true, // 页脚上部的动态云
    },
    icon: {
      enable: true, // 是否显示图标
      name: 'i-ri-heart-line', // 图标名称
      animated: true, // 是否启用动画
      color: '#ff0000', // 图标颜色
      url: 'https://jaymushui.github.io/tang-love', // 图标链接
      title: '可以成为我的恋人吗？| Would you be my special someone? | 付き合ってくれませんか？', // 图标标题
    },
    powered: true, // 是否显示 Powered by
    beian: {
      enable: false, // 是否启用备案信息
      icp: '桂ICP备xxxxxxxx号', // 备案号
    },
  },

  // 自定义文章卡片类型
  types: {
    // 示例配置
    //default: {
    //  color: '#0078E7',
    //  icon: 'i-ri-file-list-line',
    //},
  },

  // 菜单栏配置
  menu: {
    custom: {
      title: '', // 自定义菜单标题
      url: '', // 自定义菜单链接
      icon: '', // 自定义菜单图标
    },
  },
})
