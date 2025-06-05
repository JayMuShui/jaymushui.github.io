import { useI18n } from 'vue-i18n'

/**
 * 多语言内容接口
 */
export interface I18nContent {
  [key: string]: string
}

/**
 * 解析多语言内容
 * @param content 可能的多语言内容
 * @returns 当前语言对应的内容
 * 
 * @example
 * // 对象形式
 * parseI18nContent({ 'zh-CN': '中文', 'en': 'English' })
 * 
 * // 普通字符串
 * parseI18nContent('普通文本')
 */
export function parseI18nContent(content?: string | I18nContent | any): string {
  const { locale } = useI18n()

  if (!content) return ''
  
  // 1. 如果是对象
  if (typeof content === 'object' && content !== null) {
    // 优先使用当前语言
    if (content[locale.value]) {
      return content[locale.value]
    }
    // 其次使用中文
    if (content['zh-CN']) {
      return content['zh-CN']
    }
    // 最后使用第一个可用的语言
    const firstValue = Object.values(content)[0]
    return typeof firstValue === 'string' ? firstValue : ''
  }
  
  // 2. 如果是字符串，直接返回
  if (typeof content === 'string') {
    return content
  }
  
  // 3. 其他情况转换为字符串
  return String(content)
} 