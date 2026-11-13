# Week 5: Structured files

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Prepare a messy demo dataset (a few hundred rows) with a planted problem that produces a wrong aggregate if not caught: duplicate IDs, mixed units (some values in thousands), or a category spelled two ways. Have the provided assignment dataset posted for students who didn't find one. Timing: 15 min structured files, 25 min data analysis demo, 35 min guided practice.

## What you will be able to do

- Use Markdown, CSV, JSON, and Mermaid as working formats between you and an AI.

Some file formats are easy for both people and AI to read, write, and check. Asking for output in one of these formats, instead of "make it look nice", gives you something you can edit, verify, and move between tools.

| Format | What it's for | Example |
|---|---|---|
| **Markdown** | Documents, notes, instructions | Headings with `#`, bullets with `-`, **bold** with `**` |
| **CSV** | Tables of data | One row per line, values separated by commas |
| **JSON** | Structured records and app data | `{"name": "Ada", "year": 2027}` |
| **Mermaid** | Diagrams written as text | `flowchart LR` followed by boxes and arrows |

These formats matter for three reasons. They're easy to check, because you can read them directly. They move cleanly between tools: a CSV made in one place opens anywhere. And they're the language of the agent work coming in weeks 6 and 7: instruction files and skills are written in Markdown.

## Markdown in a minute

```markdown
# A heading
## A subheading
- a bullet
**bold** and *italic*
| a | table |
|---|---|
| 1 | 2 |
```

## Mermaid in a minute

```mermaid
flowchart LR
  A[Question] --> B[Search] --> C[Read] --> D[Report]
```

Ask a model to "draw this process as a Mermaid flowchart" and you get a diagram you can edit as text.

## Key terms

**Markdown, CSV, JSON, Mermaid**: structured text formats.

> **Instructor note: book links.** Structured Files for AI Workflows.
