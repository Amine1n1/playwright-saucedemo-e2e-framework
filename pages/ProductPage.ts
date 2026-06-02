import { BasePage } from "./BasePage";

import { expect } from '@playwright/test';

export class ProductPage extends BasePage {
  async assertProductInformation(productName: string, price: number) {
   await expect(this.Locator('.inventory_details_name')).toContainText(productName); // Assert that the product details page contains the correct product name
   await expect(this.Locator('.inventory_details_price')).toContainText(price.toString()); // Assert that the product details page contains the correct product price
  }

  async addToCartButtonVisible() {
    await this.BasePageExpectVisible(this.page.getByRole('button', { name: 'Add to cart' })); // Assert that the "Add to cart" button is visible on the product details page
  }

  async addToCartButtonEnabled() {
    await this.BasePageExpectEnabled(this.page.getByRole('button', { name: 'Add to cart' })); // Assert that the "Add to cart" button is enabled on the product details page
  }
}