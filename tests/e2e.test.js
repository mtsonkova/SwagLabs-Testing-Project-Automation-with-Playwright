const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const testData = require('../testData/testData.json');

const { LoginPage } = require('../pageobjects/LoginPage');
const { ProductsPage } = require('../pageobjects/ProductsPage');
const { CartPage } = require('../pageobjects/CartPage');
const { CheckoutInformation } = require('../pageobjects/CheckoutInformation');
const { CheckoutOverview } = require('../pageobjects/CheckoutOverview');
const { CheckoutComplete } = require('../pageobjects/CheckoutComplete');
const { ReusableFunctions } = require('../utils/ReusableFunctions');

let browser;
let context;
let page;


const url = 'https://www.saucedemo.com/';
let loginPage;
let errorMsgLocator;

let productsPage;
let cartPage;
let checkoutInformation;
let checkoutOverview;
let checkoutComplete;
let reusableFunctions;

let { loginCredentials } = testData;


describe('Swag labs test cases', async () => {
    //launch chromium browser
    beforeAll(async () => {
        browser = await chromium.launch();
    });

    //close chromium browser
    afterAll(async () => {
        await browser.close;
    });

    //create new browser context

    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();

    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    test.describe('Test login and authentication functionality', async () => {

        beforeEach(async () => {
            await page.goto(url);
            loginPage = new LoginPage(page);
        });

        test('Login with valid credentials', async () => {
            let { username, password, url } = loginCredentials[0];
            await loginPage.login(username, password);

            await page.context().storageState({ path: 'utils/auth.json' });

            await expect(page.url()).toEqual(url);
        });

        test('Login with locked-out user', async () => {
            let { username, password, errorMsg } = loginCredentials[1];
            await loginPage.login(username, password);
            errorMsgLocator = loginPage.getErrMsgLocator();
            await expect(errorMsgLocator).toHaveText(errorMsg);
        });

        test('Login with unregistered user', async () => {
            let { username, password, errorMsg } = loginCredentials[2];
            await loginPage.login(username, password);
            errorMsgLocator = loginPage.getErrMsgLocator();
            await expect(errorMsgLocator).toHaveText(errorMsg);
        });
    });

    test.describe('Authenticated e2e test cases with skip of logging screen', async () => {

       test.use({ storageState: 'utils/auth.json' });

        beforeEach(async () => {
           
            await page.goto('https://www.saucedemo.com/inventory.html');
            productsPage = new ProductsPage(page);
            cartPage = new CartPage(page);
            checkoutInformation = new CheckoutInformation(page);
            checkoutOverview = new CheckoutOverview(page);
            checkoutComplete = new CheckoutComplete(page);
            reusableFunctions = new ReusableFunctions(page);
        })

        const { firstName, lastName, postalCode } = testData.userData;

        test('Purchase the cheapest product from Products page', async () => {
            await page.goto('https://www.saucedemo.com/inventory.html');
                      
            await productsPage.clickOnFilterDropdown();
            await productsPage.selectFilterByPriceLowHigh();
            
            let cheapestProduct = await productsPage.getFirstProductOnProductsPage();
            await reusableFunctions.clickAddToCart(cheapestProduct);
            await reusableFunctions.clickShoppingCart();
            await cartPage.clickOnCheckout();
            await checkoutInformation.fillUserData(firstName, lastName, postalCode);
            await checkoutOverview.clickOnFinish();
            let titleLocator = checkoutComplete.getHeadingLocator();
            let paragraphLocator = checkoutComplete.getParagraphLocator();
            await expect(titleLocator).toHaveText(testData.checkoutCompleteTitle);
            await expect(paragraphLocator).toHaveText(testData.checkoutCompleteParagraph);
            await reusableFunctions.clickLogOut();
            await expect(page.url()).toEqual(url);
        });

        test('Add one product to cart then return from shopping cart page to add one more', async() => {
            await page.goto('https://www.saucedemo.com/inventory.html');
                        
            await productsPage.clickOnFilterDropdown();
            await productsPage.selectFilterByPriceHighLow();
            
            let mostExpensiveProduct = await productsPage.getFirstProductOnProductsPage();
            await reusableFunctions.clickAddToCart(mostExpensiveProduct);
            await reusableFunctions.clickShoppingCart();
            await cartPage.clickOnContinueShopping();
            await page.goto('https://www.saucedemo.com/inventory.html');

            await productsPage.clickOnFilterDropdown();
            await productsPage.selectFilterByPriceLowHigh();
            let cheapestProduct = await productsPage.getFirstProductOnProductsPage();
            await reusableFunctions.clickAddToCart(cheapestProduct);
            await reusableFunctions.clickShoppingCart();
            await cartPage.clickOnCheckout();
            await checkoutInformation.fillUserData(firstName, lastName, postalCode);
            await checkoutOverview.clickOnFinish();
            let titleLocator = checkoutComplete.getHeadingLocator();
            let paragraphLocator = checkoutComplete.getParagraphLocator();
            await expect(titleLocator).toHaveText(testData.checkoutCompleteTitle);
            await expect(paragraphLocator).toHaveText(testData.checkoutCompleteParagraph);
        });

    });

}
)