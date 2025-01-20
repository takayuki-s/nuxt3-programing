import { describe, expect, test } from 'vitest'
import { omitText, formatDate, generateDynamicHTMLString } from '../articles'

test('omitText should truncate the string correctly', () => {
  // Test case 1: string length is less than maxLength
  expect(omitText('Short string', 20)).toBe('Short string')

  // Test case 2: string length is equal to maxLength
  expect(omitText('Exactly 10', 10)).toBe('Exactly 10')

  // Test case 3: string length is greater than maxLength
  expect(omitText('This is a long string', 10)).toBe('This is a …')
})

test('formatDate should format the date correctly', () => {
  const inputDateStr = '2023-12-01T06:55:50'
  const formattedDate = formatDate(inputDateStr)
  expect(formattedDate).toBe('2023/12/1 (金)')
})

// 追加のテストケースを追加することもできます

describe('formatDate', () => {
  test('formatDate should handle different input date strings', () => {
    const inputDateStr1 = '2023-01-15T12:30:00'
    const formattedDate1 = formatDate(inputDateStr1)
    expect(formattedDate1).toBe('2023/1/15 (日)')

    const inputDateStr2 = '2023-05-20T18:45:30'
    const formattedDate2 = formatDate(inputDateStr2)
    expect(formattedDate2).toBe('2023/5/20 (土)')
  })
  test('should format date correctly', () => {
    const result = formatDate('2025-01-20')
    expect(result).toBe('2025/1/20 (月)') // 曜日は日により変わる
  })
})

// generateDynamicHTMLString のテスト
describe('generateDynamicHTMLString', () => {
  test('should escape special HTML characters', () => {
    const input = '<div>"Hello" & \'world\'</div>'
    const result = generateDynamicHTMLString(input)
    expect(result).toBe(
      '<div>&lt;div&gt;&quot;Hello&quot; &amp; &#39;world&#39;&lt;/div&gt;</div>',
    )
  })

  test('should return an empty div for empty input', () => {
    const result = generateDynamicHTMLString('')
    expect(result).toBe('<div></div>')
  })
})
