# AGENTS.md

Guide for AI agents working in this repo.

## The project
Course site and drafts for COSC 300/500 Applied AI Essentials (Dr. Robbie Beane, Maryville University).

- Live site: https://applied-ai-mu.vercel.app/
- Repo: `drbeane/cosc-300` on GitHub. It is **public**, so everything committed is readable by anyone.
- Vercel builds the site on every push to `main` by running `node build.mjs`. Pushing to `main` redeploys the live site, so don't push a broken build.
- Site sections: Lessons, Slides, Demos, Resources.

## Layout
- `drafts/`: the working drafts, which are the source of truth for course content.
  - `Draft Outline/`: course outline, assignments, resource lists, and one file per week.
  - `Lessons/Week NN/WNN-SN - Title.md`: lesson text, including instructor notes.
  - `Slides/Week NN/WNN-SN - Title.md`: Marp decks, including speaker notes.
- `content/`: what the site publishes, cleaned of instructor and speaker notes.
  - `course.json`: weeks, sessions, stages and demos.
  - `lessons/wNN-sN.md` and `slides/wNN-sN.md`: a session appears as posted once its file exists.
  - `demos/<slug>.html`: one file per demo.
  - `resources.md`: the Resources page.
- `src/`: site CSS and the deck script.
- `build.mjs`: builds `content/` into `dist/`. It ignores `drafts/`.
- `tools/sync.mjs`: copies drafts into `content/`.
- `NOTES.md`: log of site edits. Add an entry whenever you change the site.

## Common tasks
- Build locally: run `npm install` once, then `node build.mjs`. Check the "Built N lessons and N decks" line it prints.
- Publish a session from the drafts: run `node tools/sync.mjs drafts`. Sync copies **every** session it finds, which would post all 30. After running it, delete the `content/lessons` and `content/slides` files that shouldn't be posted yet, then check `git status` before committing.
- Edit `drafts/` first, then sync. If you edit `content/` by hand, make the same change in the draft, or the next sync will undo it.

## Connecting to GitHub
Use git over SSH. The GitHub CLI (`gh`) isn't installed, and HTTPS has no saved login.

The machine has several GitHub keys, so `~/.ssh/config` defines a host alias for each account. This repo uses the `drbeane` account:

```
Host github.com-drbeane
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_drbeane
    IdentitiesOnly yes
```

- The remote is `git@github.com-drbeane:drbeane/cosc-300.git`. Check it with `git remote -v`.
- Test the connection: `ssh -T git@github.com-drbeane` should reply "Hi drbeane!". The command exits with status 1 even when it works, because GitHub gives no shell.
- Plain `git@github.com:...` fails with "Permission denied (publickey)". Always use the alias.
- To clone on this machine: `git clone git@github.com-drbeane:drbeane/cosc-300.git`.
- On another machine, set up a key and the same alias, or use your own GitHub login.

## Rules
- Ask before pushing to `main`, since a push redeploys the live site.
- Never commit secrets, API keys, student data or grades. The course folder's `Claude Access/` sits outside this repo. Never copy it in.
- This clone lives in Dropbox. `node_modules/` and `dist/` are excluded from Dropbox sync by a `com.dropbox.ignored` stream on each folder. The build deletes and recreates `dist/`, which removes that stream. After a local build, restore it in PowerShell:
  `Set-Content -Path dist -Stream com.dropbox.ignored -Value 1`

## Site preferences
- Fonts: no Bricolage Grotesque. The site uses Figtree with Source Serif 4 for lesson text. Slides use Source Sans 3 and must not share the site's font.
- Home page: keep the autonomy theme low-key. Use plain stage groupings, with no staircase or staggered layout.
- Resources: Claude documentation and support center come first, Claude Academy second.
- Keep responses to the user short and direct.
