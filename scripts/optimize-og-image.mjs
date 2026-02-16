import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const inputPath = join(projectRoot, 'public/savethedate.jpg');
const outputPath = join(projectRoot, 'public/savethedate-og.jpg');

console.log('Optimizing OpenGraph image...');
console.log(`Input: ${inputPath}`);

const inputStats = statSync(inputPath);
console.log(`Original size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);

await sharp(inputPath)
  .resize(1200, 630, {
    fit: 'cover',           // Crop to exact dimensions
    position: 'entropy'     // Smart crop focusing on content
  })
  .jpeg({
    quality: 82,            // Balance quality vs file size
    progressive: true,      // Better web performance
    mozjpeg: true          // Better compression
  })
  .toFile(outputPath);

const outputStats = statSync(outputPath);
console.log(`Output: ${outputPath}`);
console.log(`Optimized size: ${(outputStats.size / 1024).toFixed(2)} KB`);
console.log(`Reduction: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%`);

if (outputStats.size > 300 * 1024) {
  console.warn(`⚠️  Warning: File size is ${(outputStats.size / 1024).toFixed(2)} KB, which exceeds WhatsApp's 300KB recommendation`);
} else {
  console.log('✅ File size is within WhatsApp requirements!');
}
