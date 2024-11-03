import { test, expect } from '@playwright/test'

test('ページ表示のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/sample')
  await expect(page).toHaveTitle('最初のページ')
  await expect(page.getByRole('heading')).toHaveText('Playwright')
  await expect(page.getByRole('button')).toHaveText('ボタン')
  await expect(page.getByRole('button', { name: /ボタン/ })).toBeVisible()
})

test('ページ遷移のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/sample')
  await page.getByRole('link', { name: 'TOP' }).click()
  await expect(page).toHaveTitle('てけブログ | TOP')
})

test('リスト取得のテスト', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright/sample')
  await expect(
    page.getByRole('listitem').filter({ hasText: /赤/ }),
  ).toBeVisible()
  await expect(
    page.getByRole('listitem').filter({ hasText: /青/ }),
  ).toBeVisible()
  await expect(
    page.getByRole('listitem').filter({ hasText: /黄/ }),
  ).toBeVisible()
  // await expect(
  //   page.getByRole('listitem').filter({ hasText: /緑/ }),
  // ).toBeHidden()
})
