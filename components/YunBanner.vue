<script lang="ts" setup>
import { sleep } from 'valaxy'
import { onMounted } from 'vue'
import YunBanner from 'valaxy-theme-yun/components/YunBanner.vue'

onMounted(async () => {
  await sleep(8000) // 保留自定义展示时间
})
</script>

<template>
  <YunBanner />
</template> 