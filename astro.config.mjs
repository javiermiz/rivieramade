// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { venues } from './src/data/venues';

/** A venue whose facts are still bracketed is noindex, so keep it out too. */
const draftPaths = venues
  .filter((v) => v.draft)
  .map((v) => `https://rivieramade.com/venues/${v.slug}/`);

export default defineConfig({
  site: 'https://rivieramade.com',
  integrations: [sitemap({ filter: (page) => !draftPaths.includes(page) })],
});
