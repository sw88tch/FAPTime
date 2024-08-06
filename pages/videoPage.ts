import { Page } from '@playwright/test';
import { videoPageLocators } from '../locators/videoPageLocators';

export class VideoPage {
  constructor(private page: Page) {}

  async waitForContainer() {
    return await this.page.waitForSelector(videoPageLocators.container);
  }

  async checkVolumeToggle() {
    const container = await this.waitForContainer();
    const controlsInner = await container.$(videoPageLocators.controlsInner);
    const volumeToggle = await controlsInner?.$(videoPageLocators.volumeToggle);

    if (volumeToggle) {
      const hasIcon = await volumeToggle.$(videoPageLocators.icon) !== null;
      const hasUnmutedClass = await volumeToggle.evaluate(
        (el, unmutedClass) => el.classList.contains(unmutedClass),
        videoPageLocators.unmutedClass,
      );
      return { hasIcon, hasUnmutedClass };
    }
    return { hasIcon: false, hasUnmutedClass: false };
  }

  async waitForMenuClosed() {
    await this.page.waitForSelector(videoPageLocators.menu);
    await this.page.waitForFunction(
      (selector: string) => {
        const menuElement = document.querySelector(selector) as HTMLElement;
        return menuElement && menuElement.classList.contains('video-purchase__menu_closed');
      },
      videoPageLocators.menu,
    );
  }
}
