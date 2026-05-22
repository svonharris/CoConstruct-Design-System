#!/usr/bin/env node
// Runs as a git pre-commit hook. Updates CHANGELOG.md when package.json version bumps.

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', cwd: ROOT }).trim();
}

// Only act when package.json is staged
const staged = run('git diff --cached --name-only').split('\n');
if (!staged.includes('package.json')) process.exit(0);

const stagedVersion = JSON.parse(run('git show :package.json')).version;

let headVersion = null;
try {
  headVersion = JSON.parse(run('git show HEAD:package.json')).version;
} catch {
  // First commit — no HEAD yet
}

if (stagedVersion === headVersion) process.exit(0);

console.log(`[changelog] version bump: ${headVersion ?? 'none'} → ${stagedVersion}`);

// Collect commit subjects since last tag, excluding merges
let commits = '';
try {
  const lastTag = run('git describe --tags --abbrev=0');
  commits = run(`git log "${lastTag}..HEAD" --no-merges --pretty=format:"- %s"`);
} catch {
  try {
    commits = run('git log HEAD --no-merges --pretty=format:"- %s"');
  } catch { /* no commits yet */ }
}

const today = new Date().toISOString().slice(0, 10);
const newEntry = `## [${stagedVersion}] — ${today}\n\n${commits || '- (see commit history)'}\n`;

// Build or read CHANGELOG.md
const changelogPath = resolve(ROOT, 'CHANGELOG.md');
let content = existsSync(changelogPath)
  ? readFileSync(changelogPath, 'utf8')
  : '# Changelog\n\nAll notable changes to this project will be documented in this file.\n\n## [Unreleased]\n\n';

// Ensure an [Unreleased] heading exists
if (!/^## \[Unreleased\]/m.test(content)) {
  // Try inserting before the first versioned section
  const insertedInline = content.replace(/^(## \[\d)/m, '## [Unreleased]\n\n$1');
  content = insertedInline !== content ? insertedInline : content + '\n## [Unreleased]\n\n';
}

// Clear [Unreleased] body — keep the heading, wipe the content
content = content.replace(
  /(## \[Unreleased\][^\n]*\n)([\s\S]*?)(?=\n## \[|\s*$)/,
  '$1\n'
);

// Insert new entry before the first versioned ## [x.y.z] section
const versionMatch = /^## \[\d/m.exec(content);
if (versionMatch) {
  const i = versionMatch.index;
  content = content.slice(0, i) + newEntry + '\n' + content.slice(i);
} else {
  content = content.trimEnd() + '\n\n' + newEntry;
}

writeFileSync(changelogPath, content, 'utf8');
run('git add CHANGELOG.md');
console.log('[changelog] CHANGELOG.md updated and staged.');
