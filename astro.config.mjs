// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ksimons29.github.io',
  base: '/ksimons29.github.io_next',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
