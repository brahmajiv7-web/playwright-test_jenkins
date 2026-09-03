import {test} from '@playwright/test';
test('calculator',async ({page}) =>{

    await page.goto('https://www.clculator.net/mortgage-calculator.html');
    await page.waitForTimeout(5000);
     
    let checkboxbutton= await page.locator("//*[@id='content']/div[4]/div/form/table/tbody/tr[6]/td/label/span");
    let checkboxvisible = await checkboxbutton.isVisible();
    console.log("checkboxvisible :" + checkboxvisible);
    if (checkboxvisible){
        console.log("checkbox is displayed")
    }else{
        console.log("checkbox is not displayed")
    }

    let checkboxenable = await checkboxbutton.isEnabled();
    console.log( "checkboxenable : "+ checkboxenable);

    if(checkboxenable){
        console.log("checkbox is enabled")
    }else{
        console.log("checkbox is not enabled")
    }

    let checkboxselect = await checkboxbutton.isChecked();
    console.log("checkboxselect :" + checkboxselect);
    if(checkboxselect){
        console.log("checkbox is selected")
    }else{
        console.log("checkbox is not selected")
    }

    let checkboxclick =await checkboxbutton.click();
    console.log("checkbox is clicked");
    let checkboxselect1 = await checkboxbutton.isChecked();
    console.log("checkboxselect1 : " + checkboxselect1);
    if (checkboxselect1){
        console.log("checkbox1 is selcted")
    }else{
        console.log("checkbox1 is not selected")
    }
});