# SwagLabs automation testing

## Project details

- **Automation Tool:** Playwright;
- **Programming Language:** JavaScript;
- **Reporting Tool:** Allure Report;
- The project uses the default GitHub Actions, build in Playwright

## Solution
Test cases are logically combined in two separate describe blocks.
The first one groups test cases that check the login feature.

The second describe block contains three E2E test cases. For them I use cookies data stored in auth.json file to skip the loggin screen. See the screenshot below.

<img width="722" alt="image" src="https://github.com/user-attachments/assets/1751b20a-26ef-4b8c-a222-9fa653ba428d">

The project uses Page Object Model.

### Allure Reports

<img width="927" alt="image" src="https://github.com/user-attachments/assets/a9fb10d8-b2fa-4c2e-a05e-ae798175e729">



<img width="947" alt="image" src="https://github.com/user-attachments/assets/09096206-3b7b-4c99-9322-b5966cac7490">



