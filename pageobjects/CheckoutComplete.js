class CheckoutComplete{
    constructor(page) {
        this.page = page;
        this.header = page.getByTestId('complete-header');
        this.paragraph = page.getByTestId('complete-text');
        this.backHome = page.getByTestId('back-to-products');
    }

    getHeadingLocator() {
        return this.header;
    }

    getParagraphLocator() {
        return this.paragraph;
    }

    async clickOnBackHome() {
        await this.backHome.click();
    }
}

module.exports = {CheckoutComplete};