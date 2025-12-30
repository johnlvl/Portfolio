import { test, expect } from '@playwright/test';

test.describe('Presentation Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/presentation');
    await page.waitForLoadState('domcontentloaded');
  });

  test('should have proper page structure', async ({ page }) => {
    // Vérifier le h1
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    const h1Text = await h1.textContent();
    expect(h1Text).toBeTruthy();
  });

  test('should display "Mes valeurs" section', async ({ page }) => {
    // Vérifier la présence de la section valeurs
    const pageText = await page.textContent('body');
    expect(pageText).toContain('valeurs');
    
    // Vérifier qu'il y a des paragraphes dans cette section
    const paragraphs = page.locator('p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThan(3);
  });

  test('should display "Mon projet professionnel et personnel" section', async ({ page }) => {
    const pageText = await page.textContent('body');
    expect(pageText).toContain('projet professionnel');
  });

  test('should display "Mes principales qualités humaines" section', async ({ page }) => {
    const pageText = await page.textContent('body');
    expect(pageText).toContain('qualités');
  });

  test('should display "Mes principaux centres d\'intérêt" section', async ({ page }) => {
    const pageText = await page.textContent('body');
    expect(pageText).toContain('centres d\'intérêt');
  });

  test('should have structured content with headings', async ({ page }) => {
    // Vérifier la présence de h2
    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThanOrEqual(4); // Au moins 4 sections
  });

  test('should have bold text for emphasis', async ({ page }) => {
    // Vérifier la présence de texte en gras
    const strongElements = page.locator('strong');
    const count = await strongElements.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have paragraphs with proper structure', async ({ page }) => {
    // Vérifier qu'il y a suffisamment de paragraphes
    const paragraphs = page.locator('article p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThan(5);
  });

  test('should display CTA buttons', async ({ page }) => {
    // Vérifier la présence des CTAs vers compétences et réalisations (dans le footer)
    const competencesLink = page.getByRole('link', { name: /Découvrir mes compétences/i });
    await expect(competencesLink).toBeVisible();
    
    const realisationsLink = page.getByRole('link', { name: /Voir mes réalisations/i });
    await expect(realisationsLink).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Vérifier que le contenu est visible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Vérifier que les sections sont accessibles
    const article = page.locator('article');
    await expect(article).toBeVisible();
  });

  test('should have semantic HTML structure', async ({ page }) => {
    // Vérifier la présence d'une balise article
    const article = page.locator('article');
    await expect(article).toBeVisible();
    
    // Vérifier la présence de sections
    const sections = page.locator('section');
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should have quality cards in grid layout', async ({ page }) => {
    // Vérifier la présence de cartes pour les qualités
    const qualityCards = page.locator('h3');
    const count = await qualityCards.count();
    expect(count).toBeGreaterThan(3); // Au moins quelques qualités affichées
  });

  test('should load without critical errors', async ({ page }) => {
    // Vérifier que la page charge correctement
    const article = page.locator('article');
    await expect(article).toBeVisible();
    
    // Vérifier qu'il y a du contenu substantiel
    const pageText = await page.textContent('body');
    expect(pageText!.length).toBeGreaterThan(500);
  });

  test('CTAs should be clickable', async ({ page }) => {
    const competencesLink = page.getByRole('link', { name: /Découvrir mes compétences/i });
    await expect(competencesLink).toBeEnabled();
    
    const realisationsLink = page.getByRole('link', { name: /Voir mes réalisations/i });
    await expect(realisationsLink).toBeEnabled();
  });
});
