import { test, expect } from '@playwright/test';
test('test3', async ({ page }) => {
   await page.goto('https://gmail.com/');  
   await page.locator("//input[@id='identifierId']");
   await page.locator("//input[@id='identifierId']").isVisible();
   await page.locator("//input[@id='identifierId']").isEnabled();
   await page.locator("//input[@aria-label='Email or phone']").isVisible();
   await page.locator("//input[@id='identifierId']").fill("brahmajiv7@gmail.com");
   //await page.locator("//input[@id='identifierId']").toHaveValue("brahmajiv7@gmail.com");


});