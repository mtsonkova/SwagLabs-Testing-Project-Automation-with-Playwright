import { CheckoutCompleteLocators } from "@src/pageLocators/checkoutCompleteLocators";

export class CheckoutComplete{
    constructor(page) {
        this.page = page;
        this.checkoutCompleteLocators = CheckoutCompleteLocators(page);
    }

    getHeadingLocator() {
        return this.checkoutCompleteLocators.headerLocator;
    }

    getParagraphLocator() {
        return this.checkoutCompleteLocators.paragraphLocator;
    }

    async clickOnBackHome() {
        await this.checkoutCompleteLocators.backHome.click();
    }
}