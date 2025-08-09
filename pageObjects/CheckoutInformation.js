class CheckoutInformation{
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.btnCancel = page.getByRole('button', {name:'Cancel'});
        this.btnContinue = page.getByRole('button', {name:'Continue'});
    }

    async clickOnCancel() {
        await this.btnCancel.click();
    }

    async clickOnContinue() {
        await this.btnContinue.click();
    }

    async fillUserData(firstName, lastName, postCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.postalCode.fill(postCode);
        this.clickOnContinue();
    }
}

module.exports = {CheckoutInformation};