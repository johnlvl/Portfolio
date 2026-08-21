import { test, expect } from '@playwright/test';

test.describe('Skills Page - Grille d\'évaluation (10 points)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/competences', { waitUntil: 'domcontentloaded' });
  });

  test('devrait afficher la page commune des compétences', async ({ page }) => {
    await expect(page).toHaveTitle(/Compétences/);
    await expect(page.locator('h1')).toContainText('Mes compétences');
  });

  test('devrait afficher exactement 10 compétences', async ({ page }) => {
    // Compter uniquement dans la grille de visualisation (grid-cols-2 sm:grid-cols-5)
    const skillCards = page.locator('.grid.grid-cols-2 > a[href^="/competences/"]');
    await expect(skillCards).toHaveCount(10);
  });

  test('devrait avoir un schéma synthétique avec niveaux visibles', async ({ page }) => {
    // Vérifier la présence de la synthèse graphique
    await expect(page.locator('text=Vue d\'ensemble')).toBeVisible();
    
    // Vérifier la légende des niveaux
    await expect(page.locator('text=Niveau 1-2 : Débutant')).toBeVisible();
    await expect(page.locator('text=Niveau 3 : Intermédiaire')).toBeVisible();
    await expect(page.locator('text=Niveau 4-5 : Avancé')).toBeVisible();
  });

  test('devrait diviser les compétences en technique et humaine', async ({ page }) => {
    // Vérifier les deux sections
    await expect(page.locator('h2:has-text("Compétences techniques")')).toBeVisible();
    await expect(page.locator('h2:has-text("Compétences humaines")')).toBeVisible();
    
    // Vérifier le récapitulatif
    const summary = page.locator('text=/\\d+ compétences techniques • \\d+ compétences humaines/');
    await expect(summary).toBeVisible();
  });

  test('devrait respecter les contraintes de nombre (4-7 humaines, 4-6 techniques)', async ({ page }) => {
    // Récupérer le texte du récapitulatif
    const summaryText = await page.locator('text=/\\d+ compétences techniques • \\d+ compétences humaines/').textContent();
    
    // Extraire les nombres
    const match = summaryText?.match(/(\d+) compétences techniques • (\d+) compétences humaines/);
    if (match) {
      const technicalCount = parseInt(match[1]);
      const humanCount = parseInt(match[2]);
      
      // Vérifier les contraintes
      expect(humanCount).toBeGreaterThanOrEqual(4);
      expect(humanCount).toBeLessThanOrEqual(7);
      expect(technicalCount).toBeGreaterThanOrEqual(4);
      expect(technicalCount).toBeLessThanOrEqual(6);
      expect(technicalCount + humanCount).toBe(10);
    }
  });

  test('chaque compétence devrait avoir un lien cliquable', async ({ page }) => {
    const firstSkill = page.locator('a[href^="/competences/"]').filter({ has: page.locator('span.text-5xl') }).first();
    await expect(firstSkill).toBeVisible();
    await expect(firstSkill).toHaveAttribute('href', /^\/competences\/.+/);
  });

  test('devrait afficher les icônes pour chaque compétence', async ({ page }) => {
    const icons = page.locator('span.text-4xl, span.text-5xl');
    const count = await icons.count();
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('devrait afficher les indicateurs de niveau pour chaque compétence', async ({ page }) => {
    // Vérifier la présence d'indicateurs de niveau dans les cartes de compétences
    const levelDots = page.locator('.grid.grid-cols-2 div.rounded-full.w-2');
    const count = await levelDots.count();
    expect(count).toBeGreaterThanOrEqual(50); // 10 compétences * 5 points
  });

  test('devrait avoir des CTAs vers réalisations et parcours', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Voir mes réalisations/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Découvrir mon parcours/i })).toBeVisible();
  });

  test('devrait être accessible depuis le menu principal', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    
    // Sur mobile, ouvrir le burger menu si nécessaire
    const burgerButton = page.locator('button[aria-label="Toggle menu"]');
    if (await burgerButton.isVisible()) {
      await burgerButton.click();
      await page.waitForTimeout(300); // Attendre l'animation
    }
    
    const competencesLink = page.getByRole('link', { name: /Compétences/i }).first();
    await expect(competencesLink).toBeVisible();
    await competencesLink.click();
    await expect(page).toHaveURL(/\/competences/);
  });
});

test.describe('Individual Skill Page - Grille d\'évaluation (30 points)', () => {
  test.beforeEach(async ({ page }) => {
    // Tester la première compétence (architecture logicielle)
    await page.goto('/competences/architecture-logicielle', { waitUntil: 'domcontentloaded' });
  });

  test('devrait avoir un article spécifique et structuré', async ({ page }) => {
    // Vérifier la présence de l'article
    await expect(page.locator('article')).toBeVisible();
    
    // Vérifier la structure (h1, h2, paragraphes, gras)
    await expect(page.locator('h1')).toBeVisible();
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThanOrEqual(4); // Définition, Preuves, Autocritique, Évolution
    
    const paragraphs = await page.locator('p').count();
    expect(paragraphs).toBeGreaterThan(5);
    
    const strongTags = await page.locator('strong').count();
    expect(strongTags).toBeGreaterThan(0);
  });

  test('devrait contenir une définition avec contexte professionnel', async ({ page }) => {
    const definitionSection = page.locator('h2:has-text("Définition")');
    await expect(definitionSection).toBeVisible();
  });

  test('devrait contenir des éléments de preuve (anecdotes)', async ({ page }) => {
    const preuveSection = page.locator('h2:has-text("preuve"), h2:has-text("Anecdote")');
    await expect(preuveSection.first()).toBeVisible();
    
    // Vérifier la présence de résultats
    const resultText = page.locator('text=/Résultat|résultat/i');
    await expect(resultText.first()).toBeVisible();
  });

  test('devrait contenir une autocritique', async ({ page }) => {
    const autocritiqueSection = page.locator('h2:has-text("Autocritique")');
    await expect(autocritiqueSection).toBeVisible();
    
    // Vérifier la présence des éléments requis - chercher le strong spécifique
    await expect(page.locator('strong:has-text("Degré de maîtrise")')).toBeVisible();
  });

  test('devrait contenir une section évolution', async ({ page }) => {
    const evolutionSection = page.locator('h2:has-text("Évolution")');
    await expect(evolutionSection).toBeVisible();
    
    // Vérifier les objectifs et formations
    await expect(page.locator('text=/Objectifs|objectif/i')).toBeVisible();
    await expect(page.locator('text=/Formations|formation/i')).toBeVisible();
  });

  test('devrait afficher l\'indicateur de niveau', async ({ page }) => {
    await expect(page.locator('text=/Niveau de maîtrise/i')).toBeVisible();
    
    // Vérifier la présence d'indicateurs visuels (points) - chercher les points w-4 h-4
    const levelDots = page.locator('header div.rounded-full.w-4.h-4');
    const count = await levelDots.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test('devrait avoir un badge catégorie (technique/humaine)', async ({ page }) => {
    const categoryBadge = page.locator('span:has-text("Technique"), span:has-text("Humaine")');
    await expect(categoryBadge.first()).toBeVisible();
  });

  test('devrait avoir une navigation vers autres compétences', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Toutes les compétences/i })).toBeVisible();
  });

  test('devrait avoir un fil d\'Ariane', async ({ page }) => {
    const breadcrumb = page.locator('nav ol');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb.locator('a:has-text("Accueil")')).toBeVisible();
    await expect(breadcrumb.locator('a:has-text("Compétences")')).toBeVisible();
  });

  test('devrait être responsive sur mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article')).toBeVisible();
  });
});

test.describe('Skills Navigation', () => {
  test('navigation circulaire entre compétences devrait fonctionner', async ({ page }) => {
    await page.goto('/competences/architecture-logicielle', { waitUntil: 'domcontentloaded' });
    
    // Cliquer sur compétence suivante
    const nextLink = page.locator('a:has-text("Compétence suivante")').first();
    if (await nextLink.isVisible()) {
      await nextLink.click();
      await expect(page).toHaveURL(/\/competences\/.+/);
    }
  });

  test('retour à la page commune devrait fonctionner', async ({ page }) => {
    await page.goto('/competences/architecture-logicielle', { waitUntil: 'domcontentloaded' });
    
    await page.getByRole('link', { name: /Toutes les compétences/i }).click();
    await expect(page).toHaveURL(/\/competences$/);
  });
});
