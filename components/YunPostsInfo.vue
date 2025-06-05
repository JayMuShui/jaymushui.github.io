<script lang="ts" setup>
import type { CategoryList } from 'valaxy'
import { useCategories, useSiteStore, useTags } from 'valaxy'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { parseI18nContent } from '../utils/i18n'

const { t } = useI18n()
const site = useSiteStore()
const categories = useCategories()
const tags = useTags()

// 合并多语言分类
const mergedCategories = computed(() => {
  const merged = new Map<string, CategoryList>();
  for (const [key, value] of categories.value.children) {
    const displayName = parseI18nContent(key);
    if (merged.has(displayName)) {
      // 合并计数
      const existing = merged.get(displayName)!;
      existing.total += value.total;
      // 合并 children（如有子分类）
      if (value.children && existing.children) {
        for (const [childKey, childValue] of value.children) {
          existing.children.set(childKey, childValue);
        }
      }
    } else {
      // 深拷贝，避免引用问题
      merged.set(displayName, {
        ...value,
        name: displayName,
        total: value.total,
        // children 也要新建 Map
        children: value.children ? new Map(value.children) : new Map(),
      });
    }
  }
  return merged;
});

// 合并多语言标签
const mergedTags = computed(() => {
  const merged = new Map<string, { count: number, name: string }>();
  for (const [key, value] of tags.value) {
    const displayName = parseI18nContent(key);
    if (merged.has(displayName)) {
      // 合并计数
      const existing = merged.get(displayName)!;
      existing.count += value.count;
    } else {
      merged.set(displayName, {
        ...value,
        name: displayName,
        count: value.count,
      });
    }
  }
  return merged;
});
</script>

<template>
  <nav class="site-nav" text-xl mt-2>
    <YunPostClassifyNavItem
      to="/archives/"
      icon="i-ri-archive-line"
      active-icon="i-ri-archive-fill"
      :title="t('menu.archives')"
      :total="site.postList.length"
    />
    <YunPostClassifyNavItem
      to="/categories/"
      icon="i-ri-folder-2-line"
      active-icon="i-ri-folder-2-fill"
      :title="t('menu.categories')"
      :total="mergedCategories.size"
    />
    <YunPostClassifyNavItem
      to="/tags/"
      icon="i-ri-price-tag-3-line"
      active-icon="i-ri-price-tag-3-fill"
      :title="t('menu.tags')"
      :total="mergedTags.size"
    />
  </nav>
</template> 