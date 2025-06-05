<script lang="ts" setup>
import { ref } from 'vue'
import { parseI18nContent } from '../utils/i18n'

defineProps<{
  i?: number
  title: string
  count: number
}>()

const tagRef = ref<HTMLElement>()
</script>

<template>
  <span
    ref="tagRef"
    inline-flex my="2" p="1"
    class="post-tag cursor-pointer items-baseline leading-4 transition-all duration-300 hover:text-$va-c-primary-lighter hover:bg-$va-c-bg-mute"
  >
    <span inline-flex>#{{ parseI18nContent(title) }}</span>
    <span inline-flex text="xs">[{{ count }}]</span>
  </span>
</template>

<style scoped>
/* Add or copy any necessary styles from the original theme component */
/* For now, keeping it minimal. You might need to add more styles if needed. */
/* Removed: empty .post-tag rule */
</style> 