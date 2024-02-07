import { test, expect, type Page } from '@playwright/test';
import HomePage from '../pages/home-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

async function clickGetStarted(page:Page) {
  await homePage.clickGetStarted();
}

test.describe('FCC test', () => {
  //action
  test('Go to documentation page', async () => {
    await homePage.clickGetStarted();
  })
  //assertion
  test('Check docs title', async () => {
    await homePage.assertPageTitle();
  })
})