import { test, expect } from '@playwright/test';
 
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 
 
  await expect(page).toHaveTitle(/Playwright/);
});
 
test('get started link', async ({ page }) => {
  await page.goto('https://gmail.com/');
 
 
  await page.locator("input[id='identifierId']").fill('RBG technologies');
 
  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});