[简体中文](../README.md) | [繁體中文](README-zh-TW.md) | [English](README-en.md) | 日本語

# MuYi Pavilion | 沐佚苑閣

> 更新履歴は[サイト紹介ページ](/pages/about/site.md)をご覧ください

> サイト内で確認 <https://jaymushui.github.io/about/site#site-history-changelog>

## フロントエンドツールチェーン

### コアフレームワーク
* 🎨 静的ブログフレームワーク：[Valaxy v0.23.4](https://github.com/YunYouJun/valaxy)
* 🎯 ブログテーマ：[Yun v0.23.4](https://github.com/YunYouJun/valaxy)
> 現在のフレームワークに対するカスタマイズについては[このセクション](#valaxy-0234-リリースのrss自動生成無効化対策)以降の章をご覧ください

### 開発ツール
* 📦 パッケージマネージャー：[pnpm](https://github.com/pnpm/pnpm)
* ⚡ ビルドツール：[Vite](https://github.com/vitejs/vite)
* 📘 開発言語：[TypeScript](https://github.com/microsoft/TypeScript)
* 🎨 スタイルプリプロセッサー：[SCSS](https://github.com/sass/sass)
* ✨ コード規約：[ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier)

### 主要依存関係
* 🖖 フロントエンドフレームワーク：[Vue 3](https://github.com/vuejs/core)
* 🛣️ ルーティング管理：[Vue Router](https://github.com/vuejs/router)
* 🌍 国際化：[Vue I18n](https://github.com/intlify/vue-i18n-next)
* 📝 Markdown解析：[Markdown-it](https://github.com/markdown-it/markdown-it)
* 📐 数式レンダリング：[KaTeX](https://github.com/KaTeX/KaTeX)
* 🎨 カラー処理：[TinyColor](https://github.com/bgrins/TinyColor)
* 📊 アクセス解析：[Google Analytics](https://github.com/googleanalytics)

### 対応デプロイプラットフォーム
* 🚀 現在使用中：[Github Pages](https://github.com/pages)：<https://jaymushui.github.io>
~~*未対応：Vercel、Netlifyなど~~

### 開発環境
* 🟢 実行環境：[Node.js](https://github.com/nodejs/node)
* 💻 開発IDE：[VSCode](https://github.com/microsoft/vscode)
* 🔄 バージョン管理：[Git](https://github.com/git/git)

### その他
* 🖼️ Telegraph + Cloudflare Pages：静的リソースCDNホスティング[🔗](https://github.com/JayMuShui/CloudFlare-ImgBed-Telegraph)
* 🔗 関連プロジェクト：
1. <https://mushui.pages.dev/>(ソーシャルプロフィール)[非オープンソース]
2. 🤫

## Markdown記事のFrontmatterフィールドガイド（ソースコード参照）

Valaxyとこのテーマは以下のfrontmatterフィールドをサポートしており、すべてのフィールドにソースコード参照または公式の規約があり、追跡と保守が容易です：

### 1. 基本情報フィールド
- `title`：記事タイトル（Valaxy規約、すべてのコンポーネントでサポート）
- `icon`：タイトル前のアイコン（YunPostCard.vue:27, Valaxy規約）
- `description`：記事の説明（YunPostMeta.vue:22）
- `author`：著者（YunPostMeta.vue:23）
- `date`：公開時間（YunPostMeta.vue:20, Valaxy規約）
- `updated`：更新時間（YunPostMeta.vue:21, Valaxy規約）
- `path`：記事パス（Valaxy規約）❓
- `abbrlink`：永久リンク（Valaxy規約）❓

### 2. 構造とスタイルフィールド
- `toc`：目次を表示するかどうか（Valaxy規約）
- `aside`：右サイドバーを表示するかどうか（Valaxy規約）
- `markdownClass`：カスタムMarkdownスタイル（Valaxy規約）❓
- `pageTitleClass`：ページタイトルスタイル（Valaxy規約）❓
- `postTitleClass`：記事リストでのカスタムタイトルスタイル（YunPostCard.vue:40）

### 3. カテゴリーとタグ
- `categories`：カテゴリー（YunPostCard.vue:115, Valaxy規約）
- `tags`：タグ（YunPostCard.vue:117, Valaxy規約）

### 4. 記事内容と抜粋（❗推奨されないスタイル）
- `excerpt`：カスタム抜粋（YunPostCard.vue:97, Valaxy規約）
- `excerpt_type`：抜粋タイプ（YunPostCard.vue:96, Valaxy規約）
- `cover`：カバー画像（YunPostCard.vue:73, Valaxy規約）

### 5. ナビゲーションとソート
- `nav`：記事ナビゲーションを表示するかどうか（Valaxy規約）
- `top`：トップ優先度（YunPostMeta.vue:30, Valaxy規約）
- `end`：完了したかどうか（Valaxy規約）

### 6. ステータスと権限
- `draft`：下書きかどうか（Valaxy規約）
- `hide`：非表示かどうか（Valaxy規約）
- `comment`：コメントを表示するかどうか（Valaxy規約）
- `time_warning`：更新時間警告（Valaxy規約）❗ [グローバルで無効化]

### 7. 統計と読書
- `wordCount`：文字数（YunPostMeta.vue:18, 自動生成）
- `readingTime`：読書時間（YunPostMeta.vue:19, 自動生成）

### 8. 記事タイプと外部リンク ❓
- `type`：カードタイプ（YunPostCard.vue:26, Valaxy規約）
- `url`：記事URLを上書き、直接ジャンプ（YunPostCard.vue:103, Valaxy規約）

### 9. 画像とマルチメディア（❗未使用）
- `image`：Schema.org画像オブジェクト（Valaxy規約）
- `albums`：アルバム配列（Valaxy規約）
- `photos`：写真配列（Valaxy規約）
- `medium_zoom`：medium-zoom画像ズームを使用するかどうか（Valaxy規約）

### 10. コードと数学
- `katex`：KaTeX数式を使用するかどうか（Valaxy規約）
- `codepen`：CodePenを使用するかどうか（Valaxy規約）
- `codeHeightLimit`：コードブロックの高さ制限（Valaxy規約）

### 11. 暗号化とセキュリティ（❗未使用）
- `encrypt`：暗号化を有効にするかどうか（Valaxy規約）
- `password`：暗号化パスワード（Valaxy規約）
- `password_hint`：パスワードヒント（Valaxy規約）
- `gallery_password`：アルバムパスワード（Valaxy規約）
- `encryptedContent`：暗号化されたコンテンツ（Valaxy規約）
- `partiallyEncryptedContents`：部分的に暗号化されたコンテンツ（Valaxy規約）
- `encryptedPhotos`：暗号化されたアルバム（Valaxy規約）

### 12. その他の特殊フィールド（❗未使用）
- `from`：クライアントリダイレクトのソースパス（Valaxy規約）

---

### フィールドソースコード参照
- `YunPostMeta.vue`、`YunPostCard.vue`などはプロジェクトのカスタムコンポーネントソースファイルです。
- `Valaxy規約`は、そのフィールドがValaxy公式テーマ、プラグイン、またはドキュメントで明示的にサポートされているfrontmatterフィールドであることを示します。
- `自動生成`は、そのフィールドがValaxyまたは関連プラグインによって自動生成され、手動で入力する必要がないことを示します。

---

### 使用例（カバーと抜粋を使用しないバージョン）

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

## 設定ファイルオプションガイド

### site.config.ts サイト設定
* 🏠 基本設定
  - `url`: サイトの完全URL、記事の永久リンク生成に使用
  - `lang`: サイトのデフォルト言語
  - `title`: サイトタイトル
  - `subtitle`: サイトサブタイトル
  - `description`: サイトの説明
  - `timezone`: サイトのタイムゾーン
  - `languages`: 利用可能な言語リスト
  - `favicon`: サイトアイコン
  - `lastUpdated`: 最終更新時間を表示するかどうか

* 👤 著者情報
  - `author.name`: 著者名
  - `author.avatar`: 著者アバター
  - `author.status`: ステータス情報（絵文字とメッセージ）
  - `author.intro`: 自己紹介
  - `author.email`: メールアドレス
  - `author.link`: 個人ホームページリンク

* 🔗 ソーシャルリンク
  - `social`: ソーシャルプラットフォームリンク配列、カスタムアイコンと色をサポート

* 🔍 検索設定
  - `search.enable`: 検索を有効にするかどうか
  - `search.type`: 検索タイプ（fuse/algolia/engine）
  - `fuse`: fuse検索設定

* 💬 コメントシステム
  - `comment.enable`: コメントを有効にするかどうか

* 💰 スポンサー設定
  - `sponsor.enable`: スポンサーを有効にするかどうか
  - `sponsor.description`: スポンサー説明（多言語対応）
  - `sponsor.methods`: スポンサー方法設定

* 📊 統計設定
  - `statistics.enable`: 統計を有効にするかどうか
  - `statistics.readTime`: 読書時間設定

### theme.config.ts テーマ設定
* 🎨 テーマスタイル
  - `type`: テーマタイプ（'strato'または'nimbo'）
  - `colors.primary`: テーマカラー
  - `valaxyDarkOptions`: ダークモード設定

* 🎯 ホームページ設定
  - `banner`: ホームページスローガン設定
  - `bg_image`: 背景画像設定

* 💭 機能モジュール
  - `say`: 一言設定
  - `notice`: お知らせ設定
  - `fireworks`: クリック花火効果設定

* 📱 ナビゲーション設定
  - `nav`: ナビゲーションバー設定
  - `pages`: ページ設定
  - `sidebar`: サイドバー設定
  - `menu`: メニューバー設定

* 👣 フッター設定
  - `footer.since`: サイト作成時間
  - `footer.cloud`: フッター雲効果
  - `footer.icon`: フッターアイコン設定
  - `footer.powered`: Powered byを表示するかどうか
  - `footer.beian`: ICP登録情報設定

* 📝 記事設定
  - `types`: カスタム記事カードタイプ
  - `outlineTitle`: 記事目次タイトル

## 開発コマンド

### 🚀 基本コマンド
```bash
# 依存関係のインストール
pnpm i

# 開発プレビュー
pnpm dev

# ビルド（SSGバージョン）
pnpm build

# ビルド（SPAバージョン）
pnpm build:spa

# ビルド（SSGバージョン、pnpm buildと同じ）
pnpm build:ssg

# RSS生成
pnpm rss

# ビルド結果のプレビュー
pnpm serve

# ビルドファイルのクリーン（カスタムコマンド、scripts/clean.jsで実装）
# 以下のファイルを削除：
# - public/feed.xml
# - public/atom.xml
# - public/feed.json
# - public/valaxy-fuse-list.json
# - dist/
pnpm clean
```

### 🔧 開発ツールコマンド
```bash
# コードフォーマットチェック
pnpm lint

# コードフォーマット
pnpm format

# 型チェック
pnpm type-check
```

### 📦 依存関係管理コマンド
```bash
# 依存関係の追加
pnpm add <package-name>

# 開発依存関係の追加
pnpm add -D <package-name>

# 依存関係の更新
pnpm update

# 依存関係の削除
pnpm remove <package-name>
```

### 🧹 クリーンアップコマンド
```bash
# ビルドキャッシュのクリーン
pnpm clean

# 依存関係のクリーン
pnpm clean:all
```

### 📝 その他のコマンド
```bash
# 型宣言ファイルの生成
pnpm gen-types

# カスタムスクリプトの実行
pnpm run <script-name>
```

### 📌 コマンド説明
- `pnpm i`: プロジェクトのすべての依存関係をインストール（開発依存関係を含む）
- `pnpm dev`: ホットリロード付きの開発サーバーを起動
- `pnpm build`: 本番環境コードをビルド（SSGバージョン）、`dist`ディレクトリに出力
- `pnpm build:spa`: シングルページアプリケーションバージョンをビルド
- `pnpm build:ssg`: 静的サイトバージョンをビルド
- `pnpm rss`: RSS購読ファイルを生成
- `pnpm serve`: ビルドされた本番環境コードをプレビュー

### ⚠️ 注意事項
1. プロジェクトを初めてクローンした後、`pnpm i`を実行して依存関係をインストール
2. 開発時は`pnpm dev`を使用して開発サーバーを起動
3. ビルド前にすべてのコードが保存されていることを確認
4. 依存関係の問題が発生した場合は、`node_modules`ディレクトリを削除して`pnpm i`を再実行

## ディレクトリ構造

### 📁 コアディレクトリ
* `pages/`: すべてのページコンテンツ
  - `posts/`: ブログ記事
  - `about/`: アバウトページ
* `components/`: カスタムVueコンポーネント
* `layouts/`: カスタムレイアウトコンポーネント
* `styles/`: カスタムスタイルファイル
* `locales/`: 国際化言語ファイル
* `utils/`: ユーティリティ関数
* `types/`: TypeScript型宣言
* `setup/`: アプリケーション初期化設定
* `stores/`: Pinia状態管理
* `plugins/`: カスタムプラグイン
* `public/`: 静的リソースファイル
* `dist/`: ビルド後に生成されるファイル

### 📄 設定ファイル
* `site.config.ts`: サイト設定
* `theme.config.ts`: テーマ設定
* `valaxy.config.ts`: Valaxyフレームワーク設定
* `tsconfig.json`: TypeScript設定
* `package.json`: プロジェクト依存関係設定
* `pnpm-lock.yaml`: 依存関係バージョンロックファイル

### 🔧 開発ツール設定
* `.vscode/`: VSCodeエディタ設定
* `.github/`: GitHub Actionsワークフロー設定
* `.editorconfig`: エディタ共通設定
* `.npmrc`: NPM設定
* `.gitignore`: Git無視ファイル設定

### 🚀 デプロイ設定
* `.github/`: Githubデプロイ設定
* `vercel.json`: Vercelデプロイ設定
* `netlify.toml`: Netlifyデプロイ設定
* `nginx.conf`: Nginxサーバー設定
* `Dockerfile`: Dockerコンテナ設定
* `.dockerignore`: Docker無視ファイル

### 📦 ビルド出力
* `.valaxy/`: Valaxyビルドキャッシュ
* `node_modules/`: 依存パッケージディレクトリ

### 📝 その他
* `scripts/`: カスタムスクリプト
* `config/`: その他の設定ファイル

## Valaxy 0.23.4リリースのRSS自動生成無効化対策

RSS機能が不要な場合、または多言語frontmatterによるRSS生成エラーを避けたい場合は、以下の方法でRSS自動生成を無効化できます：

1. `node_modules/.pnpm/valaxy@0.23.4_.../node_modules/valaxy/dist/chunk-OXTCPOR5.js`ファイルを開きます。
2. `rssModule`または`build:after`を検索し、以下のコードを見つけます：
   ```js
   setup(node) {
     node.hook("build:after", async () => {
       //console.log();
       //await build(node.options);
       return;
     });
   }
   ```
3. `await build(node.options);`をコメントアウトするか、直接`return;`とすることで、ビルド時にRSSファイルが自動生成されなくなります。

**注意：** valaxy依存関係をアップグレードするたびに、このファイルは上書きされるため、再操作が必要です。

## カスタム.ts関数（utils/typesフォルダ）

### i18n.ts [📁 utils] [🔗](./utils/i18n.ts)
- **機能**：多言語コンテンツを解析し、オブジェクトと文字列形式をサポート。
- **使用方法**：
  ```typescript
  parseI18nContent({ 'zh-CN': '中国語', 'en': 'English' }) // 現在の言語に対応するコンテンツを返す
  parseI18nContent('プレーンテキスト') // 文字列を直接返す
  ```

### formatTimestamp.ts [📁 utils] [🔗](./utils/formatTimestamp.ts)
- **機能**：タイムスタンプまたは日付オブジェクトを'YYYY-MM-DD HH:mm:ss'形式にフォーマット。
- **使用方法**：
  ```typescript
  formatTimestamp(new Date()) // 現在時刻のフォーマットされた文字列を返す
  ```

### shims.d.ts [📁 types] [🔗](./types/shims.d.ts)
- **機能**：TypeScript型宣言ファイル、モジュール型定義を拡張するために使用。
- **主な目的**：
  1. `.yml`と`.yaml`ファイルのモジュール型を宣言
  2. Vue I18nの型サポートを提供
  3. TypeScriptがYAML形式の言語ファイルを正しく識別し型チェックできるようにする
- **使用シナリオ**：
  - プロジェクトがVue I18nを使用して国際化を行う場合
  - YAMLファイルを使用して設定や言語ファイルを保存する場合
  - これらのファイルタイプにTypeScriptサポートが必要な場合
- **ファイル内容**：
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

## カスタムレイアウトコンポーネント（layoutsフォルダ）

### 404.vue [📁 layouts] [🔗](./layouts/404.vue)
- **機能**：404エラーページを表示し、楽しい多言語レシピ表示機能を提供。
- **主な特徴**：
  1. 多言語サポート：簡体字中国語、繁体字中国語、英語、日本語の4言語でレシピコンテンツを提供
  2. 動的切り替え：異なる言語のレシピコンテンツの動的切り替え表示をサポート
  3. スタイル最適化：
     - 404数字にシャドウ効果を追加
     - カスタムボタンスタイル、ホバー効果をサポート
     - レシピコンテンツのレイアウトと間隔を最適化

### categories.vue [📁 layouts] [🔗](./layouts/categories.vue)
- **機能**：カテゴリーページレイアウト、多言語カテゴリー表示と管理をサポート。
- **主な特徴**：
  1. 多言語サポート：
     - `parseI18nContent`ユーティリティ関数を統合
     - カテゴリー名の表示ロジックを最適化
  2. カテゴリーフィルタリング：
     - オブジェクト形式のカテゴリーデータをサポート
     - URLパラメータ処理を最適化
  3. カテゴリー統合：
     - 多言語カテゴリーの統合表示を実装
     - カテゴリーカウント統計を最適化
  4. ページ最適化：
     - トランジションアニメーション効果を追加
     - カテゴリーリスト表示方法を改善

### tags.vue [📁 layouts] [🔗](./layouts/tags.vue)
- **機能**：タグページレイアウト、多言語タグクラウド表示をサポート。
- **主な特徴**：
  1. 多言語サポート：
     - `parseI18nContent`ユーティリティ関数を統合
     - タグ名の表示ロジックを最適化
  2. タグスタイルシステム：
     - 使用頻度に基づいてフォントサイズを動的に計算
     - タグカラーのグラデーション効果を実装
     - TinyColorライブラリを使用してカラー混合を処理
  3. タグフィルタリング：
     - オブジェクト形式のタグデータをサポート
     - URLパラメータ処理を改善
  4. タグ統合：
     - 多言語タグの統合表示を実装
     - タグカウント統計を最適化
  5. ページ最適化：
     - トランジションアニメーション効果を追加
     - タグクラウドレイアウトを最適化
     - レスポンシブデザインをサポート

## カスタムSCSSスタイル（stylesフォルダ）

### index.scss [📁 styles] [🔗](./styles/index.scss)
- **機能**：サイドバー背景画像とダークモードスタイルを定義。
- **使用方法**：
  ```scss
  // サイドバー背景画像スタイル
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

  // ダークモードスタイル
  html.dark {
    .yun-fullscreen-menu {
      &::before {
        background-image: url('https://cloudflare-imgbed-telegraph.pages.dev/file/MTYW_Onocle_CardGame_Mu_20250527.webp');
        opacity: 0.8;
      }
    }
  }
  ```

## setupフォルダ

### 目的
`setup`フォルダはアプリケーションの初期化設定ファイルを格納するために使用され、主にGoogle Analyticsトラッキングとその他のアプリケーションレベルの設定を構成するために使用されます。

### 含まれるファイル
- **main.ts** [📁 setup] [🔗](./setup/main.ts)：メインアプリケーション設定ファイル、アプリケーションの初期化とGoogle Analyticsトラッキングのインストールに使用。
- **gtag.ts** [📁 setup] [🔗](./setup/gtag.ts)：Google Analyticsトラッキング設定、クライアント側でGoogle Analyticsをインストールしルートをトラッキングするために使用。

## カスタム機能コンポーネント（componentsフォルダ）

### 1. 多言語サポートコンポーネント
これらのコンポーネントは主にMarkdown記事のfrontmatter多言語化をサポートするために使用され、`parseI18nContent`ユーティリティ関数を通じて実装されています：

- **YunPostCard.vue** [📁 components] [🔗](./components/YunPostCard.vue)：記事カードコンポーネント、多言語タイトルとコンテンツ表示をサポート
- **YunPostCategories.vue** [📁 components] [🔗](./components/YunPostCategories.vue)：記事カテゴリーコンポーネント、多言語カテゴリー名をサポート
- **YunPostTags.vue** [📁 components] [🔗](./components/YunPostTags.vue)：記事タグコンポーネント、多言語タグ名をサポート
- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：記事メタ情報コンポーネント、多言語説明と著者情報をサポート
- **YunNavMenuTitle.vue** [📁 components] [🔗](./components/YunNavMenuTitle.vue)：ナビゲーションメニュータイトルコンポーネント、多言語表示をサポート
- **YunCategory.vue** [📁 components] [🔗](./components/YunCategory.vue)：カテゴリーコンポーネント、多言語カテゴリー名をサポート
- **YunCategoryChildItem.vue** [📁 components] [🔗](./components/YunCategoryChildItem.vue)：サブカテゴリーコンポーネント、多言語表示をサポート
- **YunPostNav.vue** [📁 components] [🔗](./components/YunPostNav.vue)：記事ナビゲーションコンポーネント、多言語をサポート
- **YunPostsInfo.vue** [📁 components] [🔗](./components/YunPostsInfo.vue)：記事情報コンポーネント、多言語表示をサポート
- **YunPostCollapseItem.vue** [📁 components] [🔗](./components/YunPostCollapseItem.vue)：記事折りたたみ項目コンポーネント、多言語コンテンツをサポート

### 2. 統計とモニタリングコンポーネント
これらのコンポーネントはウェブサイトのアクセス統計と実行時間表示に使用されます：

- **YunPostMeta.vue** [📁 components] [🔗](./components/YunPostMeta.vue)：
  - 不蒜子ページビュー統計を統合

- **YunFooter.vue** [📁 components] [🔗](./components/YunFooter.vue)：
  - ウェブサイトの実行時間を表示（デプロイ時からカウント）
  - 不蒜子サイト総アクセス統計を統合

### 3. 特色機能コンポーネント
これらのコンポーネントはウェブサイトの特色機能を提供します：

- **YunBanner.vue** [📁 components] [🔗](./components/YunBanner.vue)：バナーコンポーネント、アニメーション表示時間をカスタマイズ、ユーザー体験を最適化
- **YunSay.vue** [📁 components] [🔗](./components/YunSay.vue)：一言コンポーネント、Google Translate APIを統合して一言コンテンツを自動翻訳、多言語表示をサポート
- **YunNotice.vue** [📁 components] [🔗](./components/YunNotice.vue)：通知コンポーネント、設定ファイルでカスタム多言語通知コンテンツをサポート
- **YunSponsor.vue** [📁 components] [🔗](./components/YunSponsor.vue)：スポンサーコンポーネント、設定ファイルでカスタム多言語スポンサー説明をサポート

### 4. レイアウトとナビゲーションコンポーネント
これらのコンポーネントはウェブサイトの全体的なレイアウトとナビゲーションに使用され、すべて多言語サポートを統合しています：

- **YunLayoutPostTag.vue** [📁 components] [🔗](./components/YunLayoutPostTag.vue)：タグクラウドレイアウトコンポーネント、動的スタイル計算をサポート
- **YunNavMenuItem.vue** [📁 components] [🔗](./components/YunNavMenuItem.vue)：ナビゲーションメニュー項目コンポーネント、多言語表示をサポート
- **YunPageHeader.vue** [📁 components] [🔗](./components/YunPageHeader.vue)：ページタイトルコンポーネント、多言語タイトルをサポート
- **YunSidebarLinks.vue** [📁 components] [🔗](./components/YunSidebarLinks.vue)：サイドバーリンクコンポーネント、多言語リンクテキストをサポート
- **YunPrologueSquare.vue** [📁 components] [🔗](./components/YunPrologueSquare.vue)：プロローグスクエアコンポーネント、多言語コンテンツをサポート

### 5. 設定関連の説明
- `site.config.ts` [📁 root] [🔗](./site.config.ts)と`theme.config.ts` [📁 root] [🔗](./theme.config.ts)でカスタム多言語設定をサポート：
  - Noticeモジュール：多言語通知コンテンツをサポート
  - Sponsorモジュール：多言語スポンサー説明をサポート
- `as any`型アサーションソリューションを使用して関数が正しく多言語設定を読み取ることを確保

#### 多言語設定の注意事項
> 現在使用中のvalaxy 0.23.4リリース向け
valaxy公式の型宣言の制限により、`site.config.ts` [📁 root] [🔗](./site.config.ts)と`theme.config.ts` [📁 root] [🔗](./theme.config.ts)で多言語オブジェクト（sponsor.description、notice.contentなど）をサポートするには、`as any`型アサーションを使用する必要があります。そうしないと型エラーが発生します。

#### 例

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

#### 説明
- これはvalaxy公式の型宣言でdescription/contentがstring型のみをサポートし、オブジェクトを直接渡せないためです。
- `as any`を使用することで型チェックをバイパスでき、実際の実行時には問題ありません。
- 公式の型宣言がオブジェクト型をサポートするようにアップグレードされた場合、`as any`を削除できます。
- すべてのコンポーネントは`parseI18nContent`ユーティリティ関数 [📁 utils] [🔗](./utils/i18n.ts)を統合して多言語コンテンツを処理
- frontmatterでオブジェクト形式を使用して多言語コンテンツを定義することをサポート：
  ```yaml
  title:
    zh-CN: 中文标题
    en: English Title
  description:
    zh-CN: 中文描述
    en: English Description
  ```
## 📝 ToDoリスト

### 🚧 最適化が必要な機能
1. **多言語リアルタイム切り替えの最適化**
   - タグクラウドコンポーネント（YunLayoutPostTag.vue）の多言語リアルタイム応答
   - カテゴリーページ記事リストの多言語リアルタイム切り替え
   - タグページ記事リストの多言語リアルタイム切り替え
   - `i18n.ts`ユーティリティ関数の複雑なコンポーネントサポートの最適化

2. **多言語フレームワークの拡張**
   - valaxyフレームワーク自体が2つ以上の言語をサポートする方法を理解していない
   - `locales`ディレクトリの言語サポートを完了（対応するキーファイルを予約済み）：
     - 繁体字中国語（zh-TW）サポート
     - 日本語（ja）サポート
   - 多言語切り替えのユーザーインターフェースを設計
3. ローカル検索戦略の問題
- fuse.jsスキームのローカル検索戦略は、現在の多言語化frontmatter記事に適していない
- ビルド後のサイトで、記事の詳細内容が検索できないなどの状況が発生する


