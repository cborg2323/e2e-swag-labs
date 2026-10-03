import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';
import { User } from '../data/types';

type Fixtures = {
    users: typeof users;
    loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
    users: async ({}, use) => {
        await use(users);
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

});

export { expect } from '@playwright/test';