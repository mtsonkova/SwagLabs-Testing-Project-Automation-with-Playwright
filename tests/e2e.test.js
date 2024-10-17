const { test, describe, beforeEach, afterEach, beforeAll, afterAll, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const testData = require('../testData/testdata.json');

const { LoginPage } = require('../pageobjects/LoginPage');

let browser;
let context;
let page;

const url = 'https://www.saucedemo.com/';
let loginPage;

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
        await page.goto(url);

        loginPage = new LoginPage(page);
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    test.describe('Test login and authentication functionality', async () => {
        test('Login with valid credentials', async () => {
            let { username, password, url } = testData[0];
            await loginPage.login(username, password);
            //await page.waitForNavigation();
            await page.context().storageState({ path: 'utils/auth.json' });

            await expect(page.url()).toEqual(url);
        });

        test('Login with locked-out user', async () => {
            let { username, password, errorMsg } = testData[1];
            await loginPage.login(username, password);
            await expect(page.locator('h3')).toHaveText(errorMsg);
        });

        test('Login with unregistered user', async () => {
            let { username, password, errorMsg } = testData[2];
            await loginPage.login(username, password);
            await expect(page.locator('h3')).toHaveText(errorMsg);
        });
    });

    test.describe('Authenticated e2e test cases with skip of logging screen', async() => {
       beforeEach(async () => {
        page.goto('https://www.saucedemo.com/inventory.html');
       })
            test.use({ storageState: 'utils/auth.json' });
        

        test('bypass login screen', async() => {
           
            await expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
        })

    });

}
)