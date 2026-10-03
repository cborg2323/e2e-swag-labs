import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly siginButton: Locator;

    readonly errorMessageList: Locator;

    readonly inventoryTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = this.page.getByTestId('username');
        this.passwordInput = this.page.getByTestId('password');
        this.siginButton = this.page.getByTestId('login-button');

        this.errorMessageList = this.page.getByTestId('error');

        this.inventoryTitle = this.page.getByTestId('title');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(userName: string, password: string) {
        await this.usernameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.siginButton.click();
    }
}