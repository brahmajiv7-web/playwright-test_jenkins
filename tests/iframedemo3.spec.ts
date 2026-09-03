import { test } from '@playwright/test';
 test('get started link', async ({ page }) => {
    await page.goto("file:///C:/Users/bunty/Downloads/IframeTest1%203%202%20(1).html");
    console.log("page loaded");
    let iframepage = await page.frameLocator("//iframe[@src='http://only-testing-blog.blogspot.com/2015/01/iframe1.html']");
    let iframepage2 = await iframepage.frameLocator("//iframe[@src='http://only-testing-blog.blogspot.in/2015/01/table-with-checkbox.html']");
    let date1 = await iframepage2.locator("//span[text()='Saturday, 3 January 2015']").innerText();
    console.log(date1);
    await iframepage.locator("//input[@name='Town']").fill(date1);
    let town = await iframepage.locator("//input[@name='Town']").inputValue();
    console.log(town);
    if(town===date1){
        console.log("matching")
    }else{
        console.log("not matching")
    }

    let date2=await iframepage.locator("//span[text()='Saturday, 31 January 2015']").innerText();
    console.log(date2);

    let iframepage3 = await page.frameLocator("//iframe[@name='iframe2']");

    await iframepage3.locator("//input[@name='userName']").fill(date2);

    let username = await iframepage3.locator("//input[@name='userName']").inputValue();

    console.log(username);
    if(username===date2){
        console.log("matching")
    }else{
        console.log("not matching")
    }
    
 }); 