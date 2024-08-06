import { test } from './fixtures';
import { expect } from '@playwright/test';

test('First fap test', async ({ homePage, videoPage }) => {
  await homePage.goto();
  await homePage.clickRandomBestVideo();

  const { hasIcon, hasUnmutedClass } = await videoPage.checkVolumeToggle();

  expect(hasIcon).toBe(true);
  expect(hasUnmutedClass).toBe(false);

  await videoPage.waitForMenuClosed();
});
