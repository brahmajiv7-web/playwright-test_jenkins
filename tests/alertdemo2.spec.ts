import { test } from '@playwright/test';
 
 test('Gmail Test', async ({ page }) => {
    console.log("start")
    await page.goto('https://www.meghanabus.in/manage-bookings.html');
 
    await page.on('dialog', async dialog => console.log(""));
 
    await page.locator("//button[text()='Search']").click();
   
    await page.pause();
})