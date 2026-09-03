import {test} from '@playwright/test';
test('dropdown',async ({page}) =>{

    await page.goto('https://www.meghanabus.in/manage-bookings.html');
    await page.locator("//a[@href='manage-bookings.html']").click();
    await page.waitForTimeout(4000);
    await page.locator("//button[text()='Search']").click();
    await page.waitForTimeout(4000);
    await page.locator("//button[text()='Search']").innerText();

});