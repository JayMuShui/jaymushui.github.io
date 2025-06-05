import { formatDate } from 'valaxy'

/**
 * 格式化时间戳为 'YYYY-MM-DD HH:mm:ss' 格式
 * @param date 时间戳或日期对象
 * @returns 格式化后的日期字符串
 * 
 * @example
 * formatTimestamp(new Date()) // 返回当前时间的格式化字符串
 */
export function formatTimestamp(date: string | number | Date): string {
  return formatDate(date, {
    template: 'YYYY-MM-DD HH:mm:ss',
  })
} 