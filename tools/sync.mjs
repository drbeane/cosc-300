// Copies course drafts into content/, removing anything meant only for the instructor.
// Usage: node tools/sync.mjs drafts [week numbers]
// With week numbers (for example: node tools/sync.mjs drafts 1 2), only those weeks' lessons and slides are copied.
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
if (!src) { console.error('Give the path to the course folder.'); process.exit(1); }
const out = path.join(import.meta.dirname, '..', 'content');
const only = process.argv.slice(3).map(Number);

// Topic files are named WNN-TN. Each week's lab and assignment page is WNN-Lab.
function pageFiles(dir) {
  const found = [];
  if (!fs.existsSync(dir)) return found;
  for (const week of fs.readdirSync(dir)) {
    const wdir = path.join(dir, week);
    if (!fs.statSync(wdir).isDirectory()) continue;
    for (const f of fs.readdirSync(wdir)) {
      const m = f.match(/^W(\d\d)-(T\d+|Lab)\b.*\.md$/);
      if (m && (!only.length || only.includes(+m[1]))) found.push({ id: `w${m[1]}-${m[2].toLowerCase()}`, file: path.join(wdir, f) });
    }
  }
  return found;
}

// Drop "> **Instructor note..." blockquotes.
function stripInstructorNotes(md) {
  const keep = [];
  let skipping = false;
  for (const line of md.split(/\r?\n/)) {
    if (/^>\s*\*\*Instructor note/.test(line)) { skipping = true; continue; }
    if (skipping && line.startsWith('>')) continue;
    if (skipping && line.trim() === '') { skipping = false; continue; }
    skipping = false;
    keep.push(line);
  }
  return keep.join('\n');
}

// Drop Marp front matter and speaker notes (HTML comments).
function cleanSlides(md) {
  return md.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '').replace(/<!--[\s\S]*?-->\n?/g, '').trim() + '\n';
}

// Drop drafting notes, link-check marks, and the Outcomes column.
function cleanResources(md) {
  const keep = [];
  let drop = -1, inTable = false;
  for (let line of md.replace(/\r\n/g, '\n').split('\n')) {
    if (/^## Notes/.test(line)) break;
    if (/^# /.test(line) || /^_Compiled/.test(line) || /^\*\*Key:\*\*/.test(line)) continue;
    line = line.replace(/[✓◦] /g, '');
    if (line.startsWith('|')) {
      const cells = line.split('|').slice(1, -1);
      if (!inTable) { drop = cells.findIndex(c => c.trim() === 'Outcomes'); inTable = true; }
      if (drop >= 0) cells.splice(drop, 1);
      line = '|' + cells.join('|') + '|';
    } else inTable = false;
    keep.push(line);
  }
  return keep.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

fs.mkdirSync(path.join(out, 'lessons'), { recursive: true });
fs.mkdirSync(path.join(out, 'slides'), { recursive: true });
for (const s of pageFiles(path.join(src, 'Lessons')))
  fs.writeFileSync(path.join(out, 'lessons', s.id + '.md'), stripInstructorNotes(fs.readFileSync(s.file, 'utf8')));
for (const s of pageFiles(path.join(src, 'Slides')))
  fs.writeFileSync(path.join(out, 'slides', s.id + '.md'), cleanSlides(fs.readFileSync(s.file, 'utf8')));
const res = path.join(src, 'Draft Outline', '03 - Supplementary Resources.md');
if (fs.existsSync(res)) fs.writeFileSync(path.join(out, 'resources.md'), cleanResources(fs.readFileSync(res, 'utf8')));
console.log('Synced into', out);
