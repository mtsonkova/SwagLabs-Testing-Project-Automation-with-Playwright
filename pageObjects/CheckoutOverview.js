class CheckoutOverview{
    constructor(page) {
        this.page = page;
        this.checkoutProducts = page.locator('.cart_item');
        this.itemTotalLabel = page.locator('.summary_subtotal_label');
        this.taxLabel = page.locator('.summary_tax_label');
        this.totalLabel = page.locator('summary_total_label');

        this.cancel = page.locator('#cancel');
        this.finish = page.locator('#finish');
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