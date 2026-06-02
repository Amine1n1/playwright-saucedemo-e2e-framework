import { test, expect } from '../../fixtures/pom.fixture';

test.describe('Inventory sorting tests', () => {

  test.beforeEach(async ({ pm }) => {
    await pm.inventoryPage.goToInventory(); // Navigate to the inventory page before each test
  });

  test('sort products by price low to high', async ({ pm }) => {

    await pm.inventoryPage.sortBy('lohi'); // Sort products by price from low to high

    await pm.inventoryPage.assertProductsSortedByPriceLowToHigh(); // Assert that the products are sorted correctly by price from low to high

  });

  test('sort products by price high to low', async ({ pm }) => {

    await pm.inventoryPage.sortBy('hilo'); // Sort products by price from high to low

    await pm.inventoryPage.assertProductsSortedByPriceHighToLow(); // Assert that the products are sorted correctly by price from high to low

  });

  test('sort products by name A to Z', async ({ pm }) => {

    await pm.inventoryPage.sortBy('az'); // Sort products by name from A to Z

    await pm.inventoryPage.assertProductsSortedByNameAZ(); // Assert that the products are sorted correctly by name from A to Z

  });

  test('sort products by name Z to A', async ({ pm }) => {

    await pm.inventoryPage.sortBy('za'); // Sort products by name from Z to A

    await pm.inventoryPage.assertProductsSortedByNameZA(); // Assert that the products are sorted correctly by name from Z to A

  });

});