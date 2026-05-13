'use strict';
const path = require('path');
const { execSync } = require('child_process');

const patchPath = path.resolve(__dirname, 'patch-fs.js');
const existing = process.env.NODE_OPTIONS || '';
const nodeOptions = `--require ${patchPath}${existing ? ' ' + existing : ''}`;

try {
  execSync('next build --turbopack', {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NODE_OPTIONS: nodeOptions },
  });
} catch (e) {
  process.exit(e.status ?? 1);
}
