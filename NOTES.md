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
   - In full screen, Esc only leaves full screen, which is the browser's own behavior. A second press then leaves the deck.
   - Firefox cancelled the page change at first, because it treats Esc as "stop loading". The script now blocks that and changes page when the key is released.
   - The intro text on the Slides page mentions the key.

8. **Lessons and slides are organized by topic, not by session.** (2026-11-13)
   - Each week now has three to six topic pages and one lab and assignment page, in place of two session pages. Week 15 has two topics. A class meeting covers as many topics as fit.
   - Drafts are named `WNN-TN - Title.md` and `WNN-Lab - Title.md`. Published files are `wNN-tN.md` and `wNN-lab.md`. In `content/course.json`, each week lists `topics` where it used to list `sessions`.
   - A topic's subtopics are its `##` sections. Topics that were short were combined.
   - The lab and assignment page holds the week's guided practice, lab, share-out, responsible-use note, assignment, and "Before next week."
   - Each topic has its own slide deck. The timed "Today" agenda slides, "Next session" slides, and "Part N" divider slides were removed.
   - The lesson header line now shows only the 4D focus. The surfaces and capabilities for each week are still in the weekly outlines.
   - "Coming up Thursday" sections were removed, and references to Tuesday, Thursday and Session 1 or 2 were reworded.
   - Each weekly outline has a Topics list, and its two session plans are merged into one "Class time" list.
   - `tools/sync.mjs` takes week numbers, so `node tools/sync.mjs drafts 1` publishes only Week 1.
   - The old Week 1 addresses (`/lessons/w01-s1/` and so on) redirect to the Lessons and Slides pages.
   - Slide decks no longer break on a `---` line inside a code block.

9. **Titles are in sentence case.** (2026-11-13)
   - Topic titles now read like "What a large language model is" where they used to read "What a Large Language Model Is". This matches the week names, assignment names and section headings, which were already in sentence case.
   - The change covers `content/course.json`, the draft file names, each lesson's first heading, each deck's title slide, and the weekly outline titles and file names.
   - Proper names keep their capitals: AI, API, MCP, 4D, Claude Code, Meta Muse, and the 4D skill names such as Description and Discernment.
   - Page addresses on the site are unchanged.

10. **Collapsible callouts in lessons.** (2026-11-13)
   - A lesson can fold supporting material into a callout that stays closed until the reader selects it. In the draft, wrap the material in `:::steps` and `:::`.
   - The first type is `steps`, titled "Step-by-step instructions". It is used for the Claude and ChatGPT steps in Week 1, Privacy settings.
   - Callouts open automatically when a page is printed. Types and their titles are listed in `build.mjs`. How to write one is in `drafts/Lessons/README.md`.

11. **Five demos are posted.** (2026-11-13)
   - Added `content/demos/` with Next-token sampler, Context window budget, Prompt injection sandbox, Tool-use tracer, and Retrieval and evaluation explorer. They were already listed in `content/course.json`, so the Demos page now links to each one.
   - Each demo is one self-contained HTML file, copied from the Claude artifacts of the same names. The page font was changed from Bricolage Grotesque and IBM Plex Sans to Figtree to match the site. Code text still uses IBM Plex Mono.

12. **Demos run inside the site.** (2026-11-13)
   - Each demo page now has the top navigation, a "Demos / Week N" line, and the demo's name as the page heading, in the color of its first week's stage.
   - The files in `content/demos/` are fragments (a `<style>`, markup and a `<script>`), not full pages. `build.mjs` places each one inside the site page (`demoPage`). Their styles are scoped under `.dx`, so they don't affect the site and the site's styles don't affect them.
   - Demos use the site's colors, Figtree, and the stage color for buttons, highlights and the panel edge. The dark-mode styles from the artifacts were removed, since the site has none.
   - To change a demo, edit its file in `content/demos/`. Keep new class names from matching site classes such as `.step`, `.foot`, `.top` and `.head`.

13. **Week 1 intro wording.** (2026-11-13)
   - In "About this course" (W01-T1), "Some weeks involve software" now reads "Some weeks involve developing software". Changed in the draft and in `content/lessons/w01-t1.md`.

14. **All 15 weeks are posted.** (2026-11-13)
   - Ran `node tools/sync.mjs drafts` with no week numbers, so every lesson and deck for Weeks 2 to 15 is now in `content/`. The site builds 68 lessons and 68 decks.
   - A review of each topic is under way to expand the thin ones. Its status is tracked in `drafts/Review progress.md`.

15. **Lesson review: Week 2 expanded.** (2026-11-13)
   - All four Week 2 topics and their decks were rewritten longer, with worked examples, tables and more key terms. "Testing and revising prompts" went from 174 words to a full lesson. The lab page got small additions.
   - Product details in "Memory, custom instructions, and voice" are written generally (no menu paths), with an instructor note to check them the week it is taught.
   - `tools/publish.sh` runs sync, build and the Dropbox step, and commits and pushes when given a message.

16. **Lesson review: Week 3 expanded.** (2026-11-13)
   - The three Week 3 topics and their decks were rewritten longer. "Verification habits" went from 172 words to a full lesson with a section for each habit. The lab page was left as it was.

17. **Lesson review: Week 4 expanded.** (2026-11-13)
   - The four Week 4 topics and their decks were rewritten longer. The lab page was left as it was.

18. **Lesson review: Week 5 expanded.** (2026-11-13)
   - The four Week 5 topics and their decks were rewritten longer. "AI inside an application" went from 223 words to a full lesson. The lab page was left as it was.

19. **Lesson review: Weeks 6 and 7 expanded.** (2026-11-13)
   - Week 6: "The task brief" went from 167 words to a full lesson. "From chat to agent" and "Autonomy controls and usage" gained sections (a trace of the tool-use loop, reviewing the result, approval fatigue).
   - Week 7: all three topics and their decks were expanded, with a full example instruction file and a section on checking a skill before installing it. The lab pages for both weeks were left as they were, apart from one fixed reference.
