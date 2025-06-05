<script setup lang="ts">
import { useFrontmatter, useSiteConfig, useThemeConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { parseI18nContent } from '../utils/i18n'

const fm = useFrontmatter()
const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig<ThemeConfig>()

const route = useRoute()
const showPostTitle = ref(false)
const scrollY = ref(0)

const isStrato = computed(() => themeConfig.value.type === 'strato')
const isNimbo = computed(() => themeConfig.value.type === 'nimbo')

const showSiteTitle = computed(() => {
  if (route.path === '/')
    return false
  if (isStrato.value)
    return scrollY.value < 10
  else
    return !showPostTitle.value
})

watch(() => scrollY.value, () => {
  if (isNimbo.value)
    showPostTitle.value = scrollY.value > 200
})

// 监听滚动事件
function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const router = useRouter()
function goToLink() {
  if (!showPostTitle.value)
    router.push('/')
}


</script>

<template>
  <div
    v-motion
    flex="~ center col h-full"
    :class="{
      'cursor-pointer': !showPostTitle,
    }"
    :initial="{
      opacity: 0,
      y: 10,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        delay: 1200,
      },
    }"
    @click="goToLink"
  >
    <div
      v-if="fm.title && showPostTitle"
      flex="~ col"
      class="nav-menu-post-title text-xs font-bold flex items-center gap-1 lt-sm:max-w-40"
    >
      <div class="gap-1" flex="~">
        <div
          class="size-4"
          :class="fm.icon || 'i-ri-article-line'"
        />
        <span class="truncate"> {{ parseI18nContent(fm.title) }}</span>
      </div>
      <span v-if="fm.subtitle" class="font-light op-80">
        {{ parseI18nContent(fm.subtitle) }}
      </span>
    </div>
    <span v-if="showSiteTitle" class="font-light truncate">
      {{ siteConfig.title }}
    </span>
  </div>
</template>

<style lang="scss">
.nav-menu-post-title {
  // safari not support
  animation: nav-menu-title-appear 0.3s linear forwards;

  // animation-timeline: scroll();
  // animation-range: 0 calc(30vh);
}

@keyframes nav-menu-title-appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 