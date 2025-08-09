export const CheckoutInformationLocators = (page) => ({
    firstName: page.locator('#first-name'),
    lastName: page.locator('#last-name'),
    postalCode: page.locator('#postal-code'),
    btnCancel: page.getByRole('button', {name:'Cancel'}),
    btnContinue: page.getByRole('button', {name:'Continue'}),
})