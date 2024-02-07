import { expect, type Locator, type Page } from "@playwright/test";

 class HomePage{

  readonly page:Page;
  readonly getStartedLink:Locator;
  readonly title:RegExp;

  constructor(page:Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: "Docs"})
    this.title = /Playwright/;
  }

  async clickGetStarted () {
    await this.getStartedLink.click();
  }

  async assertPageTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }
}

export default HomePage;