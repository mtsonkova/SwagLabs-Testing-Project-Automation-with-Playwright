export const LoginPageLocators = (page) => ({
userName: page.locator('#user-name'),
password: page.locator('#password'),
loginBtn: page.locator('#login-button'),
errorMsgLocator: page.locator('h3'),
});