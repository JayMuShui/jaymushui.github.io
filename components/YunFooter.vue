<template>
  <footer
    flex="~ col"
    class="relative yun-footer va-footer px-4 py-4 pt-0 text-$va-c-text-light w-full mt-14"
    bg="white dark:$va-c-bg-soft"
    text="center sm"
  >
    <YunCloud v-if="themeConfig.footer.cloud?.enable" class="absolute top--10 left-0 right-0" />

    <div v-if="themeConfig.footer.beian?.enable && themeConfig.footer.beian.icp" class="beian" m="y-2">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
        {{ themeConfig.footer.beian.icp }}
      </a>
    </div>

    <div class="copyright flex justify-center items-center gap-2" p="1">
      <span>
        &copy;
        <template v-if="!isThisYear">
          {{ themeConfig.footer.since }} -
        </template>
        {{ year }}
      </span>

      <a
        v-if="themeConfig.footer.icon?.enable"
        class="inline-flex"
        :class="themeConfig.footer.icon.animated ? 'animate-pulse' : ''"
        :href="footerIcon.url"
        target="_blank"
        :title="footerIcon.title"
      >
        <div :class="footerIcon.name" />
      </a>
      <span>{{ siteConfig.author.name }}</span>
    </div>

    <!-- 运营时间显示（自定义增强） -->
    <div class="live-time" m="2">
      <span class="live-time-prefix">{{ t('footer.live_time.prefix') }}</span>
      <span class="live-time-content">
        {{ liveTimeDisplay }}
      </span>
      <span class="live-time-suffix">{{ t('footer.live_time.suffix') }}</span>
    </div>

    <!-- 不蒜子统计（自定义增强） -->
    <div class="busuanzi" m="2">
      <span>{{ t('footer.statistics.total_views') }}：<span id="busuanzi_value_site_pv"></span></span>
      <span class="mx-2">|</span>
      <span>{{ t('footer.statistics.visitors') }}：<span id="busuanzi_value_site_uv"></span></span>
    </div>

    <div v-if="themeConfig.footer.powered" class="powered" m="2">
      <span v-html="poweredHtml" />
      <span mx-1>|</span>
      <span>
        <span>{{ t('footer.theme') }}</span>
        <span mx-1>-</span>
        <a :href="themeConfig.pkg.repository.url" :title="themeConfig.pkg.name" target="_blank">{{ capitalize(config.theme) }}</a>
        <span class="ml-1 op-60">v{{ themeConfig.pkg.version }}</span>
      </span>
    </div>

    <slot />

    <div class="yun-footer-gradient" :style="gradientStyles" />
  </footer>
</template>

<script lang="ts" setup>
import { useSiteConfig, useValaxyConfig, useValaxyDark, useThemeConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'
import pkg from 'valaxy/package.json'
import { capitalize, computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScriptTag } from '@vueuse/core'

// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
const { isDark } = useValaxyDark()
const gradientStyles = computed(() => {
  if (isDark.value) {
    return {
      '--gradient-from': '0 0 0',
      '--gradient-to': '0 0 0',
    }
  }
  return {
    '--gradient-from': '161 196 253',
    '--gradient-to': '194 233 251',
  }
})

const { t } = useI18n()
const config = useValaxyConfig()
const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig<ThemeConfig>()
const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const poweredHtml = computed(() => t('footer.powered', [`<a href="${pkg.repository.url}" target="_blank" rel="noopener">Valaxy</a> <span class="op-60">v${pkg.version}</span>`]))
const footerIcon = computed(() => themeConfig.value.footer.icon || {
  url: pkg.repository.url,
  name: 'i-ri-cloud-line',
  title: pkg.name,
})

// 运营时间相关代码
const liveTimeDisplay = ref('')
const startTime = '2021-07-08T00:00:00'

function updateLiveTime() {
  const start = new Date(startTime)
  const now = new Date()
  const timeDiff = now.getTime() - start.getTime()
  
  const msPerMinute = 60 * 1000
  const msPerHour = 60 * msPerMinute
  const msPerDay = 24 * msPerHour
  
  const passDay = Math.floor(timeDiff / msPerDay)
  const passHour = Math.floor((timeDiff % msPerDay) / msPerHour)
  const passMinute = Math.floor((timeDiff % msPerHour) / msPerMinute)
  const passSecond = Math.floor((timeDiff % msPerMinute) / 1000)
  
  liveTimeDisplay.value = `${passDay} ${t('footer.live_time.days')} ${passHour} ${t('footer.live_time.hours')} ${passMinute} ${t('footer.live_time.minutes')} ${passSecond} ${t('footer.live_time.seconds')}`
}

onMounted(() => {
  updateLiveTime()
  setInterval(updateLiveTime, 1000)
})

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<style lang="scss">
.yun-footer {
  letter-spacing: 0.05rem;
  line-height: 1.8;
}

.yun-footer-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 300px;
  z-index: 999;
  pointer-events: none;
  background: linear-gradient(to right,rgb(var(--gradient-from) / 0.2) 0,rgb(var(--gradient-to) / .2) 100%);
  mask-image: linear-gradient(#fff0,#000 70%);
  animation: fade-in 2s;
}

.live-time {
  font-size: 0.875rem;
  opacity: 0.8;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }

  &-prefix {
    margin-right: 0.5rem;
  }

  &-suffix {
    margin-left: 0.5rem;
    opacity: 0.8;
  }
}

.busuanzi {
  font-size: 0.875rem;
  opacity: 0.8;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
}
</style> 