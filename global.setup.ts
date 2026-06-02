import { chromium } from '@playwright/test';

import 'dotenv/config';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL!);
  await page.fill('#user-name', process.env.LOGIN_USERNAME!);
  await page.fill('#password', process.env.LOGIN_PASSWORD!);
  await page.click('[data-test="login-button"]');
  await page.context().storageState({ path: 'auth/user.json' });
  await browser.close();
}

export default globalSetup;