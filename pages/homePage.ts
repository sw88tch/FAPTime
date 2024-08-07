import { expect } from '@playwright/test';
import { Page } from '@playwright/test';

export type HomePageLocators = {
  bestBlockItems: string;
};

const homePageLocators: HomePageLocators = {
  bestBlockItems: '[data-el-block="best"] div.t-m',
};

export class HomePage {
  protected readonly page: Page;
  private readonly homePageLocators = homePageLocators;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(homePage: string) {
    await this.page.goto(homePage, { waitUntil: 'networkidle' });
  }

  async clickRandomBestVideo(): Promise<void> {
    const bestBlockItemsLocator = this.page.locator(this.homePageLocators.bestBlockItems);
    const elementsCount = await bestBlockItemsLocator.count();
  
    expect(elementsCount).toBeGreaterThan(0);
  
    const randomIndex = Math.floor(Math.random() * elementsCount);
    await bestBlockItemsLocator.nth(randomIndex).click();
    await this.page.waitForResponse(response => response.status() === 200);
  }
}
