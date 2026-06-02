import { BasePage } from './BasePage';

import { expect } from '@playwright/test';

export class CartPage extends BasePage {
  async productAddedToCart(productName: string, price: number) {
    await expect(this.Locator('.inventory_item_name')).toContainText(productName); // Assert that the cart contains the added products
    await expect(this.Locator('.inventory_item_price')).toContainText(price.toString()); // Assert that the cart contains the added products with the correct price 
  }

  async goToCheckout() {
    await this.BasePageClick(this.page.getByRole('button', { name: 'Checkout' })); // Click the "Checkout" button to proceed to the checkout page
  } 

  async removeProductFromCart(productId: string) {
    await this.BasePageClick(`#remove-${productId}`); // Click the "Remove" button for a specific product based on its ID
  }
}