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
     - write method to grab all products with their prices;
     - write method to add to cart only products which price is greater then or equal to given amount;
     - write method to add to cart only products which price is less then or equal to given amount;
     - write method to grab all products and add to cart product on certain index; -> rethink as there are only 6 products on the page and there will be no more changes
         - write logic to check if index is valid or out of range;
      
   - implement shopping cart page
       - write methods for buttons functionality
    
   - implement checkout your information page
     - write method to fill required fields with valid data;
     - write separate json file with user data -> **N/A** solved by modifying the existing json file.
     - write methods for clicking the buttons;

   - implement checkout overview page
      - write methods for clicking the buttons;
      
   - implement Order Confirmation page
      - write methodc to grab thank you text
      - write method to click on Back Home button

   - write method for log out in the  ReusableFunctions.js class as this link can be accessed from all pages of the application.
     
   - configure allure reporting for this project
     
   - try to configure Jenkins for this project
  
   - solve GitHub Actions workflow failure on push. Flow created by default when creating the Playwright project. Need further reading since I do not have knowledge on Github actions workflows and cannot determine the root cause.
