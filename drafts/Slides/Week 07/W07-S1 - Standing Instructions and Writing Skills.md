---
marp: true
title: "Week 7 · Session 1: Standing Instructions and Writing Skills"
paginate: true
---

# Instruction Files and Skills
### Week 7 · Session 1
**4D focus: Description**

---

## Today

| Time | |
|---|---|
| 20 min | Standing context |
| 20 min | Skills: anatomy and live demo |
| 35 min | Write instructions for your week 6 folder |

---

## The problem

You keep typing the same context:

- who you are
- how the project is organized
- what format you want
- what never to do

**Write it down once.**

---

## Levels of standing instructions (C2)

| Level | Applies to | Example |
|---|---|---|
| Global | Everything you do | "Use US spelling. Be brief." |
| Project | One project or folder | "This is my thesis. Cite in APA." |
| Instruction file | One folder or repository | `AGENTS.md`, `CLAUDE.md` |

---

## Instruction files

- A Markdown file that **lives with the work**
- The agent reads it when it starts in that folder
- Travels with the folder; can be version-controlled and shared
- **AGENTS.md**: a cross-vendor convention read by many coding tools
- **CLAUDE.md**: Claude Code's own file

---

## Standing instructions vs one prompt

| Standing | One prompt |
|---|---|
| True every time | True for this task |
| Folder layout, conventions | Today's goal |
| Style and format rules | This deliverable's audience |
| Things never to do | This task's constraints |

---

## Skills

A **skill** is a reusable, documented procedure.

- A folder with a `SKILL.md`
- Optional scripts, templates, reference files
- The agent **loads it when relevant**
- An open format used by several vendors' tools

---

## Anatomy of a skill

```markdown
---
name: weekly-status
description: Turn my notes folder into a weekly status update.
  Use when asked for a status report.
---
# Weekly status update
1. Read notes/ from the last 7 days
2. Group by project
3. Write: done, next, blocked
4. Save as status/YYYY-MM-DD.md
```

---

## How the agent picks a skill

- It sees every skill's **name and description**
- When your request matches, it loads the full instructions
- **The description is the trigger**: write it carefully

---

## Live demo: writing a skill

1. Pick a task I do every week
2. Write the description
3. Write the steps
4. Run it on a real input
5. Fix what went wrong

---

## Guided practice

Write instructions for your **week 6 working folder**:

- What's in the folder and how it's organized
- Conventions (names, formats)
- What the agent must never do

Run a task and see whether it follows them.

---

## Next session

- Plugins
- Skills in chat vs in an agent
- Lab: write and test a skill
