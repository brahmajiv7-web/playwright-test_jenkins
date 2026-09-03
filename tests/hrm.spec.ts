import { test } from '@playwright/test';
 
 test('hrm', async ({ page }) =>
    {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        let usernameinputbox = await page.locator("//input[@name='username']");
        let actualvisbletext = await usernameinputbox.isVisible()
        console.log("actualvisbletext : " +actualvisbletext);
 
        if(actualvisbletext)
        {
            console.log("inputbox is displayed");
        }
        else
        {
            console.log("inputbox is not displayed");
        }
 
        let actualEnable = await usernameinputbox.isEnabled();
        console.log("actualEnable : " +actualEnable);
 
        if(actualEnable)
        {
            console.log("inputbox is Enabled");
        }
        else
        {
            console.log("inputbox is not Enabled");
        }
       
        let actualwatermarks = await usernameinputbox.getAttribute('placeholder');
        let expectedwatermarks = 'username';
        console.log("actualwatermarks : " +actualwatermarks);
 
 
        if(actualwatermarks===expectedwatermarks)
        {
            console.log("get the inputbox watermark")
        }
        else
        {
            console.log("not get the inputbox watermark")
        }
       
        await usernameinputbox.fill('brahmajiv7@gmail.com')
 
        let actualEnterdData = await usernameinputbox.inputValue();
        let expectedEnterData = 'brahmajiv7@gmail.com';
        console.log("actualEnterdData : " +actualEnterdData);
 
 
        if(actualEnterdData===expectedEnterData)
        {
            console.log("entered the validData")
        }
        else
        {
            console.log('not enterd the validData')
        }        
 
 
    });
 