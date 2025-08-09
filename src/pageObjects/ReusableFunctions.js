import { ReusableFunctionsLocators } from "@src/pageLocators/reusableFunctionsLocators";

export class ReusableFunctions {
    constructor(page) {
        this.page = page;
        this.reusableFunctions = ReusableFunctions(page);
    }

    async clickAddToCart(product) {
        await product.locator('button').click();
    }

    async clickRemove(product) {
        await product.locator('button').click();
    }

    async clickShoppingCart() {
        await this.reusableFunctions.shoppingCartIcon.click();
    }

    async clickLogOut() {
        await this.reusableFunctions.menu.click();
        await this.reusableFunctions.logout.click();
    }
}