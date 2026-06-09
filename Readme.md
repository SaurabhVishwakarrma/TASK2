This project is part of the QA fresher training task focused in the WebUi Automation using Playwright and Type script

The automation framework is built against the SauceDemo Application:

https://saucedemo.com

This framework covers:

 >> Login Functionality

 >> Negative Login Validations

 >> Product Listing Verification

 >> Add to Cart Functionality

 >> Remove from Cart Functionality

 >> Card Validation

 >> Checkout Validation
 
 >> Order Confirmation Verification

 This framework follows the Page Object Model design patterns and uses Typescript for strong typing and better maintainability


 Technologies Used 
  > Playwright
  > Typescript
  
  Installation Step:
  > git clone https://github.com/SaurabhVishwakarrma/TASK2/

  > cd qa-playwright-training

  Dependencies to Install:
  Run 
  > npm install

  For running tests:
use command
  > npx playwright test
  >npx playwright test --ui


  For Running any specific tests:

  Run 
  > npx playwright test tests/<desired-folder to run>

  For generating Report :
  >npx playwright show-report



Tests Coverage :

Login:
 >> Verify Login page loads Successfully
 >> Login with valid credentials
 >> Login with invalid password
 >> Login with locked user

 Products:
 >> Verify products page is displayed
 >> Add products to cart
 >> Add multiple products to cart
 >> remove one product

 Cart :
 >> Verify Selected Products in cart
 >> Remove products from cart
 >> Verify the cart count updates correctly

 Checkout:
 >>Checkout with valid details
 >> Checkout with missing first name
 >> Checkout with missing postal code
 >> Verify Successful order placement

 Tags Used:
 @smoke @regression @negative @cart @checkout
