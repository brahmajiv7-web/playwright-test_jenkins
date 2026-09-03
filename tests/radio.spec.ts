import {test} from '@playwright/test';
test('calculator',async ({page}) =>{

    await page.goto('https://demo.guru99.com/test/newtours/reservation.php');
     
    let radiobutton= await page.locator("//input[@name='tripType'  and @value='oneway']");
    let radiobuttonvisible = await radiobutton.isVisible();
    console.log("radiobuttonvisible :" + radiobuttonvisible);
    if (radiobuttonvisible){
        console.log("radiobutton is displayed")
    }else{
        console.log("radiobutton is not displayed")
    }

    let radiobuttonenable = await radiobutton.isEnabled();
    console.log( "radiobuttonenable : "+ radiobuttonenable);

    if(radiobuttonenable){
        console.log("radiobutton is enabled")
    }else{
        console.log("radiobutton is not enabled")
    }

    let radiobuttonselect = await radiobutton.isChecked();
    console.log("radiobuttonselect :" + radiobuttonselect);
    if(radiobuttonselect){
        console.log("radiobutton is selected")
    }else{
        console.log("radiobutton is not selected")
    }

    let radiobuttonclick =await radiobutton.click();
    console.log("radiobutton is clicked");
    let radiobuttonselect1 = await radiobutton.isChecked();
    console.log("radiobuttonselect1 : " + radiobuttonselect1);
    if (radiobuttonselect1){
        console.log("radiobutton1 is selcted")
    }else{
        console.log("radiobutton1 is not selected")
    }
});