# cosc-300

Course site for COSC 300/500 Applied AI Essentials. Live at https://applied-ai-mu.vercel.app/

- `content/course.json`: weeks, sessions, stages, and demos. The indexes are built from this.
- `content/lessons/wNN-sN.md`, `content/slides/wNN-sN.md`: one file per session. A session shows as posted once its file exists.
- `content/demos/<slug>.html`: a self-contained demo page. Add the file and it appears in Demos.
- `content/resources.md`: the Resources page.
- `src/`: styles and the slide deck script.
- `build.mjs`: builds everything into `dist/`. Vercel runs it on every push to `main`.
- `drafts/`: the working drafts (`Draft Outline/`, `Lessons/`, `Slides/`), with instructor notes and speaker notes. The build ignores this folder, so nothing here appears on the site.
- `tools/sync.mjs drafts`: copies drafts into `content/` and removes instructor notes and speaker notes. It copies every session it finds, which posts all of them on the site, so delete the files you don't want posted before you commit.
