import { test, expect } from "@playwright/test";
test.describe("Simple ui test", () => {
  test("check api response", async ({ page, request }) => {
    // Arrange:
    const buttonSelector = '#id-button-element';
    const buttonLocator = page.locator(buttonSelector);
    const resultsSelector = '#results';
    const resultsLocator = page.locator(resultsSelector);
    await page.goto('/practice/simple-elements.html');
    // Act: interact with UI element
    await buttonLocator.click();
    // Assert:
    await expect(resultsLocator).toHaveText('You clicked the button!');
    const response =  request.get("/api");
  });
});