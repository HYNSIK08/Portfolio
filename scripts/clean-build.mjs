import { rm } from 'node:fs/promises';

// The SVG holds the source photo for prepare-profile.mjs. The site uses only profile.jpg.
await rm(new URL('../dist/profile.svg', import.meta.url), { force: true });
await rm(new URL('../dist/sunflower-source.svg', import.meta.url), { force: true });
await rm(new URL('../dist/sunflower.png', import.meta.url), { force: true });
await rm(new URL('../dist/sunflower-optimized.png', import.meta.url), { force: true });
