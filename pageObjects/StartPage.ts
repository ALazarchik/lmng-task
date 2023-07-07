import { Page } from "@playwright/test";

export class StartPage {
    page: Page;

    constructor(page) {
        this.page = page;
    }

    async visit() {
        await this.page.goto('/');
    }
}
