import { test, expect } from '@playwright/test'

test('フォーム操作のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/form')
  await page.getByRole('textbox', { name: /1人目 / }).fill('A')
  await page.getByRole('textbox', { name: /2人目 / }).fill('B')
  await page.getByRole('button', { name: /シャッフル / }).click()
  await expect(page.getByRole('status', { name: /結果 / })).toHaveText(
    /(A → B) | (B → A)/,
  )
})
