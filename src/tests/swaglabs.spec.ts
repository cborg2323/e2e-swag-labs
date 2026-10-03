import { expect, test } from '../fixtures/fixtures';

test.describe('Swag Labs - Main features', () => {

    test('should success login with standard user', async ({ users, loginPage }) => {
        await loginPage.goto();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(loginPage.inventoryTitle).toBeVisible();
        await expect(loginPage.page).toHaveURL('/inventory.html');
    });

    test('should fail with locked user', async ({ users, loginPage }) => {
        await loginPage.goto();

        await loginPage.login(
            users.lockedOut.username,
            users.lockedOut.password
        );

        await expect(loginPage.errorMessageList).toBeVisible();
        await expect(loginPage.errorMessageList).toContainText('locked out');
        await expect(loginPage.page).toHaveURL('/');
    });


});