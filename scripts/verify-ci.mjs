import fs from 'fs';
import path from 'path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const outExists = fs.existsSync(outDir);
const hasIndex = outExists && fs.existsSync(path.join(outDir, 'index.html'));
const lockExists = fs.existsSync(path.join(root, 'package-lock.json'));

if (!outExists) {
  console.error('Missing out/ after next build (output: export).');
  process.exit(1);
}
if (!hasIndex) {
  console.error('Missing out/index.html.');
  process.exit(1);
}
if (!lockExists) {
  console.error('Missing package-lock.json (required for npm ci).');
  process.exit(1);
}
console.log('verify-ci: static export OK');
