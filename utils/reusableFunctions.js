class ReusableFunctions {
    constructor(page) {
        this.page = page;
        this.btnAddToCart = page.getByRole('button', {name: 'Add to cart'});
        this.btnRemove = page.getByRole('button', {name: 'Remove'});
        this.shoppingCartIcon = page.locator('.shopping_cart_link');        
    }

    async clickAddToCart() {
        await this.btnAddToCart.click();
    }

    async clickRemove() {
        await this.btnRemove.click();
    }

    async clickShoppingCart() {
        await this.shoppingCartIcon.click();
    }

}