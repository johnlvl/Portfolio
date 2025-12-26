// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnlvl.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Portfolio' : '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});