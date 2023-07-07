import { Locator, Page } from "@playwright/test";

export class NavigationBar {
    page: Page;
    accountIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountIcon = page.locator('[id="header_account_icon_id"]');
    }

    async openLoginPage() {
        await this.accountIcon.waitFor();
        await this.accountIcon.click();
    }
}
