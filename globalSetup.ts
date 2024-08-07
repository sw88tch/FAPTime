import { chromium } from 'playwright';

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  await context.addCookies([
    {
      name: 'cookie-accepted',
      value: '1',
      domain: '.faphouse.com',
      path: '/'
    }
  ]);

  await context.storageState({ path: 'state.json' });
  await browser.close();
}

export default globalSetup;
