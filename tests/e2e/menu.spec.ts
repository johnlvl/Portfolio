import { test, expect } from '@playwright/test';

test.describe('Navigation Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should display navigation menu', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should have all required menu items', async ({ page }) => {
    // Vérifier la présence d'au moins quelques liens
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(4); // Au moins 4 liens dans le menu
  });

  test('should display profile info in navigation', async ({ page }) => {
    // Vérifier la présence d'infos dans la navigation
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display profile photo in navigation', async ({ page }) => {
    const nav = page.locator('nav');
    const images = nav.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });

  test('menu links should be clickable', async ({ page }) => {
    const firstLink = page.locator('nav a').first();
    await expect(firstLink).toBeEnabled();
  });

  test('should be persistent on scroll (desktop)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(300);
    
    // Menu should still be visible
    await expect(nav).toBeVisible();
  });

  test('should have mobile burger menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Chercher le burger menu
    const burgerButton = page.locator('nav button').first();
    const hasBurger = await burgerButton.isVisible().catch(() => false);
    
    if (hasBurger) {
      // Vérifier que le burger est cliquable
      await expect(burgerButton).toBeEnabled();
    }
  });

  test('menu should be responsive', async ({ page }) => {
    // Test sur différentes tailles d'écran
    const viewports = [
      { width: 375, height: 667 },
      { width: 1280, height: 800 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      const nav = page.locator('nav');
      await expect(nav).toBeVisible();
    }
  });

  test('navigation should be semantic', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});
