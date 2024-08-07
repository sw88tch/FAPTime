import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { VideoPage } from '../pages/videoPage';
import { config } from '../config';

test('Open random video from best block', async ({ page }) => {
  const homePage = new HomePage(page);
  const videoPage = new VideoPage(page);

  await homePage.goto(config.homePage);
  await homePage.clickRandomBestVideo();
  await videoPage.waitForContainer();
  await videoPage.checkVideoPlaying();
  await videoPage.checkMutedState(true);
})

