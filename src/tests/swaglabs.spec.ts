import { expect, test } from '../fixtures/fixtures';

test.describe('Swag Labs - Main features', () => {

    test('should success login with standard user', async ({ loginPage }) => {
        await loginPage.goto();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(loginPage.inventoryTitle).toBeVisible();
        await expect(loginPage.page).toHaveURL('/inventory.html');
    });


});