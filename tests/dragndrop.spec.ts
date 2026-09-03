import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/");
 
    let sourcebutton = await page.locator("//div[@id='draggable']");
    let target = await page.locator("//div[@id='droppable']");
    await page.waitForTimeout(4000);
    await sourcebutton.dragTo(target);
    await page.waitForTimeout(4000);
 
 });