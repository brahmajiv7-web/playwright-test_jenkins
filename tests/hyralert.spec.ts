import { test } from '@playwright/test';
 
 test('hyr alert', async ({ page }) => {
    
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
    //await page.waitForTimeout(4000);
    await page.on('dialog', async dialog => {
        //await dialog.accept()
        await dialog.dismiss();
        let alerttext= await dialog.message();
        console.log("alerttext : "+alerttext);

    })
    await page.locator("//button[@id='alertBox']").click();
    await page.waitForTimeout(4000);

    let outputtext = await page.locator("//div[@id='output']").innerText();
    console.log("outputtext : " + outputtext);
    await page.pause();
})

test('hyr alert2', async ({ page }) => {
    
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
    await page.on('dialog', async dialog => {
        //await dialog.accept()
        await dialog.accept();
        let alerttext1= await dialog.message();
        console.log("alerttext1 : "+ alerttext1);
    })
    
    await page.locator("//button[@id='confirmBox']").click();
    await page.waitForTimeout(4000);
    let outputtext = await page.locator("//div[@id='output']").innerText();
    console.log("outputtext : " + outputtext);
    await page.pause();
})

test('hyr alert3', async ({ page }) => {
    
    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
    await page.on('dialog', async dialog => {
        //await dialog.accept()
        await dialog.dismiss();
        let alerttext1= await dialog.message();
        console.log("alerttext1 : "+ alerttext1);
    })
    
    await page.locator("//button[@id='confirmBox']").click();
    await page.waitForTimeout(4000);
    let outputtext = await page.locator("//div[@id='output']").innerText();
    console.log("outputtext : " + outputtext);
    await page.pause();
})

test('hyr alert4', async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");
    await page.on('dialog', async dialog =>{

            //await dialog.accept();
            let alerttext = await dialog.message();
            console.log(" alerttext :"+ alerttext);
            await dialog.accept("bunty");

    })
    await page.locator("//button[@id='promptBox']").click();
    await page.waitForTimeout(4000);
    let outputtext = await page.locator("//div[@id='output']").innerText();
    console.log("outputtext : "+ outputtext);
    await page.pause();
})

test('hyr test5', async({page}) =>{
    await page.goto("https://www.hyrtutorials.com/p/alertsdemo.html");
    await page.on('dialog', async dialog =>{
        await dialog.dismiss();
        let alerttext = await dialog.message();
        console.log(" alerttext : "+ alerttext);
    })
    await page.locator("//button[@id='promptBox']").click();
    await page.waitForTimeout(4000);

    let outputtext= await page.locator("//div[@id='output']").innerText();
    console.log(" outputtext : "+ outputtext);
    await page.pause();
})