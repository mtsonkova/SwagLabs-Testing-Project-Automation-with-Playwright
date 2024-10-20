class ReusableFunctions {
    constructor(page) {
        this.page = page;
        this.shoppingCartIcon = page.locator('.shopping_cart_link');       
        this.menu = page.locator('.react-burger-menu-btn');
        this.logout = page.getByRole('link', {name: 'Logout'});
    }

    async clickAddToCart(product) {
        await product.locator('button').click();
    }

    async clickRemove(product) {
        await product.locator('button').click();
    }

    async clickShoppingCart() {
        await this.shoppingCartIcon.click();
    }

    async clickLogOut() {
        await this.menu.click();
        await this.logout.click();
    }
}

module.exports = {ReusableFunctions};