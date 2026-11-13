# cosc-300

Course site for COSC 300/500 Applied AI Essentials. Live at https://applied-ai-mu.vercel.app/

- `content/course.json`: weeks, topics, stages, and demos. The indexes are built from this. Each week lists its topics in order, and its assignment names the week's lab and assignment page.
- `content/lessons/wNN-tN.md`, `content/slides/wNN-tN.md`: one file per topic, numbered in the order the week lists them. `wNN-lab.md` is the week's lab and assignment page. A page shows as posted once its file exists.
- `content/demos/<slug>.html`: a self-contained demo page. Add the file and it appears in Demos.
- `content/resources.md`: the Resources page.
- `src/`: styles and the slide deck script.
- `build.mjs`: builds everything into `dist/`. Vercel runs it on every push to `main`.
- `drafts/`: the working drafts (`Draft Outline/`, `Lessons/`, `Slides/`), with instructor notes and speaker notes. The build ignores this folder, so nothing here appears on the site.
- `tools/sync.mjs drafts`: copies drafts into `content/` and removes instructor notes and speaker notes. Add week numbers to copy only those weeks, for example `node tools/sync.mjs drafts 1 2`. Without week numbers it copies every week, which posts all of them on the site.
