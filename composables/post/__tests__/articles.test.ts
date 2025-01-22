import { describe, expect, test } from 'vitest'
import { omitText, formatDate, generateDynamicHTMLString } from '../articles'

describe('omitText', () => {
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
  test('omitText should return truncated string with ellipsis for long input', () => {
    const result = omitText('This is a long string', 10)
    expect(result).toBe('This is a …')
  })
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
  test('formatDate should return "Invalid Date" for invalid date input', () => {
    const result = formatDate('invalid-date')
    expect(result).toBe('NaN/NaN/NaN (undefined)')
  })
})

const daysOfWeekTestCases = [
  { date: '2023-01-01', expected: '2023/1/1 (日)' }, // Sunday (index 0)
  { date: '2023-01-02', expected: '2023/1/2 (月)' }, // Monday
  { date: '2023-01-03', expected: '2023/1/3 (火)' }, // Tuesday
  { date: '2023-01-04', expected: '2023/1/4 (水)' }, // Wednesday
  { date: '2023-01-05', expected: '2023/1/5 (木)' }, // Thursday
  { date: '2023-01-06', expected: '2023/1/6 (金)' }, // Friday
  { date: '2023-01-07', expected: '2023/1/7 (土)' }, // Saturday
]

describe('formatDate - all day indices', () => {
  daysOfWeekTestCases.forEach(({ date, expected }) => {
    test(`should format ${date} correctly as ${expected}`, () => {
      expect(formatDate(date)).toBe(expected)
    })
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

  test('generateDynamicHTMLString should handle content without special characters', () => {
    const result = generateDynamicHTMLString('No special characters')
    expect(result).toBe('<div>No special characters</div>')
  })

  test('escapeHtml should handle strings with no special characters', () => {
    const input = 'plain text'
    const result = generateDynamicHTMLString(input)
    expect(result).toBe('<div>plain text</div>')
  })

  test('should handle strings with no special characters', () => {
    const result = generateDynamicHTMLString('plain text')
    expect(result).toBe('<div>plain text</div>')
  })

  test('should handle numeric strings without escaping', () => {
    const result = generateDynamicHTMLString('12345')
    expect(result).toBe('<div>12345</div>')
  })

  test('should handle special but non-matching characters', () => {
    const result = generateDynamicHTMLString('abc@def#ghi')
    expect(result).toBe('<div>abc@def#ghi</div>') // '@'や'#'は変換されない
  })
})
