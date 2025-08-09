export const ReusableFunctionsLocators = (page) => ({
shoppingCartIcon: page.locator('.shopping_cart_link'),       
menu: page.locator('#react-burger-menu-btn'),
logout: page.getByRole('link', {name: 'Logout'}),
});