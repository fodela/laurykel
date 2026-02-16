import sharp from 'sharp';
import { existsSync } from 'fs';

const heroImages = [
  { input: 'public/delali.jpg', base: 'delali' },
  { input: 'public/laura.jpg', base: 'laura' }
];

console.log('Starting hero image optimization...\n');

for (const { input, base } of heroImages) {
  if (!existsSync(input)) {
    console.log(`⚠️  Warning: ${input} not found, skipping...`);
    continue;
  }

  console.log(`Optimizing ${base}...`);

  // Desktop WebP (best compression)
  await sharp(input)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/${base}-optimized.webp`);
  console.log(`  ✓ Created ${base}-optimized.webp (desktop WebP)`);

  // Desktop JPEG fallback
  await sharp(input)
    .resize(1920, null, { withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`public/${base}-optimized.jpg`);
  console.log(`  ✓ Created ${base}-optimized.jpg (desktop JPEG)`);

  // Mobile WebP (smaller for phones)
  await sharp(input)
    .resize(1024, null, { withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`public/${base}-mobile.webp`);
  console.log(`  ✓ Created ${base}-mobile.webp (mobile WebP)\n`);
}

console.log('✅ Hero image optimization complete!');
