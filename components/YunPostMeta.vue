<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScriptTag } from '@vueuse/core'
import { formatDate } from 'valaxy'
import { formatTimestamp } from '../utils/formatTimestamp'
import { parseI18nContent } from '../utils/i18n'
import type { Post } from 'valaxy'

defineOptions({
  name: 'YunPostMeta'
})

const props = defineProps<{
  frontmatter: Post
}>()

const { t } = useI18n()
useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')

const wordCount = computed(() => props.frontmatter?.wordCount ?? 0)
const readingTime = computed(() => props.frontmatter?.readingTime ?? '')
const date = computed(() => props.frontmatter?.date ?? '')
const updated = computed(() => props.frontmatter?.updated ?? '')
const description = computed(() => props.frontmatter?.description ?? '')
const author = computed(() => props.frontmatter?.author ?? '')
</script>

<template>
    <div v-if="frontmatter?.draft" class="post-draft-icon" title="draft">
      <div i-ri-draft-line />
    </div>
    <div v-if="frontmatter?.top" class="post-top-icon" color="$va-c-warning">
      <div i-ri-pushpin-line />
    </div>
    <div v-if="description" class="post-description text-sm mt-2 mb-3">
      <span class="op-80">{{ parseI18nContent(description) }}</span>
    </div>
    <div class="post-meta flex flex-col gap-2 text-sm">
      <div class="post-dates flex gap-4 flex-wrap justify-center">
        <span class="posted-time inline-flex-center gap-1" :title="t('post.posted') + formatTimestamp(date)">
          <div class="inline-block" i-ri-calendar-line></div>
          <time class="op-80">{{ formatDate(date) }}</time>
        </span>
      <span v-if="updated && updated !== date" class="edited-time inline-flex-center gap-1" :title="t('post.edited') + formatTimestamp(updated)">
          <div i-ri-calendar-2-line></div>
          <time class="op-80">{{ formatDate(updated) }}</time>
        </span>
      </div>
      <div class="post-stats flex gap-4 flex-wrap justify-center">
      <span v-if="wordCount" class="word-count inline-flex-center gap-1" :title="t('statistics.word')">
          <div class="inline-block" i-ri-file-word-line></div>
          <span class="op-80">{{ wordCount }}</span>
        </span>
      <span v-if="readingTime" class="reading-time inline-flex-center gap-1" :title="t('statistics.time')">
          <div i-ri-timer-line></div>
          <time class="op-80">{{ readingTime }}m</time>
        </span>
        <span class="pageview-count inline-flex-center gap-1" :title="t('post.pageview_count')">
          <div class="inline-block" i-ri-eye-line></div>
          <span class="op-80">
            <span id="busuanzi_value_page_pv" />
          </span>
        </span>
      </div>
    </div>
    <div v-if="author" class="post-author text-sm mt-2 flex-center">
      <span class="op-80 flex-center gap-1">
        <div i-ri-account-circle-line></div>
        {{ t('post.author') }}: {{ parseI18nContent(author) }}
      </span>
    </div>
</template>

<style lang="scss">
.post-draft-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--va-c-gray);
  font-size: 1.2rem;
}

.post-top-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.2rem;
}

.post-description,
.post-author {
  color: var(--va-c-text-light);
  text-align: center;
}
</style> 