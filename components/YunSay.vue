<script lang="ts" setup>
import { onMounted, ref, watch, computed } from 'vue'
import { useThemeConfig } from 'valaxy'
import { useI18n } from 'vue-i18n'
import type { ThemeConfig } from 'valaxy-theme-yun'

const themeConfig = useThemeConfig<ThemeConfig>()
const { locale } = useI18n()

const sayContent = ref('')
const sayAuthor = ref('')
const sayFrom = ref('')
const translatedContent = ref('')
const translatedAuthor = ref('')
const translatedFrom = ref('')
const isChineseContent = ref(false)

// 判断是否为繁体中文环境
const isTraditionalChinese = computed(() => {
  return ['zh-TW', 'zh-HK', 'zh-MO', 'zh-Hant'].includes(locale.value)
})

// 判断是否为简体中文环境
const isSimplifiedChinese = computed(() => {
  return ['zh-CN', 'zh-SG', 'zh-Hans', 'zh'].includes(locale.value)
})

// 计算最终显示的内容
const displayContent = computed(() => {
  if (isTraditionalChinese.value && isChineseContent.value) {
    return translatedContent.value || sayContent.value
  }
  return sayContent.value
})

const displayAuthor = computed(() => {
  if (isTraditionalChinese.value && isChineseContent.value) {
    return translatedAuthor.value || sayAuthor.value
  }
  return sayAuthor.value
})

const displayFrom = computed(() => {
  if (isTraditionalChinese.value && isChineseContent.value) {
    return translatedFrom.value || sayFrom.value
  }
  return sayFrom.value
})

/**
 * 检测文本是否为简体中文
 */
async function detectChinese(text: string): Promise<boolean> {
  if (!text) return false
  try {
    // 使用谷歌翻译 API 检测语言
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`)
    const data = await response.json()
    // 如果检测到的源语言是中文，则返回 true
    return ['zh-CN', 'zh-SG', 'zh-Hans', 'zh', 'zh-TW', 'zh-HK', 'zh-MO', 'zh-Hant'].includes(data[2])
  } catch (error) {
    console.error('Language detection error:', error)
    return false
  }
}

/**
 * 使用谷歌翻译 API 翻译文本
 */
async function translateText(text: string, targetLang: string) {
  if (!text) return ''
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`)
    const data = await response.json()
    return data[0][0][0]
  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}

/**
 * 获取在线 API 语录
 */
async function fetchApiToSay() {
  const api = themeConfig.value.say.hitokoto.enable ? themeConfig.value.say.hitokoto.api : themeConfig.value.say.api
  if (!api)
    return

  try {
    const res = await fetch(api)
    if (res.ok) {
      const data = await res.json()
      if (themeConfig.value.say.hitokoto.enable) {
        sayContent.value = data.hitokoto
        sayAuthor.value = data.from_who
        sayFrom.value = data.from
      }
      else {
        const sentence = data[Math.floor(Math.random() * data.length)]
        if (sentence.content) {
          sayContent.value = sentence.content
          sayAuthor.value = sentence.author
          sayFrom.value = sentence.from
        }
        else {
          sayContent.value = sentence
        }
      }

      // 检测内容是否为中文
      isChineseContent.value = await detectChinese(sayContent.value)

      // 根据当前语言环境和内容语言决定翻译策略
      if (isTraditionalChinese.value && isChineseContent.value) {
        // 如果是繁体中文环境，且内容是中文，直接转换为繁体中文
        translatedContent.value = await translateText(sayContent.value, locale.value)
        translatedAuthor.value = await translateText(sayAuthor.value, locale.value)
        translatedFrom.value = await translateText(sayFrom.value, locale.value)
      } else if (!isSimplifiedChinese.value && isChineseContent.value) {
        // 如果是其他非中文环境，且内容是中文，显示双语对照
        translatedContent.value = await translateText(sayContent.value, locale.value)
        translatedAuthor.value = await translateText(sayAuthor.value, locale.value)
        translatedFrom.value = await translateText(sayFrom.value, locale.value)
      }
    }
    else {
      throw new Error(
        `${themeConfig.value.say.api}, HTTP error, status = ${res.status}`,
      )
    }
  } catch (err) {
    console.error(err.message)
  }
}

// 监听语言变化
watch(locale, async (newLocale) => {
  if (isTraditionalChinese.value && isChineseContent.value) {
    // 切换到繁体中文时，如果是中文内容，直接转换为繁体中文
    translatedContent.value = await translateText(sayContent.value, newLocale)
    translatedAuthor.value = await translateText(sayAuthor.value, newLocale)
    translatedFrom.value = await translateText(sayFrom.value, newLocale)
  } else if (!isSimplifiedChinese.value && isChineseContent.value) {
    // 切换到其他非中文语言时，显示双语对照
    translatedContent.value = await translateText(sayContent.value, newLocale)
    translatedAuthor.value = await translateText(sayAuthor.value, newLocale)
    translatedFrom.value = await translateText(sayFrom.value, newLocale)
  } else {
    // 切换到简体中文时清空翻译
    translatedContent.value = ''
    translatedAuthor.value = ''
    translatedFrom.value = ''
  }
})

onMounted(() => {
  fetchApiToSay()
})
</script>

<template>
  <div class="say">
    <div class="say-content-wrapper">
      <template v-if="isTraditionalChinese && isChineseContent">
        <!-- 繁体中文环境下显示转换后的内容 -->
        <span class="say-content animate-fade-in animate-iteration-1">{{ displayContent }}</span>
      </template>
      <template v-else>
        <!-- 其他环境下显示原文和翻译 -->
        <span v-if="sayContent" class="say-content animate-fade-in animate-iteration-1">{{ sayContent }}</span>
        <span v-if="translatedContent" class="translated-content">{{ translatedContent }}</span>
      </template>
    </div>
    <div class="say-meta">
      <div v-if="displayAuthor" class="meta-item">
        <span class="meta-content">{{ displayAuthor }}</span>
        <span v-if="translatedAuthor && !isTraditionalChinese" class="meta-separator">|</span>
        <span v-if="translatedAuthor && !isTraditionalChinese" class="meta-translation">{{ translatedAuthor }}</span>
      </div>
      <div v-if="displayFrom" class="meta-item">
        <span class="meta-content">{{ displayFrom }}</span>
        <span v-if="translatedFrom && !isTraditionalChinese" class="meta-separator">|</span>
        <span v-if="translatedFrom && !isTraditionalChinese" class="meta-translation">{{ translatedFrom }}</span>
      </div>
    </div>
    <div v-if="translatedContent && !isTraditionalChinese" class="translation-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </svg>
      <span class="translation-by">by Google Translation</span>
    </div>
  </div>
</template>

<style lang="scss">
.say {
  color: var(--va-c-text);
  display: block;
  text-align: center;
  font-family: var(--va-font-serif);
  font-weight: bold;
  padding: 0.5rem;
  border-bottom: var(--va-border-width) solid var(--va-c-text-light);

  .say-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .say-content {
    display: block;
    font-size: 1.1em;
  }

  .translated-content {
    font-style: italic;
    font-size: 0.9em;
    color: var(--va-c-text-light);
  }

  .say-meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.9em;
    color: var(--va-c-text-light);
    margin-bottom: 0.5rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .meta-content {
    font-weight: bold;
  }

  .meta-separator {
    color: var(--va-c-text-lighter);
  }

  .meta-translation {
    font-style: italic;
    color: var(--va-c-text-lighter);
  }

  .translation-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 0.8em;
    color: var(--va-c-text-lighter);

    svg {
      width: 14px;
      height: 14px;
    }
  }
}
</style> 