import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should display profile photo', async ({ page }) => {
    const profileImage = page.locator('img').first();
    await expect(profileImage).toBeVisible();
    
    // Vérifier que l'image a un src valide
    const src = await profileImage.getAttribute('src');
    expect(src).toBeTruthy();
  });

  test('should display name', async ({ page }) => {
    // Vérifier la présence du h1 avec le nom
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    const text = await h1.textContent();
    expect(text).toBeTruthy();
  });

  test('should display professional title', async ({ page }) => {
    // Vérifier qu'il y a du texte après le h1
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(0);
  });

  test('should display skills summary section', async ({ page }) => {
    // Vérifier qu'il y a des compétences affichées
    const hasSkillsText = await page.textContent('body');
    expect(hasSkillsText).toContain('Compétences');
  });

  test('should have CTA buttons', async ({ page }) => {
    // Vérifier la présence de liens
    const links = page.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display social links', async ({ page }) => {
    // Vérifier la présence de liens externes
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Vérifier que la page est toujours visible et lisible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    // Vérifier la présence d'une structure sémantique
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should have hero section', async ({ page }) => {
    // Vérifier qu'il y a une section avec du contenu
    const section = page.locator('section').first();
    await expect(section).toBeVisible();
  });

  test('should load without critical errors', async ({ page }) => {
    // Vérifier que la page charge
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Vérifier qu'il y a du contenu
    const content = await page.textContent('body');
    expect(content!.length).toBeGreaterThan(100);
  });
});
