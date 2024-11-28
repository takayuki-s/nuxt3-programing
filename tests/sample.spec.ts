import { test, expect } from '@playwright/test'

test('ページ表示のテスト', async ({ page }) => {
  await page.goto('/playwright/sample')
  await expect(page).toHaveTitle('最初のページ')
  await expect(page.getByRole('heading')).toHaveText('Playwright')
  await expect(page.getByRole('button', { name: /ボタン/ })).toBeVisible()
})

test('ページ遷移のテスト', async ({ page }) => {
  await page.goto('/playwright/sample')
  await page.getByRole('link', { name: 'TOP' }).click()
  await expect(page).toHaveTitle('てけブログ | TOP')
})

test('リスト取得のテスト', async ({ page }) => {
  await page.goto('/playwright/sample')
  await expect(
    page.getByRole('listitem').filter({ hasText: /赤/ }),
  ).toBeVisible()
  await expect(
    page.getByRole('listitem').filter({ hasText: /青/ }),
  ).toBeVisible()
  await expect(
    page.getByRole('listitem').filter({ hasText: /黄/ }),
  ).toBeVisible()
  await expect(
    page.getByRole('listitem').filter({ hasText: /緑/ }),
  ).toBeHidden()
})

test('段落取得のテスト', async ({ page }) => {
  await page.goto('/playwright/sample')
  await expect(page.locator('.paragraph-container p').first()).toHaveText(
    /最初の段落/,
  )
  await expect(page.locator('.paragraph-container p').nth(1)).toHaveText(
    /中の段落/,
  )
  await expect(page.locator('.paragraph-container p').last()).toHaveText(
    /最後の段落/,
  )
})

test('スクショテスト', async ({ page }) => {
  await page.goto('/playwright/sample')
  // await page.screenshot({ path: 'top.jpg', fullPage: true })
})
