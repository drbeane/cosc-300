# COSC-300/500 Applied AI Essentials: lesson texts

Full lesson text, organized by topic within each week. A week has three to six topic files (`WNN-TN - Title.md`) and one lab and assignment file (`WNN-Lab - Title.md`). Topics are not tied to a class meeting: cover as many in a day as fit. Each file matches the slide deck of the same name in `../Slides/`, and both are built from `../Draft Outline/`.

The order and titles of a week's topics are set in `content/course.json`. If you add, remove, rename or reorder a topic, change it there and renumber the files to match.

## How each lesson is organized
- A header line with the week's 4D focus.
- "What you will be able to do."
- The topic's subtopics as sections, in the order they are taught, written as prose students can read.
- Key terms, for the terms that topic introduces. The site's glossary is built from these.

The lab and assignment file holds the week's guided practice, lab, share-out, and responsible-use note, then the assignment in full, followed by "Before next week."

## Collapsible callouts
Some material is useful to have but breaks up the reading, such as click-by-click steps. Put it in a callout, which the site shows folded until the reader opens it:

```
:::steps
1. Open your account menu.
2. Select **Settings**.
:::
```

- `:::steps` is titled "Step-by-step instructions". To give one callout its own title, write it after the type, as in `:::steps On a phone`.
- A callout can hold paragraphs, lists, and tables. It cannot hold another callout.
- New types are added in `build.mjs`, in the `CALLOUTS` list, each with its default title.
- On GitHub and in a plain Markdown preview, the `:::` lines show as text and the content is not folded.

## Instructor notes
Every instructor note is a blockquote that begins with **"Instructor note"**:

> **Instructor note: preparation.** ...

Preparation notes (materials, demos to set up, timing) sit at the top of the first topic they apply to. They were written for a two-meeting week, so their timings cover several topics. Other notes sit beside the section they refer to. Everything outside these blockquotes is written for students.

To make a student version, delete every blockquote that starts with `> **Instructor note`. The other blockquotes are example prompts that belong in the student text.

## Before each class
Notes flag claims about products, plans, prices, and eligibility that change quickly. Recheck them the week you teach. Week 13 (Muse) relies on third-party reports that still need checking on Meta's own pages. Weeks 11–12 depend on the API access decision, which is still open.
