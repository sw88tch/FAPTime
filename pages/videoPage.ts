import { expect } from '@playwright/test';
import { HomePage } from './homePage';
import { Locator } from 'playwright';

export type VideoPageLocators = {
  container: Locator;
  controlsInner: Locator;
  volumeToggle: Locator;
  icon: Locator;
  unmutedClass: string;
  menu: Locator;
  videoElement: Locator;
};

export class VideoPage extends HomePage {
  private readonly videoPageLocators: VideoPageLocators;

  constructor(page: any) {
    super(page);
    this.videoPageLocators = {
      container: page.locator('.video__main.video__main_gold'),
      controlsInner: page.locator('.video-purchase__controls-inner'),
      volumeToggle: page.locator('.video-purchase__volume-toggle'),
      icon: page.locator('.icon_player-mute'),
      unmutedClass: 'video-purchase__volume-toggle_unmuted',
      menu: page.locator('.video__main.video__main_gold .video-purchase__menu'),
      videoElement: page.locator('div.video-purchase__trailer video')
    };
  }

  async waitForContainer() {
    await this.videoPageLocators.container.waitFor({ state: 'attached' });
  }

  async checkVideoPlaying(): Promise<void> {
    const videoElement = this.videoPageLocators.videoElement;
    await videoElement.evaluate((video: HTMLVideoElement) => !video.paused);
  }

  async checkMutedState(unMuted: boolean): Promise<void> {
    const volumeToggle = this.videoPageLocators.volumeToggle;
    const hasUnmutedClass = await volumeToggle.evaluate(
      (element: HTMLElement, className: string) => element.classList.contains(className),
      this.videoPageLocators.unmutedClass
    );
    await expect(hasUnmutedClass).toBe(!unMuted);
  }
  
  async waitForMenuClosed(): Promise<void> {
    const menu = this.videoPageLocators.menu;
    await expect(menu).toBeHidden();
  }
}
