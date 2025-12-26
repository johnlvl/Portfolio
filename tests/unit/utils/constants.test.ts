import { describe, it, expect } from 'vitest';
import {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  SEO_DEFAULT,
  NAVIGATION_MENU,
  CONTENT_REQUIREMENTS,
} from '../../../src/utils/constants';

describe('Constants Validation', () => {
  describe('PERSONAL_INFO', () => {
    it('should have all required fields', () => {
      expect(PERSONAL_INFO).toHaveProperty('firstName');
      expect(PERSONAL_INFO).toHaveProperty('lastName');
      expect(PERSONAL_INFO).toHaveProperty('fullName');
      expect(PERSONAL_INFO).toHaveProperty('title');
      expect(PERSONAL_INFO).toHaveProperty('email');
      expect(PERSONAL_INFO).toHaveProperty('profilePhoto');
      expect(PERSONAL_INFO).toHaveProperty('profilePhotoAlt');
    });

    it('should have non-empty values', () => {
      expect(PERSONAL_INFO.firstName).toBeTruthy();
      expect(PERSONAL_INFO.lastName).toBeTruthy();
      expect(PERSONAL_INFO.fullName).toBeTruthy();
      expect(PERSONAL_INFO.title).toBeTruthy();
    });

    it('should have valid email format', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(PERSONAL_INFO.email).toMatch(emailRegex);
    });

    it('should have profile photo path', () => {
      expect(PERSONAL_INFO.profilePhoto).toMatch(/\.(jpg|jpeg|png|webp|svg)$/i);
    });

    it('fullName should contain firstName and lastName', () => {
      expect(PERSONAL_INFO.fullName).toContain(PERSONAL_INFO.firstName);
      expect(PERSONAL_INFO.fullName).toContain(PERSONAL_INFO.lastName);
    });
  });

  describe('SOCIAL_LINKS', () => {
    it('should have valid URL format for GitHub', () => {
      expect(SOCIAL_LINKS.github).toMatch(/^https:\/\/(www\.)?github\.com\//);
    });

    it('should have valid URL format for LinkedIn', () => {
      expect(SOCIAL_LINKS.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
    });

    it('should have valid URL format for Twitter', () => {
      expect(SOCIAL_LINKS.twitter).toMatch(/^https:\/\/(www\.)?twitter\.com\//);
    });

    it('should have valid URL format for portfolio', () => {
      expect(SOCIAL_LINKS.portfolio).toMatch(/^https?:\/\//);
    });
  });

  describe('SEO_DEFAULT', () => {
    it('should have all required SEO fields', () => {
      expect(SEO_DEFAULT).toHaveProperty('siteName');
      expect(SEO_DEFAULT).toHaveProperty('description');
      expect(SEO_DEFAULT).toHaveProperty('keywords');
      expect(SEO_DEFAULT).toHaveProperty('author');
      expect(SEO_DEFAULT).toHaveProperty('language');
      expect(SEO_DEFAULT).toHaveProperty('locale');
    });

    it('should have non-empty values', () => {
      expect(SEO_DEFAULT.siteName).toBeTruthy();
      expect(SEO_DEFAULT.description).toBeTruthy();
      expect(SEO_DEFAULT.author).toBeTruthy();
    });

    it('should have valid language code', () => {
      expect(SEO_DEFAULT.language).toBe('fr');
    });

    it('should have valid locale code', () => {
      expect(SEO_DEFAULT.locale).toBe('fr_FR');
    });

    it('should have keywords array', () => {
      expect(Array.isArray(SEO_DEFAULT.keywords)).toBe(true);
      expect(SEO_DEFAULT.keywords.length).toBeGreaterThan(0);
    });

    it('description should be meaningful (min 50 characters)', () => {
      expect(SEO_DEFAULT.description.length).toBeGreaterThanOrEqual(50);
    });
  });

  describe('NAVIGATION_MENU', () => {
    it('should have all required menu items', () => {
      const requiredLabels = ['Accueil', 'Présentation', 'Compétences', 'Réalisations', 'Parcours', 'Contact'];
      
      requiredLabels.forEach(label => {
        const menuItem = NAVIGATION_MENU.find(item => item.label === label);
        expect(menuItem).toBeDefined();
      });
    });

    it('should have exactly 6 menu items', () => {
      expect(NAVIGATION_MENU.length).toBe(6);
    });

    it('all menu items should have label and href', () => {
      NAVIGATION_MENU.forEach(item => {
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('href');
        expect(item.label).toBeTruthy();
        expect(item.href).toBeTruthy();
      });
    });

    it('all hrefs should start with /', () => {
      NAVIGATION_MENU.forEach(item => {
        expect(item.href).toMatch(/^\//);
      });
    });

    it('Accueil should point to root', () => {
      const accueil = NAVIGATION_MENU.find(item => item.label === 'Accueil');
      expect(accueil?.href).toBe('/');
    });
  });

  describe('CONTENT_REQUIREMENTS', () => {
    it('should have all required counts', () => {
      expect(CONTENT_REQUIREMENTS).toHaveProperty('skillsCount');
      expect(CONTENT_REQUIREMENTS).toHaveProperty('skillsHumanMin');
      expect(CONTENT_REQUIREMENTS).toHaveProperty('skillsHumanMax');
      expect(CONTENT_REQUIREMENTS).toHaveProperty('skillsTechMin');
      expect(CONTENT_REQUIREMENTS).toHaveProperty('skillsTechMax');
      expect(CONTENT_REQUIREMENTS).toHaveProperty('projectsCount');
    });

    it('should require exactly 10 skills', () => {
      expect(CONTENT_REQUIREMENTS.skillsCount).toBe(10);
    });

    it('should require exactly 5 projects', () => {
      expect(CONTENT_REQUIREMENTS.projectsCount).toBe(5);
    });

    it('human skills range should be valid (4-7)', () => {
      expect(CONTENT_REQUIREMENTS.skillsHumanMin).toBe(4);
      expect(CONTENT_REQUIREMENTS.skillsHumanMax).toBe(7);
      expect(CONTENT_REQUIREMENTS.skillsHumanMin).toBeLessThanOrEqual(CONTENT_REQUIREMENTS.skillsHumanMax);
    });

    it('tech skills range should be valid (4-6)', () => {
      expect(CONTENT_REQUIREMENTS.skillsTechMin).toBe(4);
      expect(CONTENT_REQUIREMENTS.skillsTechMax).toBe(6);
      expect(CONTENT_REQUIREMENTS.skillsTechMin).toBeLessThanOrEqual(CONTENT_REQUIREMENTS.skillsTechMax);
    });

    it('human + tech skills should total 10', () => {
      // Vérifier que les ranges permettent d'atteindre 10
      const minTotal = CONTENT_REQUIREMENTS.skillsHumanMin + CONTENT_REQUIREMENTS.skillsTechMin;
      const maxTotal = CONTENT_REQUIREMENTS.skillsHumanMax + CONTENT_REQUIREMENTS.skillsTechMax;
      
      expect(minTotal).toBeLessThanOrEqual(CONTENT_REQUIREMENTS.skillsCount);
      expect(maxTotal).toBeGreaterThanOrEqual(CONTENT_REQUIREMENTS.skillsCount);
    });
  });
});
