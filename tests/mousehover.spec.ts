import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator("//span[@class='icp-nav-flag icp-nav-flag-in icp-nav-flag-lop']").hover();
 
 });