简体中文 | [繁體中文](docs/README-zh-TW.md) | [English](docs/README-en.md) | [日本語](docs/README-ja.md)

# MuYi Pavilion | 沐佚苑阁

>更新日志请见[站点介绍页面](pages/about/site.md)


>站内查看<https://jaymushui.github.io/about/site#站点历史更新日志>




## 前端工具链

### 核心框架
* 🎨 静态博客框架：[Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 博客框架主题：[Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> 对当前框架做出的自定义修改请见[该章节](#针对valaxy-0234-发行版的禁用-rss-自动生成措施)及其后续章节

### 开发工具
* 📦 包管理器：[pnpm](https://github.com/pnpm/pnpm)
* ⚡ 构建工具：[Vite](https://github.com/vitejs/vite)
* 📘 开发语言：[TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 样式预处理器：[SCSS](https://github.com/sass/sass)
* ✨ 代码规范：[ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)

### 主要依赖
* 🖖 前端框架：[Vue 3](https://github.com/vuejs/core)
* 🛣️ 路由管理：[Vue Router](https://github.com/vuejs/router)
* 🌍 国际化：[Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown 解析：[Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 数学公式渲染：[KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 颜色处理：[TinyColor](https://github.com/bgrins/TinyColor)
* 📊 访问统计：[Google Analytics](https://github.com/googleanalytics)

### 支持的部署平台
* 🚀 现使用 [Github Pages](https://github.com/pages)：<https://jaymushui.github.io>

~~*未启用： Vercel、Netlify等~~


### 开发环境
* 🟢 运行环境：[Node.js](https://github.com/nodejs/node)
* 💻 开发 IDE：[VSCode](https://github.com/microsoft/vscode)
* 🔄 版本控制：[Git](https://github.com/git/git)

### 其他
* 🖼️ Telegraph + Cloudflare Pages：静态资源 CDN 托管[🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 联动的项目：
1.<https://mushui.pages.dev/>(社交自介)[非开源]

2.🤫

## markdown文章 Frontmatter 字段提示说明（源码出处标注）

Valaxy 及本主题支持以下 frontmatter 字段，所有字段均有源码出处或官方约定，便于溯源和维护：

### 1. 基础信息字段
- `title`：文章标题（Valaxy 约定，所有组件支持）
- `icon`：标题前的图标（YunPostCard.vue:27, Valaxy 约定）
- `description`：文章描述（YunPostMeta.vue:22）
- `author`：作者（YunPostMeta.vue:23）
- `date`：发布时间（YunPostMeta.vue:20, Valaxy 约定）
- `updated`：更新时间（YunPostMeta.vue:21, Valaxy 约定）
- `path`：文章路径（Valaxy 约定）❓
- `abbrlink`：永久链接（Valaxy 约定）❓


### 2. 结构与样式字段
- `toc`：是否显示目录（Valaxy 约定）
- `aside`：是否显示右侧侧边栏（Valaxy 约定）
- `markdownClass`：自定义 Markdown 样式（Valaxy 约定）❓
- `pageTitleClass`：页面标题样式（Valaxy 约定）❓
- `postTitleClass`：文章列表中自定义标题样式（YunPostCard.vue:40）

### 3. 分类与标签
- `categories`：分类（YunPostCard.vue:115, Valaxy 约定）
- `tags`：标签（YunPostCard.vue:117, Valaxy 约定）

### 4. 文章内容与摘要（❗个人不太爱这个样式）
- `excerpt`：自定义摘要（YunPostCard.vue:97, Valaxy 约定）
- `excerpt_type`：摘要类型（YunPostCard.vue:96, Valaxy 约定）
- `cover`：封面图片（YunPostCard.vue:73, Valaxy 约定）

### 5. 导航与排序
- `nav`：是否显示前后文章导航（Valaxy 约定）
- `top`：置顶优先级（YunPostMeta.vue:30, Valaxy 约定）
- `end`：是否完结（Valaxy 约定）

### 6. 状态与权限
- `draft`：是否为草稿（Valaxy 约定）
- `hide`：是否隐藏（Valaxy 约定）
- `comment`：是否显示评论（Valaxy 约定）
- `time_warning`：更新时间警告（Valaxy 约定）❗ [已全局配置禁用]

### 7. 统计与阅读
- `wordCount`：字数统计（YunPostMeta.vue:18, 自动生成）
- `readingTime`：阅读时长（YunPostMeta.vue:19, 自动生成）

### 8. 文章类型与外链 ❓
- `type`：卡片类型（YunPostCard.vue:26, Valaxy 约定）
- `url`：覆盖文章 URL，直接跳转（YunPostCard.vue:103, Valaxy 约定）

### 9. 图片与多媒体 （❗未使用）
- `image`：Schema.org 图片对象（Valaxy 约定）
- `albums`：相册数组（Valaxy 约定）
- `photos`：照片数组（Valaxy 约定）
- `medium_zoom`：是否使用 medium-zoom 图片缩放（Valaxy 约定）

### 10. 代码与数学
- `katex`：是否使用 KaTeX 数学公式（Valaxy 约定）
- `codepen`：是否使用 CodePen（Valaxy 约定）
- `codeHeightLimit`：代码块高度限制（Valaxy 约定）

### 11. 加密与安全（❗未使用）
- `encrypt`：是否启用加密（Valaxy 约定）
- `password`：加密密码（Valaxy 约定）
- `password_hint`：密码提示（Valaxy 约定）
- `gallery_password`：相册密码（Valaxy 约定）
- `encryptedContent`：加密后的内容（Valaxy 约定）
- `partiallyEncryptedContents`：部分加密的内容（Valaxy 约定）
- `encryptedPhotos`：加密后的相册（Valaxy 约定）

### 12. 其他特殊字段（❗未使用）
- `from`：客户端重定向的源路径（Valaxy 约定）

---

### 字段源码出处说明
- `YunPostMeta.vue`、`YunPostCard.vue` 等为项目自定义组件源码文件。
- `Valaxy 约定` 表示该字段为 Valaxy 官方主题、插件或文档中明确支持的 frontmatter 字段。
- `自动生成` 表示该字段由 Valaxy 或相关插件自动生成，无需手动填写。

---

### 使用示例（不使用封面与摘要的版本）

```markdown
---
title: 
  zh-CN: 标题
  en: title
icon: i-carbon-moon
color: green 
description: 
  zh-CN: 描述
  en: description
author: 
  zh-CN: 李明
  en: Li Ming
date: 2077-01-01 01:12:00
updated: 2080-04-18 01:12:00
toc: true
aside: true
tags:
  - {"zh-CN": "标签1", "en": "Tag1"}
  - {"zh-CN": "标签2", "en": "Tag2"}
categories:
  - {"zh-CN": "类型", "en": "categories"}
---

## 例 {lang=zh-CN}
## example {lang=zh-en}

::: zh-CN
文章内容...
:::

::: en
The content of the article...
:::

<!-- more -->

::: zh-CN
文章内容...
:::

::: en
The content of the article...
:::
```

## 配置文件可配置项说明

### site.config.ts 站点配置
* 🏠 基础配置
  - `url`: 站点完整URL，用于生成文章永久链接
  - `lang`: 站点默认语言
  - `title`: 站点标题
  - `subtitle`: 站点副标题
  - `description`: 站点描述
  - `timezone`: 站点时区
  - `languages`: 可选语言列表
  - `favicon`: 站点图标
  - `lastUpdated`: 是否显示最后更新时间

* 👤 作者信息
  - `author.name`: 作者名称
  - `author.avatar`: 作者头像
  - `author.status`: 状态信息（emoji和消息）
  - `author.intro`: 个人简介
  - `author.email`: 邮箱
  - `author.link`: 个人主页链接

* 🔗 社交链接
  - `social`: 社交平台链接数组，支持自定义图标和颜色

* 🔍 搜索配置
  - `search.enable`: 是否启用搜索
  - `search.type`: 搜索类型（fuse/algolia/engine）
  - `fuse`: fuse搜索配置

* 💬 评论系统
  - `comment.enable`: 是否启用评论

* 💰 打赏配置
  - `sponsor.enable`: 是否启用打赏
  - `sponsor.description`: 打赏说明（支持多语言）
  - `sponsor.methods`: 打赏方式配置

* 📊 统计配置
  - `statistics.enable`: 是否启用统计
  - `statistics.readTime`: 阅读时间配置

### theme.config.ts 主题配置
* 🎨 主题样式
  - `type`: 主题类型（'strato'或'nimbo'）
  - `colors.primary`: 主题色
  - `valaxyDarkOptions`: 暗色模式配置

* 🎯 首页配置
  - `banner`: 首页标语配置
  - `bg_image`: 背景图片配置

* 💭 功能模块
  - `say`: 说点什么配置
  - `notice`: 公告配置
  - `fireworks`: 点击烟花效果配置

* 📱 导航配置
  - `nav`: 导航栏配置
  - `pages`: 页面配置
  - `sidebar`: 侧边栏配置
  - `menu`: 菜单栏配置

* 👣 页脚配置
  - `footer.since`: 建站时间
  - `footer.cloud`: 页脚云朵效果
  - `footer.icon`: 页脚图标配置
  - `footer.powered`: 是否显示Powered by
  - `footer.beian`: 备案信息配置

* 📝 文章配置
  - `types`: 自定义文章卡片类型
  - `outlineTitle`: 文章目录标题

_待补全_

## 开发命令

### 🚀 基础命令
```bash
# 安装依赖
pnpm i

# 开发预览
pnpm dev

# 构建（SSG版本）
pnpm build

# 构建（SPA版本）
pnpm build:spa

# 构建（SSG版本，与pnpm build相同）
pnpm build:ssg

# 生成RSS
pnpm rss

# 预览构建结果
pnpm serve

# 清理构建文件（自定义命令，由 scripts/clean.js 实现）
# 删除以下文件：
# - public/feed.xml
# - public/atom.xml
# - public/feed.json
# - public/valaxy-fuse-list.json
# - dist/
pnpm clean
```

### 📌 命令说明
- `pnpm i`: 安装项目所有依赖，包括开发依赖
- `pnpm dev`: 启动开发服务器，支持热更新
- `pnpm build`: 构建生产环境代码（SSG版本），输出到 `dist` 目录
- `pnpm build:spa`: 构建单页应用版本
- `pnpm build:ssg`: 构建静态站点版本
- `pnpm rss`: 生成 RSS 订阅文件
- `pnpm serve`: 预览构建后的生产环境代码

### ⚠️ 注意事项
1. 首次克隆项目后，需要先运行 `pnpm i` 安装依赖
2. 开发时使用 `pnpm dev` 启动开发服务器
3. 构建前建议确保所有代码已保存
4. 如果遇到依赖问题，可以尝试删除 `node_modules` 目录后重新运行 `pnpm i`

## 目录结构

### 📁 核心目录
* `pages/`: 所有页面内容
  - `posts/`: 博客文章
  - `about/`: 关于页面
* `components/`: 自定义 Vue 组件
* `layouts/`: 自定义布局组件
* `styles/`: 自定义样式文件
* `locales/`: 国际化语言文件
* `utils/`: 工具函数
* `types/`: TypeScript 类型声明
* `setup/`: 应用初始化设置
* `stores/`: Pinia 状态管理
* `plugins/`: 自定义插件
* `public/`: 静态资源文件
* `dist/`: 构建后生成的文件

### 📄 配置文件
* `site.config.ts`: 站点配置
* `theme.config.ts`: 主题配置
* `valaxy.config.ts`: Valaxy 框架配置
* `tsconfig.json`: TypeScript 配置
* `package.json`: 项目依赖配置
* `pnpm-lock.yaml`: 依赖版本锁定文件

### 🔧 开发工具配置
* `.vscode/`: VSCode 编辑器配置
* `.github/`: GitHub Actions 工作流配置
* `.editorconfig`: 编辑器通用配置
* `.npmrc`: NPM 配置
* `.gitignore`: Git 忽略文件配置

### 🚀 部署配置
* `.github/`: Github 部署配置
* `vercel.json`: Vercel 部署配置
* `netlify.toml`: Netlify 部署配置
* `nginx.conf`: Nginx 服务器配置
* `Dockerfile`: Docker 容器配置
* `.dockerignore`: Docker 忽略文件

### 📦 构建输出
* `.valaxy/`: Valaxy 构建缓存
* `node_modules/`: 依赖包目录

### 📝 其他
* `scripts/`: 自定义脚本
* `config/`: 其他配置文件

## 针对valaxy 0.23.4 发行版的禁用 RSS 自动生成措施

如果不需要 RSS 功能，或者希望避免因多语言 frontmatter 导致的 RSS 生成错误，可以通过以下方式禁用 RSS 自动生成：

1. 打开文件 `node_modules/.pnpm/valaxy@0.23.4_.../node_modules/valaxy/dist/chunk-OXTCPOR5.js`。
2. 搜索 `rssModule` 或 `build:after`，找到如下代码：
   ```js
   setup(node) {
     node.hook("build:after", async () => {
       //console.log();
       //await build(node.options);
       return;
     });
   }
   ```
3. 将 `await build(node.options);` 注释掉或直接 `return;`，这样在构建时就不会自动生成 RSS 文件。

**注意：** 每次升级 valaxy 依赖后，该文件会被覆盖，需要重新操作。

## 自定义的 .ts 函数 （utils/types 文件夹）

### i18n.ts [📁 utils] [🔗](./utils/i18n.ts)
- **功能**：解析多语言内容，支持对象和字符串形式。
- **使用方法**：
  ```typescript
  parseI18nContent({ 'zh-CN': '中文', 'en': 'English' }) // 返回当前语言对应的内容
  parseI18nContent('普通文本') // 直接返回字符串
  ```

### formatTimestamp.ts [📁 utils] [🔗](./utils/formatTimestamp.ts)
- **功能**：将时间戳或日期对象格式化为 'YYYY-MM-DD HH:mm:ss' 格式。
- **使用方法**：
  ```typescript
  formatTimestamp(new Date()) // 返回当前时间的格式化字符串
  ```

### shims.d.ts [📁 types] [🔗](./types/shims.d.ts)
- **功能**：TypeScript 类型声明文件，用于扩展模块类型定义。
- **主要作用**：
  1. 声明 `.yml` 和 `.yaml` 文件的模块类型
  2. 为 Vue I18n 提供类型支持
  3. 确保 TypeScript 能正确识别和类型检查 YAML 格式的语言文件
- **使用场景**：
  - 项目使用 Vue I18n 进行国际化时
  - 使用 YAML 文件存储配置或语言文件时
  - 需要 TypeScript 支持这些文件类型时
- **文件内容**：
  ```typescript
  declare module '*.yml' {
    import { DefineLocaleMessage } from 'vue-i18n';
    const messages: DefineLocaleMessage;
    export default messages;
  }

  declare module '*.yaml' {
    import { DefineLocaleMessage } from 'vue-i18n';
    const messages: DefineLocaleMessage;
    export default messages;
  }
  ```

## 自定义布局组件 (layouts 文件夹)

### 404.vue [📁 layouts] [🔗](./layouts/404.vue)
- **功能**：显示 404 错误页面，并提供趣味的多语言食谱展示功能。
- **主要特点**：
  1. 多语言支持：提供中文简体、繁体、英文和日文四种语言的食谱内容
  2. 动态切换：支持不同语言食谱内容的动态切换显示
  3. 样式优化：
     - 404 数字添加阴影效果
     - 自定义按钮样式，支持悬停效果
     - 优化食谱内容布局和间距

### categories.vue [📁 layouts] [🔗](./layouts/categories.vue)
- **功能**：分类页面布局，支持多语言分类展示和管理。
- **主要特点**：
  1. 多语言支持：
     - 集成 `parseI18nContent` 工具函数
     - 优化分类名称的显示逻辑
  2. 分类筛选：
     - 支持对象形式的分类数据
     - 优化 URL 参数处理
  3. 分类合并：
     - 实现多语言分类的合并显示
     - 优化分类计数统计
  4. 页面优化：
     - 添加过渡动画效果
     - 改进分类列表显示方式

### tags.vue [📁 layouts] [🔗](./layouts/tags.vue)
- **功能**：标签页面布局，支持多语言标签云展示。
- **主要特点**：
  1. 多语言支持：
     - 集成 `parseI18nContent` 工具函数
     - 优化标签名称的显示逻辑
  2. 标签样式系统：
     - 基于使用频率动态计算字体大小
     - 实现标签颜色的渐变效果
     - 使用 TinyColor 库处理颜色混合
  3. 标签筛选：
     - 支持对象形式的标签数据
     - 改进 URL 参数处理
  4. 标签合并：
     - 实现多语言标签的合并显示
     - 优化标签计数统计
  5. 页面优化：
     - 添加过渡动画效果
     - 优化标签云布局
     - 支持响应式设计

## 自定义的 SCSS 样式(styles 文件夹)

### index.scss [📁 styles] [🔗](./styles/index.scss)
- **功能**：定义侧边栏背景图片和暗黑模式样式。
- **使用方法**：
  ```scss
  // 侧边栏背景图片样式
  .yun-fullscreen-menu {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-image: url('https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_Nobi_With_Mu_20250514.webp');
      background-position: bottom 0rem center;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.4;
      transition: all 0.3s ease;
    }
  }

  // 暗黑模式样式
  html.dark {
    .yun-fullscreen-menu {
      &::before {
        background-image: url('https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_Onocle_CardGame_Mu_20250527.webp');
        opacity: 0.8;
      }
    }
  }
  ```

## setup 文件夹

### 作用
`setup` 文件夹用于存放应用的初始化设置文件，主要用于配置 Google Analytics 跟踪和其他应用级别的设置。

### 包含文件
- **main.ts** [📁 setup] [🔗](./setup/main.ts)：主应用设置文件，用于初始化应用并安装 Google Analytics 跟踪。
- **gtag.ts** [📁 setup] [🔗](./setup/gtag.ts)：Google Analytics 跟踪设置，用于在客户端安装 Google Analytics 并跟踪路由。

## 自定义功能组件（components 文件夹）

### 1. 多语言支持组件
这些组件主要用于支持 Markdown 文章的 frontmatter 多语言化，通过 `parseI18nContent` 工具函数实现：

- **YunPostCard.vue** [📁 components] [🔗](./components/YunPostCard.vue)：文章卡片组件，支持多语言标题和内容显示
- **YunPostCategories.vue** [📁 components] [🔗](./components/YunPostCategories.vue)：文章分类组件，支持多语言分类名称
- **YunPostTags.vue** [📁 components] [🔗](./components/YunPostTags.vue)：文章标签组件，支持多语言标签名称
- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：文章元信息组件，支持多语言描述和作者信息
- **YunNavMenuTitle.vue** [📁 components] [🔗](./components/YunNavMenuTitle.vue)：导航菜单标题组件，支持多语言显示
- **YunCategory.vue** [📁 components] [🔗](./components/YunCategory.vue)：分类组件，支持多语言分类名称
- **YunCategoryChildItem.vue** [📁 components] [🔗](./components/YunCategoryChildItem.vue)：子分类组件，支持多语言显示
- **YunPostNav.vue** [📁 components] [🔗](./components/YunPostNav.vue)：文章导航组件，支持多语言
- **YunPostsInfo.vue** [📁 components] [🔗](./components/YunPostsInfo.vue)：文章信息组件，支持多语言显示
- **YunPostCollapseItem.vue** [📁 components] [🔗](./components/YunPostCollapseItem.vue)：文章折叠项组件，支持多语言内容

### 2. 统计与监控组件
这些组件用于网站访问统计和运行时间显示：

- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：
  - 集成不蒜子访问统计（页面访问量）

- **YunFooter.vue** [📁 components] [🔗](./components/YunFooter.vue)：
  - 显示网站运行时间（从部署开始计时）
  - 集成不蒜子网站总访问统计（全站访问量）

### 3. 特色功能组件
这些组件提供网站的特色功能：

- **YunBanner.vue** [📁 components] [🔗](./components/YunBanner.vue)：横幅组件，自定义动画展示时间，优化用户体验
- **YunSay.vue** [📁 components] [🔗](./components/YunSay.vue)：说说组件，集成谷歌翻译 API 自动翻译一言内容，支持多语言显示
- **YunNotice.vue** [📁 components] [🔗](./components/YunNotice.vue)：通知组件，支持在配置文件中自定义多语言通知内容
- **YunSponsor.vue** [📁 components] [🔗](./components/YunSponsor.vue)：赞助组件，支持在配置文件中自定义多语言赞助描述

### 4. 布局与导航组件
这些组件用于网站的整体布局和导航，都集成了多语言支持：

- **YunLayoutPostTag.vue** [📁 components] [🔗](./components/YunLayoutPostTag.vue)：标签云布局组件，支持动态样式计算
- **YunNavMenuItem.vue** [📁 components] [🔗](./components/YunNavMenuItem.vue)：导航菜单项组件，支持多语言显示
- **YunPageHeader.vue** [📁 components] [🔗](./components/YunPageHeader.vue)：页面标题组件，支持多语言标题
- **YunSidebarLinks.vue** [📁 components] [🔗](./components/YunSidebarLinks.vue)：侧边栏链接组件，支持多语言链接文本
- **YunPrologueSquare.vue** [📁 components] [🔗](./components/YunPrologueSquare.vue)：序言方块组件，支持多语言内容

### 5. 配置相关说明
- 支持在 `site.config.ts` [📁 root] [🔗](./site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](./theme.config.ts) 中自定义多语言配置：
  - Notice 模块：支持多语言通知内容
  - Sponsor 模块：支持多语言赞助描述
- 使用 `as any` 类型断言方案确保函数正确读取多语言配置

#### 多语言配置注意事项
> 针对目前正在使用的valaxy 0.23.4 发行版
由于 valaxy 官方类型声明限制，`site.config.ts` [📁 root] [🔗](./site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](./theme.config.ts) 中如需支持多语言对象（如 sponsor.description、notice.content），需要使用 `as any` 类型断言，否则会报类型错误。

#### 示例

```ts
// site.config.ts
sponsor: {
  enable: true,
  description: {
    'zh-CN': '我是学生给我钱（没有说礼貌的意思）',
    'en': 'Student here, send money—— no cap'
  } as any,
  // ...
}

// theme.config.ts
notice: {
  enable: true,
  hideInPages: false,
  content: {
    'zh-CN': '※置顶： Who am I ? |  (UTC+8)2025-03-06 14:27:19',
    'en': '※Pinned: Who am I ? |  (UTC+8)2025-03-06 14:27:19'
  } as any,
}
```

#### 说明
- 这是因为 valaxy 官方类型声明中 description/content 只支持 string 类型，无法直接传递对象。
- 使用 `as any` 可以绕过类型检查，实际运行时不会有问题。
- 如果官方类型声明升级为支持对象类型，可以去掉 `as any`。
- 所有组件都集成了 `parseI18nContent` 工具函数 [📁 utils] [🔗](./utils/i18n.ts)，用于处理多语言内容
- 支持在 frontmatter 中使用对象形式定义多语言内容：
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```

## 📝 ToDo List

### 🚧 待优化功能
1. **多语言实时切换优化**
   - 标签云组件（YunLayoutPostTag.vue）的多语言实时响应
   - 分类页面文章列表的多语言实时切换
   - 标签页面文章列表的多语言实时切换
   - 优化 `i18n.ts` 工具函数对复杂组件的支持

2. **多语言框架扩展**
   - 未理解 valaxy 框架自身如何支持两种以上更多语言的办法
   - 完善 `locales` 目录下的语言支持（已预留相关对应键文件）：
     -  繁体中文（zh-TW）支持
     -  日语（ja）支持
   - 设计多语言切换的用户界面
3. **本地搜索策略问题**
  - fuse.js方案的本地搜索策略不太适合当前的多语言化frontmatter文章
  - 在 bulid 之后的网站中会出现搜索不到文章详细内容的情况等等






