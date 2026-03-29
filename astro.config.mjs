// @ts-check
import { defineConfig } from 'astro/config';
import remarkFootnotes from 'remark-footnotes';

// https://astro.build/config
export default defineConfig({
  site: 'https://synthasmagoria.github.io',
  markdown: {
    remarkPlugins: [[remarkFootnotes, { inlineNotes: true }]],
  },
});
