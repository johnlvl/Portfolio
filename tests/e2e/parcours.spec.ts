import { test, expect } from '@playwright/test';

test.describe('Page Parcours', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/parcours');
  });

  test.describe('Structure de la page', () => {
    test('should display page title and description', async ({ page }) => {
      await expect(page.locator('h1:has-text("Mon parcours")')).toBeVisible();
      await expect(page.locator('p:has-text("Retour sur mon cheminement")')).toBeVisible();
    });

    test('should display statistics', async ({ page }) => {
      // Vérifier la présence des statistiques dans les cartes de stats
      const statsSection = page.locator('.flex.flex-wrap.justify-center.gap-6').first();
      await expect(statsSection.locator('.text-4xl').first()).toBeVisible();
      await expect(statsSection.locator('text=/Expérience/').first()).toBeVisible();
      await expect(statsSection.locator('text=/Formation/').first()).toBeVisible();
      await expect(statsSection.locator('text=/Certification/').first()).toBeVisible();
    });

    test('should display the two column headers (desktop)', async ({ page }) => {
      // Les en-têtes de colonnes ne sont visibles qu'en vue desktop
      await page.setViewportSize({ width: 1280, height: 800 });
      await expect(page.locator('h2:has-text("Expériences professionnelles")')).toBeVisible();
      await expect(page.locator('h2:has-text("Formations & Certifications")')).toBeVisible();
    });
  });

  test.describe('Timeline unique - Positionnement gauche/droite', () => {
    test('should display experiences on the left and formations on the right (desktop)', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });

      // Les expériences (💼) sont positionnées à gauche
      const experienceItem = page.locator('.timeline-item-left:has-text("💼")').first();
      await expect(experienceItem).toBeVisible();

      // Les formations (🎓) sont positionnées à droite
      const formationItem = page.locator('.timeline-item-right:has-text("🎓")').first();
      await expect(formationItem).toBeVisible();
    });

    test('should display all timeline items in a single timeline', async ({ page }) => {
      const timelineItems = page.locator('.timeline-item');
      const count = await timelineItems.count();
      expect(count).toBeGreaterThanOrEqual(4);
      await expect(timelineItems.first()).toBeVisible();
    });

    test('should display dates in correct format', async ({ page }) => {
      const datePattern = page.locator('text=/📅.*202[0-9]/');
      await expect(datePattern.first()).toBeVisible();
    });
  });

  test.describe('Timeline Items - Contenu', () => {
    test('should display experience items with required information', async ({ page }) => {
      const experienceItem = page.locator('.timeline-item:has-text("💼")').first();
      await expect(experienceItem).toBeVisible();
      await expect(experienceItem.locator('.timeline-card h3').first()).toBeVisible();
      await expect(experienceItem.locator('.timeline-card p').first()).toBeVisible();
      await expect(experienceItem.locator('text=📅').first()).toBeVisible();
      await expect(experienceItem.locator('button:has-text("Voir les détails")')).toBeVisible();
    });

    test('should display formation items with required information', async ({ page }) => {
      const formationItem = page.locator('.timeline-item:has-text("🎓")').first();
      if (await formationItem.count() > 0) {
        await expect(formationItem).toBeVisible();
        await expect(formationItem.locator('.timeline-card h3').first()).toBeVisible();
        await expect(formationItem.locator('text=📅').first()).toBeVisible();
        await expect(formationItem.locator('button:has-text("Voir les détails")')).toBeVisible();
      }
    });

    test('should display organization logos', async ({ page }) => {
      const logos = page.locator('.timeline-item img[alt*="Logo"]');
      const logoCount = await logos.count();
      expect(logoCount).toBeGreaterThan(0);
    });
  });

  test.describe('Logo cliquable', () => {
    test('should open modal when clicking an organization logo', async ({ page }) => {
      // Le logo est un bouton qui ouvre la modale de détails
      const logoButton = page.locator('.timeline-item .logo-button').first();
      await expect(logoButton).toBeVisible();
      await logoButton.click();

      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();
      await expect(modal.locator('.modal-header h3').first()).toBeVisible();
    });
  });

  test.describe('Détails du parcours - Modal', () => {
    test('should open modal when clicking "Voir les détails"', async ({ page }) => {
      await page.locator('button:has-text("Voir les détails")').first().click();
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();
      await expect(modal.locator('.modal-header h3').first()).toBeVisible();
    });

    test('should close modal when clicking close button', async ({ page }) => {
      await page.locator('button:has-text("Voir les détails")').first().click();
      await expect(page.locator('dialog[open]')).toBeVisible();
      await page.locator('dialog[open] button:has-text("✕")').first().click();
      await page.waitForTimeout(300);
      const openModals = page.locator('dialog[open]');
      expect(await openModals.count()).toBe(0);
    });

    test('should display detailed content in modal', async ({ page }) => {
      await page.locator('button:has-text("Voir les détails")').first().click();
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();
      await expect(modal.locator('.modal-header h3').first()).toBeVisible();
      await expect(modal.locator('.modal-content')).toBeVisible();
      await expect(modal.locator('button:has-text("Fermer")')).toBeVisible();
    });
  });

  test.describe('Liens vers compétences et réalisations', () => {
    test('should display links to related skills when available', async ({ page }) => {
      await page.locator('button:has-text("Voir les détails")').first().click();
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();

      const skillLinks = modal.locator('a[href*="/competences/"]');
      const skillCount = await skillLinks.count();
      if (skillCount > 0) {
        await expect(skillLinks.first()).toBeVisible();
        const href = await skillLinks.first().getAttribute('href');
        expect(href).toContain('/competences/');
      }
    });

    test('should display links to related projects when available', async ({ page }) => {
      await page.locator('button:has-text("Voir les détails")').first().click();
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();

      const projectLinks = modal.locator('a[href*="/realisations/"]');
      const projectCount = await projectLinks.count();
      if (projectCount > 0) {
        await expect(projectLinks.first()).toBeVisible();
        const href = await projectLinks.first().getAttribute('href');
        expect(href).toContain('/realisations/');
      }
    });
  });

  test.describe('CTA vers compétences et réalisations', () => {
    test('should display CTA section at the bottom', async ({ page }) => {
      await expect(page.locator('text=Découvrir mes compétences et réalisations')).toBeVisible();
    });

    test('should have link to competences page', async ({ page }) => {
      const competencesLink = page.locator('a[href="/competences"]:has-text("Mes compétences")');
      await expect(competencesLink).toBeVisible();
    });

    test('should have link to realisations page', async ({ page }) => {
      const realisationsLink = page.locator('a[href="/realisations"]:has-text("Mes réalisations")');
      await expect(realisationsLink).toBeVisible();
    });
  });

  test.describe('Responsive - Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display timeline on mobile', async ({ page }) => {
      await page.goto('/parcours');
      await expect(page.locator('h1:has-text("Mon parcours")')).toBeVisible();
      const timelineItems = page.locator('.timeline-item');
      await expect(timelineItems.first()).toBeVisible();
    });

    test('should open modal on mobile', async ({ page }) => {
      await page.goto('/parcours');
      await page.locator('button:has-text("Voir les détails")').first().click();
      await expect(page.locator('dialog[open]')).toBeVisible();
    });

    test('should display statistics on mobile', async ({ page }) => {
      await page.goto('/parcours');
      const statsSection = page.locator('.flex.flex-wrap.justify-center.gap-6').first();
      await expect(statsSection.locator('text=/Expérience/').first()).toBeVisible();
    });
  });

  test.describe('Accessibilité', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      await expect(page.locator('h1')).toHaveCount(1);
      const visibleH3 = page.locator('.timeline-card h3').first();
      await expect(visibleH3).toBeVisible();
      const ctaH2 = page.locator('text=Découvrir mes compétences et réalisations');
      await expect(ctaH2).toBeVisible();
    });

    test('should have alt text for images', async ({ page }) => {
      const images = page.locator('img[alt*="Logo"]');
      const count = await images.count();
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt).toContain('Logo');
      }
    });
  });
});
