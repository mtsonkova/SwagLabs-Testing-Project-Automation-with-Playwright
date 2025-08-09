import { ReusableFunctionsLocators } from "@src/pageLocators/reusableFunctionsLocators";

export class ReusableFunctions {
    constructor(page) {
        this.page = page;
        this.reusableFunctionsLocators = ReusableFunctionsLocators(page);
    }

    async clickAddToCart(product) {
        await product.locator('button').click();
    }

    async clickRemove(product) {
        await product.locator('button').click();
    }

    async clickShoppingCart() {
        await this.reusableFunctionsLocators.shoppingCartIcon.click();
    }

    async clickLogOut() {
        await this.reusableFunctionsLocators.menu.click();
        await this.reusableFunctionsLocators.logout.click();
    }
}