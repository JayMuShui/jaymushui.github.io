<script lang="ts" setup>
import { defineWebPage, useSchemaOrg } from '@unhead/schema-org/vue'
import { useCategories, useFrontmatter, usePostTitle, useSiteStore } from 'valaxy'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { parseI18nContent } from '../utils/i18n' // 确保这里的路径正确

const { t, locale } = useI18n()

const site = useSiteStore()
const frontmatter = useFrontmatter()

const route = useRoute()

// 关键：解码和解析 URL 参数
const curCategoryObject = computed(() => {
  const categoryParam = route.query.category as string
  if (categoryParam) {
    try {
      // 尝试解析为对象
      return JSON.parse(decodeURIComponent(categoryParam))
    } catch (e) {
      // 如果解析失败，说明是字符串分类，直接返回
      return decodeURIComponent(categoryParam)
    }
  }
  return '' // 默认值
})

// 用于 PageHeader 显示的标题
const pageTitle = computed(() => {
  if (typeof curCategoryObject.value === 'object' && curCategoryObject.value !== null) {
    // 直接调用 parseI18nContent，它会根据当前语言返回对应的值
    return parseI18nContent(curCategoryObject.value)
  }
  return curCategoryObject.value === 'Uncategorized' ? t('category.uncategorized') : curCategoryObject.value
})

const categories = useCategories()

const pageIcon = computed(() => {
  if (!frontmatter.value.icon)
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    frontmatter.value.icon = 'i-ri-folder-2-line'
  return frontmatter.value.icon
})

// 关键：多语言分类筛选逻辑更新
const posts = computed(() => {
  return site.postList.filter((post) => {
    if (post.categories && curCategoryObject.value !== 'Uncategorized') {
      // 筛选逻辑：post 的分类列表里是否包含当前 URL 参数代表的分类（多语言适配）
      const targetCategoryIdentifier = typeof curCategoryObject.value === 'object'
        ? curCategoryObject.value // 如果是对象，直接用对象比对
        : curCategoryObject.value // 如果是字符串，直接用字符串比对

      if (Array.isArray(post.categories)) {
        // 如果 post 的分类是数组
        return post.categories.some(postCat => {
          // 比较 parseI18nContent 处理后的值
          return parseI18nContent(postCat) === parseI18nContent(targetCategoryIdentifier);
        });
      } else {
        // 如果 post 的分类是单个字符串或对象
        // 比较 parseI18nContent 处理后的值
        return parseI18nContent(post.categories) === parseI18nContent(targetCategoryIdentifier);
      }
    }
    if (!post.categories && curCategoryObject.value === 'Uncategorized')
      return post.categories === undefined
    return false
  })
})

// 合并多语言分类
const mergedCategories = computed(() => {
  const merged = new Map<string, any>();
  for (const [key, value] of categories.value.children) {
    const displayName = parseI18nContent(key);
    if (merged.has(displayName)) {
      // 合并计数
      merged.get(displayName).total += value.total;
      // 合并 children（如有子分类）
      if (value.children && merged.get(displayName).children) {
        for (const [childKey, childValue] of value.children) {
          merged.get(displayName).children.set(childKey, childValue);
        }
      }
    } else {
      // 深拷贝，避免引用问题
      merged.set(displayName, {
        ...value,
        displayName,
        // children 也要新建 Map
        children: value.children ? new Map(value.children) : new Map(),
      });
    }
  }
  return merged;
});

const title = usePostTitle(frontmatter)

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])
</script>

<template>
  <YunLayoutWrapper>
    <YunLayoutLeft />

    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-header>
          <YunPageHeader
            :title="title || t('menu.categories')"
            :icon="pageIcon"
            :color="frontmatter.color"
            :page-title-class="frontmatter.pageTitleClass"
          />
        </template>
        <template #main-content>
          <Transition
            enter-active-class="animate-fade-in animate-duration-400"
            appear
          >
            <div text="center" class="yun-text-light" p="2">
              {{ t('counter.categories', mergedCategories.size) }}
            </div>
          </Transition>
          <YunCategories :categories="mergedCategories" />
          <RouterView />
        </template>

        <template #main-nav-before>
          <YunCard v-if="curCategoryObject" class="post-collapse-container" m="t-4" w="full">
            <YunPageHeader
              m="t-10"
              :title="pageTitle"
              icon="i-ri-folder-open-line"
            />
            <YunPostCollapse w="full" m="b-4" p="x-20 lt-sm:x-5" :posts="posts" />
          </YunCard>
        </template>
      </component>
    </RouterView>

    <YunLayoutRight />
  </YunLayoutWrapper>

  <YunFooter />
</template> 