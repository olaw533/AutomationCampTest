import { test, expect } from '@playwright/test';
import { AlertButtonWidget } from '../pages/components/AlertButtonWidget';

test('click alert button and OK', async ({ page }) => {
    await page.goto('https://play2.automationcamp.ir/');

    const alertButton = new AlertButtonWidget(page);

    const message = await alertButton.clickAlertButtonOKAndGetMessage();
    expect(message).toBe('Press a button!');

    await expect(page.getByText(' You Pressed the OK Button!'));
});

test('click alert button and Cancel', async ({ page }) => {
    await page.goto('https://play2.automationcamp.ir/');

    const alertButton = new AlertButtonWidget(page);

    const message = await alertButton.clickAlertButtonCancelAndGetMessage();
    expect(message).toBe('Press a button!');

    await expect(page.getByText(' You Pressed the Cancel Button!'));
});