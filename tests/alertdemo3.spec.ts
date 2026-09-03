import { test } from '@playwright/test';
 
 test('Gmail Test', async ({ page }) => {
    console.log("start")
    await page.goto('https://www.meghanabus.in/manage-bookings.html');
 
    await page.on('dialog', async dialog => {
        //await dialog.accept()
        await dialog.dismiss();
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);
    })
 
    await page.locator("//button[text()='Search']").click();
    await page.waitForTimeout(4000);
    await page.pause();
})