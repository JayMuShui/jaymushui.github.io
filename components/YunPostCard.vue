<script lang="ts" setup>
import type { Post } from 'valaxy'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'

const props = defineProps<{
  post: Post
}>()

const { t, locale } = useI18n()
const themeConfig = useThemeConfig<ThemeConfig>()

// 获取类型配置
const usePostProperty = (type?: string) => {
  if (!type) return { color: '', styles: undefined }
  const types = (themeConfig.value as any).types || {}
  if (!(type in types)) type = 'link'
  const typeConfig = types[type] || types.link
  const color = typeConfig.color
  const styles = computed(() => type ? ({ '--card-c-primary': color }) : undefined)
  return { color, styles }
}

const { styles, color: defaultColor } = usePostProperty(props.post.type)
const color = computed(() => props.post.color || defaultColor)

const postTitleClass = computed(() => {
  if (color.value) {
    if ([
      'primary', 'success', 'warning', 'error', 'info',
      'red', 'blue', 'purple', 'green', 'yellow', 'orange', 'pink',
    ].includes(color.value)) {
      return `text-${color.value}`
    }
    return ''
  }
  return props.post.postTitleClass || 'bg-gradient-to-r gradient-text from-$va-c-primary to-$va-c-primary-lighter'
})

const titleStyle = computed(() => {
  if (color.value) {
    if (color.value.startsWith('#')) {
      return { color: color.value }
    }
    if ([
      'primary', 'success', 'warning', 'error', 'info',
    ].includes(color.value)) {
      return { color: `var(--va-c-${color.value})` }
    }
    const colorMap = {
      red: '#ff4d4f', blue: '#1890ff', purple: '#722ed1',
      green: '#52c41a', yellow: '#faad14', orange: '#fa8c16', pink: '#eb2f96',
    }
    return { color: colorMap[color.value as keyof typeof colorMap] || color.value }
  }
  return {}
})

const displayTitle = computed(() => {
  const title = props.post.title
  if (typeof title === 'object' && title !== null) {
    return title[locale.value] || title['zh-CN'] || Object.values(title)[0]
  }
  return title
})
</script>

<template>
  <YunCard
    class="w-full"
    m="auto"
    :class="post.cover ? 'post-card-image' : 'post-card'"
    overflow="hidden"
    :style="styles"
  >
    <div class="flex flex-1 of-hidden justify-start items-start post-card-info" w="full">
      <img
        v-if="post.cover"
        :src="post.cover"
        :alt="t('post.cover')"
        width="320" height="180"
        w="40%" h="54"
        class="cover object-cover object-center md:shadow"
        loading="lazy"
      >
      <div class="flex flex-col items-center relative" :class="post.cover && 'h-54'" w="full">
        <AppLink
          class="post-title-link cursor-pointer"
          :to="post.path || ''"
          m="t-3"
          :class="postTitleClass"
          :style="titleStyle"
        >
          <div class="flex-center title text-2xl" text="center" font="serif black">
            <span inline-flex class="leading-none">{{ displayTitle }}</span>
          </div>
        </AppLink>
        <YunPostMeta :frontmatter="post" />
        <div flex="~ grow col" w="full" justify="center" items="center">
          <div v-if="post.excerpt_type === 'text'" py="1" />
          <div v-if="post.excerpt" class="markdown-body" op="90" text="left" w="full" p="x-6 lt-sm:4 y-2" v-html="post.excerpt" />
          <div v-else m="b-5" />
        </div>
        <YunExcerptBottomGradient v-if="post.excerpt" />
        <a
          v-if="post.url"
          :href="post.url"
          class="post-link-btn inline-flex items-center gap-2 bg-$va-c-primary text-white rounded-full px-4 py-2 text-sm transition-all duration-300 hover:bg-$va-c-primary-lighter hover:shadow-lg relative z-10"
          target="_blank"
          m="b-4"
        >
          <div i-ri-external-link-line />
          <span>{{ t('post.read_more') }}</span>
        </a>
      </div>
    </div>
    <div w="full" class="yun-card-actions flex justify-between" min-h="10" text="sm">
      <div class="post-categories inline-flex" flex="wrap 1" items="center">
        <YunPostCategories m="l-1" :categories="post.categories" />
      </div>
      <YunPostTags v-if="post.tags" m="1" :tags="post.tags" />
    </div>
  </YunCard>
</template>

<style lang="scss">
@keyframes card-appear {
  0% { opacity: 0; transform: scale(0.8) translateY(20px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.yun-card-actions { border-top: 1px solid rgb(122 122 122 / 0.05); }
.post-title-link { transition: all 0.3s ease; &:hover { transform: translateY(-2px); } }
.text-primary { color: var(--va-c-primary); }
.text-success { color: var(--va-c-success); }
.text-warning { color: var(--va-c-warning); }
.text-error { color: var(--va-c-error); }
.text-info { color: var(--va-c-info); }
.text-red { color: #ff4d4f; }
.text-blue { color: #1890ff; }
.text-purple { color: #722ed1; }
.text-green { color: #52c41a; }
.text-yellow { color: #faad14; }
.text-orange { color: #fa8c16; }
.text-pink { color: #eb2f96; }
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, var(--va-c-primary), var(--va-c-primary-lighter));
}
</style> 