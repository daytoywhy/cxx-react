/**
 * 自动补零
 * @param str 
 * @returns 
 */
 function padLeftZero(str: string | any[]) {
  return ('00' + str).substr(str.length)
}

/**
 * 正则格式化日期
 * @param date 
 * @param dateFormat 
 * @returns 
 */
export function formatDate(date: Date, dateFormat: string) {
  /**
   * 单独格式化年份，根据y的字符数量输出年份
      例如：yyyy => 2022
            yy => 22
   */
  if (/(y+)/.test(dateFormat)) {
    dateFormat = dateFormat.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  /**
   * 格式化时间
   */
  const o: any = {
    'm+': date.getMonth() + 1,
    'd+': date.getDay(),
    'h+': date.getHours(),
    'i+': date.getMinutes(),
    's+': date.getSeconds()
  }
  /**
   * 根据正则格式匹配日期，并将时间替换
   */
  for (const k in o) {
    if (new RegExp(`(${k})`).test(dateFormat)) {
      const str: string = o[k] + ''
      dateFormat = dateFormat.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return dateFormat
}