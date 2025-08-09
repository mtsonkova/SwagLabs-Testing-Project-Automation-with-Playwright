export const CheckoutOverviewLocators = (page) => ({
    checkoutProducts: page.locator('.cart_item'),
        itemTotalLabel: page.locator('.summary_subtotal_label'),
        taxLabel: page.locator('.summary_tax_label'),
        totalLabel: page.locator('summary_total_label'),

        cancel: page.locator('#cancel'),
        finish: page.locator('#finish'),
})