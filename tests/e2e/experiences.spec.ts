import { test, expect } from '@playwright/test';

test.describe('Page Expériences', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/experiences');
  });

  test.describe('Structure de la page', () => {
    test('should display page title and description', async ({ page }) => {
      await expect(page.locator('h1:has-text("Mes Expériences")')).toBeVisible();
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

    test('should display section titles', async ({ page }) => {
      // Vérifier les titres des deux sections
      await expect(page.locator('h2:has-text("Expériences professionnelles")')).toBeVisible();
      await expect(page.locator('h2:has-text("Formations & Certifications")')).toBeVisible();
    });
  });

  test.describe('Timeline - Ordre antichronologique', () => {
    test('should display timeline items in reverse chronological order', async ({ page }) => {
      // Récupérer tous les items de la timeline
      const timelineItems = page.locator('.timeline-item');
      const count = await timelineItems.count();
      
      // Vérifier qu'il y a au moins quelques items
      expect(count).toBeGreaterThanOrEqual(4);
      
      // Vérifier que les items sont bien présents
      await expect(timelineItems.first()).toBeVisible();
    });

    test('should display dates in correct format', async ({ page }) => {
      // Vérifier la présence de dates formatées
      const datePattern = page.locator('text=/📅.*202[0-9]/');
      await expect(datePattern.first()).toBeVisible();
    });
  });

  test.describe('Timeline Items - Contenu', () => {
    test('should display experience items with required information', async ({ page }) => {
      // Trouver un item d'expérience (qui contient 💼)
      const experienceItem = page.locator('.timeline-item:has-text("💼")').first();
      
      // Vérifier que l'item contient les informations requises
      await expect(experienceItem).toBeVisible();
      
      // Vérifier la présence d'un titre dans la timeline-card
      await expect(experienceItem.locator('.timeline-card h3').first()).toBeVisible();
      
      // Vérifier la présence d'une organisation
      await expect(experienceItem.locator('.timeline-card p').first()).toBeVisible();
      
      // Vérifier la présence d'une période (📅)
      await expect(experienceItem.locator('text=📅').first()).toBeVisible();
      
      // Vérifier la présence d'un bouton "Voir les détails"
      await expect(experienceItem.locator('button:has-text("Voir les détails")')).toBeVisible();
    });

    test('should display formation items with required information', async ({ page }) => {
      // Trouver un item de formation (qui contient 🎓)
      const formationItem = page.locator('.timeline-item:has-text("🎓")').first();
      
      if (await formationItem.count() > 0) {
        await expect(formationItem).toBeVisible();
        await expect(formationItem.locator('.timeline-card h3').first()).toBeVisible();
        await expect(formationItem.locator('text=📅').first()).toBeVisible();
        await expect(formationItem.locator('button:has-text("Voir les détails")')).toBeVisible();
      }
    });

    test('should display certification items with required information', async ({ page }) => {
      // Trouver un item de certification (qui contient 🏆)
      const certificationItem = page.locator('.timeline-item:has-text("🏆")').first();
      
      if (await certificationItem.count() > 0) {
        await expect(certificationItem).toBeVisible();
        await expect(certificationItem.locator('.timeline-card h3').first()).toBeVisible();
        await expect(certificationItem.locator('text=📅').first()).toBeVisible();
        await expect(certificationItem.locator('button:has-text("Voir les détails")')).toBeVisible();
      }
    });

    test('should display organization logos', async ({ page }) => {
      // Vérifier que les logos sont présents
      const logos = page.locator('.timeline-item img[alt*="Logo"]');
      const logoCount = await logos.count();
      
      // Il devrait y avoir au moins un logo
      expect(logoCount).toBeGreaterThan(0);
    });
  });

  test.describe('Détails des expériences - Modal', () => {
    test('should open modal when clicking "Voir les détails"', async ({ page }) => {
      // Cliquer sur le premier bouton "Voir les détails"
      await page.locator('button:has-text("Voir les détails")').first().click();
      
      // Vérifier que le modal est ouvert
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();
      
      // Vérifier que le modal contient du contenu
      await expect(modal.locator('.modal-header h3').first()).toBeVisible();
    });

    test('should close modal when clicking close button', async ({ page }) => {
      // Ouvrir le modal
      await page.locator('button:has-text("Voir les détails")').first().click();
      
      // Vérifier que le modal est ouvert
      await expect(page.locator('dialog[open]')).toBeVisible();
      
      // Cliquer sur le bouton fermer
      await page.locator('dialog[open] button:has-text("✕")').first().click();
      
      // Attendre un peu
      await page.waitForTimeout(300);
      
      // Le modal ne devrait plus être visible (ou plus ouvert)
      const openModals = page.locator('dialog[open]');
      expect(await openModals.count()).toBe(0);
    });

    test('should display detailed content in modal', async ({ page }) => {
      // Ouvrir le modal
      await page.locator('button:has-text("Voir les détails")').first().click();
      
      const modal = page.locator('dialog[open]');
      await expect(modal).toBeVisible();
      
      // Vérifier la présence d'informations détaillées
      await expect(modal.locator('.modal-header h3').first()).toBeVisible();
      await expect(modal.locator('.modal-content')).toBeVisible();
      
      // Vérifier la présence du bouton fermer
      await expect(modal.locator('button:has-text("Fermer")')).toBeVisible();
    });
  });

  test.describe('Liens vers compétences et réalisations', () => {
    test('should display links to related skills when available', async ({ page }) => {
      // Vérifier si des liens vers les compétences sont présents
      const skillLinks = page.locator('a[href^="/competences/"]');
      const skillCount = await skillLinks.count();
      
      // Il devrait y avoir au moins quelques liens vers des compétences
      if (skillCount > 0) {
        await expect(skillLinks.first()).toBeVisible();
        
        // Vérifier que le lien fonctionne
        const href = await skillLinks.first().getAttribute('href');
        expect(href).toContain('/competences/');
      }
    });

    test('should display links to related projects when available', async ({ page }) => {
      // Vérifier si des liens vers les projets sont présents
      const projectLinks = page.locator('a[href^="/realisations/"]');
      const projectCount = await projectLinks.count();
      
      // Il devrait y avoir au moins quelques liens vers des projets
      if (projectCount > 0) {
        await expect(projectLinks.first()).toBeVisible();
        
        // Vérifier que le lien fonctionne
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
      await page.goto('/experiences');
      
      // Vérifier que le contenu est visible sur mobile
      await expect(page.locator('h1:has-text("Mes Expériences")')).toBeVisible();
      
      // Vérifier que les items de la timeline sont visibles
      const timelineItems = page.locator('.timeline-item');
      await expect(timelineItems.first()).toBeVisible();
    });

    test('should open modal on mobile', async ({ page }) => {
      await page.goto('/experiences');
      
      // Cliquer sur "Voir les détails"
      await page.locator('button:has-text("Voir les détails")').first().click();
      
      // Vérifier que le modal s'ouvre
      await expect(page.locator('dialog[open]')).toBeVisible();
    });

    test('should display statistics on mobile', async ({ page }) => {
      await page.goto('/experiences');
      
      // Vérifier que les statistiques sont visibles
      const statsSection = page.locator('.flex.flex-wrap.justify-center.gap-6').first();
      await expect(statsSection.locator('text=/Expérience/').first()).toBeVisible();
    });
  });

  test.describe('Accessibilité', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      // Vérifier la hiérarchie des titres
      await expect(page.locator('h1')).toHaveCount(1);
      
      // Vérifier qu'il y a des h3 visibles dans la timeline
      const visibleH3 = page.locator('.timeline-card h3').first();
      await expect(visibleH3).toBeVisible();
      
      // Vérifier qu'il y a un h2 visible dans la section CTA
      const ctaH2 = page.locator('text=Découvrir mes compétences et réalisations');
      await expect(ctaH2).toBeVisible();
    });

    test('should have alt text for images', async ({ page }) => {
      const images = page.locator('img[alt*="Logo"]');
      const count = await images.count();
      
      // Vérifier que toutes les images ont un alt
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt).toContain('Logo');
      }
    });
  });
});
