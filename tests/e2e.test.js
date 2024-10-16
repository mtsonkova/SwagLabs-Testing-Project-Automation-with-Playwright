const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const testData = require('../testData/testData.json');

const { LoginPage } = require('../pageobjects/LoginPage');

let browser;
let context;
let page;
let errorMsgLocator;

const url = 'https://www.saucedemo.com/';
let loginPage;
let {loginCredentials} = testData;


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

    test.describe('Authenticated e2e test cases with skip of logging screen', async() => {
      
       test.use({ storageState: 'utils/auth.json' });
        beforeEach(async () => {
            
            await page.goto('https://www.saucedemo.com/inventory.html');
        })       
        

        test('bypass login screen', async() => {
           
            await expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
        })

    });

}
)