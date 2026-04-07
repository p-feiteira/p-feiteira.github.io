import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/en/', name: 'home-en' },
  { path: '/pt/', name: 'home-pt' },
  { path: '/en/showcase/sereno-spa', name: 'showcase-sereno-spa' },
  { path: '/en/showcase/vertex-studio', name: 'showcase-vertex-studio' },
  { path: '/en/showcase/roam-bean', name: 'showcase-roam-bean' },
];

for (const route of ROUTES) {
  test.describe(`${route.name}`, () => {
    test('no horizontal overflow', async ({ page }) => {
      await page.goto(route.path);
      await page.waitForLoadState('networkidle');

      const hasHorizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasHorizontalOverflow, 'page should not have horizontal overflow').toBe(false);
    });
  });
}

test.describe('Home page — key elements visible', () => {
  test('header, hero, contact, footer visible on home', async ({ page }) => {
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('header#home')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
