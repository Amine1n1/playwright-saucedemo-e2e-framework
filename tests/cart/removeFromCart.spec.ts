import { test, expect } from '../../fixtures/pom.fixture';

test.describe('Remove flow', () => {
  test.beforeEach(async ({ pm, validUser }) => {
    await pm.inventoryPage.goToInventory();
    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-bolt-t-shirt'); // Add the T-shirt to the cart before each test
  });

  test('remove flow from inventory page', async ({ pm, validUser }) => { 

    await pm.inventoryPage.assertCartBadgeCount('1'); // Assert that the cart badge shows "1" after adding one item to the cart

    await pm.inventoryPage.assertRemoveButtonVisible(); // Assert that the "Remove" button is visible for the added item in the cart

    await pm.inventoryPage.removeTshirtFromCart(); // Remove the T-shirt from the cart

    await expect(pm.inventoryPage.Locator('.shopping_cart_badge')).not.toBeVisible(); // Assert that the "Remove" button is no longer visible after removing the item from the cart

  });

  test('remove flow from cart page', async ({ pm, validUser }) => {

    await pm.inventoryPage.goToCart(); // Navigate to the cart page

    await pm.cartPage.productAddedToCart('Sauce Labs Bolt T-Shirt', 15.99); // Assert that the cart contains the added T-shirt

    await pm.cartPage.removeProductFromCart('sauce-labs-bolt-t-shirt'); // Remove the T-shirt from the cart using its specific ID

    await expect(pm.cartPage.Locator('.cart_item')).not.toBeVisible(); // Assert that the cart no longer contains the removed T-shirt
  });
});
