import { test, expect } from '@playwright/test'

test('ページ表示のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/sample')
  await expect(page).toHaveTitle('最初のページ')
  await expect(page.getByRole('heading')).toHaveText('Playwright')
  await expect(page.getByRole('button', { name: /ボタン/ })).toBeVisible()
})

test('ページ遷移のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/sample')
  await page.getByRole('link', { name: 'TOP' }).click()
  await expect(page).toHaveTitle('てけブログ | TOP')
})
