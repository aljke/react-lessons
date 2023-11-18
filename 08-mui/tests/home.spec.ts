import { test, expect } from '@playwright/test';

const baseUrl = "http://localhost:3000/";

test('should have correct menu items', async ({ page }) => {
    await page.goto(baseUrl);

    const expectedMenuItems = ['Home', 'Waiters', 'About'];
    const menuItems = page.locator('nav a');

    expect(await menuItems.allTextContents()).toEqual(expectedMenuItems)
});

test('Waiters page should have Create button', async({ page }) => {
    await page.goto(`${baseUrl}waiters`);

    const createBtn = page.getByRole('button', { name: 'Create' });

    await expect(createBtn).not.toBeNull();
});

test('Create button should navigate to /create', async({ page }) => {
    await page.goto(`${baseUrl}waiters`);

    const createBtn = page.getByRole('button', { name: 'Create' });
    await createBtn.click();

    await page.getByRole('button', { name: 'Submit' }).isVisible();

    await expect(page).toHaveURL(`${baseUrl}waiters/create`);
});

test('Waiter should be created', async({ page }) => {
    const expectedName = "Andrii";
    const expectedPhone = "066-765-32-18";

    await page.goto(`${baseUrl}waiters/create`);

    await page.getByLabel('Name')
        .fill(expectedName);

    await page.getByLabel('Phone')
        .fill(expectedPhone);

    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page).toHaveURL(`${baseUrl}waiters`);
    
    expect(page.locator('p.MuiTypography-root').filter({ hasText: expectedName })).not.toBeNull();
    expect(page.locator('p.MuiTypography-root').filter({ hasText: expectedPhone })).not.toBeNull();
});
