import { test, expect } from '@playwright/test'

test('フォーム操作のテスト', async ({ page }) => {
  await page.goto('/playwright/form')
  await page.getByLabel(/1人目/).click()
  await page.getByLabel(/1人目/).press('A')
  await page.getByLabel(/2人目/).click()
  await page.getByLabel(/2人目/).fill('B')
  await page.getByRole('button', { name: 'シャッフル' }).click()
  await expect(page.getByLabel('結果')).toHaveText(/A → B|B → A/)
})

test('フォーム操作のテスト（3つver）', async ({ page }) => {
  await page.goto('/playwright/form')
  await page.getByPlaceholder(/1人目の名前を入力/).click()
  await page.getByPlaceholder(/1人目の名前を入力/).press('A')
  await page.getByPlaceholder(/2人目の名前を入力/).click()
  await page.getByPlaceholder(/2人目の名前を入力/).fill('B')
  await page.getByPlaceholder(/3人目の名前を入力/).click()
  await page.getByPlaceholder(/3人目の名前を入力/).fill('C')
  await page
    .locator('div')
    .filter({ hasText: /^シャッフル$/ })
    .click()
  await expect(page.getByLabel('結果')).toHaveText(
    /A → B|B → A|A → C|C → A|C → B|B → C/,
  )
})

test('チェックボックスのテスト', async ({ page }) => {
  await page.goto('/playwright/form')
  await page.getByRole('checkbox', { name: /Default/ }).check()
  const isChecked = await page
    .getByRole('checkbox', { name: /Default/ })
    .isChecked()
  expect(isChecked).toBe(true)
})

test('選択プルダウン', async ({ page }) => {
  await page.goto('/playwright/form')
  await page.getByPlaceholder('Placeholder...').first().click()
  await page.getByLabel('Show popup').first().click()
  await page.getByRole('option', { name: 'Apple', exact: true }).click()
  const selectedValue = await page.getByRole('combobox').first().inputValue()
  expect(selectedValue).toBe('Apple')
})

test('非活性ボタン', async ({ page }) => {
  await page.goto('/playwright/form')
  const button = await page.getByRole('button', { name: '非活性' })
  if (!button) {
    console.error('Button not found!')
  }
  await expect(button).toBeDisabled()
  const nextButton = await page.getByRole('button', { name: 'Disabled' })
  if (!nextButton) {
    console.error('nextButton not found!')
  }
  await expect(nextButton).toBeDisabled()
})
