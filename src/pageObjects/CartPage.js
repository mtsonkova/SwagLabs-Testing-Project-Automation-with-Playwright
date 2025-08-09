import { CartLocators } from "@src/pageLocators/cartLocators";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLocators = CartLocators(page)
    }

    async clickOnContinueShopping() {
        await this.cartLocators.continueShopping.click();
    } 

    async clickOnCheckout() {
        await this.cartLocators.checkout.click();
    }

    async getFirstProductFromCart() {
        return await this.cartLocators.cartProducts.nth(0);
    }

}