import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  async openLoginPage() {
    await this.goToUrl('/'); // Navigate to the login page (baseURL is set in playwright.config.ts)
  }

  async login(username: string, password: string) {
    await this.BasePageFill('#user-name', username); // Fill in the username
    await this.BasePageFill('#password', password); // Fill in the passsword
    await this.BasePageClick(this.page.getByRole('button', { name: 'Login' })); // Click the login button
  }

  async assertLoginSuccess() {
    await expect(this.page.locator('[data-test="title"]')).toContainText('Products')  ; // Assert that the account element is visible after login
  }

  async assertLoginFailure() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible(); // Assert that the error message is visible after failed login
  }

  async assertLockedOutError() {
    await expect(this.page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.'); // Assert that the specific error message for locked out users is visible after failed login
  } 
}