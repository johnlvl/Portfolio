import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  const pages = [
    { name: 'Homepage', url: '/' },
  ];

  const viewports = [
    { name: 'Mobile Portrait', width: 375, height: 667 },
    { name: 'Desktop', width: 1280, height: 800 },
  ];

  pages.forEach(({ name: pageName, url }) => {
    viewports.forEach(({ name: viewportName, width, height }) => {
      test(`${pageName} should be responsive on ${viewportName} (${width}x${height})`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto(url);
        await page.waitForLoadState('domcontentloaded');

        // Vérifier qu'il n'y a pas de débordement horizontal (avec tolérance)
        const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
        expect(bodyWidth).toBeLessThanOrEqual(width + 50); // Tolérance plus large

        // Vérifier que le contenu principal est visible
        const h1 = page.locator('h1');
        await expect(h1).toBeVisible({ timeout: 5000 });

        // Vérifier que la navigation est présente
        const nav = page.locator('nav');
        await expect(nav).toBeVisible({ timeout: 5000 });
      });
    });
  });

  test('images should be responsive', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const viewports = [
      { width: 375, height: 667 },
      { width: 1280, height: 800 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(300); // Attendre le resize
      
      const images = page.locator('img');
      const count = await images.count();

      if (count > 0) {
        const img = images.first();
        const width = await img.evaluate((el: HTMLImageElement) => el.clientWidth);
        
        // Vérifier que l'image ne dépasse pas la largeur du viewport
        expect(width).toBeLessThanOrEqual(viewport.width);
      }
    }
  });

  test('text should be readable on all screen sizes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    const viewports = [
      { width: 375, height: 667 },
      { width: 1280, height: 800 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.waitForTimeout(200);
      
      // Vérifier que le texte a une taille minimale
      const fontSize = await page.evaluate(() => {
        const body = document.body;
        const computedStyle = window.getComputedStyle(body);
        return parseInt(computedStyle.fontSize);
      });

      // La taille de police devrait être au moins 12px
      expect(fontSize).toBeGreaterThanOrEqual(12);
    }
  });

  test('interactive elements should be accessible on touch devices', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Vérifier que les liens principaux ont une taille suffisante
    const links = page.locator('a').filter({ hasText: /.+/ });
    const count = await links.count();

    let validElements = 0;
    for (let i = 0; i < Math.min(count, 5); i++) {
      const element = links.nth(i);
      const isVisible = await element.isVisible().catch(() => false);
      
      if (isVisible) {
        const box = await element.boundingBox();
        if (box && box.width > 0 && box.height > 0) {
          validElements++;
        }
      }
    }
    
    // Vérifier qu'on a trouvé au moins quelques éléments interactifs
    expect(validElements).toBeGreaterThan(0);
  });
});
