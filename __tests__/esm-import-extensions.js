/* eslint-env node */
import fs from 'fs';
import path from 'path';

// highlight.js@10 and lowlight@1 have no "exports" map, so native ESM
// resolvers need the full file path. Jest resolves extensionless paths,
// so check the source directly.
const PACKAGES_WITHOUT_EXPORTS = ['highlight.js', 'lowlight'];
const SPECIFIER = /(?:from\s*|import\s*\(\s*(?:\/\*[\s\S]*?\*\/\s*)?)['"]([^'"]+)['"]/g;

function listSourceFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listSourceFiles(fullPath);
    return entry.name.endsWith('.js') ? [fullPath] : [];
  });
}

test('package subpath imports without an exports map include the .js extension', () => {
  const srcDir = path.join(__dirname, '../src');
  const missing = [];

  listSourceFiles(srcDir).forEach(file => {
    const source = fs.readFileSync(file, 'utf8');
    for (const [, specifier] of source.matchAll(SPECIFIER)) {
      const isSubpath = PACKAGES_WITHOUT_EXPORTS.some(pkg =>
        specifier.startsWith(`${pkg}/`)
      );
      if (isSubpath && !specifier.endsWith('.js')) {
        missing.push(`${path.relative(srcDir, file)}: ${specifier}`);
      }
    }
  });

  expect(missing).toEqual([]);
});
