import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // 测试页面能否正确打开，并展示正确的标题
  await page.goto('http://127.0.0.1:3000/')
  await expect(page.getByRole('heading', { name: '精神时光屋' })).toBeVisible()

  // 测试页面点击外部链接能否正确跳转
  const newPagePromise = page.waitForEvent('popup')
  await page.getByRole('link').first().click()
  const newPage = await newPagePromise
  await newPage.waitForLoadState('domcontentloaded')
  await expect(newPage).toHaveURL('https://github.com/jrainlau')

  // 测试页面的列表能否正确展示
  const listItemLength = (await page.getByRole('listitem').all()).length
  await expect(listItemLength).toBeGreaterThan(0)

  // 测试点击文章标题后能否正确跳转到文章详情页
  await page.getByRole('listitem').first().click()
  await page.waitForURL(() => true)
  await expect(page).toHaveURL(/article\?id=/)
  await expect(page.getByRole('link', { name: '原文链接' })).toBeVisible()
})
