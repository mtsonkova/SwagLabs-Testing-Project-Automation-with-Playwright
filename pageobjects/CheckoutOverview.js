class CheckoutOverview{
    constructor(page) {
        this.page = page;
        this.checkoutProducts = page.locator('.cart_item');
        this.itemTotalLabel = page.getByTestId('subtotal-label');
        this.taxLabel = page.getByTestId('tax-label');
        this.totalLabel = page.getByTestId('total-label');

        this.cancel = page.getByTestId('cancel');
        this.finish = page.getByTestId('finish');
    }

    async getAllProductsCount() {
        return this.checkoutProducts.size();
    }

    extractNumberFromText(text){
        let index = text.indexOf('$');
        let numberAsText = text.slice(index + 1);
        return Number(numberAsText);
    }

    async getitemTotalPrice() {
        let priceAsText = await this.itemTotalLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async getTaxLabelPrice() {
        let priceAsText = await this.taxLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async getTotalPrice() {
        let priceAsText = await this.totalLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async clickOnCancel() {
        await this.cancel.click();
    }

    async clickOnFinish() {
        await this.finish.click();
    }    
}

module.exports = {CheckoutOverview};