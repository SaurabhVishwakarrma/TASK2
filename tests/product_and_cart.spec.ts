import {test,expect } from '@playwright/test'
import { UserCredentials,UserType,users } from '../test-data/users'
import { products } from '../test-data/products';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

let product1 = products[0];
let product2 = products[1];


const validUser  = users[0];
let loginpage : LoginPage
let productpage : ProductsPage
let cartpage : CartPage

test.describe("Product and Cart Automation testing", () => {
    test.beforeEach(async({page}) => {
        loginpage = new LoginPage(page);
        productpage = new ProductsPage(page);
        cartpage = new CartPage(page);
     await loginpage.login(validUser.username,validUser.password);


    })


   test('TC_005 - Product List should be Visible ', async ({page})=> {

     await productpage.verifyProductsPageIsVisible()



  })
     test('TC_006- Add one product to the cart', async ({page})=> {

     await productpage.addProductToCart("sauce-labs-backpack");
     await productpage.verifyCartCount(1)

})



test('TC_007- Remove one Product', async ({page})=> {
await productpage.addProductToCart("sauce-labs-backpack");
await productpage.verifyCartCount(0);

})

     test('TC_008- Add multiple products to the cart', async ({page})=> {

     await productpage.addProductToCart("sauce-labs-backpack");
     await productpage.verifyCartCount(1)
    await productpage.addProductToCart("sauce-labs-bike-light");
     await productpage.verifyCartCount(2)


})

test('TC_009- Cart page should show selected products', async ({page})=> {


await productpage.addProductToCart("sauce-labs-backpack");
await productpage.addProductToCart("sauce-labs-bike-light");
await productpage.goToCart()
await cartpage.verifyProductInCart(product1.name)
await cartpage.verifyProductInCart(product2.name)






})


 









})



