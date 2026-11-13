// Builds the course site from content/ into dist/.
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const root = import.meta.dirname;
const dist = path.join(root, 'dist');
const course = JSON.parse(fs.readFileSync(path.join(root, 'content/course.json'), 'utf8'));

const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const has = (p) => fs.existsSync(path.join(root, p));
const write = (p, html) => {
  const file = path.join(dist, p);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');
const slug = (s) => s.replace(/<[^>]+>/g, '').toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const stageOf = (wk) => course.stages.find((s) => s.n === wk.stage);

// Every topic in order, then each week's lab and assignment page, with what has been posted for it.
const items = course.weeks.flatMap((wk) => {
  const make = (key, title, label) => {
    const id = `w${pad(wk.n)}-${key}`;
    return { id, wk, title, label, lesson: has(`content/lessons/${id}.md`), slides: has(`content/slides/${id}.md`) };
  };
  return [...wk.topics.map((title, i) => make(`t${i + 1}`, title, `Topic ${i + 1}`)), make('lab', wk.assignment, 'Lab')];
});
const kicker = (s) => `Week ${s.wk.n}, ${s.label === 'Lab' ? 'lab and assignment' : s.label}`;

const fontLink = (families) => `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?${families}&display=swap" rel="stylesheet">`;
const FONTS = fontLink('family=Figtree:wght@400..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700');
const DECK_FONTS = fontLink('family=Source+Sans+3:ital,wght@0,400..800;1,400..800');
const NAV = [['lessons', 'Lessons'], ['slides', 'Slides'], ['demos', 'Demos'], ['resources', 'Resources'], ['glossary', 'Glossary']];

function page({ title, section, body }) {
  const nav = NAV.map(([s, label]) => `<a href="/${s}/"${s === section ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title ? `${title} | ${course.title}` : course.title)}</title>
${FONTS}
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<header class="top">
  <a class="brand" href="/">${esc(course.title)}</a>
  <nav aria-label="Sections">${nav}</nav>
</header>
<main>
${body}
</main>
<footer class="foot">${esc(course.code)}, ${esc(course.school)}, ${esc(course.term)}</footer>
<script>addEventListener('beforeprint', () => document.querySelectorAll('details.callout').forEach((d) => { d.open = true; }));</script>
</body>
</html>
`;
}

// Collapsible callouts. In a lesson, write:
//   :::steps
//   1. First step.
//   :::
// The block is folded until the reader opens it. Text after the type replaces the default title,
// as in ":::steps On a phone". To add a type, add it here with its default title.
const CALLOUTS = { steps: 'Step-by-step instructions' };
function callouts(md) {
  let fence = false, open = false;
  return md.replace(/\r\n/g, '\n').split('\n').map((line) => {
    if (/^```/.test(line)) fence = !fence;
    if (fence) return line;
    const start = line.match(/^:::([a-z]+)[ \t]*(.*)$/);
    if (start && !open) {
      open = true;
      const title = start[2].trim() || CALLOUTS[start[1]] || start[1][0].toUpperCase() + start[1].slice(1);
      return `<details class="callout ${start[1]}">\n<summary>${marked.parseInline(title)}<span class="hint">Show</span></summary>\n`;
    }
    if (line.trim() === ':::' && open) { open = false; return '\n</details>\n'; }
    return line;
  }).join('\n');
}

// Markdown to HTML, with ids on h2 headings, scrollable tables, and collapsible callouts.
function render(md) {
  const toc = [];
  let html = marked.parse(callouts(md));
  html = html.replace(/<h2>(.*?)<\/h2>/g, (_, t) => {
    const id = slug(t);
    toc.push({ id, text: t.replace(/<[^>]+>/g, '') });
    return `<h2 id="${id}">${t}</h2>`;
  });
  html = html.replace(/<table>/g, '<div class="scroll"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<a href="http/g, '<a rel="noopener" href="http');
  return { html, toc };
}

const tocNav = (toc) =>
  `<nav class="toc" aria-label="On this page"><p>On this page</p><ol>${toc.map((t) => `<li><a href="#${t.id}">${t.text}</a></li>`).join('')}</ol></nav>`;

// ---------- Home ----------
function home() {
  const steps = course.stages.map((st) => {
    const weeks = course.weeks.filter((w) => w.stage === st.n).map((w) =>
      `<li><a href="/lessons/#w${pad(w.n)}"><span class="wk">Week ${w.n}</span><span class="tp">${esc(w.topic)}</span><span class="as">${esc(w.assignment)}</span></a></li>`
    ).join('');
    return `<section class="step s${st.n}"><h2>${esc(st.name)}</h2><ol>${weeks}</ol></section>`;
  }).join('\n');
  return page({
    body: `<div class="hero">
  <h1>${esc(course.title)}</h1>
  <p class="where">${esc(course.code)} at ${esc(course.school)}, ${esc(course.term)}. ${esc(course.meets)}.</p>
  <p class="lede">Learn to use modern AI tools for real work: research, writing, analysis, coding, and automation.</p>
</div>
<div class="stages">
  <p class="note">The weeks are grouped by how much the AI does on its own, from chat to agents that work while you are away.</p>
${steps}
</div>`,
  });
}

// ---------- Lessons and Slides indexes ----------
function index(kind) {
  const isLessons = kind === 'lessons';
  const blocks = course.weeks.map((wk) => {
    const rows = items.filter((s) => s.wk === wk).map((s) => {
      const posted = isLessons ? s.lesson : s.slides;
      const name = posted ? `<a href="/${kind}/${s.id}/">${esc(s.title)}</a>` : `<span>${esc(s.title)}</span>`;
      return `<li><span class="sn">${s.label}</span>${name}${posted ? '' : '<span class="soon">Not posted yet</span>'}</li>`;
    }).join('');
    return `<section class="week s${wk.stage}" id="w${pad(wk.n)}">
  <header><p class="wk">Week ${wk.n}</p><h2>${esc(wk.topic)}</h2></header>
  <ul class="sess">${rows}</ul>
  ${isLessons ? `<p class="about">Assignment: ${esc(wk.assignment)}. This week's focus: ${esc(wk.focus)}.</p>` : ''}
</section>`;
  }).join('\n');
  return page({
    title: isLessons ? 'Lessons' : 'Slides',
    section: kind,
    body: `<div class="head"><h1>${isLessons ? 'Lessons' : 'Slides'}</h1>
<p>${isLessons
      ? 'The full text for each topic, grouped by week. Each week ends with its lab and assignment. Read a topic before class or use it to review afterward.'
      : 'The decks presented in class, one per topic. Use the arrow keys to move through a deck press F for full screen, and press Esc to come back to this page.'}</p></div>
<div class="weeks">
${blocks}
</div>`,
  });
}

// ---------- One lesson ----------
function lesson(s) {
  let md = read(`content/lessons/${s.id}.md`).replace(/^# .*\n+/, '');
  let facts = [];
  md = md.replace(/^\*\*COSC-300\/500 Applied AI Essentials\*\* · (.*)\n/, (_, m) => { facts = m.split(' · '); return ''; });
  const { html, toc } = render(md);
  const posted = items.filter((x) => x.lesson);
  const at = posted.indexOf(s);
  const prev = posted[at - 1], next = posted[at + 1];
  const link = (x, label) => x ? `<a href="/lessons/${x.id}/"><span>${label}</span>${esc(x.title)}</a>` : '<span></span>';
  return page({
    title: s.title,
    section: 'lessons',
    body: `<article class="lesson s${s.wk.stage}">
  <header class="lhead">
    <p class="wk">${kicker(s)}</p>
    <h1>${esc(s.title)}</h1>
    <ul class="facts">${facts.map((f) => `<li>${marked.parseInline(f)}</li>`).join('')}</ul>
    ${s.slides ? `<p><a class="btn" href="/slides/${s.id}/">Open the slides</a></p>` : ''}
  </header>
  <div class="cols">
    ${tocNav(toc)}
    <div class="prose">${html}</div>
  </div>
  <nav class="pager" aria-label="Other lessons">${link(prev, 'Previous')}${link(next, 'Next')}</nav>
</article>`,
  });
}

// ---------- One slide deck ----------
function deck(s) {
  // Split on slide breaks, but not on a --- line inside a code block.
  const parts = [''];
  let fence = false;
  for (const line of read(`content/slides/${s.id}.md`).replace(/\r\n/g, '\n').split('\n')) {
    if (/^```/.test(line)) fence = !fence;
    if (line === '---' && !fence) parts.push('');
    else parts[parts.length - 1] += line + '\n';
  }
  const slides = parts.map((part) => {
    const html = marked.parse(part.trim());
    return `<section class="slide${/^\s*<h1/.test(html) ? ' lead' : ''}">${html}</section>`;
  }).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(`Slides: ${s.title} | ${course.title}`)}</title>
${DECK_FONTS}
<link rel="stylesheet" href="/assets/deck.css">
</head>
<body class="s${s.wk.stage}">
<div class="stage" id="stage">
${slides}
</div>
<div class="bar">
  <a href="/slides/#w${pad(s.wk.n)}">All slides</a>
  ${s.lesson ? `<a href="/lessons/${s.id}/">Read the lesson</a>` : ''}
  <span class="grow"></span>
  <button id="prev" aria-label="Previous slide">Back</button>
  <span id="count" aria-live="polite"></span>
  <button id="next" aria-label="Next slide">Next</button>
  <button id="full">Full screen</button>
</div>
<script src="/assets/deck.js"></script>
</body>
</html>
`;
}

// ---------- Demos ----------
function demos() {
  const items = course.demos.map((d) => {
    const posted = has(`content/demos/${d.slug}.html`);
    const weeks = `Week${d.weeks.length > 1 ? 's' : ''} ${d.weeks.join(' and ')}`;
    const wk = course.weeks.find((w) => w.n === d.weeks[0]);
    return `<li class="demo s${wk.stage}">
  <h2>${posted ? `<a href="/demos/${d.slug}/">${esc(d.name)}</a>` : esc(d.name)}</h2>
  <p>${esc(d.about)}</p>
  <p class="about">${weeks}${posted ? '' : '<span class="soon">Not posted yet</span>'}</p>
</li>`;
  }).join('\n');
  return page({
    title: 'Demos',
    section: 'demos',
    body: `<div class="head"><h1>Demos</h1>
<p>Small interactive models of ideas from the course. They run in your browser and need no account. Each one simplifies the real thing so you can see how it works.</p></div>
<ul class="demos">
${items}
</ul>`,
  });
}

// A demo is a fragment (its own style, markup and script) placed inside the site page, under the
// demo's name. Its styles are scoped to ".dx", and it takes the color of its first week's stage.
function demoPage(d, fragment) {
  const wk = course.weeks.find((w) => w.n === d.weeks[0]);
  const weeks = `Week${d.weeks.length > 1 ? 's' : ''} ${d.weeks.join(' and ')}`;
  return page({
    title: d.name,
    section: 'demos',
    body: `<div class="head dhead s${wk.stage}"><p class="wk"><a href="/demos/">Demos</a> / ${weeks}</p><h1>${esc(d.name)}</h1></div>
<div class="dx s${wk.stage}">
${fragment}
</div>`,
  });
}

// ---------- Resources ----------
function resources() {
  const { html, toc } = render(read('content/resources.md'));
  return page({
    title: 'Resources',
    section: 'resources',
    body: `<div class="head"><h1>Resources</h1>
<p>Videos, short courses, articles, and standards that go with each week. Everything is free unless it says otherwise.</p></div>
<div class="cols wide">
  ${tocNav(toc)}
  <div class="prose res">${html}</div>
</div>`,
  });
}

// ---------- Glossary ----------
// Collected from the "Key terms" section of every posted lesson, so it grows as lessons are posted.
// A term defined in more than one lesson keeps its first definition and links to each lesson.
function glossaryTerms() {
  const terms = new Map();
  for (const s of items.filter((x) => x.lesson)) {
    const block = read(`content/lessons/${s.id}.md`).replace(/\r\n/g, '\n').match(/^## Key terms\n([\s\S]*?)(?=^## |$(?![\s\S]))/m);
    if (!block) continue;
    for (const [, term, def] of block[1].matchAll(/\*\*(.+?)\*\*:\s*([\s\S]*?)(?=\s*\*\*[^*]+\*\*:|\s*$(?![\s\S]))/g)) {
      const key = term.toLowerCase();
      if (!terms.has(key)) terms.set(key, { term, def: def.trim(), from: [] });
      terms.get(key).from.push(s);
    }
  }
  return [...terms.values()].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base', numeric: true }));
}

function glossary() {
  const terms = glossaryTerms();
  const items = terms.map((t) => {
    const from = t.from.map((s) => `<a href="/lessons/${s.id}/">Week ${s.wk.n}: ${esc(s.title)}</a>`).join(', ');
    const def = marked.parseInline(t.def.replace(/^[a-z]/, (c) => c.toUpperCase()));
    return `<div class="term" id="${slug(t.term)}"><dt>${marked.parseInline(t.term)}</dt><dd>${def} <span class="from">${from}</span></dd></div>`;
  }).join('\n');
  return page({
    title: 'Glossary',
    section: 'glossary',
    body: `<div class="head"><h1>Glossary</h1>
<p>The key terms from each posted lesson, in alphabetical order. Each term links to the lesson that introduces it.</p></div>
${terms.length ? `<dl class="gloss">\n${items}\n</dl>` : '<p>No terms yet. They appear here as lessons are posted.</p>'}`,
  });
}

// ---------- Build ----------
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });
for (const f of fs.readdirSync(path.join(root, 'src'))) fs.copyFileSync(path.join(root, 'src', f), path.join(dist, 'assets', f));

write('index.html', home());
write('lessons/index.html', index('lessons'));
write('slides/index.html', index('slides'));
write('demos/index.html', demos());
if (has('content/resources.md')) write('resources/index.html', resources());
write('glossary/index.html', glossary());
for (const s of items) {
  if (s.lesson) write(`lessons/${s.id}/index.html`, lesson(s));
  if (s.slides) write(`slides/${s.id}/index.html`, deck(s));
}
for (const d of course.demos) {
  const src = `content/demos/${d.slug}.html`;
  if (has(src)) write(`demos/${d.slug}/index.html`, demoPage(d, read(src)));
}
write('404.html', page({ title: 'Page not found', body: '<div class="head"><h1>Page not found</h1><p>That page is not on this site. Start again from the <a href="/">course map</a>.</p></div>' }));
console.log(`Built ${items.filter((s) => s.lesson).length} lessons and ${items.filter((s) => s.slides).length} decks.`);
