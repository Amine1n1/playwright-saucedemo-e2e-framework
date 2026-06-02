import { test, expect } from '../fixtures/pom.fixture';

test.describe('Product details tests', () => {
  test.beforeEach(async ({ pm }) => {
    await pm.inventoryPage.goToInventory(); // Navigate to the inventory page before each test
  });

  test('verify product details information', async ({ pm, products }) => {

    const product = products[0]; // Get the first product from the fixture

    await pm.inventoryPage.goToProductDetails('4'); // Navigate to the product details page for the specific product

    await pm.productPage.assertProductInformation(product.name, product.price); // Assert that the product details page displays the correct product name and price

    await pm.productPage.addToCartButtonVisible(); // Assert that the "Add to cart" button is visible on the product details page

    await pm.productPage.addToCartButtonEnabled(); // Assert that the "Add to cart" button is enabled on the product details page

  });
});