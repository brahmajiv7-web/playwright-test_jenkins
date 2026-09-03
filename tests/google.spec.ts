import { test } from '@playwright/test';
 
 test('get started link', async ({ page }) => {
    await page.goto("https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https://myaccount.google.com/?hl%3Den%26utm_source%3DOGB%26utm_medium%3Dact%26gar%3DWzJd&ec=GAlAwAE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1630907727:1788273471838462");
    await page.locator("//a[@href='https://support.google.com/chrome/answer/6130773?hl=en']").click();
    //await page.waitForTimeout(5000);
    let actualGetText = await page.locator("//h1[text()='Browse Chrome as a guest']").innerText();
    
    let expectedGetText = 'Browse Chrome as a guest';
    console.log("actualGetText : " +actualGetText);
    if(actualGetText===expectedGetText)
    {
        console.log("GetText is matching")
    }else{
        console.log("GetText is not matching")
    }
 
 });