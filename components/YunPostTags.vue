<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { parseI18nContent } from '../utils/i18n'

defineProps<{
  tags: string[] | Record<string, string>[]
}>()

// Helper function to process a single tag object/string
const processTag = (tag: any) => {
  if (typeof tag === 'object' && tag !== null) {
    // JSON 字符串化对象
    return JSON.stringify(tag)
  }
  // 对于字符串分类，直接返回字符串
  return tag
}

// Helper function to encode the tag string/object for URL query
const encodeTagForUrl = (tag: any) => {
  return encodeURIComponent(processTag(tag))
}
</script>

<template>
  <div class="post-tags inline-flex" flex="wrap 1" items="center">
    <RouterLink
      v-for="tag in tags"
      :key="typeof tag === 'object' ? JSON.stringify(tag) : tag"
      :to="{
        path: '/tags',
        query: {
          tag: encodeTagForUrl(tag)
        }
      }"
      class="post-tag inline-flex items-center text-$va-c-text bg-$va-c-bg-soft rounded-full px-3 py-1 text-sm transition-all duration-300 hover:text-$va-c-primary-lighter hover:bg-$va-c-bg-mute"
      m="x-1"
    >
      <div m="x-1" inline-flex i-ri-price-tag-3-line />
      <span>{{ parseI18nContent(tag) }}</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.post-tag {
  transition: all 0.3s ease;
}
</style> 