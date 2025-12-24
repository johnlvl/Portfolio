/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs du portfolio
        primary: '#3B82F6',   // Bleu principal
        secondary: '#10B981', // Vert secondaire
        accent: '#F59E0B',    // Orange accent
        dark: '#1F2937',      // Gris foncé
        light: '#F9FAFB',     // Gris clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
