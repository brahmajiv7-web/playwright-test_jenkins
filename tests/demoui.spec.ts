import {test} from '@playwright/test';
test('button',async ({page}) => 
{
    await page.goto('https://demos.devexpress.com/aspxeditorsdemos/ListEditors/MultiSelect.aspx');
    //await page.waitForTimeout(5000);
    let checkboxbutton = await page.locator("//span[@id='ContentHolder_lbFeatures_TG_D']");
    
    let actualvisibletext = await checkboxbutton.isVisible();
    console.log("actualvisibletext : " +actualvisibletext);

    if(actualvisibletext)
    {
        console.log("checkbox is displayed");
    }
    else
    {
        console.log("checkbox is not displayed");
    }

    let actualenable = await checkboxbutton.isEnabled();
    console.log("actualenable : " +actualenable);

    if(actualenable)
    {
        console.log("checkbox is enabled")
    }else{
        console.log("checkbox is not enabled")
    }

    let selectcheckbox = await checkboxbutton.isChecked();
    console.log("selectcheckbox :" + selectcheckbox);

    if(selectcheckbox)
    {
        console.log("checkbox is selected")

    }else{
        console.log("checkbox is not selected")
    }

    
    
});
