import { test, expect } from "../fixtures/baseFixtures";
import { users } from "../test-data/users";
import { products } from "../test-data/products";
import { values } from "../test-data/expectedValues";

let productone = products[0];
let producttwo = products[1];

test.describe("Product and Cart Automation testing", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users[0].username, users[0].password);
  });


  test("TC_005 - Product List should be Visible @regression ", async ({
    productsPage,
  }) => {
    await productsPage.verifyProductsPageIsVisible();
  });



  test("TC_006- Add one product to the cart @regression @cart", async ({
    productsPage,
  }) => {
    await productsPage.addProductToCart(products[0].name);
    await productsPage.verifyCartCount(values.one_product);
  });



  test("TC_007- Remove one Product  @regression @cart", async ({
    productsPage,
  }) => {
    await productsPage.addProductToCart(products[0].name);
    await productsPage.verifyCartCount(values.one_product);
    await productsPage.removeProductFromCart(products[0].name);
    await productsPage.checkCartBadgeIfNoProducts();
  });



  test("TC_009- Cart page should show selected products @regression @cart", async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.addMultipleProducts();
    await productsPage.goToCart();
    await cartPage.verifyProductInCart(products[0].name);
    await cartPage.verifyProductInCart(products[1].name);
  });

  
  test("TC_008 Add multiple products to cart @regression @cart ", async ({
    productsPage,
  }) => {
    await productsPage.addMultipleProducts();
    await productsPage.verifyCartCount(products.length);
  });
});
