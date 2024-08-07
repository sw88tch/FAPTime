import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
  globalSetup: path.resolve(__dirname, './globalSetup.ts'),
  projects: [
    {
      name: 'chrome',
      use: { 
        browserName: 'chromium',
        headless: false,
        storageState: path.resolve(__dirname, 'state.json'), // Use saved state
      },
    },
  ],
  testDir: 'tests',
});
