import { Page } from '@playwright/test';
import { homePageLocators } from '../locators/homePageLocators';

export class HomePage {
  private readonly page: Page;

  private readonly homePageLocators = homePageLocators;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://faphouse.com/', { waitUntil: 'networkidle' });
  }

  async clickRandomBestVideo() {
    await this.page.waitForSelector(this.homePageLocators.bestBlockItems);
    const elements = await this.page.$$(this.homePageLocators.bestBlockItems);

    if (elements.length > 0) {
      const randomIndex = Math.floor(Math.random() * elements.length);
      await elements[randomIndex].click();
      await this.page.waitForResponse(response => response.status() === 200);
    }
  }
}
