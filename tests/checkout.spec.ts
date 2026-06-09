import {test,expect } from '@playwright/test'
import { UserCredentials,UserType,users } from '../test-data/users'
import { products } from '../test-data/products';
import { Userdata, Userdatas } from '../test-data/fill_user';
import { loginAsStandardUser } from '../utils/testHelpers';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let productpage : ProductsPage
let cartpage : CartPage
let checkoutpage: CheckoutPage

test.describe("Checkout Validation Automation", () => {
    test.beforeEach(async({page}) => {
                productpage = new ProductsPage(page);
                cartpage = new CartPage(page);
                checkoutpage = new CheckoutPage(page)

   
    
        await page.goto('https://saucedemo.com');
   

      await loginAsStandardUser(page)
      await productpage.addProductToCart("sauce-labs-backpack");
await productpage.addProductToCart("sauce-labs-bike-light");
await productpage.goToCart()
      


    })

    test('TC__010-Checkout with Valid Details', async ({page}) =>{

await cartpage.checkout()
await checkoutpage.fillCheckoutDetails(Userdatas.firstname,Userdatas.lastname,Userdatas.postalcode);
await checkoutpage.continueCheckout()
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")

    })
        test('TC__011-Checkout with missing first name', async ({page}) =>{
await cartpage.checkout()
await checkoutpage.fillCheckoutDetails("",Userdatas.lastname,Userdatas.postalcode);
await checkoutpage.continueCheckout()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: First Name is required')


    })
            test('TC__012-Checkout with missing postal code', async ({page}) =>{
await cartpage.checkout()
await checkoutpage.fillCheckoutDetails(Userdatas.firstname,Userdatas.lastname,"");
await checkoutpage.continueCheckout()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: Postal Code is required')



    })
        test('TC__013-Checkout without any-entry', async ({page}) =>{
await cartpage.checkout()
await checkoutpage.fillCheckoutDetails("",Userdatas.lastname,Userdatas.postalcode);
await checkoutpage.continueCheckout()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: First Name is required')


        })


})