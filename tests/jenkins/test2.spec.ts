import { test, expect } from '@playwright/test';

test('Test 2 - Pass', async ({ page }) => {

    await page.goto('https://example.com');

    const heading = await page.locator('h1').innerText();

    expect(heading).toBe('Example Domain');

    console.log('Test 2 is passed');

});