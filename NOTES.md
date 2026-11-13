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
   - When the drafts were moved, the Week 1 lessons matched `content/` exactly and the Week 1 slides differed only in blank lines. `drafts/Draft Outline/03 - Supplementary Resources.md` has since been updated to the item 3 order, so syncing no longer undoes it.

5. **Removed the surface and capability codes.** (2026-11-13)
   - The codes S1 to S8 (surfaces) and C1 to C14 (capabilities) are gone from the drafts and from the published Week 1 lessons and slides. Surfaces and capabilities are now referred to by name only.
   - The surface tables lost their code column. Asides such as "(surface **S4**)" and "(capability **C6**)" were deleted.
   - Session labels such as `W01-S1` (week 1, session 1) are unchanged.
   - The Evidence master list in `Claude Access/`, outside this repo, still uses the codes.

6. **Added a Glossary tab.** (2026-11-13)
   - The new page at `/glossary/` is the fifth item in the top navigation, after Resources.
   - `build.mjs` collects the terms from the "Key terms" section at the end of every posted lesson in `content/lessons/`. There is no separate glossary file to edit or sync. To add or change a term, edit the lesson draft's Key terms paragraph, which uses the form `**Term**: definition.`
   - Terms are listed alphabetically, and each links to the lesson that introduces it. A term that appears in more than one lesson keeps its first definition and links to each lesson.
   - The glossary grows as lessons are posted. With Week 1 posted it has 10 terms.
   - The top navigation now wraps on narrow screens so five items fit.

7. **Esc exits a slide deck.** (2026-11-13)
   - Pressing Esc while viewing a deck returns to the Slides page, at that deck's week.
   - In full screen, the browser uses Esc to leave full screen, so the first press leaves full screen and the second leaves the deck.
   - The intro text on the Slides page mentions the key.
