class CheckoutComplete{
    constructor(page) {
        this.page = page;
        this.headerLocator = page.locator('.complete-header');
        this.paragraphLocator = page.locator('.complete-text');
        this.backHome = page.locator('#back-to-products');
    }

    getHeadingLocator() {
        return this.headerLocator;
    }

    getParagraphLocator() {
        return this.paragraphLocator;
    }

    async clickOnBackHome() {
        await this.backHome.click();
    }
}

module.exports = {CheckoutComplete};