// We are creating a Playwright fixture that initializes a page object manager (PomManager) for each test.
// This allows us to access various page objects (like LoginPage, SecurePage, etc.) through the manager.
// The fixture also provides a valid user object for authentication tests.

import { test as base } from '@playwright/test';
import PomManager from '../pages/ManagePage';
import { validUser } from '../test-data/validUser';
import { lockedOutUser } from '../test-data/lockedOutUser';

type MyFixtures = {
  pm: PomManager;                       
  validUser: { username: string; password: string };
  lockedOutUser: { username: string; password: string };

  products: { name: string; price: number }[]; // Example of a fixture that provides a list of products for testing
};


export const test = base.extend<MyFixtures>({
  // Re-use Playwright’s default `page`
  pm: async ({ page }, use) => {
    await use(new PomManager(page));
  },

  // Plain value fixture (available in every test)
  validUser,
  lockedOutUser,

  products: async ({}, use) => {
  await use([
    { name: 'Sauce Labs Backpack', price: 29.99 },
    { name: 'Sauce Labs Bike Light', price: 9.99 },
    { name: 'Sauce Labs Bolt T-Shirt', price: 15.99 },
    { name: 'Sauce Labs Fleece Jacket', price: 49.99 },
    { name: 'Sauce Labs Onesie', price: 7.99 },
    { name: 'Test.allTheThings() T-Shirt (Red)', price: 15.99 }
  ]);
},

});

export { expect } from '@playwright/test';
