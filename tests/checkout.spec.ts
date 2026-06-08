import {test,expect } from '@playwright/test'
import { UserCredentials,UserType,users } from '../test-data/users'
import { products } from '../test-data/products';
import { Userdata, Userdatas } from '../test-data/fill_user';

test.describe("Checkout Validation Automation", () => {
    test.beforeEach(async({page}) => {
        
   
    
        await page.goto('https://saucedemo.com');
   

    
    await page.locator('.login-box .form_group .input_error').first().fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();


    await page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test = "add-to-cart-sauce-labs-bike-light"]').click();
await page.locator('[data-test = "shopping-cart-link"]').click()

    })

    test('TC__010-Checkout with Valid Details', async ({page}) =>{
await page.locator('[data-test = "checkout"]').click()
await page.locator('[data-test = "firstName"]').fill(Userdatas.firstname)
await page.locator('[data-test = "lastName"]').fill(Userdatas.lastname)
await page.locator('[data-test = "postalCode"]').fill(Userdatas.postalcode)
await page.locator('[data-test = "continue"]').click()
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')

    })
        test('TC__011-Checkout with missing first name', async ({page}) =>{
await page.locator('[data-test = "checkout"]').click()
await page.locator('[data-test = "firstName"]').fill('')
await page.locator('[data-test = "lastName"]').fill(Userdatas.lastname)
await page.locator('[data-test = "postalCode"]').fill(Userdatas.postalcode)
await page.locator('[data-test = "continue"]').click()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: First Name is required')


    })
            test('TC__012-Checkout with missing postal code', async ({page}) =>{
await page.locator('[data-test = "checkout"]').click()
await page.locator('[data-test = "firstName"]').fill(Userdatas.firstname)
await page.locator('[data-test = "lastName"]').fill(Userdatas.lastname)
await page.locator('[data-test = "postalCode"]').fill('')
await page.locator('[data-test = "continue"]').click()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: Postal Code is required')


    })
        test('TC__013-Checkout with missing first name', async ({page}) =>{
await page.locator('[data-test = "checkout"]').click()
await page.locator('[data-test = "firstName"]').fill('')
await page.locator('[data-test = "lastName"]').fill('')
await page.locator('[data-test = "postalCode"]').fill('')
await page.locator('[data-test = "continue"]').click()
await expect(page.locator('[data-test = "error"]')).toHaveText('Error: First Name is required')


        })


})