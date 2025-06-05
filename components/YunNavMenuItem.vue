<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  icon: string
  to?: string
  title?: string
}>()
</script>

<template>
  <a
    class="size-12 inline-flex-center cursor-pointer z-$yun-z-nav-menu text-$va-c-text"
    hover="bg-white/80 dark:bg-black/80 op-100"
    op-80
    :href="to"
    :title="title ? t(title) : undefined"
  >
    <div class="size-6" :class="icon" />
  </a>
</template> 