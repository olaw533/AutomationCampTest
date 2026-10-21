import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://play2.automationcamp.ir/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Try Testing This/);
});