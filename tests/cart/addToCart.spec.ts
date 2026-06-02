import { test, expect } from '../../fixtures/pom.fixture';

test.describe('Cart tests', () => {
  test.beforeEach(async ({ pm }) => {
    await pm.inventoryPage.goToInventory(); // Navigate to the inventory page before each test
  });

  test('add T-shirt to cart', async ({ pm, validUser, products }) => {

    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-bolt-t-shirt'); // Add the T-shirt to the cart using its specific ID

    await pm.inventoryPage.assertCartBadgeCount('1'); // Assert that the cart badge shows "1" after adding one item to the cart

    await pm.inventoryPage.assertRemoveButtonVisible(); // Assert that the "Remove" button is visible for the added item in the cart

    await pm.inventoryPage.goToCart();

    await pm.cartPage.productAddedToCart(products[2].name, products[2].price); // Assert that the cart contains the added T-shirt

  });

  test ('add multiple products and verify cart count', async ({ pm, validUser, products }) => { 
    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-bolt-t-shirt');

    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-backpack');

    await pm.inventoryPage.addProductToCart('add-to-cart-sauce-labs-bike-light');

    await pm.inventoryPage.assertCartBadgeCount('3'); // Assert that the cart badge shows "3" after adding three items to the cart

  });
});