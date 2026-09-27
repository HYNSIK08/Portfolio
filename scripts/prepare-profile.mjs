import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile(new URL('../public/profile.svg', import.meta.url), 'utf8');
const photo = svg.match(/href="data:image\/jpeg;base64,([A-Za-z0-9+/=]+)"/);

if (!photo) {
  throw new Error('Profile photo is missing from public/profile.svg');
}

await writeFile(new URL('../public/profile.jpg', import.meta.url), Buffer.from(photo[1], 'base64'));

const sunflowerSvg = await readFile(new URL('../public/sunflower-source.svg', import.meta.url), 'utf8');
const sunflower = sunflowerSvg.match(/href="data:image\/jpeg;base64,([A-Za-z0-9+/=]+)"/);

if (!sunflower) {
  throw new Error('Sunflower artwork is missing from public/sunflower-source.svg');
}

await writeFile(new URL('../public/sunflower.jpg', import.meta.url), Buffer.from(sunflower[1], 'base64'));
