// @fixtures/e2eFixture.js

import { ProductsPage } from '@src/pageObjects/ProductsPage';
import { CartPage } from '@src/pageObjects/CartPage';
import { CheckoutInformation } from '@src/pageObjects/CheckoutInformation';
import { CheckoutOverview } from '@src/pageObjects/CheckoutOverview';
import { CheckoutComplete } from '@src/pageObjects/CheckoutComplete';
import { ReusableFunctions } from '@src/pageObjects/ReusableFunctions';
import { test as base } from '@playwright/test';

export const test = base.extend({
  // Override the default page to use storage state
  page: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'utils/auth.json'
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutInformation: async ({ page }, use) => {
    await use(new CheckoutInformation(page));
  },

  checkoutOverview: async ({ page }, use) => {
    await use(new CheckoutOverview(page));
  },

  checkoutComplete: async ({ page }, use) => {
    await use(new CheckoutComplete(page));
  },

  reusableFunctions: async ({ page }, use) => {
    await use(new ReusableFunctions(page));
  }
});
