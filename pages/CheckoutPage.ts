import { Locator, Page, expect } from "@playwright/test";
import { routes } from "../constants/routes";

export class CheckoutPage {
  readonly page: Page;
  readonly fname: Locator;
  readonly lname: Locator;
  readonly pcode: Locator;
  readonly finish: Locator;
  readonly continue: Locator;
  readonly errorbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fname = page.locator('[data-test = "firstName"]');
    this.lname = page.locator('[data-test = "lastName"]');
    this.pcode = page.locator('[data-test = "postalCode"]');
    this.finish = page.locator('[data-test = "finish"]');
    this.continue = page.locator('[data-test = "continue"]');
    this.errorbox = page.locator('[data-test = "error"]');
  }

  async fillCheckoutDetails(
    firstName: string,
    lastName: string,
    postalCode: string,
  ): Promise<void> {
    await this.fname.fill(firstName);
    await this.lname.fill(lastName);
    await this.pcode.fill(postalCode);
  }

  async continueCheckout(): Promise<void> {
    await this.continue.click();
  }
  async checkValidationpage(): Promise<void> {
    await expect(this.page).toHaveURL(routes.steptwo);
  }
  async verifyValidationMessage(expectedMessage: string): Promise<void> {
    await expect(this.page.getByText(expectedMessage)).toBeVisible();
  }
  async finishCheckout(): Promise<void> {
    await this.finish.click();
  }
  async verifyOrderConfirmation(): Promise<void> {
    await expect(
      this.page.getByText("Thank you for your order!"),
    ).toBeVisible();
  }
  async verifyError(expectedMessage: string): Promise<void> {
    await expect(this.errorbox).toHaveText(expectedMessage);
  }
}
