# Site edit notes

Edits Robbie wants made to the site, in the order he gave them. Mark an item done when it ships.

## Open

(none)

## Done

1. **Home page: play down the autonomy theme.** (2026-11-12)
   - The autonomy tagline is gone from the top of the page. The hero now has a plain one-line course description, and a small note above the week list says the weeks are grouped by how much the AI does on its own.
   - The staircase layout and the "You do the work" to "The AI does the work" axis are removed.
   - The stage groupings stay, laid out plainly with no stagger.

2. **Replace the main font, Bricolage Grotesque.** (2026-11-12)
   - The site (headings, navigation, tables) now uses Figtree. Lesson body text stays in Source Serif 4.
   - The slide decks use a different font, Source Sans 3, and load it separately.

3. **Resources: reorder the course-long references.** (2026-11-12)
   - Claude documentation and Claude support center is first.
   - Claude Academy is added as the second entry.
   - This edit was made by hand in `content/resources.md`. Running `tools/sync.mjs` again overwrites it unless the draft in the course folder is changed to match.

4. **Moved the course drafts into this repo.** (2026-11-13)
   - `Draft Outline/`, `Lessons/` and `Slides/` now live in `drafts/`. Before this, they sat in the Dropbox course folder outside the repo. The repo is now the only copy, and the Dropbox folder holds the clone.
   - The build reads only `content/`, so `drafts/` is not published on the site. It is readable on GitHub, instructor and speaker notes included.
   - To sync, run `node tools/sync.mjs drafts`.
   - When the drafts were moved, the Week 1 lessons matched `content/` exactly and the Week 1 slides differed only in blank lines. `drafts/Draft Outline/03 - Supplementary Resources.md` still has the old resource order from before item 3.
