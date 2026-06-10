import { test, expect } from "../fixtures/baseFixtures";
import { users } from "../test-data/users";

import { messages } from "../constants/errorMessages";
const validUser = users[0];
const lockedUser = users[1];
const invalidPasswordUser = users[3];

test.describe("Login Functionality Using User Data ", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.goto();
  });

  test("TC_001 - Login page should load @smoke", async ({
    page,
    loginPage,
  }) => {
    await loginPage.verifyLoginPageIsVisible();
  });
  test("TC_002 - Valid user should be able to login @smoke", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login(validUser.username, validUser.password);

    await loginPage.loginPageLoaded();
  });

  test("TC_003 - Invalid password should show error @negative @smoke", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login(
      invalidPasswordUser.username,
      invalidPasswordUser.password,
    );
    await loginPage.verifyErrorMessage(messages.loginWithInvalidPassword);
  });

  test("TC_004 - Locked user should not be able to login @negative @smoke", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login(lockedUser.username, lockedUser.password);

    await loginPage.verifyErrorMessage(messages.loginwithlockedUser);
  });
});
