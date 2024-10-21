class ProductsPage {
    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('.product_sort_container');
        this.productsInfo = page.locator('.inventory_item_description');
    }

    async clickOnFilterDropdown() {
        await this.dropdown.click();
    }

    async selectFilterByNameAtoZ() {
        await this.clickOnFilterDropdown();
        await this.dropdown.selectOption({ value: 'az' });
    }

    async selectFilterByNameZtoA() {
        await this.clickOnFilterDropdown();
        await this.dropdown.selectOption({ label: 'Name (Z to A)' });
    }

    async selectFilterByPriceLowHigh() {
        await this.clickOnFilterDropdown();
        await this.dropdown.selectOption('Price (low to high)');
    }

    async selectFilterByPriceHighLow() {
        await this.clickOnFilterDropdown();
        await this.dropdown.selectOption({ label: 'Price (high to low)' });
    }

    async getFirstProductOnProductsPage() {
        return await this.productsInfo.nth(0);
    }

    async getProductsWithPricesBelowOrEqualNum(price) {
        let size = this.productsInfo.size();
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
        let size = this.productsInfo.size();
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

module.exports = { ProductsPage };