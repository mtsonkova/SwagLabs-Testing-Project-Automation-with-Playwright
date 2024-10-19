class ReusableFunctions {
    constructor(page) {
        this.page = page;
        this.btnAddToCart = page.getByRole('button', {name: 'Add to cart'});
        this.btnRemove = page.getByRole('button', {name: 'Remove'});
        this.shoppingCartIcon = page.locator('.shopping_cart_link');       
        this.menu = page.locator('.react-burger-menu-btn');
        this.logout = page.getByRole('link', {name: 'Logout'});
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

    async clickLogOut() {
        await this.menu.click();
        await this.logout.click();
    }
}

module.exports = {ReusableFunctions};