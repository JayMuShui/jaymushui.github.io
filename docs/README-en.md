[简体中文](../README.md) | [繁體中文](README-zh-TW.md) | English | [日本語](README-ja.md)

# MuYi Pavilion | 沐佚苑阁

> For update logs, please see [Site Introduction Page](/pages/about/site.md)

> View in site <https://jaymushui.github.io/about/site#site-history-changelog>

## Frontend Toolchain

### Core Frameworks
* 🎨 Static Blog Framework: [Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 Blog Theme: [Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> For custom modifications to the current framework, please see [this section](#rss-auto-generation-disabling-measures-for-valaxy-0234-release) and subsequent chapters

### Development Tools
* 📦 Package Manager: [pnpm](https://github.com/pnpm/pnpm)
* ⚡ Build Tool: [Vite](https://github.com/vitejs/vite)
* 📘 Development Language: [TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 Style Preprocessor: [SCSS](https://github.com/sass/sass)
* ✨ Code Standards: [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)

### Major Dependencies
* 🖖 Frontend Framework: [Vue 3](https://github.com/vuejs/core)
* 🛣️ Route Management: [Vue Router](https://github.com/vuejs/router)
* 🌍 Internationalization: [Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown Parser: [Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 Math Formula Rendering: [KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 Color Processing: [TinyColor](https://github.com/bgrins/TinyColor)
* 📊 Analytics: [Google Analytics](https://github.com/googleanalytics)

### Supported Deployment Platforms
* 🚀 Currently using [Github Pages](https://github.com/pages): <https://jaymushui.github.io>
~~*Not enabled: Vercel, Netlify, etc.~~

### Development Environment
* 🟢 Runtime: [Node.js](https://github.com/nodejs/node)
* 💻 Development IDE: [VSCode](https://github.com/microsoft/vscode)
* 🔄 Version Control: [Git](https://github.com/git/git)

### Others
* 🖼️ Telegraph + Cloudflare Pages: Static Resource CDN Hosting [🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 Related Projects:
1. <https://mushui.pages.dev/>(Social Profile)[Not Open Source]
2. 🤫

## Markdown Article Frontmatter Field Guide (Source Code Reference)

Valaxy and this theme support the following frontmatter fields, all with source code references or official conventions for easy tracing and maintenance:

### 1. Basic Information Fields
- `title`: Article title (Valaxy convention, supported by all components)
- `icon`: Icon before title (YunPostCard.vue:27, Valaxy convention)
- `description`: Article description (YunPostMeta.vue:22)
- `author`: Author (YunPostMeta.vue:23)
- `date`: Publication time (YunPostMeta.vue:20, Valaxy convention)
- `updated`: Update time (YunPostMeta.vue:21, Valaxy convention)
- `path`: Article path (Valaxy convention) ❓
- `abbrlink`: Permanent link (Valaxy convention) ❓

### 2. Structure and Style Fields
- `toc`: Whether to show table of contents (Valaxy convention)
- `aside`: Whether to show right sidebar (Valaxy convention)
- `markdownClass`: Custom Markdown style (Valaxy convention) ❓
- `pageTitleClass`: Page title style (Valaxy convention) ❓
- `postTitleClass`: Custom title style in article list (YunPostCard.vue:40)

### 3. Categories and Tags
- `categories`: Categories (YunPostCard.vue:115, Valaxy convention)
- `tags`: Tags (YunPostCard.vue:117, Valaxy convention)

### 4. Article Content and Excerpt (❗Not preferred style)
- `excerpt`: Custom excerpt (YunPostCard.vue:97, Valaxy convention)
- `excerpt_type`: Excerpt type (YunPostCard.vue:96, Valaxy convention)
- `cover`: Cover image (YunPostCard.vue:73, Valaxy convention)

### 5. Navigation and Sorting
- `nav`: Whether to show article navigation (Valaxy convention)
- `top`: Top priority (YunPostMeta.vue:30, Valaxy convention)
- `end`: Whether finished (Valaxy convention)

### 6. Status and Permissions
- `draft`: Whether draft (Valaxy convention)
- `hide`: Whether hidden (Valaxy convention)
- `comment`: Whether to show comments (Valaxy convention)
- `time_warning`: Update time warning (Valaxy convention) ❗ [Globally disabled]

### 7. Statistics and Reading
- `wordCount`: Word count (YunPostMeta.vue:18, auto-generated)
- `readingTime`: Reading time (YunPostMeta.vue:19, auto-generated)

### 8. Article Type and External Links ❓
- `type`: Card type (YunPostCard.vue:26, Valaxy convention)
- `url`: Override article URL, direct jump (YunPostCard.vue:103, Valaxy convention)

### 9. Images and Multimedia (❗Not used)
- `image`: Schema.org image object (Valaxy convention)
- `albums`: Album array (Valaxy convention)
- `photos`: Photo array (Valaxy convention)
- `medium_zoom`: Whether to use medium-zoom image scaling (Valaxy convention)

### 10. Code and Math
- `katex`: Whether to use KaTeX math formulas (Valaxy convention)
- `codepen`: Whether to use CodePen (Valaxy convention)
- `codeHeightLimit`: Code block height limit (Valaxy convention)

### 11. Encryption and Security (❗Not used)
- `encrypt`: Whether to enable encryption (Valaxy convention)
- `password`: Encryption password (Valaxy convention)
- `password_hint`: Password hint (Valaxy convention)
- `gallery_password`: Album password (Valaxy convention)
- `encryptedContent`: Encrypted content (Valaxy convention)
- `partiallyEncryptedContents`: Partially encrypted content (Valaxy convention)
- `encryptedPhotos`: Encrypted album (Valaxy convention)

### 12. Other Special Fields (❗Not used)
- `from`: Source path for client redirect (Valaxy convention)

---

### Field Source Code Reference
- `YunPostMeta.vue`, `YunPostCard.vue`, etc. are project custom component source files.
- `Valaxy convention` indicates that the field is explicitly supported in Valaxy official themes, plugins, or documentation.
- `Auto-generated` indicates that the field is automatically generated by Valaxy or related plugins, no need to manually fill in.

---

### Usage Example (Version without cover and excerpt)

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

## Configuration File Options Guide

### site.config.ts Site Configuration
* 🏠 Basic Configuration
  - `url`: Complete site URL, used for generating article permanent links
  - `lang`: Site default language
  - `title`: Site title
  - `subtitle`: Site subtitle
  - `description`: Site description
  - `timezone`: Site timezone
  - `languages`: Optional language list
  - `favicon`: Site icon
  - `lastUpdated`: Whether to show last update time

* 👤 Author Information
  - `author.name`: Author name
  - `author.avatar`: Author avatar
  - `author.status`: Status information (emoji and message)
  - `author.intro`: Personal introduction
  - `author.email`: Email
  - `author.link`: Personal homepage link

* 🔗 Social Links
  - `social`: Social platform link array, supports custom icons and colors

* 🔍 Search Configuration
  - `search.enable`: Whether to enable search
  - `search.type`: Search type (fuse/algolia/engine)
  - `fuse`: fuse search configuration

* 💬 Comment System
  - `comment.enable`: Whether to enable comments

* 💰 Sponsor Configuration
  - `sponsor.enable`: Whether to enable sponsorship
  - `sponsor.description`: Sponsor description (supports multiple languages)
  - `sponsor.methods`: Sponsor method configuration

* 📊 Statistics Configuration
  - `statistics.enable`: Whether to enable statistics
  - `statistics.readTime`: Reading time configuration

### theme.config.ts Theme Configuration
* 🎨 Theme Style
  - `type`: Theme type ('strato' or 'nimbo')
  - `colors.primary`: Theme color
  - `valaxyDarkOptions`: Dark mode configuration

* 🎯 Homepage Configuration
  - `banner`: Homepage slogan configuration
  - `bg_image`: Background image configuration

* 💭 Feature Modules
  - `say`: Say something configuration
  - `notice`: Notice configuration
  - `fireworks`: Click fireworks effect configuration

* 📱 Navigation Configuration
  - `nav`: Navigation bar configuration
  - `pages`: Page configuration
  - `sidebar`: Sidebar configuration
  - `menu`: Menu bar configuration

* 👣 Footer Configuration
  - `footer.since`: Site creation time
  - `footer.cloud`: Footer cloud effect
  - `footer.icon`: Footer icon configuration
  - `footer.powered`: Whether to show Powered by
  - `footer.beian`: ICP filing information configuration

* 📝 Article Configuration
  - `types`: Custom article card types
  - `outlineTitle`: Article table of contents title

## Development Commands

### 🚀 Basic Commands
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

### 🔧 Development Tool Commands
```bash
# Code format check
pnpm lint

# Code formatting
pnpm format

# Type check
pnpm type-check
```

### 📦 Dependency Management Commands
```bash
# Add dependency
pnpm add <package-name>

# Add development dependency
pnpm add -D <package-name>

# Update dependencies
pnpm update

# Remove dependency
pnpm remove <package-name>
```

### 🧹 Cleanup Commands
```bash
# Clean build cache
pnpm clean

# Clean dependencies
pnpm clean:all
```

### 📝 Other Commands
```bash
# Generate type declaration files
pnpm gen-types

# Run custom scripts
pnpm run <script-name>
```

### 📌 Command Description
- `pnpm i`: Install all project dependencies, including development dependencies
- `pnpm dev`: Start development server with hot reload
- `pnpm build`: Build production code (SSG version), output to `dist` directory
- `pnpm build:spa`: Build single page application version
- `pnpm build:ssg`: Build static site version
- `pnpm rss`: Generate RSS subscription file
- `pnpm serve`: Preview built production code

### ⚠️ Notes
1. After first cloning the project, run `pnpm i` to install dependencies
2. Use `pnpm dev` to start development server
3. Make sure all code is saved before building
4. If you encounter dependency issues, try deleting the `node_modules` directory and run `pnpm i` again

## Directory Structure

### 📁 Core Directories
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

### 📄 Configuration Files
* `site.config.ts`: Site configuration
* `theme.config.ts`: Theme configuration
* `valaxy.config.ts`: Valaxy framework configuration
* `tsconfig.json`: TypeScript configuration
* `package.json`: Project dependency configuration
* `pnpm-lock.yaml`: Dependency version lock file

### 🔧 Development Tool Configuration
* `.vscode/`: VSCode editor configuration
* `.github/`: GitHub Actions workflow configuration
* `.editorconfig`: Editor common configuration
* `.npmrc`: NPM configuration
* `.gitignore`: Git ignore file configuration

### 🚀 Deployment Configuration
* `.github/`: Github deployment configuration
* `vercel.json`: Vercel deployment configuration
* `netlify.toml`: Netlify deployment configuration
* `nginx.conf`: Nginx server configuration
* `Dockerfile`: Docker container configuration
* `.dockerignore`: Docker ignore file

### 📦 Build Output
* `.valaxy/`: Valaxy build cache
* `node_modules/`: Dependency package directory

### 📝 Others
* `scripts/`: Custom scripts
* `config/`: Other configuration files

## RSS Auto-generation Disabling Measures for Valaxy 0.23.4 Release

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

## Custom .ts Functions (utils/types folder)

### i18n.ts [📁 utils] [🔗](./utils/i18n.ts)
- **Function**: Parse multilingual content, supporting object and string forms.
- **Usage**:
  ```typescript
  parseI18nContent({ 'zh-CN': 'Chinese', 'en': 'English' }) // Returns content corresponding to current language
  parseI18nContent('Plain text') // Returns string directly
  ```

### formatTimestamp.ts [📁 utils] [🔗](./utils/formatTimestamp.ts)
- **Function**: Format timestamp or date object to 'YYYY-MM-DD HH:mm:ss' format.
- **Usage**:
  ```typescript
  formatTimestamp(new Date()) // Returns formatted string of current time
  ```

### shims.d.ts [📁 types] [🔗](./types/shims.d.ts)
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

## Custom Layout Components (layouts folder)

### 404.vue [📁 layouts] [🔗](./layouts/404.vue)
- **Function**: Display 404 error page with fun multilingual recipe display feature.
- **Main Features**:
  1. Multilingual Support: Provides recipe content in Simplified Chinese, Traditional Chinese, English, and Japanese
  2. Dynamic Switching: Supports dynamic switching display of recipe content in different languages
  3. Style Optimization:
     - Add shadow effect to 404 numbers
     - Custom button style with hover effect
     - Optimize recipe content layout and spacing

### categories.vue [📁 layouts] [🔗](./layouts/categories.vue)
- **Function**: Category page layout, supporting multilingual category display and management.
- **Main Features**:
  1. Multilingual Support:
     - Integrates `parseI18nContent` utility function
     - Optimizes category name display logic
  2. Category Filtering:
     - Supports object-form category data
     - Optimizes URL parameter handling
  3. Category Merging:
     - Implements multilingual category merge display
     - Optimizes category count statistics
  4. Page Optimization:
     - Adds transition animation effects
     - Improves category list display method

### tags.vue [📁 layouts] [🔗](./layouts/tags.vue)
- **Function**: Tag page layout, supporting multilingual tag cloud display.
- **Main Features**:
  1. Multilingual Support:
     - Integrates `parseI18nContent` utility function
     - Optimizes tag name display logic
  2. Tag Style System:
     - Dynamically calculates font size based on usage frequency
     - Implements tag color gradient effect
     - Uses TinyColor library for color mixing
  3. Tag Filtering:
     - Supports object-form tag data
     - Improves URL parameter handling
  4. Tag Merging:
     - Implements multilingual tag merge display
     - Optimizes tag count statistics
  5. Page Optimization:
     - Adds transition animation effects
     - Optimizes tag cloud layout
     - Supports responsive design

## Custom SCSS Styles (styles folder)

### index.scss [📁 styles] [🔗](./styles/index.scss)
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

## Setup Folder

### Purpose
The `setup` folder is used to store application initialization settings files, mainly for configuring Google Analytics tracking and other application-level settings.

### Included Files
- **main.ts** [📁 setup] [🔗](./setup/main.ts): Main application settings file, used for initializing application and installing Google Analytics tracking.
- **gtag.ts** [📁 setup] [🔗](./setup/gtag.ts): Google Analytics tracking settings, used for installing Google Analytics on client side and tracking routes.

## Custom Feature Components (components folder)

### 1. Multilingual Support Components
These components are mainly used to support multilingual frontmatter for Markdown articles, implemented through the `parseI18nContent` utility function:

- **YunPostCard.vue** [📁 components] [🔗](./components/YunPostCard.vue): Article card component, supports multilingual title and content display
- **YunPostCategories.vue** [📁 components] [🔗](./components/YunPostCategories.vue): Article category component, supports multilingual category names
- **YunPostTags.vue** [📁 components] [🔗](./components/YunPostTags.vue): Article tag component, supports multilingual tag names
- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue): Article metadata component, supports multilingual description and author information
- **YunNavMenuTitle.vue** [📁 components] [🔗](./components/YunNavMenuTitle.vue): Navigation menu title component, supports multilingual display
- **YunCategory.vue** [📁 components] [🔗](./components/YunCategory.vue): Category component, supports multilingual category names
- **YunCategoryChildItem.vue** [📁 components] [🔗](./components/YunCategoryChildItem.vue): Subcategory component, supports multilingual display
- **YunPostNav.vue** [📁 components] [🔗](./components/YunPostNav.vue): Article navigation component, supports multilingual
- **YunPostsInfo.vue** [📁 components] [🔗](./components/YunPostsInfo.vue): Article information component, supports multilingual display
- **YunPostCollapseItem.vue** [📁 components] [🔗](./components/YunPostCollapseItem.vue): Article collapse item component, supports multilingual content

### 2. Statistics and Monitoring Components
These components are used for website access statistics and runtime display:

- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue):
  - Integrates Busuanzi page view statistics

- **YunFooter.vue** [📁 components] [🔗](./components/YunFooter.vue):
  - Displays website runtime (counted from deployment)
  - Integrates Busuanzi total site access statistics

### 3. Feature Components
These components provide website features:

- **YunBanner.vue** [📁 components] [🔗](./components/YunBanner.vue): Banner component, customizes animation display time, optimizes user experience
- **YunSay.vue** [📁 components] [🔗](./components/YunSay.vue): Say something component, integrates Google Translate API for automatic translation of hitokoto content, supports multilingual display
- **YunNotice.vue** [📁 components] [🔗](./components/YunNotice.vue): Notice component, supports custom multilingual notice content in configuration file
- **YunSponsor.vue** [📁 components] [🔗](./components/YunSponsor.vue): Sponsor component, supports custom multilingual sponsor description in configuration file

### 4. Layout and Navigation Components
These components are used for website overall layout and navigation, all integrated with multilingual support:

- **YunLayoutPostTag.vue** [📁 components] [🔗](./components/YunLayoutPostTag.vue): Tag cloud layout component, supports dynamic style calculation
- **YunNavMenuItem.vue** [📁 components] [🔗](./components/YunNavMenuItem.vue): Navigation menu item component, supports multilingual display
- **YunPageHeader.vue** [📁 components] [🔗](./components/YunPageHeader.vue): Page title component, supports multilingual title
- **YunSidebarLinks.vue** [📁 components] [🔗](./components/YunSidebarLinks.vue): Sidebar links component, supports multilingual link text
- **YunPrologueSquare.vue** [📁 components] [🔗](./components/YunPrologueSquare.vue): Prologue square component, supports multilingual content

### 5. Configuration Related Notes
- Supports custom multilingual configuration in `site.config.ts` [📁 root] [🔗](./site.config.ts) and `theme.config.ts` [📁 root] [🔗](./theme.config.ts):
  - Notice module: Supports multilingual notice content
  - Sponsor module: Supports multilingual sponsor description
- Uses `as any` type assertion solution to ensure functions correctly read multilingual configuration

#### Multilingual Configuration Notes
> For current valaxy 0.23.4 release
Due to valaxy official type declaration limitations, `site.config.ts` [📁 root] [🔗](./site.config.ts) and `theme.config.ts` [📁 root] [🔗](./theme.config.ts) need to use `as any` type assertion for multilingual objects (like sponsor.description, notice.content), otherwise type errors will occur.

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

#### Explanation
- This is because valaxy official type declarations only support string type for description/content, cannot directly pass objects.
- Using `as any` can bypass type checking, no problems in actual runtime.
- If official type declarations upgrade to support object types, can remove `as any`.
- All components integrate `parseI18nContent` utility function [📁 utils] [🔗](./utils/i18n.ts) for handling multilingual content
- Supports using object form to define multilingual content in frontmatter:
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```

## 📝 ToDo List

### 🚧 Features to Optimize
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