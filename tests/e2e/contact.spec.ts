import { test, expect } from '@playwright/test';

test.describe('Page Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test.describe('Structure de la page', () => {
    test('should display page title', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('Me contacter');
    });

    test('should display page description', async ({ page }) => {
      await expect(page.locator('p:has-text("opportunité")')).toBeVisible();
    });

    test('should have correct page title in browser', async ({ page }) => {
      await expect(page).toHaveTitle(/Contact/);
    });
  });

  test.describe('Formulaire de contact', () => {
    test('should display contact form', async ({ page }) => {
      await expect(page.locator('#contact-form')).toBeVisible();
    });

    test('should display form title', async ({ page }) => {
      await expect(page.locator('h2:has-text("Envoyer un message")')).toBeVisible();
    });

    test('should display name field', async ({ page }) => {
      await expect(page.getByRole('textbox', { name: 'Nom complet' })).toBeVisible();
      await expect(page.locator('label[for="name"]')).toContainText('Nom complet');
    });

    test('should display email field', async ({ page }) => {
      await expect(page.locator('#email')).toBeVisible();
      await expect(page.locator('label[for="email"]')).toContainText('Adresse email');
    });

    test('should display subject field', async ({ page }) => {
      await expect(page.locator('#subject')).toBeVisible();
      await expect(page.locator('label[for="subject"]')).toContainText('Sujet');
    });

    test('should display message field', async ({ page }) => {
      await expect(page.locator('#message')).toBeVisible();
      await expect(page.locator('label[for="message"]')).toContainText('Message');
    });

    test('should display submit button', async ({ page }) => {
      await expect(page.locator('#submit-btn')).toBeVisible();
      await expect(page.locator('#btn-text')).toContainText('Envoyer le message');
    });

    test('should mark required fields', async ({ page }) => {
      // Les champs requis ont une astérisque rouge
      const requiredMarkers = page.locator('.text-red-500');
      const count = await requiredMarkers.count();
      expect(count).toBeGreaterThanOrEqual(3); // nom, email, message
    });

    test('should allow typing in name field', async ({ page }) => {
      await page.locator('#name').fill('John Doe');
      await expect(page.locator('#name')).toHaveValue('John Doe');
    });

    test('should allow typing in email field', async ({ page }) => {
      await page.locator('#email').fill('test@example.com');
      await expect(page.locator('#email')).toHaveValue('test@example.com');
    });

    test('should allow typing in message field', async ({ page }) => {
      await page.locator('#message').fill('Ceci est un message de test.');
      await expect(page.locator('#message')).toHaveValue('Ceci est un message de test.');
    });

    test('should have correct form action pointing to formspree', async ({ page }) => {
      const formAction = await page.locator('#contact-form').getAttribute('action');
      expect(formAction).toContain('formspree.io');
    });

    test('should have name field as required', async ({ page }) => {
      const required = await page.locator('#name').getAttribute('required');
      expect(required).not.toBeNull();
    });

    test('should have email field as required', async ({ page }) => {
      const required = await page.locator('#email').getAttribute('required');
      expect(required).not.toBeNull();
    });

    test('should have message field as required', async ({ page }) => {
      const required = await page.locator('#message').getAttribute('required');
      expect(required).not.toBeNull();
    });

    test('should not show success/error messages initially', async ({ page }) => {
      await expect(page.locator('#success-message')).toBeHidden();
      await expect(page.locator('#error-message')).toBeHidden();
    });
  });

  test.describe('Coordonnées', () => {
    test('should display contact info section', async ({ page }) => {
      await expect(page.locator('h2:has-text("Coordonnées")')).toBeVisible();
    });

    test('should display email address', async ({ page }) => {
      await expect(page.locator('a[href^="mailto:"]')).toBeVisible();
      await expect(page.locator('a[href^="mailto:"]')).toContainText('leveiljohn@gmail.com');
    });

    test('should display location', async ({ page }) => {
      await expect(page.locator('text=Ablis, France')).toBeVisible();
    });

    test('should display availability', async ({ page }) => {
      await expect(page.locator('text=CDI')).toBeVisible();
    });

    test('email link should have correct href', async ({ page }) => {
      const href = await page.locator('a[href^="mailto:"]').getAttribute('href');
      expect(href).toBe('mailto:leveiljohn@gmail.com');
    });
  });

  test.describe('Réseaux sociaux', () => {
    test('should display social links section', async ({ page }) => {
      await expect(page.locator('h2:has-text("Réseaux sociaux")')).toBeVisible();
    });

    test('should display GitHub link', async ({ page }) => {
      await expect(page.locator('a[aria-label*="GitHub"]')).toBeVisible();
      await expect(page.locator('a[aria-label*="GitHub"]')).toContainText('GitHub');
    });

    test('should display LinkedIn link', async ({ page }) => {
      await expect(page.locator('a[aria-label*="LinkedIn"]')).toBeVisible();
      await expect(page.locator('a[aria-label*="LinkedIn"]')).toContainText('LinkedIn');
    });

    test('GitHub link should point to correct URL', async ({ page }) => {
      const href = await page.locator('a[aria-label*="GitHub"]').getAttribute('href');
      expect(href).toContain('github.com/johnlvl');
    });

    test('LinkedIn link should point to correct URL', async ({ page }) => {
      const href = await page.locator('a[aria-label*="LinkedIn"]').getAttribute('href');
      expect(href).toContain('linkedin.com');
    });

    test('social links should open in new tab', async ({ page }) => {
      const githubTarget = await page.locator('a[aria-label*="GitHub"]').getAttribute('target');
      const linkedinTarget = await page.locator('a[aria-label*="LinkedIn"]').getAttribute('target');
      expect(githubTarget).toBe('_blank');
      expect(linkedinTarget).toBe('_blank');
    });

    test('social links should have rel="noopener noreferrer"', async ({ page }) => {
      const githubRel = await page.locator('a[aria-label*="GitHub"]').getAttribute('rel');
      expect(githubRel).toContain('noopener');
    });
  });

  test.describe('Navigation', () => {
    test('should display navigation menu', async ({ page }) => {
      await expect(page.locator('nav')).toBeVisible();
    });

    test('should have Contact link active in navigation', async ({ page }) => {
      // Sur desktop le lien est visible directement, sur mobile il est dans le menu hamburger
      const menuToggle = page.locator('#mobile-menu-toggle');
      const isMenuToggleVisible = await menuToggle.isVisible();
      if (isMenuToggleVisible) {
        // Mobile : ouvrir le menu hamburger
        await menuToggle.click();
        await expect(page.locator('#mobile-menu a[href*="contact"]')).toBeVisible();
      } else {
        // Desktop : lien visible directement
        await expect(page.locator('nav a[href*="contact"]').first()).toBeVisible();
      }
    });
  });

  test.describe('Accessibilité', () => {
    test('all form inputs should have associated labels', async ({ page }) => {
      const inputs = ['name', 'email', 'subject', 'message'];
      for (const id of inputs) {
        await expect(page.locator(`label[for="${id}"]`)).toBeVisible();
      }
    });

    test('submit button should be accessible', async ({ page }) => {
      const btn = page.locator('#submit-btn');
      await expect(btn).toBeEnabled();
    });

    test('social links should have aria-labels', async ({ page }) => {
      const github = await page.locator('a[aria-label*="GitHub"]').getAttribute('aria-label');
      const linkedin = await page.locator('a[aria-label*="LinkedIn"]').getAttribute('aria-label');
      expect(github).toBeTruthy();
      expect(linkedin).toBeTruthy();
    });
  });

  test.describe('Responsive', () => {
    test('should display correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('#contact-form')).toBeVisible();
    });

    test('should display correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('#contact-form')).toBeVisible();
    });
  });
});
