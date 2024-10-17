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

### ToDo
 - implement products page
     - write methods for filter logic
     - write method to grab all products and add them to cart
     - write method to grab all products and add to cart product on certain index;
         - write logic to check if index is valid or out of range;
      
   - implement shopping cart page
       - write methods for buttons functionality
    
   - implement checkout your information page
     - write method to fill required fields with valid data;
     - write separate json file with user data
     - write methods for clicking the buttons;

     - implement checkout overview page
       - write methods for clicking the buttons;
      
    - implement Order Confirmation page
        - write methodc to grab thank you text
        - write method to click on Back Home button

      - write method for log out in the  ReusableFunctions.js class as this link can be accessed from all pages of the application.
