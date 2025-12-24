/**
 * Données personnelles centralisées
 * Respecte le principe Single Source of Truth
 * 
 * ⚠️ À PERSONNALISER avec vos propres informations
 */

export const PERSONAL_INFO = {
  firstName: 'Prénom',
  lastName: 'Nom',
  fullName: 'Prénom Nom',
  title: 'Expert en Ingénierie du Logiciel',
  email: 'prenom.nom@example.com',
  phone: '+33 6 XX XX XX XX',
  location: 'Paris, France',
  profilePhoto: '/images/profile-photo.jpg',
  profilePhotoAlt: 'Photo professionnelle de Prénom Nom',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  portfolio: 'https://username.github.io',
} as const;

export const SEO_DEFAULT = {
  siteName: 'Portfolio - Prénom Nom',
  description: 'Portfolio professionnel de Prénom Nom, Expert en Ingénierie du Logiciel',
  keywords: ['portfolio', 'développeur', 'ingénierie logicielle', 'web'],
  author: 'Prénom Nom',
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

// Nombre de compétences et réalisations (validation)
export const CONTENT_REQUIREMENTS = {
  skillsCount: 10,
  skillsHumanMin: 4,
  skillsHumanMax: 7,
  skillsTechMin: 4,
  skillsTechMax: 6,
  projectsCount: 5,
} as const;
