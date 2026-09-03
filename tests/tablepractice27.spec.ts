import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
   await page.goto("http://only-testing-blog.blogspot.com/2013/09/test.html");
   //let getText = await page.locator("//td[text()='11']").innerText();
   await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[1]")
 
   let rows = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr")
   let rowscount = rows.count();
 
   let coloumn = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td")
   let coloumncount = coloumn.count();
 
   for(let i=1; i<=3; i++ )
   {
      for(let j=1; j<=6; j++)
      {
         let data=await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr["+i+"]/td["+j+"]").innerText();
         console.log("data : "+data);
      }
   }
 
 
 
 });