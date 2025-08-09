import { ProductsPageLocators } from "@src/pageLocators/productsPageLocators";

export class ProductsPage {
    constructor(page) {
        this.page = page;
       this.productsPageLocators = ProductsPageLocators(page);
    }

    async clickOnFilterDropdown() {
        await this.productsPageLocators.dropdown.click();
    }

    async selectFilterByNameAtoZ() {
        await this.clickOnFilterDropdown();
        await this.productsPageLocators.dropdown.selectOption('Name (A to Z)');
    }

    async selectFilterByNameZtoA() {
        await this.clickOnFilterDropdown();
        await this.productsPageLocators.dropdown.selectOption('Name (Z to A)');
    }

    async selectFilterByPriceLowHigh() {
        await this.clickOnFilterDropdown();
        await this.productsPageLocators.dropdown.selectOption('Price (low to high)');
    }

    async selectFilterByPriceHighLow() {
        await this.clickOnFilterDropdown();
        await this.productsPageLocators.dropdown.selectOption('Price (high to low)');
    }

    async getFirstProductOnProductsPage() {
        return await this.productsPageLocators.productsInfo.nth(0);
    }

    async getProductsWithPricesBelowOrEqualNum(price) {
        let size = this.productsPageLocators.productsInfo.size();
        let productsArr = [];

        for (let i = 0; i <= size; i++) {
            let currentProduct = this.productsInfo[i];

            let priceAsText = await currentProduct.locator('.inventory_item_price').textContent().slice(1);
            let price = Number(priceAsText);

            if (price < number) {
                productsArr.push(currentProduct);
            }
        }
        return productsArr;

    }

    async getProductsWithPricesAboveOrEqualNum(price) {
        let size = this.productsPageLocators.productsInfo.size();
        let productsArr = [];

        for (let i = 0; i < size; i++) {
            let currentProduct = this.productsInfo[i];

            let priceAsText = await currentProduct.locator('.inventory_item_price').textContent().slice(1);
            let price = Number(priceAsText);

            if (price >= number) {
                productsArr.push(currentProduct);
            }
        }
        return productsArr;
    }
}
