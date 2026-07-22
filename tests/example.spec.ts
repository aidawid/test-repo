import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('test', async ({ page }) => {
  // Arrange
  const url = 'https://demo-bank.vercel.app/';
  const userName = 'testerLO';
  const password = 'HasloTes';

  // Act
  await page.goto(url);
  await page.getByTestId('').click
  await page.getByTestId('login-input').click();
  await page.locator('#login-input').fill(userName);
  await page.getByTestId('login-input').press('Tab');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill(password);
  await page.getByTestId('login-button').click();
  await page.locator('#widget_1_transfer_amount').click();
  await page.locator('#widget_1_transfer_amount').fill('50000');
  await page.locator('#widget_1_transfer_title')


  // Assert
  await expect(page.locator('#show_messages')).toHaveText('qahjhsdahsdkajh');
});
