import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
   await page.goto("http://only-testing-blog.blogspot.com/2015/01/iframe1.html");
   let text= await page.locator("//span[text()='Saturday, 31 January 2015']");
   let visibletext = await text.innerText();
   console.log("visibletext is : "+ visibletext);

 });