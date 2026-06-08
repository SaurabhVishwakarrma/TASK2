import {test,expect } from '@playwright/test'
import { UserCredentials,UserType,users } from '../test-data/users'
import { products } from '../test-data/products';
let product1 = products[0];
let product2 = products[1];
test.describe("Product and Cart Automation testing", () => {
    test.beforeEach(async({page}) => {
        
   
    
        await page.goto('https://saucedemo.com');
   

    
    await page.locator('.login-box .form_group .input_error').first().fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    })


   test('TC_005 - Product List should be Visible ', async ({page})=> {

    const products_cards = page.locator('[data-test="inventory-item"]')

    for( const cards of await products_cards.all()){
        await expect(cards).toBeVisible();
    }



  })
     test('TC_006- Add one product to the cart', async ({page})=> {

await page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click();
await expect (page.locator('[data-test = "shopping-cart-badge"]')).toHaveText("1")})

test('TC_008- Add Multiple products to the cart', async ({page})=> {
await page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test = "add-to-cart-sauce-labs-bike-light"]').click()
await expect (page.locator('[data-test = "shopping-cart-badge"]')).toHaveText("2")


})

test('TC_007- Remove one Product', async ({page})=> {
await page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test = "add-to-cart-sauce-labs-bike-light"]').click()
await expect (page.locator('[data-test = "shopping-cart-badge"]')).toHaveText("2")
await page.locator('[data-test = "remove-sauce-labs-backpack"]').click()
await expect (page.locator('[data-test = "shopping-cart-badge"]')).toHaveText("1")

})

test('TC_009- Cart page should show selected products', async ({page})=> {

await page.locator('[data-test = "add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test = "add-to-cart-sauce-labs-bike-light"]').click();
await page.locator('[data-test = "shopping-cart-link"]').click();

await expect(page.getByText(product1.name)).toBeVisible()
await expect(page.getByText(product2.name)).toBeVisible()


// await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(product1.name)

// await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(product2.name)

})

test
 









})



