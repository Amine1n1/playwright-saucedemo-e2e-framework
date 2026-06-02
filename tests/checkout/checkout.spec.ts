import { test, expect} from '../../fixtures/pom.fixture';

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ pm, products }) => {
    await pm.inventoryPage.goToInventory();
    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-bolt-t-shirt');
    await pm.inventoryPage.goToCart();
    await pm.cartPage.productAddedToCart(products[2].name, products[2].price);
    await pm.cartPage.goToCheckout();
    await pm.checkoutPage.assertCheckoutInformationVisible();

    await expect(pm.checkoutPage.Locator('.title')).toContainText('Checkout: Your Information'); // Assert that the "First Name" field is visible on the checkout information form
  });

  test('checkout happy path', async ({ pm }) => {

    await pm.checkoutPage.fillCheckoutInformation('John', 'Doe', '12345'); // Fill in the checkout information with valid data

    await pm.checkoutPage.continueToOverview(); // Click the "Continue" button to proceed to the overview page

    await pm.checkoutPage.assertOverviewPage(); // Assert that the overview page is displayed with the correct information

    await pm.checkoutPage.assertCheckoutSuccessful(); // Click the "Finish" button to complete the checkout process

  });

  test('checkout error flow', async ({ pm }) => {

    await pm.checkoutPage.fillCheckoutInformation('', '', ''); // Fill in the checkout information with empty values to trigger an error

    await pm.checkoutPage.continueToOverview(); // Click the "Continue" button to attempt to proceed to the overview page 

    await pm.checkoutPage.assertCheckoutError(); // Assert that an error message is displayed indicating that the required information is missing

  });
  
});