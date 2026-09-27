import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aleveldt.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
