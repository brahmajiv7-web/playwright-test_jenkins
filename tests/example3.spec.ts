import { test, expect } from '@playwright/test';
test('test3', async ({ page }) => {
   await page.goto('https://gmail.com/');
   //await page.locator("input[id='identifierId']").fill('RBG technologies');
   //await page.locator("input[class='whsOnd zHQkBf'][aria-label='Email or phone']").fill('RBG technologies');
   //await page.locator("#identifierId").fill('brahmajiv7@gmail.com');
   //await page.locator(".whsOnd.zHQkBf").fill('brahmajiv7@gmail.com');//matching for 2 elements
   //await page.locator(".whsOnd.zHQkBf").nth(0).fill('brahmajiv7@gmail.com'); 
   //await page.locator("input[id^='identif']").fill('brahmajiv7@gmail.com');
   //await page.locator("input[id$='fierId']").fill('brahmajiv7@gmail.com');
   //await page.locator("input[id*='fier']").fill('brahmajiv7@gmail.com');
   //await page.locator('/html/body/div[2]/div[1]/div[1]/div[2]/c-wiz/main/div[2]/div/div/div[1]/span/section/div/div/div[1]/div[1]/div[1]/div/div[1]/input').fill('brahmajiv7@gmail.com');
   //await page.locator("//input[@id='identifierId']").fill('brahmajiv7@gmail.com');
   //await page.locator("//input[@class='whsOnd zHQkBf'][@name='identifier']").fill('brahmajiv7@gmail.com');
  
   let actualText = await page.locator("//span[text()='Sign in']").innerText();

   let expectedText = "Sign in";

  if(actualText === expectedText){
    console.log("Test Passed");
  }
  else{
    console.log("Test Failed");
  }
});