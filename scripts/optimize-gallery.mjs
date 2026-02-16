import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const imagesDir = 'public/images';

console.log('Starting gallery image optimization...\n');

try {
  const files = await readdir(imagesDir);
  const galleryImages = files.filter(f => f.startsWith('photo_') && f.endsWith('.jpg'));

  console.log(`Found ${galleryImages.length} gallery images to optimize\n`);

  for (const filename of galleryImages) {
    const inputPath = join(imagesDir, filename);
    const baseName = filename.replace('.jpg', '');

    console.log(`Optimizing ${filename}...`);

    // Optimize JPEG
    await sharp(inputPath)
      .resize(1200, 1600, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(join(imagesDir, `${baseName}-opt.jpg`));
    console.log(`  ✓ Created ${baseName}-opt.jpg`);

    // Create WebP version
    await sharp(inputPath)
      .resize(1200, 1600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(join(imagesDir, `${baseName}.webp`));
    console.log(`  ✓ Created ${baseName}.webp`);

    // Create thumbnail for initial load
    await sharp(inputPath)
      .resize(600, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(imagesDir, `${baseName}-thumb.webp`));
    console.log(`  ✓ Created ${baseName}-thumb.webp\n`);
  }

  console.log('✅ Gallery image optimization complete!');
} catch (error) {
  console.error('Error optimizing gallery images:', error);
  process.exit(1);
}
