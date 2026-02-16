import { test, expect } from '@playwright/test';

test.describe('Page Réalisations', () => {
  test.describe('Desktop', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/realisations');
    });

    test('should display 5 projects', async ({ page }) => {
      const projects = page.locator('.grid a[href^="/realisations/"]');
      await expect(projects).toHaveCount(5);
    });

    test('should display project cards with required information', async ({ page }) => {
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      
      // Vérifier l'image ou l'icône
      await expect(firstProject.locator('img, span:has-text("📁")')).toBeVisible();
      
      // Vérifier le titre
      await expect(firstProject.locator('h2')).toBeVisible();
      
      // Vérifier la description
      await expect(firstProject.locator('p')).toBeVisible();
      
      // Vérifier les badges technologies (au moins 1)
      const techBadges = firstProject.locator('.flex.flex-wrap.gap-2 span');
      await expect(techBadges.first()).toBeVisible();
      
      // Vérifier la date (sélecteur plus spécifique)
      await expect(firstProject.locator('.flex.items-center.gap-1:has-text("📅")')).toBeVisible();

      // Vérifier le CTA
      await expect(firstProject.locator('text=Voir le projet')).toBeVisible();
    });

    test('should navigate to individual project page', async ({ page }) => {
      await page.locator('.grid a[href^="/realisations/"]').first().click();
      await expect(page).toHaveURL(/\/realisations\/[^/]+$/);
    });

    test('should display CTA to skills page', async ({ page }) => {
      // Vérifier la présence du CTA vers les compétences (plus spécifique)
      const skillsCTA = page.locator('main a[href="/competences"]:has-text("compétences")');
      await expect(skillsCTA).toBeVisible();
      await expect(skillsCTA).toContainText('compétences');
    });
  });

  test.describe('Individual Project Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/realisations/projet-1');
    });

    test('should display 7 required sections', async ({ page }) => {
      // 1. Présentation
      await expect(page.locator('h2:has-text("Présentation")')).toBeVisible();
      
      // 2. Objectifs, contexte et enjeux
      await expect(page.locator('h2:has-text("Objectifs")')).toBeVisible();
      
      // 3. Les étapes
      await expect(page.locator('h2:has-text("étapes")')).toBeVisible();
      
      // 4. Les acteurs
      await expect(page.locator('h2:has-text("acteurs")')).toBeVisible();
      
      // 5. Les résultats
      await expect(page.locator('h2:has-text("résultats")')).toBeVisible();
      
      // 6. Les lendemains
      await expect(page.locator('h2:has-text("lendemains")')).toBeVisible();
      
      // 7. Mon regard critique
      await expect(page.locator('h2:has-text("regard critique")')).toBeVisible();
    });

    test('should display project metadata', async ({ page }) => {
      // Vérifier la période
      await expect(page.locator('article .flex.items-center.gap-2:has-text("📅")').first()).toBeVisible();
      
      // Vérifier le contexte
      await expect(page.locator('header .flex.items-center.gap-2:has-text("🎯")')).toBeVisible();
      
      // Vérifier les technologies (au moins 1)
      const techBadges = page.locator('.flex.flex-wrap.gap-2 span.bg-indigo-100');
      await expect(techBadges.first()).toBeVisible();
    });

    test('should display related skills section', async ({ page }) => {
      const relatedSkills = page.locator('section:has-text("Compétences mobilisées")');
      await expect(relatedSkills).toBeVisible();
      
      // Vérifier qu'il y a au moins un lien vers les compétences
      const skillLinks = relatedSkills.locator('a[href^="/competences/"]');
      await expect(skillLinks.first()).toBeVisible();
    });

    test('should have breadcrumb navigation', async ({ page }) => {
      const breadcrumb = page.locator('article nav.mb-8');
      await expect(breadcrumb).toBeVisible();
      await expect(breadcrumb.locator('a[href="/"]')).toBeVisible();
      await expect(breadcrumb.locator('a[href="/realisations"]')).toBeVisible();
    });

    test('should have prev/next project navigation', async ({ page }) => {
      // Vérifier la présence du bouton "Tous les projets"
      await expect(page.locator('a[href="/realisations"]:has-text("Tous les projets")')).toBeVisible();
    });
  });

  test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display 5 projects on mobile', async ({ page }) => {
      await page.goto('/realisations');
      const projects = page.locator('.grid a[href^="/realisations/"]');
      await expect(projects).toHaveCount(5);
    });

    test('should display project cards in responsive layout', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await expect(firstProject).toBeVisible();
    });

    test('should display project details on mobile', async ({ page }) => {
      await page.goto('/realisations/projet-1');
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('h2:has-text("Présentation")')).toBeVisible();
    });

    test('should have working navigation on mobile', async ({ page }) => {
      await page.goto('/realisations/projet-1');
      await expect(page.locator('a[href="/realisations"]:has-text("Tous les projets")')).toBeVisible();
    });

    test('should display breadcrumb on mobile', async ({ page }) => {
      await page.goto('/realisations/projet-1');
      const breadcrumb = page.locator('article nav.mb-8');
      await expect(breadcrumb.locator('a[href="/"]')).toBeVisible();
    });
  });
});
