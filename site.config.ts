import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // 站点完整URL，用于生成文章永久链接
  url: 'https://jaymushui.github.io/',
  // 站点默认语言
  lang: 'zh-CN',
  // 站点标题
  title: 'MuYi Pavilion | 沐佚苑阁',
  // 站点副标题
  subtitle: 'etude pour les petites dreamland.',
  // 站点描述
  description: '世界は大きな宝石箱みたいなんだ，中には輝く宝石がいっぱい詰まってる',
  // 站点时区，国内推荐使用 'Asia/Shanghai'
  timezone: 'Asia/Shanghai',
  // 可选语言
  languages: ['zh-CN', 'en', 'ja', 'zh-TW'],
  // 站点图标
  favicon: '/favicon.ico',
  // 是否显示最后更新时间
  lastUpdated: true,

  // 作者信息
  author: {
    name: 'JayMuShui | 沐',
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1215372633&spec=640&img_type=jpg',
    status: {
      emoji: '🍬',
      message: 'Sweet Dream',
    },
    // 个人简介
    intro: '',
    // 邮箱（可选）
    email: '',
    // 个人主页链接（可选）
    link: '',
  },


  // 社交链接
  social: [
    {
      name: 'E-Mail',
      link: 'mailto:JayMuShui@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/JayMuShui',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'X',
      link: 'https://x.com/JayMuShui',
      icon: 'i-ri-twitter-x-fill',
      color: '#000000',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/JayMuShui',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'QQ',
      link: 'https://cloudflare-imgbed-telegraph.pages.dev/file/1743088547142_QQ-QRCode.webp',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: '微信公众号 | WeChat Public Platform',
      link: 'https://cloudflare-imgbed-telegraph.pages.dev/file/1729946797712_公众号.png',
      icon: 'i-ri-wechat-2-line',
      color: '#54dc64',
    },
    {
      name: '哔哩哔哩 | bilibili',
      link: 'https://space.bilibili.com/447538884',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '抖音 | Chinese Tiktok/Douyin',
      link: 'https://v.douyin.com/ijnW2SjQ/',
      icon: 'i-ri-tiktok-line',
      color: '#000000',
    },
    {
      name: '百度贴吧 | Tieba',
      link: 'https://tieba.baidu.com/home/main?id=tb.1.59e2d8be.7M1jjgg8P1zLx8vptZ7Vdw',
      icon: 'i-ri-baidu-line',
      color: '#0084FF',
    },
    {
      name: '小红书 | Xiaohongshu',
      link: 'https://www.xiaohongshu.com/user/profile/61f9e00d000000001000b587',
      icon: 'i-simple-icons:xiaohongshu',
      color: '#FF2442',
    },
  ],

  // 搜索配置
  search: {
    enable: true,
    type: 'fuse', // algolia / engine / fuse
  },
  // 本地搜索 fuse 配置
  fuse: {
    dataPath: 'valaxy-fuse-list.json',
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt'],
    },
  },

  // 文章默认 frontmatter 配置（可选）
  frontmatter: {
    // 可设置文章的默认 frontmatter
    time_warning: false,

  },

  // 评论系统配置
  comment: {
    enable: false,
  },

  // CDN 配置
  cdn: {
    prefix: 'https://unpkg.com/',
  },

  // 文章协议配置
  license: {
    enabled: false,
    language: 'zh',
    type: 'by-nc-sa',
  },

  // 打赏配置
  sponsor: {
    enable: true,
    description: {
      'zh-CN': '我是学生给我钱（没有说礼貌的意思）',
      'en': 'Student here, send money—— no cap'
    } as any,
    methods: [
      {
        name: '支付宝',
        url: 'https://cloudflare-imgbed-telegraph.pages.dev/file/AliPayQRCode_Mu.webp',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cloudflare-imgbed-telegraph.pages.dev/file/QQPayQRCode_Mu.webp',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信赞赏码',
        url: 'https://cloudflare-imgbed-telegraph.pages.dev/file/WexinRewardCode_Mu.webp',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
      //{
        //name: 'PayPal',
        //url: 'https://paypal.me/jaymushui',
        //path: 'https://www.paypalobjects.com/images/shared/paypal-logo-129x32.svg',
        //color: '#2D70B5',
        //icon: 'i-ri-paypal-line',
      //},
    ],
  },

  // 图片预览配置
  mediumZoom: { enable: true },

  // 图片懒加载配置
  vanillaLazyload: {
    enable: true,
    options: {},
  },

  // 每页显示文章数量
  pageSize: 6,

  // 阅读统计配置
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300, // 中文阅读速度（字/分钟）
        en: 200, // 英文阅读速度（字/分钟）
      },
    },
  },

  // 文章加密配置
  encrypt: {
    enable: false,
    algorithm: 'AES-CBC',
    iv: new Uint8Array(16),
    salt: new Uint8Array(16),
  },

  // 代码块高度限制（像素）
  codeHeightLimit: 500,

  // 重定向配置
  redirects: {
    useVueRouter: true,
    rules: [
      // 可以添加重定向规则
    ],
  },
})
