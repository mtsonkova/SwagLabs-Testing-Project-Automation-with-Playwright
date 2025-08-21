import { LoginPage } from '@src/pageObjects/LoginPage';
import { baseUrl } from '@testData/globalSettings';
import testData from '@testData/testData.json' with { type: 'json' };
import {test} from '@fixtures/e2eFixture';
import {expect} from '@playwright/test';

  
    test.describe('Authenticated e2e test cases with skip of logging screen', async () => {
        let { loginCredentials } = testData;
       
        test.beforeAll('Initial setup', async({page}) => {
        const loginPage = new LoginPage(page);
        await page.goto(baseUrl);
         let { username, password } = loginCredentials[0];
         await loginPage.login(username, password);
         await page.context().storageState({ path: 'utils/auth.json' });
    })

        const { firstName, lastName, postalCode } = testData.userData;

        test.use({ storageState: 'utils/auth.json' });

        test('Purchase the cheapest product from Products page', async ({page, 
            productsPage,
            cartPage,
            checkoutInformation,
            checkoutOverview,
            checkoutComplete,
            reusableFunctions}) => {
            
            await page.goto('https://www.saucedemo.com/inventory.html');
                      
            await productsPage.selectFilter('low to high');
            
            let cheapestProduct = await productsPage.getProductPerIndex(0);
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

         test('Purchase the most expensive product from Products page', async ({page, 
            productsPage,
            cartPage,
            checkoutInformation,
            checkoutOverview,
            checkoutComplete,
            reusableFunctions}) => {
            
            await page.goto('https://www.saucedemo.com/inventory.html');
                      
            await productsPage.selectFilter('high to low');
            
            let mostExpensiveProduct = await productsPage.getProductPerIndex(0);
            await reusableFunctions.clickAddToCart(mostExpensiveProduct);
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

