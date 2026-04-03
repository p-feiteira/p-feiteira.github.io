import fs from 'fs';
import path from 'path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const outExists = fs.existsSync(outDir);
const hasIndex = outExists && fs.existsSync(path.join(outDir, 'index.html'));
const lockExists = fs.existsSync(path.join(root, 'package-lock.json'));

// #region agent log
fetch('http://127.0.0.1:7761/ingest/f03e3c51-ecb6-4219-ada1-c7fce0c35d74', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'd443d5' },
  body: JSON.stringify({
    sessionId: 'd443d5',
    location: 'scripts/verify-ci.mjs',
    message: 'CI static export + lockfile check',
    data: {
      outExists,
      hasIndex,
      lockExists,
      githubActions: !!process.env.GITHUB_ACTIONS,
      runId: process.env.GITHUB_RUN_ID || 'local',
    },
    timestamp: Date.now(),
    hypothesisId: 'H2-H3',
  }),
}).catch(() => {});
// #endregion

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
