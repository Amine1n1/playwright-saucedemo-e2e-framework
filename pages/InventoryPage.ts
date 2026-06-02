import { BasePage } from './BasePage';

import { expect } from '@playwright/test';

export class InventoryPage extends BasePage {

  async goToCart() { 
    await this.goToUrl('/cart.html'); // Navigate to the cart page (baseURL is set in playwright.config.ts)
  }

  async goToInventory() {
    await this.goToUrl('/inventory.html'); // Navigate to the inventory page (baseURL is set in playwright.config.ts)
  }

  async goToProductDetails(productId: string) {
   await this.BasePageClick(this.page.locator(`#item_${productId}_title_link`)); // Click on a specific product to go to its details page based on its ID
  }

  async addProductToCart(idProduct: string) {
    await this.BasePageClick(`#${idProduct}`)//#endregion); // Click the "Add to cart" button for a specific product based on its ID
  }

  async assertCartBadgeCount(count: string) {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count); // Assert that the cart badge shows the correct count of items in the cart
  }

  async assertRemoveButtonVisible() {
    await expect(this.Locator('#remove-sauce-labs-bolt-t-shirt')).toBeVisible(); // Assert that the "Remove" button is visible for the first product after adding it to the cart
  }

  async removeTshirtFromCart() {
    await this.Locator('#remove-sauce-labs-bolt-t-shirt').click(); // Click the "Remove" button for the first product (T-shirt)
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.page.locator('.product_sort_container').selectOption(option);
  }

  async assertProductsSortedByNameAZ() {
    const productNames = await this.page.locator('.inventory_item_name').allTextContents();
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames); // Assert that the products are sorted by name in ascending order (A-Z)
  }

  async assertProductsSortedByNameZA() {
    const productNames = await this.page.locator('.inventory_item_name').allTextContents();
    const sortedNames = [...productNames].sort().reverse();
    expect(productNames).toEqual(sortedNames); // Assert that the products are sorted by name in descending order (Z-A)
  }

  async assertProductsSortedByPriceLowToHigh() {
    const productPrices = await this.page.locator('.inventory_item_price').allTextContents();
    const sortedPrices = [...productPrices].sort((a, b) => parseFloat(a.replace('$', '')) - parseFloat(b.replace('$', '')));
    expect(productPrices).toEqual(sortedPrices); // Assert that the products are sorted by price from low to high
  }
  
  async assertProductsSortedByPriceHighToLow() {
    const productPrices = await this.page.locator('.inventory_item_price').allTextContents();
    const sortedPrices = [...productPrices].sort((a, b) => parseFloat (b.replace('$', '')) - parseFloat(a.replace('$', '')));
    expect(productPrices).toEqual(sortedPrices); // Assert that the products are sorted by price from high to low
  }
}
