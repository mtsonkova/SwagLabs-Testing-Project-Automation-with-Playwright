export const CartLocators = (page) => ({
cartProducts: page.locator('.cart_item'),
continueShopping: page.getByRole('button', {name:'Continue Shopping'}),
checkout: page.getByRole('button', {name:'Checkout'}),
});