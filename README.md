# SwagLabs automation testing

## Project details

- **Automation Tool:** Playwright;
- **Programming Language:** JavaScript;
- **Reporting Tool:** Allure Report;

## Solution
Test cases are logically combined in two separate describe blocks.
The first one groups test cases that check the login feature.

The second describe block contains three E2E test cases. For them I use cookies data stored in auth.json file to skip the loggin screen. See the screenshot below.

<img width="722" alt="image" src="https://github.com/user-attachments/assets/1751b20a-26ef-4b8c-a222-9fa653ba428d">

The project uses Page Object Model.

### Known issues

Test case **"Add one product to cart then return from Checkout Overview page to add one more"** fails when executed together with all test cases but passes when executed alone.
This requires further investigation.

    <img width="956" alt="image" src="https://github.com/user-attachments/assets/43873336-1e55-4b40-a3e1-5d29ac28143b">


    <img width="956" alt="image" src="https://github.com/user-attachments/assets/9e04ce40-2ce9-4bc6-853f-c53f1f45c93d">


