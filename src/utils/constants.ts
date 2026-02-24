/**
 * Données personnelles centralisées
 */

import { withBase } from './url';

export const PERSONAL_INFO = {
  firstName: 'John',
  lastName: 'Leveil',
  fullName: 'John Leveil',
  title: 'Expert en Ingénierie du Logiciel',
  email: 'leveiljohn@gmail.com',
  phone: '+33 7 82 51 40 05',
  location: 'Ablis, France',
  profilePhoto: withBase('/images/photo-profil.jpg'),
  profilePhotoAlt: 'Photo professionnelle de John Leveil',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/johnlvl',
  linkedin: 'https://www.linkedin.com/in/john-leveil-654b27245',
  portfolio: 'https://johnlvl.github.io/Portfolio/',
} as const;

export const SEO_DEFAULT = {
  siteName: 'Portfolio - John Leveil',
  description: 'Portfolio professionnel de John Leveil, Expert en Ingénierie du Logiciel',
  keywords: ['portfolio', 'développeur', 'ingénierie logicielle', 'web'],
  author: 'John Leveil',
  language: 'fr',
  locale: 'fr_FR',
} as const;

export const NAVIGATION_MENU = [
  { label: 'Accueil', href: withBase('/') },
  { label: 'Présentation', href: withBase('/presentation') },
  { label: 'Compétences', href: withBase('/competences') },
  { label: 'Réalisations', href: withBase('/realisations') },
  { label: 'Parcours', href: withBase('/parcours') },
  { label: 'Contact', href: withBase('/contact') },
] as const;

export const CONTENT_REQUIREMENTS = {
  skillsCount: 10,
  skillsHumanMin: 4,
  skillsHumanMax: 7,
  skillsTechMin: 4,
  skillsTechMax: 6,
  projectsCount: 5,
} as const;
