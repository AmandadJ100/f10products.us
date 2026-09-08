// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production URL — used for canonical links + sitemap. Host chosen at deploy step.
export default defineConfig({
  site: 'https://www.f10products.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
