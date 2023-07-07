import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    loginError: Locator;

    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('[data-testid="login-email-input"]');
        this.passwordInput = page.locator('[data-testid="login-password-input"]');
        this.loginButton = page.locator('[data-testid="login-submit-button"]');
        this.loginError = page.locator('[data-testid="login-password-input-error"]');
    }

    async submitLoginCredentials(email: string, password: string) {
        await this.emailInput.waitFor();
        await this.emailInput.fill(email);
        await this.passwordInput.waitFor();
        await this.passwordInput.fill(password);
        await this.loginButton.waitFor();
        await this.loginButton.click();
    }

    async checkLoginErrorMessageText(errorText: string) {
        await this.loginError.waitFor();
        await expect(this.loginError).toContainText(errorText);
    }
}
