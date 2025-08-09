import { LoginPage } from '@src/pageObjects/LoginPage';
import { baseUrl } from '@testData/globalSettings';
import testData from '@testData/testData.json' with { type: 'json' };
import {test, expect} from '@playwright/test';


test.describe('Login functionality', () => {
 const { loginCredentials } = testData;
 let loginPage; 
 let errorMsgLocator;

 test.beforeEach('Initial setup', async ({page}) => {
   loginPage = new LoginPage(page);
  await page.goto(baseUrl); 
})
    test('Login with valid credentials', async () => {
            let { username, password } = loginCredentials[0];
            let currentUrl = await loginPage.login(username, password);
            expect(currentUrl).toEqual(baseUrl+'inventory.html');
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
