import { CheckoutInformationLocators } from "@src/pageLocators/checkoutInformationLocators";
export class CheckoutInformation{
    constructor(page) {
        this.page = page;
        this.checkoutInformationLocators = CheckoutInformationLocators(page);
    }

    async clickOnCancel() {
        await this.checkoutInformationLocators.btnCancel.click();
    }

    async clickOnContinue() {
        await this.checkoutInformationLocators.btnContinue.click();
    }

    async fillUserData(firstName, lastName, postCode) {
        await this.checkoutInformationLocators.firstName.fill(firstName);
        await this.checkoutInformationLocators.lastName.fill(lastName);
        await this.checkoutInformationLocators.postalCode.fill(postCode);
        this.clickOnContinue();
    }
}