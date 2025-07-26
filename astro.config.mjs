// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tradegpt.aipedia.id',
  integrations: [
    tailwind(),
    sitemap()
  ]
});
