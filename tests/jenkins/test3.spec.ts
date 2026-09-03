import { test, expect } from '@playwright/test';

test('Test 3 - Fail', async ({ page }) => {

    await page.goto('https://example.com');

    const heading = await page.locator('h1').innerText();

    expect(heading).toBe('Wrong Text');

    console.log('Test 3 is passed');

});