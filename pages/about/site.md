---
title: About Site
date: 2025-06-06 02:49:46
toc: true
---

::: zh-CN
<div class="flex justify-center my-4">
  <a href="#站点历史更新日志" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span class="i-material-symbols:history"></span>
    <span>查看更新日志</span>
  </a>
</div>
:::

::: en
<div class="flex justify-center my-4">
  <a href="#site-history-changelog" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span class="i-material-symbols:history"></span>
    <span>View Changelog</span>
  </a>
</div>
:::

## 前端工具链 {lang="zh-CN"}
## Frontend Toolchain {lang="en"}

### 核心框架 {lang="zh-CN"}
### Core Frameworks {lang="en"}

::: zh-CN
* 🎨 静态博客框架：[Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 博客框架主题：[Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> 对当前框架做出的自定义修改请见[该章节](#针对valaxy-0-23-4-发行版的禁用-rss-自动生成措施)及其后续章节
:::

::: en
* 🎨 Static Blog Framework: [Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 Blog Theme: [Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> For custom modifications to the current framework, please see [this section](#rss-auto-generation-disabling-measures-for-valaxy-0-23-4-release) and subsequent chapters
:::

### 开发工具 {lang="zh-CN"}
### Development Tools {lang="en"}

::: zh-CN
* 📦 包管理器：[pnpm](https://github.com/pnpm/pnpm)
* ⚡ 构建工具：[Vite](https://github.com/vitejs/vite)
* 📘 开发语言：[TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 样式预处理器：[SCSS](https://github.com/sass/sass)
* ✨ 代码规范：[ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)
:::

::: en
* 📦 Package Manager: [pnpm](https://github.com/pnpm/pnpm)
* ⚡ Build Tool: [Vite](https://github.com/vitejs/vite)
* 📘 Development Language: [TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 Style Preprocessor: [SCSS](https://github.com/sass/sass)
* ✨ Code Standards: [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)
:::

### 主要依赖 {lang="zh-CN"}
### Major Dependencies {lang="en"}

::: zh-CN
* 🖖 前端框架：[Vue 3](https://github.com/vuejs/core)
* 🛣️ 路由管理：[Vue Router](https://github.com/vuejs/router)
* 🌍 国际化：[Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown 解析：[Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 数学公式渲染：[KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 颜色处理：[TinyColor](https://github.com/bgrins/TinyColor)
* 📊 访问统计：[Google Analytics](https://github.com/googleanalytics)
:::

::: en
* 🖖 Frontend Framework: [Vue 3](https://github.com/vuejs/core)
* 🛣️ Route Management: [Vue Router](https://github.com/vuejs/router)
* 🌍 Internationalization: [Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown Parser: [Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 Math Formula Rendering: [KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 Color Processing: [TinyColor](https://github.com/bgrins/TinyColor)
* 📊 Analytics: [Google Analytics](https://github.com/googleanalytics)
:::

### 支持的部署平台 {lang="zh-CN"}
### Supported Deployment Platforms {lang="en"}

::: zh-CN
* 🚀 现使用 [Github Pages](https://github.com/pages)：<https://jaymushui.github.io>

~~*未启用： Vercel、Netlify等~~
:::

::: en
* 🚀 Currently using [Github Pages](https://github.com/pages): <https://jaymushui.github.io>
~~*Not enabled: Vercel, Netlify, etc.*~~
:::

### 开发环境 {lang="zh-CN"}
### Development Environment {lang="en"}

::: zh-CN
* 🟢 运行环境：[Node.js](https://github.com/nodejs/node)
* 💻 开发 IDE：[VSCode](https://github.com/microsoft/vscode)
* 🔄 版本控制：[Git](https://github.com/git/git)
:::

::: en
* 🟢 Runtime: [Node.js](https://github.com/nodejs/node)
* 💻 Development IDE: [VSCode](https://github.com/microsoft/vscode)
* 🔄 Version Control: [Git](https://github.com/git/git)
:::

### 其他 {lang="zh-CN"}
### Others {lang="en"}

::: zh-CN
* 🖼️ Telegraph + Cloudflare Pages：静态资源 CDN 托管[🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 联动的项目：

1.<https://mushui.pages.dev/>(社交自介)[非开源]

2.🤫
:::

::: en
* 🖼️ Telegraph + Cloudflare Pages: Static Resource CDN Hosting [🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 Related Projects:

1. <https://mushui.pages.dev/>(Social Profile)[Not Open Source]
2. 🤫
:::

## markdown文章 Frontmatter 字段提示说明（源码出处标注） {lang="zh-CN"}
## Markdown Article Frontmatter Field Guide (Source Code Reference) {lang="en"}

::: zh-CN
Valaxy 及本主题支持以下 frontmatter 字段，所有字段均有源码出处或官方约定，便于溯源和维护：
:::

::: en
Valaxy and this theme support the following frontmatter fields, all with source code references or official conventions for easy tracing and maintenance:
:::

### 1. 基础信息字段 {lang="zh-CN"}
### 1. Basic Information Fields {lang="en"}

::: zh-CN
- `title`：文章标题（Valaxy 约定，所有组件支持）
- `icon`：标题前的图标（YunPostCard.vue:27, Valaxy 约定）
- `description`：文章描述（YunPostMeta.vue:22）
- `author`：作者（YunPostMeta.vue:23）
- `date`：发布时间（YunPostMeta.vue:20, Valaxy 约定）
- `updated`：更新时间（YunPostMeta.vue:21, Valaxy 约定）
- `path`：文章路径（Valaxy 约定）❓
- `abbrlink`：永久链接（Valaxy 约定）❓
:::

::: en
- `title`: Article title (Valaxy convention, supported by all components)
- `icon`: Icon before title (YunPostCard.vue:27, Valaxy convention)
- `description`: Article description (YunPostMeta.vue:22)
- `author`: Author (YunPostMeta.vue:23)
- `date`: Publication time (YunPostMeta.vue:20, Valaxy convention)
- `updated`: Update time (YunPostMeta.vue:21, Valaxy convention)
- `path`: Article path (Valaxy convention) ❓
- `abbrlink`: Permanent link (Valaxy convention) ❓
:::

### 2. 结构与样式字段 {lang="zh-CN"}
### 2. Structure and Style Fields {lang="en"}

::: zh-CN
- `toc`：是否显示目录（Valaxy 约定）
- `aside`：是否显示右侧侧边栏（Valaxy 约定）
- `markdownClass`：自定义 Markdown 样式（Valaxy 约定）❓
- `pageTitleClass`：页面标题样式（Valaxy 约定）❓
- `postTitleClass`：文章列表中自定义标题样式（YunPostCard.vue:40）
:::

::: en
- `toc`: Whether to show table of contents (Valaxy convention)
- `aside`: Whether to show right sidebar (Valaxy convention)
- `markdownClass`: Custom Markdown style (Valaxy convention) ❓
- `pageTitleClass`: Page title style (Valaxy convention) ❓
- `postTitleClass`: Custom title style in article list (YunPostCard.vue:40)
:::

### 3. 分类与标签 {lang="zh-CN"}
### 3. Categories and Tags {lang="en"}

::: zh-CN
- `categories`：分类（YunPostCard.vue:115, Valaxy 约定）
- `tags`：标签（YunPostCard.vue:117, Valaxy 约定）
:::

::: en
- `categories`: Categories (YunPostCard.vue:115, Valaxy convention)
- `tags`: Tags (YunPostCard.vue:117, Valaxy convention)
:::

### 4. 文章内容与摘要 {lang="zh-CN"}
### 4. Article Content and Excerpt {lang="en"}

::: zh-CN
- `excerpt`：自定义摘要（YunPostCard.vue:97, Valaxy 约定）
- `excerpt_type`：摘要类型（YunPostCard.vue:96, Valaxy 约定）
- `cover`：封面图片（YunPostCard.vue:73, Valaxy 约定）
:::

::: en
- `excerpt`: Custom excerpt (YunPostCard.vue:97, Valaxy convention)
- `excerpt_type`: Excerpt type (YunPostCard.vue:96, Valaxy convention)
- `cover`: Cover image (YunPostCard.vue:73, Valaxy convention)
:::

### 5. 导航与排序 {lang="zh-CN"}
### 5. Navigation and Sorting {lang="en"}

::: zh-CN
- `nav`：是否显示前后文章导航（Valaxy 约定）
- `top`：置顶优先级（YunPostMeta.vue:30, Valaxy 约定）
- `end`：是否完结（Valaxy 约定）
:::

::: en
- `nav`: Whether to show article navigation (Valaxy convention)
- `top`: Top priority (YunPostMeta.vue:30, Valaxy convention)
- `end`: Whether finished (Valaxy convention)
:::

### 6. 状态与权限 {lang="zh-CN"}
### 6. Status and Permissions {lang="en"}

::: zh-CN
- `draft`：是否为草稿（Valaxy 约定）
- `hide`：是否隐藏（Valaxy 约定）
- `comment`：是否显示评论（Valaxy 约定）
- `time_warning`：更新时间警告（Valaxy 约定）❗ [已全局配置禁用]
:::

::: en
- `draft`: Whether draft (Valaxy convention)
- `hide`: Whether hidden (Valaxy convention)
- `comment`: Whether to show comments (Valaxy convention)
- `time_warning`: Update time warning (Valaxy convention) ❗ [Globally disabled]
:::

### 7. 统计与阅读 {lang="zh-CN"}
### 7. Statistics and Reading {lang="en"}

::: zh-CN
- `wordCount`：字数统计（YunPostMeta.vue:18, 自动生成）
- `readingTime`：阅读时长（YunPostMeta.vue:19, 自动生成）
:::

::: en
- `wordCount`: Word count (YunPostMeta.vue:18, auto-generated)
- `readingTime`: Reading time (YunPostMeta.vue:19, auto-generated)
:::

### 8. 文章类型与外链 {lang="zh-CN"}
### 8. Article Type and External Links {lang="en"}

::: zh-CN
- `type`：卡片类型（YunPostCard.vue:26, Valaxy 约定）
- `url`：覆盖文章 URL，直接跳转（YunPostCard.vue:103, Valaxy 约定）
:::

::: en
- `type`: Card type (YunPostCard.vue:26, Valaxy convention)
- `url`: Override article URL, direct jump (YunPostCard.vue:103, Valaxy convention)
:::

### 9. 图片与多媒体 {lang="zh-CN"}
### 9. Images and Multimedia {lang="en"}

::: zh-CN
- `image`：Schema.org 图片对象（Valaxy 约定）
- `albums`：相册数组（Valaxy 约定）
- `photos`：照片数组（Valaxy 约定）
- `medium_zoom`：是否使用 medium-zoom 图片缩放（Valaxy 约定）
:::

::: en
- `image`: Schema.org image object (Valaxy convention)
- `albums`: Album array (Valaxy convention)
- `photos`: Photo array (Valaxy convention)
- `medium_zoom`: Whether to use medium-zoom image scaling (Valaxy convention)
:::

### 10. 代码与数学 {lang="zh-CN"}
### 10. Code and Math {lang="en"}

::: zh-CN
- `katex`：是否使用 KaTeX 数学公式（Valaxy 约定）
- `codepen`：是否使用 CodePen（Valaxy 约定）
- `codeHeightLimit`：代码块高度限制（Valaxy 约定）
:::

::: en
- `katex`: Whether to use KaTeX math formulas (Valaxy convention)
- `codepen`: Whether to use CodePen (Valaxy convention)
- `codeHeightLimit`: Code block height limit (Valaxy convention)
:::

### 11. 加密与安全 {lang="zh-CN"}
### 11. Encryption and Security {lang="en"}

::: zh-CN
- `encrypt`：是否启用加密（Valaxy 约定）
- `password`：加密密码（Valaxy 约定）
- `password_hint`：密码提示（Valaxy 约定）
- `gallery_password`：相册密码（Valaxy 约定）
- `encryptedContent`：加密后的内容（Valaxy 约定）
- `partiallyEncryptedContents`：部分加密的内容（Valaxy 约定）
- `encryptedPhotos`：加密后的相册（Valaxy 约定）
:::

::: en
- `encrypt`: Whether to enable encryption (Valaxy convention)
- `password`: Encryption password (Valaxy convention)
- `password_hint`: Password hint (Valaxy convention)
- `gallery_password`: Album password (Valaxy convention)
- `encryptedContent`: Encrypted content (Valaxy convention)
- `partiallyEncryptedContents`: Partially encrypted content (Valaxy convention)
- `encryptedPhotos`: Encrypted album (Valaxy convention)
:::

### 12. 其他特殊字段 {lang="zh-CN"}
### 12. Other Special Fields {lang="en"}

::: zh-CN
- `from`：客户端重定向的源路径（Valaxy 约定）
:::

::: en
- `from`: Source path for client redirect (Valaxy convention)
:::

## 开发命令 {lang="zh-CN"}
## Development Commands {lang="en"}

### 🚀 基础命令 {lang="zh-CN"}
### 🚀 Basic Commands {lang="en"}

::: zh-CN
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
:::

::: en
```bash
# Install dependencies
pnpm i

# Development preview
pnpm dev

# Build (SSG version)
pnpm build

# Build (SPA version)
pnpm build:spa

# Build (SSG version, same as pnpm build)
pnpm build:ssg

# Generate RSS
pnpm rss

# Preview build results
pnpm serve

# Clean build files (custom command, implemented in scripts/clean.js)
# Deletes the following files:
# - public/feed.xml
# - public/atom.xml
# - public/feed.json
# - public/valaxy-fuse-list.json
# - dist/
pnpm clean
```
:::

### 📌 命令说明 {lang="zh-CN"}
### 📌 Command Description {lang="en"}

::: zh-CN
- `pnpm i`: 安装项目所有依赖，包括开发依赖
- `pnpm dev`: 启动开发服务器，支持热更新
- `pnpm build`: 构建生产环境代码（SSG版本），输出到 `dist` 目录
- `pnpm build:spa`: 构建单页应用版本
- `pnpm build:ssg`: 构建静态站点版本
- `pnpm rss`: 生成 RSS 订阅文件
- `pnpm serve`: 预览构建后的生产环境代码
:::

::: en
- `pnpm i`: Install all project dependencies, including development dependencies
- `pnpm dev`: Start development server with hot reload
- `pnpm build`: Build production code (SSG version), output to `dist` directory
- `pnpm build:spa`: Build single page application version
- `pnpm build:ssg`: Build static site version
- `pnpm rss`: Generate RSS subscription file
- `pnpm serve`: Preview built production code
:::

### ⚠️ 注意事项 {lang="zh-CN"}
### ⚠️ Notes {lang="en"}

::: zh-CN
1. 首次克隆项目后，需要先运行 `pnpm i` 安装依赖
2. 开发时使用 `pnpm dev` 启动开发服务器
3. 构建前建议确保所有代码已保存
4. 如果遇到依赖问题，可以尝试删除 `node_modules` 目录后重新运行 `pnpm i`
:::

::: en
1. After first cloning the project, run `pnpm i` to install dependencies
2. Use `pnpm dev` to start development server
3. Make sure all code is saved before building
4. If you encounter dependency issues, try deleting the `node_modules` directory and run `pnpm i` again
:::

## 目录结构 {lang="zh-CN"}
## Directory Structure {lang="en"}

### 📁 核心目录 {lang="zh-CN"}
### 📁 Core Directories {lang="en"}

::: zh-CN
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
:::

::: en
* `pages/`: All page content
  - `posts/`: Blog articles
  - `about/`: About pages
* `components/`: Custom Vue components
* `layouts/`: Custom layout components
* `styles/`: Custom style files
* `locales/`: Internationalization language files
* `utils/`: Utility functions
* `types/`: TypeScript type declarations
* `setup/`: Application initialization settings
* `stores/`: Pinia state management
* `plugins/`: Custom plugins
* `public/`: Static resource files
* `dist/`: Generated files after build
:::

### 📄 配置文件 {lang="zh-CN"}
### 📄 Configuration Files {lang="en"}

::: zh-CN
* `site.config.ts`: 站点配置
* `theme.config.ts`: 主题配置
* `valaxy.config.ts`: Valaxy 框架配置
* `tsconfig.json`: TypeScript 配置
* `package.json`: 项目依赖配置
* `pnpm-lock.yaml`: 依赖版本锁定文件
:::

::: en
* `site.config.ts`: Site configuration
* `theme.config.ts`: Theme configuration
* `valaxy.config.ts`: Valaxy framework configuration
* `tsconfig.json`: TypeScript configuration
* `package.json`: Project dependency configuration
* `pnpm-lock.yaml`: Dependency version lock file
:::

### 🔧 开发工具配置 {lang="zh-CN"}
### 🔧 Development Tool Configuration {lang="en"}

::: zh-CN
* `.vscode/`: VSCode 编辑器配置
* `.github/`: GitHub Actions 工作流配置
* `.editorconfig`: 编辑器通用配置
* `.npmrc`: NPM 配置
* `.gitignore`: Git 忽略文件配置
:::

::: en
* `.vscode/`: VSCode editor configuration
* `.github/`: GitHub Actions workflow configuration
* `.editorconfig`: Editor common configuration
* `.npmrc`: NPM configuration
* `.gitignore`: Git ignore file configuration
:::

### 🚀 部署配置 {lang="zh-CN"}
### 🚀 Deployment Configuration {lang="en"}

::: zh-CN
* `.github/`: Github 部署配置
* `vercel.json`: Vercel 部署配置
* `netlify.toml`: Netlify 部署配置
* `nginx.conf`: Nginx 服务器配置
* `Dockerfile`: Docker 容器配置
* `.dockerignore`: Docker 忽略文件
:::

::: en
* `.github/`: Github deployment configuration
* `vercel.json`: Vercel deployment configuration
* `netlify.toml`: Netlify deployment configuration
* `nginx.conf`: Nginx server configuration
* `Dockerfile`: Docker container configuration
* `.dockerignore`: Docker ignore file
:::

### 📦 构建输出 {lang="zh-CN"}
### 📦 Build Output {lang="en"}

::: zh-CN
* `.valaxy/`: Valaxy 构建缓存
* `node_modules/`: 依赖包目录
:::

::: en
* `.valaxy/`: Valaxy build cache
* `node_modules/`: Dependency package directory
:::

### 📝 其他 {lang="zh-CN"}
### 📝 Others {lang="en"}

::: zh-CN
* `scripts/`: 自定义脚本
* `config/`: 其他配置文件
:::

::: en
* `scripts/`: Custom scripts
* `config/`: Other configuration files
:::

## 针对valaxy 0.23.4 发行版的禁用 RSS 自动生成措施 {lang="zh-CN"}
## RSS Auto-generation Disabling Measures for Valaxy 0.23.4 Release {lang="en"}

::: zh-CN
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
:::

::: en
If RSS functionality is not needed, or to avoid RSS generation errors due to multilingual frontmatter, you can disable RSS auto-generation in the following way:

1. Open the file `node_modules/.pnpm/valaxy@0.23.4_.../node_modules/valaxy/dist/chunk-OXTCPOR5.js`.
2. Search for `rssModule` or `build:after`, find the following code:
   ```js
   setup(node) {
     node.hook("build:after", async () => {
       //console.log();
       //await build(node.options);
       return;
     });
   }
   ```
3. Comment out `await build(node.options);` or directly `return;`, so RSS files won't be automatically generated during build.

**Note:** This file will be overwritten after each valaxy dependency upgrade, requiring reoperation.
:::

## 自定义的 .ts 函数 （utils/types 文件夹） {lang="zh-CN"}
## Custom .ts Functions (utils/types folder) {lang="en"}

### i18n.ts

::: zh-CN
- **功能**：解析多语言内容，支持对象和字符串形式。
- **使用方法**：
  ```typescript
  parseI18nContent({ 'zh-CN': '中文', 'en': 'English' }) // 返回当前语言对应的内容
  parseI18nContent('普通文本') // 直接返回字符串
  ```
:::

::: en
- **Function**: Parse multilingual content, supporting object and string forms.
- **Usage**:
  ```typescript
  parseI18nContent({ 'zh-CN': 'Chinese', 'en': 'English' }) // Returns content corresponding to current language
  parseI18nContent('Plain text') // Returns string directly
  ```
:::

### formatTimestamp.ts 

::: zh-CN
- **功能**：将时间戳或日期对象格式化为 'YYYY-MM-DD HH:mm:ss' 格式。
- **使用方法**：
  ```typescript
  formatTimestamp(new Date()) // 返回当前时间的格式化字符串
  ```
:::

::: en
- **Function**: Format timestamp or date object to 'YYYY-MM-DD HH:mm:ss' format.
- **Usage**:
  ```typescript
  formatTimestamp(new Date()) // Returns formatted string of current time
  ```
:::

### shims.d.ts 

::: zh-CN
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
:::

::: en
- **Function**: TypeScript type declaration file for extending module type definitions.
- **Main Purpose**:
  1. Declare module types for `.yml` and `.yaml` files
  2. Provide type support for Vue I18n
  3. Ensure TypeScript can correctly identify and type check YAML format language files
- **Usage Scenarios**:
  - When project uses Vue I18n for internationalization
  - When using YAML files to store configuration or language files
  - When TypeScript support is needed for these file types
- **File Content**:
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
:::

## 自定义布局组件 (layouts 文件夹) {lang="zh-CN"}
## Custom Layout Components (layouts folder) {lang="en"}

### 404.vue 
::: zh-CN
- **功能**：显示 404 错误页面，并提供趣味的多语言食谱展示功能。
- **主要特点**：
  1. 多语言支持：提供中文简体、繁体、英文和日文四种语言的食谱内容
  2. 动态切换：支持不同语言食谱内容的动态切换显示
  3. 样式优化：
     - 404 数字添加阴影效果
     - 自定义按钮样式，支持悬停效果
     - 优化食谱内容布局和间距
:::

::: en
- **Function**: Display 404 error page with fun multilingual recipe showcase.
- **Main Features**:
  1. Multilingual Support: Provides recipe content in Simplified Chinese, Traditional Chinese, English, and Japanese
  2. Dynamic Switching: Supports dynamic switching of recipe content in different languages
  3. Style Optimization:
     - 404 numbers with shadow effects
     - Custom button styles with hover effects
     - Optimized recipe content layout and spacing
:::

### categories.vue 

::: zh-CN
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
:::

::: en
- **Function**: Category page layout with multilingual category display and management.
- **Main Features**:
  1. Multilingual Support:
     - Integrated `parseI18nContent` utility function
     - Optimized category name display logic
  2. Category Filtering:
     - Support for object-form category data
     - Optimized URL parameter handling
  3. Category Merging:
     - Implementation of multilingual category merging display
     - Optimized category count statistics
  4. Page Optimization:
     - Added transition animation effects
     - Improved category list display method
:::

### tags.vue  

::: zh-CN
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
:::

::: en
- **Function**: Tag page layout with multilingual tag cloud display.
- **Main Features**:
  1. Multilingual Support:
     - Integrated `parseI18nContent` utility function
     - Optimized tag name display logic
  2. Tag Style System:
     - Dynamic font size calculation based on usage frequency
     - Implementation of tag color gradient effects
     - Color mixing using TinyColor library
  3. Tag Filtering:
     - Support for object-form tag data
     - Improved URL parameter handling
  4. Tag Merging:
     - Implementation of multilingual tag merging display
     - Optimized tag count statistics
  5. Page Optimization:
     - Added transition animation effects
     - Optimized tag cloud layout
     - Support for responsive design
:::

## 自定义的 SCSS 样式(styles 文件夹) {lang="zh-CN"}
## Custom SCSS Styles (styles folder) {lang="en"}

### index.scss

::: zh-CN
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
:::

::: en
- **Function**: Define sidebar background image and dark mode styles.
- **Usage**:
  ```scss
  // Sidebar background image style
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

  // Dark mode style
  html.dark {
    .yun-fullscreen-menu {
      &::before {
        background-image: url('https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_Onocle_CardGame_Mu_20250527.webp');
        opacity: 0.8;
      }
    }
  }
  ```
:::

## setup 文件夹 {lang="zh-CN"}
## setup folder {lang="en"}

### 作用 {lang="zh-CN"}
### Purpose {lang="en"}

::: zh-CN
`setup` 文件夹用于存放应用的初始化设置文件，主要用于配置 Google Analytics 跟踪和其他应用级别的设置。
:::

::: en
The `setup` folder is used to store application initialization settings files, mainly for configuring Google Analytics tracking and other application-level settings.
:::

### 包含文件 {lang="zh-CN"}
### Included Files {lang="en"}

::: zh-CN
- **main.ts** [📁 setup] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/setup/main.ts)：主应用设置文件，用于初始化应用并安装 Google Analytics 跟踪。
- **gtag.ts** [📁 setup] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/setup/gtag.ts)：Google Analytics 跟踪设置，用于在客户端安装 Google Analytics 并跟踪路由。
:::

::: en
- **main.ts** [📁 setup] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/setup/main.ts): Main application settings file, used to initialize the application and install Google Analytics tracking.
- **gtag.ts** [📁 setup] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/setup/gtag.ts): Google Analytics tracking settings, used to install Google Analytics on the client side and track routes.
:::

## 自定义功能组件（components 文件夹） {lang="zh-CN"}
## Custom Feature Components (components folder) {lang="en"}

### 1. 多语言支持组件 {lang="zh-CN"}
### 1. Multilingual Support Components {lang="en"}

::: zh-CN
这些组件主要用于支持 Markdown 文章的 frontmatter 多语言化，通过 `parseI18nContent` 工具函数实现：

- **YunPostCard.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCard.vue)：文章卡片组件，支持多语言标题和内容显示
- **YunPostCategories.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCategories.vue)：文章分类组件，支持多语言分类名称
- **YunPostTags.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostTags.vue)：文章标签组件，支持多语言标签名称
- **YunPostMeta.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostMeta.vue)：文章元信息组件，支持多语言描述和作者信息
- **YunNavMenuTitle.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNavMenuTitle.vue)：导航菜单标题组件，支持多语言显示
- **YunCategory.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunCategory.vue)：分类组件，支持多语言分类名称
- **YunCategoryChildItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunCategoryChildItem.vue)：子分类组件，支持多语言显示
- **YunPostNav.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostNav.vue)：文章导航组件，支持多语言
- **YunPostsInfo.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostsInfo.vue)：文章信息组件，支持多语言显示
- **YunPostCollapseItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCollapseItem.vue)：文章折叠项组件，支持多语言内容
:::

::: en
These components are mainly used to support multilingual frontmatter for Markdown articles, implemented through the `parseI18nContent` utility function:

- **YunPostCard.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCard.vue): Article card component, supports multilingual title and content display
- **YunPostCategories.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCategories.vue): Article category component, supports multilingual category names
- **YunPostTags.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostTags.vue): Article tag component, supports multilingual tag names
- **YunPostMeta.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostMeta.vue): Article metadata component, supports multilingual description and author information
- **YunNavMenuTitle.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNavMenuTitle.vue): Navigation menu title component, supports multilingual display
- **YunCategory.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunCategory.vue): Category component, supports multilingual category names
- **YunCategoryChildItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunCategoryChildItem.vue): Subcategory component, supports multilingual display
- **YunPostNav.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostNav.vue): Article navigation component, supports multilingual
- **YunPostsInfo.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostsInfo.vue): Article information component, supports multilingual display
- **YunPostCollapseItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostCollapseItem.vue): Article collapse item component, supports multilingual content
:::

### 2. 统计与监控组件 {lang="zh-CN"}
### 2. Statistics and Monitoring Components {lang="en"}

::: zh-CN
这些组件用于网站访问统计和运行时间显示：

- **YunPostMeta.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostMeta.vue)：
  - 集成不蒜子访问统计（页面访问量）

- **YunFooter.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunFooter.vue)：
  - 显示网站运行时间（从部署开始计时）
  - 集成不蒜子网站总访问统计（全站访问量）
:::

::: en
These components are used for website access statistics and runtime display:

- **YunPostMeta.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPostMeta.vue):
  - Integrated Busuanzi access statistics (page views)

- **YunFooter.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunFooter.vue):
  - Display website runtime (timed from deployment)
  - Integrated Busuanzi total website access statistics (total site visits)
:::

### 3. 特色功能组件 {lang="zh-CN"}
### 3. Special Feature Components {lang="en"}

::: zh-CN
这些组件提供网站的特色功能：

- **YunBanner.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunBanner.vue)：横幅组件，自定义动画展示时间，优化用户体验
- **YunSay.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSay.vue)：说说组件，集成谷歌翻译 API 自动翻译一言内容，支持多语言显示
- **YunNotice.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNotice.vue)：通知组件，支持在配置文件中自定义多语言通知内容
- **YunSponsor.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSponsor.vue)：赞助组件，支持在配置文件中自定义多语言赞助描述
:::

::: en
These components provide special features for the website:

- **YunBanner.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunBanner.vue): Banner component, custom animation display time, optimized user experience
- **YunSay.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSay.vue): Say component, integrated Google Translate API for automatic translation of hitokoto content, supports multilingual display
- **YunNotice.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNotice.vue): Notice component, supports custom multilingual notice content in configuration file
- **YunSponsor.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSponsor.vue): Sponsor component, supports custom multilingual sponsor description in configuration file
:::

### 4. 布局与导航组件 {lang="zh-CN"}
### 4. Layout and Navigation Components {lang="en"}

::: zh-CN
这些组件用于网站的整体布局和导航，都集成了多语言支持：

- **YunLayoutPostTag.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunLayoutPostTag.vue)：标签云布局组件，支持动态样式计算
- **YunNavMenuItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNavMenuItem.vue)：导航菜单项组件，支持多语言显示
- **YunPageHeader.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPageHeader.vue)：页面标题组件，支持多语言标题
- **YunSidebarLinks.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSidebarLinks.vue)：侧边栏链接组件，支持多语言链接文本
- **YunPrologueSquare.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPrologueSquare.vue)：序言方块组件，支持多语言内容
:::

::: en
These components are used for the overall layout and navigation of the website, all integrated with multilingual support:

- **YunLayoutPostTag.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunLayoutPostTag.vue): Tag cloud layout component, supports dynamic style calculation
- **YunNavMenuItem.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunNavMenuItem.vue): Navigation menu item component, supports multilingual display
- **YunPageHeader.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPageHeader.vue): Page title component, supports multilingual titles
- **YunSidebarLinks.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunSidebarLinks.vue): Sidebar links component, supports multilingual link text
- **YunPrologueSquare.vue** [📁 components] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/components/YunPrologueSquare.vue): Prologue square component, supports multilingual content
:::

### 5. 配置相关说明 {lang="zh-CN"}
### 5. Configuration Related Notes {lang="en"}

::: zh-CN
- 支持在 `site.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/theme.config.ts) 中自定义多语言配置：
  - Notice 模块：支持多语言通知内容
  - Sponsor 模块：支持多语言赞助描述
- 使用 `as any` 类型断言方案确保函数正确读取多语言配置

#### 多语言配置注意事项{lang="zh-CN"}
> 针对目前正在使用的valaxy 0.23.4 发行版
由于 valaxy 官方类型声明限制，`site.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/theme.config.ts) 中如需支持多语言对象（如 sponsor.description、notice.content），需要使用 `as any` 类型断言，否则会报类型错误。

#### 示例{lang="zh-CN"}

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

#### 说明{lang="zh-CN"}
- 这是因为 valaxy 官方类型声明中 description/content 只支持 string 类型，无法直接传递对象。
- 使用 `as any` 可以绕过类型检查，实际运行时不会有问题。
- 如果官方类型声明升级为支持对象类型，可以去掉 `as any`。
- 所有组件都集成了 `parseI18nContent` 工具函数 [📁 utils] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/utils/i18n.ts)，用于处理多语言内容
- 支持在 frontmatter 中使用对象形式定义多语言内容：
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```
:::

::: en
- Support custom multilingual configuration in `site.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/site.config.ts) and `theme.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/theme.config.ts):
  - Notice module: Supports multilingual notice content
  - Sponsor module: Supports multilingual sponsor description
- Use `as any` type assertion to ensure functions correctly read multilingual configuration

#### Multilingual Configuration Notes {lang="en"}
> For currently used valaxy 0.23.4 release
Due to valaxy official type declaration limitations, if you need to support multilingual objects (such as sponsor.description, notice.content) in `site.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/site.config.ts) and `theme.config.ts` [📁 root] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/theme.config.ts), you need to use `as any` type assertion, otherwise it will report type errors.

#### Example

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

#### Notes {lang="en"}
- This is because in valaxy official type declarations, description/content only supports string type and cannot directly pass objects.
- Using `as any` can bypass type checking, and there won't be problems during actual runtime.
- If official type declarations are upgraded to support object types, `as any` can be removed.
- All components are integrated with the `parseI18nContent` utility function [📁 utils] [🔗](https://github.com/JayMuShui/jaymushui.github.io/blob/valaxy/utils/i18n.ts) for handling multilingual content
- Support defining multilingual content in object form in frontmatter:
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```
:::

## 📝 ToDo List 

### 🚧 待优化功能 {lang="zh-CN"}
### 🚧 Features to Optimize {lang="en"}

::: zh-CN
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
:::

::: en
1. **Multilingual Real-time Switch Optimization**
   - Tag cloud component (YunLayoutPostTag.vue) multilingual real-time response
   - Category page article list multilingual real-time switch
   - Tag page article list multilingual real-time switch
   - Optimize `i18n.ts` utility function support for complex components

2. **Multilingual Framework Extension**
   - Not understanding how valaxy framework itself supports more than two languages
   - Complete language support in `locales` directory (reserved corresponding key files):
     - Traditional Chinese (zh-TW) support
     - Japanese (ja) support
   - Design multilingual switch user interface
3. Local Search Strategy Issues
  - The local search strategy of the fuse.js solution is not suitable for the current multilingual frontmatter articles.
  - Issues such as being unable to search for detailed article content may occur on the built website, etc.
:::

## 站点历史更新日志 {lang="zh-CN"}
## Site History Changelog {lang="en"}

::: zh-CN
<div class="flex justify-center my-4">
  <a href="#前端工具链" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span class="i-material-symbols:arrow-upward"></span>
    <span lang="zh-CN">返回顶部</span>
  </a>
</div>
:::

::: en
<div class="flex justify-center my-4">
  <a href="#frontend-toolchain" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
    <span class="i-material-symbols:arrow-upward"></span>
    <span lang="en">Back to Top</span>
  </a>
</div>
:::

### 2025

#### 06-06 02:00:00(UTC+8)

::: zh-CN
完成从Hexo框架迁移至Valaxy框架的工作，开发时间从5月30日14:00到6月6日02:00。本次迁移主要包含以下内容：

1. **框架迁移**
   - 从Hexo迁移至Valaxy v0.23.4
   - 使用Vue 3 + TypeScript重构
   - 采用pnpm作为包管理器
   - 使用Vite作为构建工具

2. **主题自定义**
   - 基于Yun主题v0.23.4进行深度定制
   - 自定义侧边栏背景图片（明暗模式分别使用不同图片）
   - 优化标签云样式，基于使用频率动态计算字体大小和颜色
   - 自定义404页面，添加多语言食谱展示功能
   - 优化分类和标签页面的多语言支持

3. **功能增强**
   - 实现完整的多语言支持（中文简体、繁体、英文、日文）
   - 集成Google Analytics访问统计
   - 添加不蒜子访问统计（页面访问量和全站访问量）
   - 集成谷歌翻译API，实现一言内容的自动翻译
   - 自定义通知组件，支持多语言通知内容
   - 优化文章导航和阅读体验

4. **组件开发**
   - 开发多个自定义Vue组件：
     - 文章卡片组件（YunPostCard.vue）
     - 分类组件（YunCategory.vue）
     - 标签组件（YunPostTags.vue）
     - 导航菜单组件（YunNavMenuTitle.vue）
     - 文章元信息组件（YunPostMeta.vue）
     - 页脚组件（YunFooter.vue）
     - 横幅组件（YunBanner.vue）
     - 说说组件（YunSay.vue）
     - 通知组件（YunNotice.vue）
     - 赞助组件（YunSponsor.vue）

5. **工具函数开发**
   - 开发i18n工具函数，支持多语言内容解析
   - 开发时间格式化工具函数
   - 开发TypeScript类型声明文件

6. **样式优化**
   - 使用SCSS预处理器
   - 优化响应式布局
   - 添加过渡动画效果
   - 优化暗色模式支持

7. **性能优化**
   - 禁用RSS自动生成，避免多语言frontmatter导致的错误
   - 优化构建配置
   - 优化资源加载

8. **文档完善**
   - 编写详细的README文档
   - 完善组件和工具函数的注释
   - 添加多语言配置说明
   - 记录开发命令和注意事项
:::

::: en
Completed migration from Hexo framework to Valaxy framework, development time from May 30 14:00 to June 6 02:00. This migration includes the following:

1. **Framework Migration**
   - Migrated from Hexo to Valaxy v0.23.4
   - Refactored using Vue 3 + TypeScript
   - Adopted pnpm as package manager
   - Used Vite as build tool

2. **Theme Customization**
   - Deep customization based on Yun theme v0.23.4
   - Custom sidebar background images (different for light/dark modes)
   - Optimized tag cloud styles with dynamic font size and color based on usage frequency
   - Custom 404 page with multilingual recipe showcase
   - Enhanced multilingual support for categories and tags pages

3. **Feature Enhancement**
   - Implemented complete multilingual support (Simplified Chinese, Traditional Chinese, English, Japanese)
   - Integrated Google Analytics
   - Added Busuanzi visit statistics (page views and total site visits)
   - Integrated Google Translate API for automatic translation of hitokoto content
   - Custom notification component with multilingual support
   - Optimized article navigation and reading experience

4. **Component Development**
   - Developed multiple custom Vue components:
     - Article card component (YunPostCard.vue)
     - Category component (YunCategory.vue)
     - Tag component (YunPostTags.vue)
     - Navigation menu component (YunNavMenuTitle.vue)
     - Article metadata component (YunPostMeta.vue)
     - Footer component (YunFooter.vue)
     - Banner component (YunBanner.vue)
     - Say component (YunSay.vue)
     - Notice component (YunNotice.vue)
     - Sponsor component (YunSponsor.vue)

5. **Utility Function Development**
   - Developed i18n utility function for multilingual content parsing
   - Developed timestamp formatting utility function
   - Developed TypeScript type declaration files

6. **Style Optimization**
   - Used SCSS preprocessor
   - Optimized responsive layout
   - Added transition animations
   - Enhanced dark mode support

7. **Performance Optimization**
   - Disabled RSS auto-generation to avoid errors from multilingual frontmatter
   - Optimized build configuration
   - Optimized resource loading

8. **Documentation**
   - Wrote detailed README documentation
   - Improved component and utility function comments
   - Added multilingual configuration guide
   - Documented development commands and notes
:::

#### 05-30 14:00:00(UTC+8)

::: zh-CN
开始从Hexo框架迁移至Valaxy框架的工作。
:::

::: en
Started migration from Hexo framework to Valaxy framework.
:::

#### 02-21 01:36:59(UTC+8)

::: zh-CN
~~三月三日要回大学坐牢了才舍得想起来更新一下博客网站，美醉了~~<br>
~~又是一个人生节点性的事情呢。~~
:::

### 2024

#### 10-26 21:20:13(UTC+8)


我甜蜜地终于在哈尔滨舍得更新一下网站了，我就不在描述文件里面吐槽太多了，要不然有失技术风格！<br>
1.本次在联系方式处添加了[微信公众号](https://cloudflare-imgbed-telegraph.pages.dev/file/1729946797712_公众号.png)<br>
2.以及替换掉了因为API被封锁导致失效的Telegraph图床为重置版的方案，请见[https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph]<br>
3.隐藏了Good Friends的页面，有所考虑重写内容。<br>
![meme](https://cloudflare-imgbed-telegraph.pages.dev/file/1729948880247_Vtb1_meme.jpg)


#### 07-13 19:58:23(UTC+8)


配置了一下午Tags和Categories一直报错，才发现是自己他🐎主题config里面美指定这俩货对应内容的颜色，然后又不注释掉，一直报错，在此感谢~~小可爱LZK~~的扰乱心思让我想起来这回事

![meme](https://cloudflare-imgbed-telegraph.pages.dev/file/851571bbf626cef85ace1.jpg)




#### 07-11 05:05:22(UTC+8)


成功Fork他人项目部署Cloudfare使用[~~Telegraph Image Hosting Service 图床~~](https://github.com/JayMuShui/-Expired-Telegraph-Img)并把所有存储在仓库的图像文件迁移到上面，成功加快访问速度！

![meme](https://cloudflare-imgbed-telegraph.pages.dev/file/ecd7673a15a53c97c5276.png)


#### 06-14 (UTC+8)

::: zh-CN
重新开始用Hexo构建博客
:::

::: en
Started rebuilding the blog by Hexo.
:::

### 2021

#### 07-08 (UTC+8)

::: zh-CN
第一次尝试使用Hexo制作博客，当时的知识储备不够，通过一些如今的目光来看已经看不懂的方式让网站运行起来了.......
:::

::: en
First attempt at creating a blog using Hexo, with limited knowledge at the time, using methods that are now incomprehensible to get the website running.......
:::




