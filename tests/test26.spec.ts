import { test } from '@playwright/test';
 
 test('test 26', async ({ page }) => {
    
    await page.goto('http://only-testing-blog.blogspot.com/2013/09/test.html');
    let textvalue= await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[1]")
    let textvalue1 = await textvalue.innerText();
    console.log("textvalue1 :"+ textvalue1);
    
    let textvalue2= await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[2]").innerText();
    console.log(textvalue2);
    let textvalue3 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[3]").innerText();
    console.log(textvalue3);
    let textvalue4 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[4]").innerText();
    console.log(textvalue4);
    let textvalue5 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[5]").innerText();
    console.log(textvalue5);
    let textvalue6 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[1]/td[6]").innerText();
    console.log(textvalue6);
    let textvalue12 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[1]").innerText();
    console.log(textvalue12);
    let textvalue7= await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[2]").innerText();
    console.log(textvalue7);
    let textvalue8 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[3]").innerText();
    console.log(textvalue8);
    let textvalue9 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[4]").innerText();
    console.log(textvalue9);
    let textvalue10 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[5]").innerText();
    console.log(textvalue10);
    let textvalue11 = await page.locator("//*[@id='post-body-6522850981930750493']/div[1]/table/tbody/tr[2]/td[6]").innerText();
    console.log(textvalue11);
 });