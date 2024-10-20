class ProductsPage{
    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('data-test=product-sort-container');
        this.filterByNameAZ = page.getByText('Name (A to Z)');
        this.filterByNameZA = page.getByText('Name (Z to A)');
        this.filterByPriceLowHigh = page.getByText('Price (low to high)');
        this.filterByPriceHighLow = page.getByText('Price (high to low)');

        this.productsInfo = page.locator('.inventory_item_description');
    }

    async clickOnFilterDropdown() {
        await this.dropdown.click();
    }
    
    async selectFilterByNameAtoZ() {
        await this.filterByNameAZ.click();
    }

    async selectFilterByNameZtoA() {
        await this.filterByNameZA.click();
    }

    async selectFilterByPriceLowHigh() {
        await this.filterByPriceLowHigh.click();
    }

    async selectFilterByPriceHighLow() {
        await this.filterByPriceHighLow.click();
    }

    async getFirstProductOnProductsPage() {
        return await this.productsInfo.nth(0);
    }

    async getProductsWithPricesBelowOrEqualNum(price) {
        let size = this.productsInfo.size();
        let productsArr = [];
       
        for(let i = 0; i <= size; i++) {
            let currentProduct = this.productsInfo[i];

            let priceAsText = await currentProduct.locator('.inventory_item_price').textContent().slice(1);
            let price = Number(priceAsText);

            if(price < number) {
                productsArr.push(currentProduct);
            }
        }
        return productsArr;
        
    }

    async getProductsWithPricesAboveOrEqualNum(price) {
        let size = this.productsInfo.size();
        let productsArr = [];
       
        for(let i = 0; i < size; i++) {
            let currentProduct = this.productsInfo[i];

            let priceAsText = await currentProduct.locator('.inventory_item_price').textContent().slice(1);
            let price = Number(priceAsText);

            if(price >= number) {
                productsArr.push(currentProduct);
            }
        }
        return productsArr;        
    }
}

module.exports = {ProductsPage};