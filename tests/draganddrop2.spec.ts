import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/");
    let iframepage = await page.frameLocator("//iframe[@src='/resources/demos/droppable/default.html']")
 
    let sourcebutton = await iframepage.locator("//div[@id='draggable']");
    let target = await iframepage.locator("//div[@id='droppable']");
    
    await sourcebutton.dragTo(target);
 
 });