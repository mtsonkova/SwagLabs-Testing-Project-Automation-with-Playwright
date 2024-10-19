class CartPage{
    constructor(page) {
        this.page = page;
        this.cartProducts = page.locator('.cart_item');
        this.continueShopping = page.getByRole('button', {name:'Continue Shopping'});
        this.checkout = page.getByRole('button', {name:'Checkout'});
    }

    async clickOnContinueShopping() {
        await this.continueShopping.click();
    } 

    async clickOnCheckout() {
        await this.checkout.click();
    }

    async getFirstProductFromCart() {
        return await this.cartProducts.nth(0);
    }

}

module.exports = {CartPage};