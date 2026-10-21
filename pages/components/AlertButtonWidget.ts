import { Page, Locator } from '@playwright/test';

export class AlertButtonWidget {
  private readonly page: Page;
  private readonly alertButton: Locator;

   constructor(page: Page) {
    this.page = page;
    this.alertButton = page.getByText('Your Sample Alert Button!');
  }

  async clickAlertButtonOKAndGetMessage(): Promise<string> {
  let message = '';
  this.page.once('dialog', async (dialog) => {
    message = dialog.message();
    await dialog.accept();
  });
  await this.alertButton.click();
  return message;
}

  async clickAlertButtonCancelAndGetMessage(): Promise<string> {
  let message = '';
  this.page.once('dialog', async (dialog) => {
    message = dialog.message();
    await dialog.dismiss();
  });
  await this.alertButton.click();
  return message;
}
}