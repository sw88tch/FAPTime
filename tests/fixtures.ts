import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { VideoPage } from '../pages/videoPage';

type Fixtures = {
  homePage: HomePage;
  videoPage: VideoPage;
};

const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  videoPage: async ({ page }, use) => {
    const videoPage = new VideoPage(page);
    await use(videoPage);
  },
});

export { test };
