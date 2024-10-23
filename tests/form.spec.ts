import { test, expect } from '@playwright/test'

test('フォーム操作のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/form')
  await page.getByPlaceholder(/1人目の名前を入力/).click()
  await page.getByPlaceholder(/1人目の名前を入力/).press('A')
  await page.getByPlaceholder(/2人目の名前を入力/).click()
  await page.getByPlaceholder(/2人目の名前を入力/).fill('B')
  await page.getByRole('button', { name: /シャッフル/ }).click()
  await expect(page.getByRole('status', { name: /結果 / })).toHaveText(
    /(A → B) | (B → A)/,
  )
})