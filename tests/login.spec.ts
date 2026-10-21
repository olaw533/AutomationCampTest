import { test, expect } from '@playwright/test';
import { LoginWidget } from '../pages/components/LoginWidgets';

test('login', async ({ page }) => {
    await page.goto('https://play2.automationcamp.ir/');

    const login = new LoginWidget(page);
    await login.login('test','test');
    
    await expect(page).toHaveURL('https://play2.automationcamp.ir/login.html?uname=test&pwd=test');
});

test('invalid password', async ({ page }) => {
    await page.goto('https://play2.automationcamp.ir/');

    const login = new LoginWidget(page);
    await login.login('test','invalid password');
    
    await expect(page).toHaveURL('https://play2.automationcamp.ir/');
});

test('invalid login', async ({ page }) => {
    await page.goto('https://play2.automationcamp.ir/');

    const login = new LoginWidget(page);
    await login.login('invalid login','test');
    
    await expect(page).toHaveURL('https://play2.automationcamp.ir/');
});