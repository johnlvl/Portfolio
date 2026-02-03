/**
 * Utilitaires pour gérer les URLs avec le base path
 */

/**
 * Ajoute le base path à une URL relative
 * @param path - Chemin relatif (ex: '/competences')
 * @returns Chemin complet avec base path (ex: '/Portfolio/competences' en prod, '/competences' en dev)
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Enlever le slash final du base s'il existe
  const cleanBase = base.endsWith('/') && base.length > 1 ? base.slice(0, -1) : base;
  // S'assurer que le path commence par /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return cleanBase === '/' ? cleanPath : `${cleanBase}${cleanPath}`;
}
