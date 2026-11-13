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
