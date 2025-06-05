<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useRouter } from 'vue-router'
import { parseI18nContent } from '../utils/i18n'

defineProps<{
  i: number
  categoryItem: Post
  parentKey: string
}>()

const router = useRouter()

function jumpToPost(post: Post) {
  if (post.path)
    router.push(post.path)
}
</script>

<template>
  <div
    class="post-item inline-flex items-center cursor-pointer w-full gap-2 px-3 py-2 rounded"
    hover="bg-black/5"
    @click="jumpToPost(categoryItem)"
  >
    <span class="post-title inline-flex items-center gap-2 w-full">
      <span>{{ parseI18nContent(categoryItem.title) }}</span>
    </span>
  </div>
</template> 