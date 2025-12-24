// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnlvl.github.io',
  base: '/Portfolio', // Décommentez si déployé sur https://username.github.io/Portfolio
  // OU utilisez base: '/' si le repo est nommé username.github.io
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});