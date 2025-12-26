/**
 * Données personnelles centralisées
 */

export const PERSONAL_INFO = {
  firstName: 'John',
  lastName: 'Leveil',
  fullName: 'John Leveil',
  title: 'Expert en Ingénierie du Logiciel',
  email: 'leveiljohn@gmail.com',
  phone: '+33 6 XX XX XX XX',
  location: 'Paris, France',
  profilePhoto: '/images/test.jpg',
  profilePhotoAlt: 'Photo professionnelle de John Leveil',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  portfolio: 'https://username.github.io',
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
  { label: 'Accueil', href: '/' },
  { label: 'Présentation', href: '/presentation' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CONTENT_REQUIREMENTS = {
  skillsCount: 10,
  skillsHumanMin: 4,
  skillsHumanMax: 7,
  skillsTechMin: 4,
  skillsTechMax: 6,
  projectsCount: 5,
} as const;
