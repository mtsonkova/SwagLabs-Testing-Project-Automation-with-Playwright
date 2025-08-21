import { CheckoutOverviewLocators } from "@src/pageLocators/checkoutOverviewLocators";

export class CheckoutOverview{
    constructor(page) {
        this.page = page;
        this.checkoutOverviewLocators = CheckoutOverviewLocators(page);
    }

    async getAllProductsCount() {
        return this.checkoutOverviewLocators.checkoutProducts.size();
    }

    extractNumberFromText(text){
        let index = text.indexOf('$');
        let numberAsText = text.slice(index + 1);
        return Number(numberAsText);
    }

    async getitemTotalPrice() {
        let priceAsText = await this.checkoutOverviewLocators.itemTotalLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async getTaxLabelPrice() {
        let priceAsText = await this.checkoutOverviewLocators.taxLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async getTotalPrice() {
        let priceAsText = await this.checkoutOverviewLocators.totalLabel.textContent();
        let price = this.extractNumberFromText(priceAsText)
        return price;
    }

    async clickOnCancel() {
        await this.checkoutOverviewLocators.cancel.click();
    }

    async clickOnFinish() {
        await this.checkoutOverviewLocators.finish.click();
    }    
}
