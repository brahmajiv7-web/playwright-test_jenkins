import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
    await page.goto("http://only-testing-blog.blogspot.com/2015/01/iframe1.html");
    let iframepage = await page.frameLocator("//iframe[@id='frame1']")
 
    let actualGetText = await iframepage.locator("//*[@id='Blog1']/div[1]/div/h2/span").innerText();
    let expectedGetText = 'Saturday, 3 January 2015';
    console.log("actualGetText : "+actualGetText);
    if(actualGetText===expectedGetText)
    {
        console.log("GetText is matching")
    }
    else
    {
        console.log("GetText is not matching")
    }
 
 });