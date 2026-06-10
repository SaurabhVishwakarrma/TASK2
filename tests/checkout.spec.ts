import { test } from "../fixtures/baseFixtures";
import { Userdatas } from "../test-data/fill_user";
import { loginAsStandardUser } from "../utils/testHelpers";

import { messages } from "../constants/errorMessages";

test.describe("Checkout Validation Automation", () => {
  test.beforeEach(async ({ loginPage, productsPage, page }) => {
    await loginPage.goto();
    await loginAsStandardUser(page);
    await productsPage.addMultipleProducts();
    await productsPage.goToCart();
  });

  test("TC__010-Checkout with Valid Details @smoke @checkout", async ({
    page,
    cartPage,
    checkoutPage,
  }) => {
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(
      Userdatas[0].firstname,
      Userdatas[0].lastname,
      Userdatas[0].postalcode,
    );
    await checkoutPage.continueCheckout();
    await checkoutPage.checkValidationpage();
  });
  test("TC__011-Checkout with missing first name @negative @checkout", async ({
    page,
    cartPage,
    checkoutPage,
  }) => {
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(
      Userdatas[1].firstname,
      Userdatas[1].lastname,
      Userdatas[1].postalcode,
    );
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyError(messages.firstNameRequired);
  });
  test("TC__012-Checkout with missing postal code @negative @checkout", async ({
    page,
    checkoutPage,
    cartPage,
  }) => {
    await cartPage.checkout();
    await checkoutPage.fillCheckoutDetails(
      Userdatas[3].firstname,
      Userdatas[3].lastname,
      Userdatas[3].postalcode,
    );
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyError(messages.postalCodeRequired);
  });
});
