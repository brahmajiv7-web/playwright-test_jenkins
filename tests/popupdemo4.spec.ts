import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
      await page.goto('https://gmail.com/');
    let link = await page.locator("//a[text()='Learn more about using Guest mode']");
    await link.click();
    await page.waitForTimeout(3000);
    const pages = await page.context().pages();
    let childWindow = pages[1]
    await page.bringToFront();
    await page.waitForTimeout(4000);
    await childWindow.bringToFront();
 
    let lable = await childWindow.locator("//h1[text()='Browse Chrome as a guest']");
    let labledata = await lable.innerText();
    console.log(labledata);
 
 
 });