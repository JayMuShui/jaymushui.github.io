<script lang="ts" setup>
import { useThemeConfig } from 'valaxy'
import { useI18n } from 'vue-i18n'
import type { ThemeConfig } from 'valaxy-theme-yun'

const themeConfig = useThemeConfig<ThemeConfig>()
const { t } = useI18n()
</script>

<template>
  <div class="links flex-center">
    <AppLink
      v-for="item, i in themeConfig.pages" :key="i"
      class="link-item yun-icon-btn" inline-flex
      :to="item.url" :title="t(item.name)"
      :style="`color:${item.color}`"
    >
      <div :class="item.icon" class="icon size-6" />
    </AppLink>
  </div>
</template> 