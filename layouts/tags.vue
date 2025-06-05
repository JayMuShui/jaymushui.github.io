<script lang="ts" setup>
import { defineWebPage, useSchemaOrg } from '@unhead/schema-org/vue'
import { useFrontmatter, useInvisibleElement, usePostTitle, useSiteStore, useTags, useThemeConfig } from 'valaxy'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { parseI18nContent, I18nContent } from '../utils/i18n'
import { TinyColor } from '@ctrl/tinycolor'

// 定义标签数据接口
interface TagData {
  count: number;
}

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const route = useRoute()
const router = useRouter()

const themeConfig = useThemeConfig()

// 使用 useTags 获取标签数据
const allTags = useTags()

// 实现标签样式逻辑
const getTagStyle = (count: number) => {
  const gray = new TinyColor('#999999')
  // 尝试访问主题配置的主色，并提供 fallback
  const primaryColor = new TinyColor((themeConfig.value as any).colors?.primary || '#3eaf7c') // 使用类型断言

  const counts = Array.from(allTags.value.values()).map(tag => tag.count)
  const max = counts.length > 0 ? Math.max(...counts) : 1 // 避免空数组
  const min = counts.length > 0 ? Math.min(...counts) : 1 // 避免空数组
  const range = max - min
  // 避免除以零
  const percent = range > 0 ? (count - min) / range : 0;

  return {
    '--yun-tag-color': gray.mix(primaryColor, percent * 100).toString(),
    'fontSize': `${percent * 36 + 12}px`,
  }
}

const { t, locale } = useI18n()
const frontmatter = useFrontmatter()

// 关键：解码和解析 URL 参数
const curTagObject = computed(() => {
  const tagParam = route.query.tag as string
  if (tagParam) {
    try {
      // 尝试解析为对象
      return JSON.parse(decodeURIComponent(tagParam))
    } catch (e) {
      // 如果解析失败，说明是字符串标签，直接返回
      return decodeURIComponent(tagParam)
    }
  }
  return '' // 默认值
})

// 用于 PageHeader 显示的标题
const pageTitle = computed(() => {
  if (typeof curTagObject.value === 'object' && curTagObject.value !== null) {
    return parseI18nContent(curTagObject.value)
  }
  return curTagObject.value
})

const site = useSiteStore()

// 关键：多语言标签筛选逻辑更新
const posts = computed(() => {
  return site.postList.filter((post) => {
    if (post.tags) {
      // 筛选逻辑：post 的标签列表里是否包含当前 URL 参数代表的标签（多语言适配）
      const targetTagIdentifier = typeof curTagObject.value === 'object'
        ? curTagObject.value // 如果是对象，直接用对象比对
        : curTagObject.value // 如果是字符串，直接用字符串比对

      if (Array.isArray(post.tags)) {
        // 如果 post 的标签是数组
        return post.tags.some(postTag => {
          // 比较 parseI18nContent 处理后的值
          return parseI18nContent(postTag) === parseI18nContent(targetTagIdentifier);
        });
      } else {
        // 如果 post 的标签是单个字符串或对象
        // 比较 parseI18nContent 处理后的值
        return parseI18nContent(post.tags) === parseI18nContent(targetTagIdentifier);
      }
    }
    return false
  })
})

const collapse = ref()
const { show } = useInvisibleElement(collapse)

// 修改 displayTag 函数，传递 parseI18nContent 处理后的标签名字符串
function displayTag(tag: string | I18nContent) {
  const tagParam = typeof tag === 'object' ? encodeURIComponent(JSON.stringify(tag)) : encodeURIComponent(tag);
  router.push({
    query: {
      tag: tagParam,
    },
  })

  show()
}

const title = usePostTitle(frontmatter)

// 修改 tagArr 的计算逻辑
const tagArr = computed(() => {
  // 创建一个 Map 来存储合并后的标签
  const mergedTags = new Map<string, { name: any, count: number }>();
  
  // 遍历原始标签
  allTags.value.forEach((data, name) => {
    // 获取当前语言的标签名
    const displayName = parseI18nContent(name);
    
    // 如果这个显示名已经存在，合并计数
    if (mergedTags.has(displayName)) {
      const existing = mergedTags.get(displayName)!;
      existing.count += data.count;
    } else {
      // 否则创建新条目
      mergedTags.set(displayName, {
        name,  // 保存原始标签名（可能是对象）
        count: data.count
      });
    }
  });
  
  // 转换为数组并排序
  return Array.from(mergedTags.entries())
    .map(([displayName, { name, count }]) => ({
      name,  // 保存原始标签名
      count,
      displayName  // 保存显示用的标签名
    }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
});

// use flex to fix `overflow-wrap: break-words;` not working in Safari
</script>

<template>
  <YunLayoutWrapper>
    <YunLayoutLeft />

    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-header>
          <YunPageHeader
            :title="title || t('menu.tags')"
            :icon="frontmatter.icon || 'i-ri-tag-line'"
            :color="frontmatter.color"
            :page-title-class="frontmatter.pageTitleClass"
          />
        </template>
        <template #main-content>
          <Transition
            enter-active-class="animate-fade-in animate-duration-400"
            appear
          >
            <div class="yun-text-light" text="center" p="2">
              {{ t('counter.tags', tagArr.length) }}
            </div>
          </Transition>

          <div class="justify-center items-end" flex="~ wrap" gap="1">
            <YunLayoutPostTag
              v-for="(tag, i) in tagArr"
              :key="tag.displayName"
              :i="i"
              :title="tag.displayName"
              :count="tag.count"
              :style="getTagStyle(tag.count)"
              @click="displayTag(tag.name)"
            />
          </div>

          <RouterView />
        </template>

        <template #main-nav-before>
          <YunCard v-if="curTagObject" ref="collapse" m="t-4" w="full">
            <YunPageHeader :title="pageTitle" icon="i-ri-hashtag" />
            <YunPostCollapse w="full" m="b-4" p="x-20 lt-sm:x-5" :posts="posts" />
          </YunCard>
        </template>
      </component>
    </RouterView>

    <YunLayoutRight />
  </YunLayoutWrapper>

  <YunFooter />
</template> 