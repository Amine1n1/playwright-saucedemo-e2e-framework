// ManagePage acts as a central hub for all page objects in the app.
// It uses lazy getters to create each page object only when needed.
// This saves resources in large test suites, as unused pages are not built.
// For small projects, you could create all page objects up front instead.

import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { ProductPage } from './ProductPage';


export default class ManagePage {
    constructor(private readonly page: Page) { }

    // private caches (undefined until first access)
    private _login?: LoginPage;
    private _inventory?: InventoryPage;
    private _cart?: CartPage;
    private _checkout?: CheckoutPage;
    private _product?: ProductPage;
    // Lazy getter: creates the page object only on first use, then reuses it.
    get loginPage(): LoginPage {
        if (!this._login) {
            this._login = new LoginPage(this.page);
        }
        return this._login;
    }

    get inventoryPage(): InventoryPage {
        if (!this._inventory) {
            this._inventory = new InventoryPage(this.page);
        }
        return this._inventory;
    }

    get cartPage(): CartPage {
        if (!this._cart) {
            this._cart = new CartPage(this.page);
        }
        return this._cart;
    }

    get checkoutPage(): CheckoutPage {
        if (!this._checkout) {
            this._checkout = new CheckoutPage(this.page);
        }
        return this._checkout;
    }

    get productPage(): ProductPage {
        if (!this._product) {
            this._product = new ProductPage(this.page);
        }
        return this._product;
    }
}
