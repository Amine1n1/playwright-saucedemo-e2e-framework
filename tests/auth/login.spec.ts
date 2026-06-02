import { test, expect } from '../../fixtures/pom.fixture'; // Import the custom test fixture that includes the page object manager (PomManager) and valid user data
// We are using the Playwright fixture to access the page object manager (PomManager)
// This allows us to write cleaner and more maintainable tests by encapsulating page interactions within page objects.
// There is no need for beforeEach for pm. Instead, we directly use the `pm` fixture in each test to access the necessary page objects.
// The `validUser` fixture provides a valid user object for authentication tests.
test.describe('Login flow', () => {
    // ✅ Override storageState for this entire describe block → start fresh (not logged in)
  test.use({ storageState: { cookies: [], origins: [] } });

  test('login with valid user', async ({ pm, validUser }) => {

    await pm.loginPage.openLoginPage();

    await pm.loginPage.login(validUser.username, validUser.password);


    await pm.loginPage.assertLoginSuccess();

  });

  test('login with wrong password', async ({ pm }) => {


    await pm.loginPage.openLoginPage();

    await pm.loginPage.login('standard_user', 'wrong_password');


    await pm.loginPage.assertLoginFailure();

  });

  test('assert password is masked', async ({ pm }) => {

    await pm.loginPage.openLoginPage();

    await expect(pm.loginPage.Locator('#password')).toHaveAttribute('type', 'password'); // Assert that the password field is masked

  });

  test('login with locked out user', async ({ pm, lockedOutUser }) => {

    await pm.loginPage.openLoginPage();

    await pm.loginPage.login(lockedOutUser.username, lockedOutUser.password);

    await pm.loginPage.assertLockedOutError();
  });

});
