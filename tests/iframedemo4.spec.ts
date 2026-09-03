import { test } from '@playwright/test';

test('get started link', async ({ page }) => {

    await page.goto("file:///C:/Users/bunty/Downloads/IframeTest1%203%202%20(1).html");
    const iframepage = page.frameLocator("//iframe[@name='iframe1']");

    const date1 = await iframepage.locator("//span[text()='Saturday, 3 January 2015']").innerText();
    console.log(date1);
});