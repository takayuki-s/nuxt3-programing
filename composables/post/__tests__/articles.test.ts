import { expect, test } from 'vitest'
import { omitText } from '../articles'

test('truncateString should truncate the string correctly', () => {
  // Test case 1: string length is less than maxLength
  expect(omitText('Short string', 20)).toBe('Short string')

  // Test case 2: string length is equal to maxLength
  expect(omitText('Exactly 10', 10)).toBe('Exactly 10')

  // Test case 3: string length is greater than maxLength
  expect(omitText('This is a long string', 10)).toBe('This is a …')
})
