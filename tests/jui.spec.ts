import {test} from '@playwright/test';
test('jui',async ({page}) =>
{
    await page.goto('https://jqueryui.com/button/');
    let submitbutton = await page.locator("//input[@class='ui-button ui-widget ui-corner-all']");

    let actualvisibletext = await submitbutton.isVisible();
    console.log("actualvisibletext : " + actualvisibletext);

    if(actualvisibletext){
        console.log("submit button is displayed");
    }else{
        console.log("submit button is not displayed")
    }

    let actualenabletxt = await submitbutton.isEnabled();
    console.log("actualenabletxt :  " + actualenabletxt);

    if(actualenabletxt)
    {
        console.log("submit button is enabled");
    }
    else{
        console.log("submit button is not enabled");
    }

    let actualbuttonname= await submitbutton.getAttribute('value');
    let expectedbuttonname = 'A submit button';
    console.log("actualbuttonname : " + actualbuttonname);

    if (actualbuttonname === expectedbuttonname){
        console.log("button name is verified successfully")
    }else{
        console.log("button name is not verified successfully")
    }

    await submitbutton.click();
    console.log("done");

});