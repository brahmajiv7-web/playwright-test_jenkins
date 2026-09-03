import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
   test.setTimeout(60000);
 
    await page.goto("https://demo.guru99.com/test/newtours/reservation.php");
    let dropDown =  await page.locator("//select[@name='toMonth']");
 
    //await dropDown.selectOption("May");// Visible Text
    //await dropDown.selectOption({label:"May"});// lable:"Visible Text"
    //await dropDown.selectOption({value:"5"});// value:"value of value attribute"
    await dropDown.selectOption({index:4}); // index:4(Index start with 0)
 
 
 });