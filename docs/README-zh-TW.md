[简体中文](../README.md) | 繁體中文 | [English](README-en.md) | [日本語](README-ja.md)

# MuYi Pavilion | 沐佚苑閣

> 更新日誌請見[站點介紹頁面](/pages/about/site.md)

> 站內查看 <https://jaymushui.github.io/about/site#站点历史更新日志>


## 前端工具鏈

### 核心框架
* 🎨 靜態博客框架：[Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 博客框架主題：[Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> 對當前框架做出的自定義修改請見[該章節](#針對valaxy-0234-發行版的禁用-rss-自動生成措施)及其後續章節

### 開發工具
* 📦 包管理器：[pnpm](https://github.com/pnpm/pnpm)
* ⚡ 構建工具：[Vite](https://github.com/vitejs/vite)
* 📘 開發語言：[TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 樣式預處理器：[SCSS](https://github.com/sass/sass)
* ✨ 代碼規範：[ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)

### 主要依賴
* 🖖 前端框架：[Vue 3](https://github.com/vuejs/core)
* 🛣️ 路由管理：[Vue Router](https://github.com/vuejs/router)
* 🌍 國際化：[Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown 解析：[Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 數學公式渲染：[KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 顏色處理：[TinyColor](https://github.com/bgrins/TinyColor)
* 📊 訪問統計：[Google Analytics](https://github.com/googleanalytics)

### 支持的部署平台
* 🚀 現使用 [Github Pages](https://github.com/pages)：<https://jaymushui.github.io>
~~*未啟用： Vercel、Netlify等~~

### 開發環境
* 🟢 運行環境：[Node.js](https://github.com/nodejs/node)
* 💻 開發 IDE：[VSCode](https://github.com/microsoft/vscode)
* 🔄 版本控制：[Git](https://github.com/git/git)

### 其他
* 🖼️ Telegraph + Cloudflare Pages：靜態資源 CDN 託管[🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 聯動的項目：
1. <https://mushui.pages.dev/>(社交自介)[非開源]
2. 🤫

## markdown文章 Frontmatter 字段提示說明（源碼出處標註）

Valaxy 及本主題支持以下 frontmatter 字段，所有字段均有源碼出處或官方約定，便於溯源和維護：

### 1. 基礎信息字段
- `title`：文章標題（Valaxy 約定，所有組件支持）
- `icon`：標題前的圖標（YunPostCard.vue:27, Valaxy 約定）
- `description`：文章描述（YunPostMeta.vue:22）
- `author`：作者（YunPostMeta.vue:23）
- `date`：發布時間（YunPostMeta.vue:20, Valaxy 約定）
- `updated`：更新時間（YunPostMeta.vue:21, Valaxy 約定）
- `path`：文章路徑（Valaxy 約定）❓
- `abbrlink`：永久鏈接（Valaxy 約定）❓

### 2. 結構與樣式字段
- `toc`：是否顯示目錄（Valaxy 約定）
- `aside`：是否顯示右側側邊欄（Valaxy 約定）
- `markdownClass`：自定義 Markdown 樣式（Valaxy 約定）❓
- `pageTitleClass`：頁面標題樣式（Valaxy 約定）❓
- `postTitleClass`：文章列表中自定義標題樣式（YunPostCard.vue:40）

### 3. 分類與標籤
- `categories`：分類（YunPostCard.vue:115, Valaxy 約定）
- `tags`：標籤（YunPostCard.vue:117, Valaxy 約定）

### 4. 文章內容與摘要（❗個人不太愛這個樣式）
- `excerpt`：自定義摘要（YunPostCard.vue:97, Valaxy 約定）
- `excerpt_type`：摘要類型（YunPostCard.vue:96, Valaxy 約定）
- `cover`：封面圖片（YunPostCard.vue:73, Valaxy 約定）

### 5. 導航與排序
- `nav`：是否顯示前後文章導航（Valaxy 約定）
- `top`：置頂優先級（YunPostMeta.vue:30, Valaxy 約定）
- `end`：是否完結（Valaxy 約定）

### 6. 狀態與權限
- `draft`：是否為草稿（Valaxy 約定）
- `hide`：是否隱藏（Valaxy 約定）
- `comment`：是否顯示評論（Valaxy 約定）
- `time_warning`：更新時間警告（Valaxy 約定）❗ [已全局配置禁用]

### 7. 統計與閱讀
- `wordCount`：字數統計（YunPostMeta.vue:18, 自動生成）
- `readingTime`：閱讀時長（YunPostMeta.vue:19, 自動生成）

### 8. 文章類型與外鏈 ❓
- `type`：卡片類型（YunPostCard.vue:26, Valaxy 約定）
- `url`：覆蓋文章 URL，直接跳轉（YunPostCard.vue:103, Valaxy 約定）

### 9. 圖片與多媒體 （❗未使用）
- `image`：Schema.org 圖片對象（Valaxy 約定）
- `albums`：相冊數組（Valaxy 約定）
- `photos`：照片數組（Valaxy 約定）
- `medium_zoom`：是否使用 medium-zoom 圖片縮放（Valaxy 約定）

### 10. 代碼與數學
- `katex`：是否使用 KaTeX 數學公式（Valaxy 約定）
- `codepen`：是否使用 CodePen（Valaxy 約定）
- `codeHeightLimit`：代碼塊高度限制（Valaxy 約定）

### 11. 加密與安全（❗未使用）
- `encrypt`：是否啟用加密（Valaxy 約定）
- `password`：加密密碼（Valaxy 約定）
- `password_hint`：密碼提示（Valaxy 約定）
- `gallery_password`：相冊密碼（Valaxy 約定）
- `encryptedContent`：加密後的內容（Valaxy 約定）
- `partiallyEncryptedContents`：部分加密的內容（Valaxy 約定）
- `encryptedPhotos`：加密後的相冊（Valaxy 約定）

### 12. 其他特殊字段（❗未使用）
- `from`：客戶端重定向的源路徑（Valaxy 約定）

---

### 字段源碼出處說明
- `YunPostMeta.vue`、`YunPostCard.vue` 等為項目自定義組件源碼文件。
- `Valaxy 約定` 表示該字段為 Valaxy 官方主題、插件或文檔中明確支持的 frontmatter 字段。
- `自動生成` 表示該字段由 Valaxy 或相關插件自動生成，無需手動填寫。

---

### 使用示例（不使用封面與摘要的版本）

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

## 例 {lang=zh-CN}
## example {lang=zh-en}

::: zh-CN
文章內容...
:::

::: en
The content of the article...
:::

<!-- more -->

::: zh-CN
文章內容...
:::

::: en
The content of the article...
:::
```

## 配置文件可配置項說明

### site.config.ts 站點配置
* 🏠 基礎配置
  - `url`: 站點完整URL，用於生成文章永久鏈接
  - `lang`: 站點默認語言
  - `title`: 站點標題
  - `subtitle`: 站點副標題
  - `description`: 站點描述
  - `timezone`: 站點時區
  - `languages`: 可選語言列表
  - `favicon`: 站點圖標
  - `lastUpdated`: 是否顯示最後更新時間

* 👤 作者信息
  - `author.name`: 作者名稱
  - `author.avatar`: 作者頭像
  - `author.status`: 狀態信息（emoji和消息）
  - `author.intro`: 個人簡介
  - `author.email`: 郵箱
  - `author.link`: 個人主頁鏈接

* 🔗 社交鏈接
  - `social`: 社交平台鏈接數組，支持自定義圖標和顏色

* 🔍 搜索配置
  - `search.enable`: 是否啟用搜索
  - `search.type`: 搜索類型（fuse/algolia/engine）
  - `fuse`: fuse搜索配置

* 💬 評論系統
  - `comment.enable`: 是否啟用評論

* 💰 打賞配置
  - `sponsor.enable`: 是否啟用打賞
  - `sponsor.description`: 打賞說明（支持多語言）
  - `sponsor.methods`: 打賞方式配置

* 📊 統計配置
  - `statistics.enable`: 是否啟用統計
  - `statistics.readTime`: 閱讀時間配置

### theme.config.ts 主題配置
* 🎨 主題樣式
  - `type`: 主題類型（'strato'或'nimbo'）
  - `colors.primary`: 主題色
  - `valaxyDarkOptions`: 暗色模式配置

* 🎯 首頁配置
  - `banner`: 首頁標語配置
  - `bg_image`: 背景圖片配置

* 💭 功能模塊
  - `say`: 說點什麼配置
  - `notice`: 公告配置
  - `fireworks`: 點擊煙花效果配置

* 📱 導航配置
  - `nav`: 導航欄配置
  - `pages`: 頁面配置
  - `sidebar`: 側邊欄配置
  - `menu`: 菜單欄配置

* 👣 頁腳配置
  - `footer.since`: 建站時間
  - `footer.cloud`: 頁腳雲朵效果
  - `footer.icon`: 頁腳圖標配置
  - `footer.powered`: 是否顯示Powered by
  - `footer.beian`: 備案信息配置

* 📝 文章配置
  - `types`: 自定義文章卡片類型
  - `outlineTitle`: 文章目錄標題

## 開發命令

### 🚀 基礎命令
```bash
# 安裝依賴
pnpm i

# 開發預覽
pnpm dev

# 構建（SSG版本）
pnpm build

# 構建（SPA版本）
pnpm build:spa

# 構建（SSG版本，與pnpm build相同）
pnpm build:ssg

# 生成RSS
pnpm rss

# 預覽構建結果
pnpm serve

# 清理構建文件（自定義命令，由 scripts/clean.js 實現）
# 刪除以下文件：
# - public/feed.xml
# - public/atom.xml
# - public/feed.json
# - public/valaxy-fuse-list.json
# - dist/
pnpm clean
```

### 🔧 開發工具命令
```bash
# 代碼格式檢查
pnpm lint

# 代碼格式化
pnpm format

# 類型檢查
pnpm type-check
```

### 📦 依賴管理命令
```bash
# 添加依賴
pnpm add <package-name>

# 添加開發依賴
pnpm add -D <package-name>

# 更新依賴
pnpm update

# 刪除依賴
pnpm remove <package-name>
```

### 🧹 清理命令
```bash
# 清理構建緩存
pnpm clean

# 清理依賴
pnpm clean:all
```

### 📝 其他命令
```bash
# 生成類型聲明文件
pnpm gen-types

# 運行自定義腳本
pnpm run <script-name>
```

### 📌 命令說明
- `pnpm i`: 安裝項目所有依賴，包括開發依賴
- `pnpm dev`: 啟動開發服務器，支持熱更新
- `pnpm build`: 構建生產環境代碼（SSG版本），輸出到 `dist` 目錄
- `pnpm build:spa`: 構建單頁應用版本
- `pnpm build:ssg`: 構建靜態站點版本
- `pnpm rss`: 生成 RSS 訂閱文件
- `pnpm serve`: 預覽構建後的生產環境代碼

### ⚠️ 注意事項
1. 首次克隆項目後，需要先運行 `pnpm i` 安裝依賴
2. 開發時使用 `pnpm dev` 啟動開發服務器
3. 構建前建議確保所有代碼已保存
4. 如果遇到依賴問題，可以嘗試刪除 `node_modules` 目錄後重新運行 `pnpm i`

## 目錄結構

### 📁 核心目錄
* `pages/`: 所有頁面內容
  - `posts/`: 博客文章
  - `about/`: 關於頁面
* `components/`: 自定義 Vue 組件
* `layouts/`: 自定義佈局組件
* `styles/`: 自定義樣式文件
* `locales/`: 國際化語言文件
* `utils/`: 工具函數
* `types/`: TypeScript 類型聲明
* `setup/`: 應用初始化設置
* `stores/`: Pinia 狀態管理
* `plugins/`: 自定義插件
* `public/`: 靜態資源文件
* `dist/`: 構建後生成的文件

### 📄 配置文件
* `site.config.ts`: 站點配置
* `theme.config.ts`: 主題配置
* `valaxy.config.ts`: Valaxy 框架配置
* `tsconfig.json`: TypeScript 配置
* `package.json`: 項目依賴配置
* `pnpm-lock.yaml`: 依賴版本鎖定文件

### 🔧 開發工具配置
* `.vscode/`: VSCode 編輯器配置
* `.github/`: GitHub Actions 工作流配置
* `.editorconfig`: 編輯器通用配置
* `.npmrc`: NPM 配置
* `.gitignore`: Git 忽略文件配置

### 🚀 部署配置
* `.github/`: Github 部署配置
* `vercel.json`: Vercel 部署配置
* `netlify.toml`: Netlify 部署配置
* `nginx.conf`: Nginx 服務器配置
* `Dockerfile`: Docker 容器配置
* `.dockerignore`: Docker 忽略文件

### 📦 構建輸出
* `.valaxy/`: Valaxy 構建緩存
* `node_modules/`: 依賴包目錄

### 📝 其他
* `scripts/`: 自定義腳本
* `config/`: 其他配置文件

## 針對valaxy 0.23.4 發行版的禁用 RSS 自動生成措施

如果不需要 RSS 功能，或者希望避免因多語言 frontmatter 導致的 RSS 生成錯誤，可以通過以下方式禁用 RSS 自動生成：

1. 打開文件 `node_modules/.pnpm/valaxy@0.23.4_.../node_modules/valaxy/dist/chunk-OXTCPOR5.js`。
2. 搜索 `rssModule` 或 `build:after`，找到如下代碼：
   ```js
   setup(node) {
     node.hook("build:after", async () => {
       //console.log();
       //await build(node.options);
       return;
     });
   }
   ```
3. 將 `await build(node.options);` 註釋掉或直接 `return;`，這樣在構建時就不會自動生成 RSS 文件。

**注意：** 每次升級 valaxy 依賴後，該文件會被覆蓋，需要重新操作。

## 自定義的 .ts 函數 （utils/types 文件夾）

### i18n.ts [📁 utils] [🔗](./utils/i18n.ts)
- **功能**：解析多語言內容，支持對象和字符串形式。
- **使用方法**：
  ```typescript
  parseI18nContent({ 'zh-CN': '中文', 'en': 'English' }) // 返回當前語言對應的內容
  parseI18nContent('普通文本') // 直接返回字符串
  ```

### formatTimestamp.ts [📁 utils] [🔗](./utils/formatTimestamp.ts)
- **功能**：將時間戳或日期對象格式化為 'YYYY-MM-DD HH:mm:ss' 格式。
- **使用方法**：
  ```typescript
  formatTimestamp(new Date()) // 返回當前時間的格式化字符串
  ```

### shims.d.ts [📁 types] [🔗](./types/shims.d.ts)
- **功能**：TypeScript 類型聲明文件，用於擴展模塊類型定義。
- **主要作用**：
  1. 聲明 `.yml` 和 `.yaml` 文件的模塊類型
  2. 為 Vue I18n 提供類型支持
  3. 確保 TypeScript 能正確識別和類型檢查 YAML 格式的語言文件
- **使用場景**：
  - 項目使用 Vue I18n 進行國際化時
  - 使用 YAML 文件存儲配置或語言文件時
  - 需要 TypeScript 支持這些文件類型時
- **文件內容**：
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

## 自定義佈局組件 (layouts 文件夾)

### 404.vue [📁 layouts] [🔗](./layouts/404.vue)
- **功能**：顯示 404 錯誤頁面，並提供趣味的多語言食譜展示功能。
- **主要特點**：
  1. 多語言支持：提供中文簡體、繁體、英文和日文四種語言的食譜內容
  2. 動態切換：支持不同語言食譜內容的動態切換顯示
  3. 樣式優化：
     - 404 數字添加陰影效果
     - 自定義按鈕樣式，支持懸停效果
     - 優化食譜內容佈局和間距

### categories.vue [📁 layouts] [🔗](./layouts/categories.vue)
- **功能**：分類頁面佈局，支持多語言分類展示和管理。
- **主要特點**：
  1. 多語言支持：
     - 集成 `parseI18nContent` 工具函數
     - 優化分類名稱的顯示邏輯
  2. 分類篩選：
     - 支持對象形式的分類數據
     - 優化 URL 參數處理
  3. 分類合併：
     - 實現多語言分類的合併顯示
     - 優化分類計數統計
  4. 頁面優化：
     - 添加過渡動畫效果
     - 改進分類列表顯示方式

### tags.vue [📁 layouts] [🔗](./layouts/tags.vue)
- **功能**：標籤頁面佈局，支持多語言標籤雲展示。
- **主要特點**：
  1. 多語言支持：
     - 集成 `parseI18nContent` 工具函數
     - 優化標籤名稱的顯示邏輯
  2. 標籤樣式系統：
     - 基於使用頻率動態計算字體大小
     - 實現標籤顏色的漸變效果
     - 使用 TinyColor 庫處理顏色混合
  3. 標籤篩選：
     - 支持對象形式的標籤數據
     - 改進 URL 參數處理
  4. 標籤合併：
     - 實現多語言標籤的合併顯示
     - 優化標籤計數統計
  5. 頁面優化：
     - 添加過渡動畫效果
     - 優化標籤雲佈局
     - 支持響應式設計

## 自定義的 SCSS 樣式(styles 文件夾)

### index.scss [📁 styles] [🔗](./styles/index.scss)
- **功能**：定義側邊欄背景圖片和暗黑模式樣式。
- **使用方法**：
  ```scss
  // 側邊欄背景圖片樣式
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

  // 暗黑模式樣式
  html.dark {
    .yun-fullscreen-menu {
      &::before {
        background-image: url('https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_Onocle_CardGame_Mu_20250527.webp');
        opacity: 0.8;
      }
    }
  }
  ```

## setup 文件夾

### 作用
`setup` 文件夾用於存放應用的初始化設置文件，主要用於配置 Google Analytics 跟踪和其他應用級別的設置。

### 包含文件
- **main.ts** [📁 setup] [🔗](./setup/main.ts)：主應用設置文件，用於初始化應用並安裝 Google Analytics 跟踪。
- **gtag.ts** [📁 setup] [🔗](./setup/gtag.ts)：Google Analytics 跟踪設置，用於在客戶端安裝 Google Analytics 並跟踪路由。

## 自定義功能組件（components 文件夾）

### 1. 多語言支持組件
這些組件主要用於支持 Markdown 文章的 frontmatter 多語言化，通過 `parseI18nContent` 工具函數實現：

- **YunPostCard.vue** [📁 components] [🔗](./components/YunPostCard.vue)：文章卡片組件，支持多語言標題和內容顯示
- **YunPostCategories.vue** [📁 components] [🔗](./components/YunPostCategories.vue)：文章分類組件，支持多語言分類名稱
- **YunPostTags.vue** [📁 components] [🔗](./components/YunPostTags.vue)：文章標籤組件，支持多語言標籤名稱
- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：文章元信息組件，支持多語言描述和作者信息
- **YunNavMenuTitle.vue** [📁 components] [🔗](./components/YunNavMenuTitle.vue)：導航菜單標題組件，支持多語言顯示
- **YunCategory.vue** [📁 components] [🔗](./components/YunCategory.vue)：分類組件，支持多語言分類名稱
- **YunCategoryChildItem.vue** [📁 components] [🔗](./components/YunCategoryChildItem.vue)：子分類組件，支持多語言顯示
- **YunPostNav.vue** [📁 components] [🔗](./components/YunPostNav.vue)：文章導航組件，支持多語言
- **YunPostsInfo.vue** [📁 components] [🔗](./components/YunPostsInfo.vue)：文章信息組件，支持多語言顯示
- **YunPostCollapseItem.vue** [📁 components] [🔗](./components/YunPostCollapseItem.vue)：文章折疊項組件，支持多語言內容

### 2. 統計與監控組件
這些組件用於網站訪問統計和運行時間顯示：

- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：
  - 集成不蒜子訪問統計（頁面訪問量）

- **YunFooter.vue** [📁 components] [🔗](./components/YunFooter.vue)：
  - 顯示網站運行時間（從部署開始計時）
  - 集成不蒜子網站總訪問統計（全站訪問量）

### 3. 特色功能組件
這些組件提供網站的特色功能：

- **YunBanner.vue** [📁 components] [🔗](./components/YunBanner.vue)：橫幅組件，自定義動畫展示時間，優化用戶體驗
- **YunSay.vue** [📁 components] [🔗](./components/YunSay.vue)：說說組件，集成谷歌翻譯 API 自動翻譯一言內容，支持多語言顯示
- **YunNotice.vue** [📁 components] [🔗](./components/YunNotice.vue)：通知組件，支持在配置文件中自定義多語言通知內容
- **YunSponsor.vue** [📁 components] [🔗](./components/YunSponsor.vue)：贊助組件，支持在配置文件中自定義多語言贊助描述

### 4. 佈局與導航組件
這些組件用於網站的整體佈局和導航，都集成了多語言支持：

- **YunLayoutPostTag.vue** [📁 components] [🔗](./components/YunLayoutPostTag.vue)：標籤雲佈局組件，支持動態樣式計算
- **YunNavMenuItem.vue** [📁 components] [🔗](./components/YunNavMenuItem.vue)：導航菜單項組件，支持多語言顯示
- **YunPageHeader.vue** [📁 components] [🔗](./components/YunPageHeader.vue)：頁面標題組件，支持多語言標題
- **YunSidebarLinks.vue** [📁 components] [🔗](./components/YunSidebarLinks.vue)：側邊欄鏈接組件，支持多語言鏈接文本
- **YunPrologueSquare.vue** [📁 components] [🔗](./components/YunPrologueSquare.vue)：序言方塊組件，支持多語言內容

### 5. 配置相關說明
- 支持在 `site.config.ts` [📁 root] [🔗](./site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](./theme.config.ts) 中自定義多語言配置：
  - Notice 模塊：支持多語言通知內容
  - Sponsor 模塊：支持多語言贊助描述
- 使用 `as any` 類型斷言方案確保函數正確讀取多語言配置

#### 多語言配置注意事項
> 針對目前正在使用的valaxy 0.23.4 發行版
由於 valaxy 官方類型聲明限制，`site.config.ts` [📁 root] [🔗](./site.config.ts) 和 `theme.config.ts` [📁 root] [🔗](./theme.config.ts) 中如需支持多語言對象（如 sponsor.description、notice.content），需要使用 `as any` 類型斷言，否則會報類型錯誤。

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

#### 說明
- 這是因為 valaxy 官方類型聲明中 description/content 只支持 string 類型，無法直接傳遞對象。
- 使用 `as any` 可以繞過類型檢查，實際運行時不會有問題。
- 如果官方類型聲明升級為支持對象類型，可以去掉 `as any`。
- 所有組件都集成了 `parseI18nContent` 工具函數 [📁 utils] [🔗](./utils/i18n.ts)，用於處理多語言內容
- 支持在 frontmatter 中使用對象形式定義多語言內容：
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```

## 📝 ToDo List

### 🚧 待優化功能
1. **多語言實時切換優化**
   - 標籤雲組件（YunLayoutPostTag.vue）的多語言實時響應
   - 分類頁面文章列表的多語言實時切換
   - 標籤頁面文章列表的多語言實時切換
   - 優化 `i18n.ts` 工具函數對複雜組件的支持

2. **多語言框架擴展**
   - 未理解 valaxy 框架自身如何支持兩種以上更多語言的辦法
   - 完善 `locales` 目錄下的語言支持（已預留相關對應鍵文件）：
     -  繁體中文（zh-TW）支持
     -  日語（ja）支持
   - 設計多語言切換的用戶界面

3. 本地搜尋策略問題
- fuse.js方案的本地搜尋策略不太適合當前的多語言化frontmatter文章
- 在build之後的網站中會出現搜尋不到文章詳細內容的情況等等


