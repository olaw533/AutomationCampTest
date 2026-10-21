import { Page, Locator } from '@playwright/test';

export class LoginWidget {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

   constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#uname'); 
    this.passwordInput = page.locator('#pwd');
    this.loginButton = page.getByRole('button', {name: 'Login'});
  }

  async login(username: string, password: string){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}