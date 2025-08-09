import { ProductsPage } from '@src/pageObjects/ProductsPage';
import { CartPage }  from '@src/pageObjects/CartPage';
import { CheckoutInformation } from '@src/pageObjects/CheckoutInformation';
import { CheckoutOverview } from '@src/pageObjects/CheckoutOverview';
import { CheckoutComplete } from '@src/pageObjects/CheckoutComplete';
import { ReusableFunctions} from '@src/pageObjects/ReusableFunctions';
import { test as base } from '@playwright/test';

export const test = base.extend({
  // Override the default page to use storage state
  page: async ({ browser }, use) => {
    const context = await browser.newContext({ 
      storageState: '@utils/auth.json' 
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
  
  // Individual page object fixtures for alternative approach
   
  ProductsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },
  
 CartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  CheckoutInformation: async ({page}, use) => {
    const checkoutInformation = new CheckoutInformation(page);
    await use(checkoutInformation);
  },

  CheckoutOverview: async ({page}, use) => {
    const checkoutOverview = new CheckoutOverview(page);
    await use(checkoutOverview);
  },

  CheckoutComplete: async ({page}, use) => {
    const checkoutComplete = new CheckoutComplete(page);
    await use(checkoutComplete);
  },

  ReusableFunctions: async ({page}, use) => {
    const reusableFunctions = new ReusableFunctions(page);
    await use(reusableFunctions);
  }
});