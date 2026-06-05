import { test, expect} from '@playwright/test'
import { UserCredentials,UserType,users } from '../test-data/users';


// 



test.describe('Login Functionality Using User Data', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com');
  });

  test('TC_001 - Login page should load', async ({page})=> {
   await expect(page.locator('.login-box .form_group .input_error')).toBeVisible;
   await expect(page.locator('user-data:"password"')).toBeVisible;

  })
  test('TC_002 - Valid user should be able to login', async ({ page }) => {
    
    const standardUser = users.find(u => u.type === 'standard');
    
    
    if (!standardUser) throw new Error('Standard user not found ');

    
    await page.locator('.login-box .form_group .input_error').first().fill(standardUser.username);
    await page.locator('[data-test="password"]').fill(standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/.*inventory.html/);
  });

    test('TC_003 - Invalid password should show error', async ({ page }) => {
    
    const standardUser = users.find(u => u.type === 'standard');
    
    
    if (!standardUser) throw new Error('Standard user not found in mock data');

    
    await page.locator('.login-box .form_group .input_error').first().fill(standardUser.username);
    await page.locator('[data-test="password"]').fill("@1232323");
    await page.locator('[data-test="login-button"]').click();
    const errorContainer1 = page.locator('.error-message-container error');
    await expect(errorContainer1).toBeVisible;
  });

  test('TC_004 - Locked user should not be able to login', async ({ page }) => {
    
    const lockedUser = users.find(u => u.type === 'locked');
    
    if (!lockedUser) throw new Error('Locked user not found in mock data');

    
    await page.locator('[data-test="username"]').fill(lockedUser.username);
    await page.locator('[data-test="password"]').fill(lockedUser.password);
    await page.locator('[data-test="login-button"]').click();

    
    const errorContainer = page.locator('.login-box .error-message-container');
    await expect(errorContainer).toBeVisible();
  });

});
