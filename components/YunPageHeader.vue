<script lang="ts" setup>

import { parseI18nContent } from '../utils/i18n'

defineProps<{
  pageTitleClass?: string
  /**
   * @deprecated Use `pageTitleClass` instead
   */
  color?: string
  icon?: string
  title?: any
  description?: any
  author?: any
  showDescription?: boolean
  showAuthor?: boolean
}>()


</script>

<template>
  <header class="post-header">
    <h1
      class="post-title flex-center" p="2" text="2xl center"
      font="serif black"
      :style="`color:${color}`"
      :class="pageTitleClass"
    >
      <div v-if="icon" class="icon" m="r-1 t-1px" inline-flex :class="icon" />
      <span inline-flex class="leading-none">{{ parseI18nContent(title) }}</span>
    </h1>
    
    <!-- 作者信息 -->
    <div v-if="showAuthor && author" class="post-author" text="sm center" op="80">
      <div class="flex-center" gap="2">
        <div i-ri-user-line />
        <span>{{ parseI18nContent(author) }}</span>
      </div>
    </div>

    <!-- 描述信息 -->
    <div v-if="showDescription && description" class="post-description" text="sm center" op="80" m="t-2">
      <div class="flex-center" gap="2">
        <div i-ri-file-text-line />
        <span>{{ parseI18nContent(description) }}</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.post-header {
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
}

.post-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.5;
  color: var(--va-c-text);
  transition: color 0.3s ease;
}

.post-author,
.post-description {
  margin-top: 0.5rem;
  color: var(--va-c-text-light);
  transition: color 0.3s ease;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 