import { test, expect } from '@playwright/test';

const LOCALES = ['en', 'pt'];
const SLUGS = [
  'vertex-studio',
  'meridian-goods',
  'linha-viva-listings',
  'linha-viva-obras',
  'roam-bean',
  'sereno-spa'
];

for (const locale of LOCALES) {
  test.describe(`Showcases in ${locale}`, () => {
    test('Hub displays properly', async ({ page }) => {
      await page.goto(`/${locale}`);
      const showcaseSection = page.locator('#showcase');
      await expect(showcaseSection).toBeVisible();
    });

    for (const slug of SLUGS) {
      test(`Showcase page /${locale}/showcase/${slug} loads`, async ({ page }) => {
        await page.goto(`/${locale}/showcase/${slug}`);
        const backButton = page.locator('a[href*="#showcase"]');
        await expect(backButton).toBeVisible();
      });
    }
  });
}