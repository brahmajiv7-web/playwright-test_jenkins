import {test} from '@playwright/test';
test('button',async ({page}) => 
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000);
    let loginbutton = await page.locator("//button[@type='submit']");
    
    let actualvisibletext = await loginbutton.isVisible();
    console.log("actualvisibletext : " +actualvisibletext);

    if(actualvisibletext)
    {
        console.log("button is displayed");
    }
    else
    {
        console.log("button is not displayed");
    }

    let actualenable = await loginbutton.isEnabled();
    console.log("actualenable : " +actualenable);

    if(actualenable)
    {
        console.log("button is enabled")
    }else{
        console.log("button is not enabled")
    }

    let actualbuttonname = await loginbutton.innerText();
    let expectedbuttonname = 'Login';
    console.log("actualbuttonname :" + actualbuttonname);

    if(actualbuttonname ===expectedbuttonname)
    {
        console.log("button name is verified successfully")
    }

    else
    {
        console.log("button name is not verified successfully")
    }
    
    await loginbutton.click();
    console.log("button is clicked")
});
