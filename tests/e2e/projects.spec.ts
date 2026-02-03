import { test, expect } from '@playwright/test';

test.describe('Page Réalisations', () => {
  test.describe('Desktop', () => {
    test.use({ viewport: { width: 1280, height: 720 } });

    test('should display 5 projects on projects list page', async ({ page }) => {
      await page.goto('/realisations');
      
      // Attendre que le contenu soit chargé
      await page.waitForSelector('h1');
      
      // Vérifier le titre de la page
      await expect(page.locator('h1')).toContainText('Réalisations');
      
      // Vérifier qu'il y a exactement 5 projets
      const projectCards = page.locator('.grid a[href^="/realisations/"]');
      await expect(projectCards).toHaveCount(5);
    });

    test('should display project cards with required information', async ({ page }) => {
      await page.goto('/realisations');
      
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      
      // Vérifier la présence de l'image ou placeholder
      await expect(firstProject.locator('div.aspect-video')).toBeVisible();
      
      // Vérifier le titre
      await expect(firstProject.locator('h2')).toBeVisible();
      
      // Vérifier la description
      await expect(firstProject.locator('p.text-neutral-600')).toBeVisible();
      
      // Vérifier les badges technologies
      await expect(firstProject.locator('span.bg-indigo-100')).toHaveCount(3, { timeout: 5000 });
      
      // Vérifier la date (sélecteur plus spécifique)
      await expect(firstProject.locator('.flex.items-center.gap-1:has-text("📅")')).toBeVisible();

      // Vérifier le CTA
      await expect(firstProject.locator('text=Voir le projet')).toBeVisible();
    });

    test('should navigate to individual project page', async ({ page }) => {
      await page.goto('/realisations');
      
      // Cliquer sur le premier projet
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier qu'on est sur une page de projet
      await expect(page).toHaveURL(/\/realisations\/.+/);
      
      // Vérifier la présence du fil d'Ariane
      await expect(page.locator('nav ol')).toBeVisible();
      await expect(page.locator('nav ol')).toContainText('Réalisations');
    });

    test('should display CTA to skills page', async ({ page }) => {
      await page.goto('/realisations');
      
      // Vérifier la présence du CTA vers les compétences (plus spécifique)
      const skillsCTA = page.locator('main a[href="/competences"]:has-text("compétences")');
      await expect(skillsCTA).toBeVisible();
      await expect(skillsCTA).toContainText('compétences');
    });
  });

  test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display 5 projects on mobile', async ({ page }) => {
      await page.goto('/realisations');
      
      // Vérifier qu'il y a exactement 5 projets
      const projectCards = page.locator('.grid a[href^="/realisations/"]');
      await expect(projectCards).toHaveCount(5);
    });

    test('should have responsive layout on mobile', async ({ page }) => {
      await page.goto('/realisations');
      
      const grid = page.locator('.grid');
      await expect(grid).toBeVisible();
      
      // Vérifier que les cartes sont empilées verticalement
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await expect(firstProject).toBeVisible();
    });
  });
});

test.describe('Page Projet Individuel', () => {
  test.describe('Desktop', () => {
    test.use({ viewport: { width: 1280, height: 720 } });

    test('should display project details page with all required sections', async ({ page }) => {
      await page.goto('/realisations');
      
      // Naviguer vers un projet
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      await page.waitForSelector('h1');
      
      // Vérifier les 7 sections requises (dans le contenu markdown)
      const content = page.locator('.prose');
      
      // 1. Présentation du projet
      await expect(content.locator('h2:has-text("Présentation")')).toBeVisible();
      
      // 2. Objectifs, contexte et enjeux
      await expect(content.locator('h2:has-text("Objectifs")')).toBeVisible();
      
      // 3. Les étapes
      await expect(content.locator('h2:has-text("étapes")')).toBeVisible();
      
      // 4. Les acteurs
      await expect(content.locator('h2:has-text("acteurs")')).toBeVisible();
      
      // 5. Les résultats
      await expect(content.locator('h2:has-text("résultats")')).toBeVisible();
      
      // 6. Les lendemains du projet
      await expect(content.locator('h2:has-text("lendemains")')).toBeVisible();
      
      // 7. Mon regard critique
      await expect(content.locator('h2:has-text("critique")')).toBeVisible();
    });

    test('should display project metadata', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier le titre
      await expect(page.locator('h1')).toBeVisible();
      
      // Vérifier la description
      await expect(page.locator('p.text-xl')).toBeVisible();
      
      // Vérifier la période
      await expect(page.locator('text=📅').first()).toBeVisible();
      
      // Vérifier le contexte
      await expect(page.locator('text=🎯').first()).toBeVisible();
      
      // Vérifier les technologies
      await expect(page.locator('h3:has-text("Technologies")')).toBeVisible();
      await expect(page.locator('span.bg-indigo-100')).toHaveCount(5, { timeout: 5000 });
    });

    test('should display related skills section', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier la section des compétences mobilisées
      const skillsSection = page.locator('section:has(h2:has-text("Compétences mobilisées"))');
      await expect(skillsSection).toBeVisible();
      
      // Vérifier qu'il y a des liens vers les compétences
      const skillLinks = skillsSection.locator('a[href^="/competences/"]');
      await expect(skillLinks.first()).toBeVisible();
    });

    test('should have navigation between projects', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier la présence de la navigation
      const navigation = page.locator('nav').last();
      await expect(navigation).toBeVisible();
      
      // Vérifier le bouton "Tous les projets"
      await expect(navigation.locator('a[href="/realisations"]')).toBeVisible();
      
      // Vérifier la présence du lien vers le projet suivant (si ce n'est pas le dernier)
      const nextLink = navigation.locator('text=Projet suivant');
      if (await nextLink.isVisible()) {
        await expect(nextLink).toBeVisible();
      }
    });

    test('should navigate to related skills', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Cliquer sur une compétence associée si elle existe
      const firstSkillLink = page.locator('a[href^="/competences/"]').first();
      if (await firstSkillLink.isVisible()) {
        await firstSkillLink.click();
        
        // Vérifier qu'on est sur une page de compétence
        await expect(page).toHaveURL(/\/competences\/.+/);
      }
    });

    test('should have breadcrumb navigation', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      const breadcrumb = page.locator('nav ol').first();
      await expect(breadcrumb).toBeVisible();
      
      // Vérifier les éléments du fil d'Ariane
      await expect(breadcrumb).toContainText('Accueil');
      await expect(breadcrumb).toContainText('Réalisations');
      
      // Cliquer sur le lien Réalisations dans le fil d'Ariane
      await breadcrumb.locator('a:has-text("Réalisations")').click();
      await expect(page).toHaveURL('/realisations');
    });
  });

  test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('should display project details on mobile', async ({ page }) => {
      await page.goto('/realisations');
      
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier le titre
      await expect(page.locator('h1')).toBeVisible();
      
      // Vérifier le contenu
      await expect(page.locator('.prose')).toBeVisible();
      
      // Vérifier la navigation
      await expect(page.locator('nav').last()).toBeVisible();
    });

    test('should have responsive navigation on mobile', async ({ page }) => {
      await page.goto('/realisations');
      const firstProject = page.locator('.grid a[href^="/realisations/"]').first();
      await firstProject.click();
      
      // Vérifier que la navigation est visible et adaptée au mobile
      const navigation = page.locator('nav').last();
      await expect(navigation).toBeVisible();
    });
  });
});
