import { test } from '@playwright/test';
 
 test('hyr alert', async ({ page }) => {
    
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
    //await page.waitForTimeout(4000);
    await page.on('dialog', async dialog => {
        //await dialog.accept()
        await dialog.dismiss();
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);

    })
    await page.locator("//button[@id='alertBox']").click();
    await page.waitForTimeout(4000);

    let outputtext = await page.locator("//div[@id='output']").innerText();
    console.log("outputtext : " + outputtext);
    await page.pause();
});