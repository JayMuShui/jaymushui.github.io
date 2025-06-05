<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { parseI18nContent } from '../utils/i18n'

defineProps<{
  categories: string | string[] | Record<string, string> | Record<string, string>[]
}>()

// Helper function to process a single category object/string
const processCategory = (cat: any) => {
  if (typeof cat === 'object' && cat !== null) {
    // JSON 字符串化并编码对象
    return encodeURIComponent(JSON.stringify(cat))
  }
  // 对于字符串分类，直接编码
  return encodeURIComponent(cat)
}
</script>

<template>
  <RouterLink
    v-if="categories"
    :to="{
      path: '/categories',
      query: {
        category: Array.isArray(categories) ? processCategory(categories[0]) : processCategory(categories)
      }
    }"
    class="post-category inline-flex items-center text-$va-c-text bg-$va-c-bg-soft rounded-full px-3 py-1 text-sm"
    hover="text-$va-c-primary-lighter bg-$va-c-bg-mute"
  >
    <div m="x-1" inline-flex i-ri-folder-2-line />
    <span>
      {{ Array.isArray(categories) 
        ? categories.map(cat => parseI18nContent(cat)).join(' / ') 
        : parseI18nContent(categories) }}
    </span>
  </RouterLink>
</template>

<style scoped>
.post-category {
  transition: all 0.3s ease;
}
</style> 