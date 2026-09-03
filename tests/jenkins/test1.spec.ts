import { test, expect } from '@playwright/test';

test('Test 1 - Pass', async ({ page }) => {

    await page.goto('https://example.com');

    const title = await page.title();

    expect(title).toBe('Example Domain');

    console.log('Test 1 is passed');

});