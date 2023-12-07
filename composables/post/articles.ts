export const omitText = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str
  } else {
    return str.substring(0, maxLength) + '…'
  }
}

export const formatDate = (date: string) => {
  const newDate = new Date(date)

  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1 // 月は0から始まるため、+1する
  const day = newDate.getDate()
  const dayIndex = newDate.getDay()
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']

  // 変換後の日付文字列を作成
  const formattedDate =
    year + '/' + month + '/' + day + ' (' + daysOfWeek[dayIndex] + ')'

  return formattedDate
}

const escapeHtml = (html: string) => {
  return html.replace(/[&<"'>]/g, function (match) {
    switch (match) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&#39;'
      default:
        return match
    }
  })
}

export const generateDynamicHTMLString = (dynamicContent: string) => {
  const sanitizedContent = escapeHtml(dynamicContent)
  const htmlString = `<div>${sanitizedContent}</div>`
  return htmlString
}
