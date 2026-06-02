import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.BasePageFill('#first-name', firstName); // Fill in the first name
    await this.BasePageFill('#last-name', lastName); // Fill in the last name
    await this.BasePageFill('#postal-code', postalCode); // Fill in the postal code
  }

  async continueToOverview() {
    await this.BasePageClick(this.page.getByRole('button', { name: 'Continue' })); // Click the "Continue" button to proceed to the overview page
  }

  async assertOverviewPage() {
    await this.BasePageExpectVisible(this.page.locator('#checkout_summary_container')); // Assert that the overview page is displayed by checking for a unique element on that page
  }

  async assertCheckoutSuccessful() {
    await this.BasePageClick(this.page.getByRole('button', { name: 'Finish' })); // Click the "Finish" button to complete the checkout process  
    await this.BasePageExpectVisible(this.page.locator('#checkout_complete_container')); // Assert that the checkout was successful by checking for a unique element on the confirmation page
  }

  async assertCheckoutInformationVisible() {
    await this.BasePageExpectVisible(this.page.locator('#checkout_info_container')); // Assert that the checkout information page is displayed by checking for a unique element on that page
  }

  async assertCheckoutError() {
    await this.BasePageExpectVisible(this.page.locator('[data-test="error"]')); // Assert that an error message is displayed by checking for a unique element on the checkout page
  }
}