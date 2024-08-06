import { chromium } from 'playwright';
import { HomePage } from './pages/homePage';

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const homePage = new HomePage(page);

  await homePage.goto();
  await page.getByTestId('cwc-accept').click(); // Logic accept age
  await context.storageState({ path: 'state.json' }); // Save state session

  await browser.close();
}

export default globalSetup;
