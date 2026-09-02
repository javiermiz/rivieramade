// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { venues } from './src/data/venues';

/** A venue whose facts are still bracketed is noindex, so keep it out too. */
const draftPaths = venues
  .filter((v) => v.draft)
  .map((v) => `https://rivieramade.com/venues/${v.slug}/`);


export default defineConfig({
  site: 'https://rivieramade.com',

  /**
   * The two faces are downloaded at build time and served from our own origin.
   * Loading them from Google cost two DNS lookups and a render-blocking
   * stylesheet before the first headline could paint — on a phone on hotel
   * wifi, which is exactly where this page is read.
   */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      weights: [400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],

  integrations: [
    sitemap({
      filter: (page) => !draftPaths.includes(page),
      /**
       * The venue pages are the ones that earn their way in from search, and
       * they are also the ones that change when a fact is learned. The home
       * page outranks them anyway; say so rather than leave every URL equal.
       */
      serialize(item) {
        if (item.url.includes('/venues/')) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        if (item.url.includes('/planners')) {
          return { ...item, changefreq: 'monthly', priority: 0.6 };
        }
        return { ...item, changefreq: 'weekly', priority: 1 };
      },
      lastmod: new Date(),
    }),
  ],
});
