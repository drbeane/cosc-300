---
marp: true
title: "Week 7: Skills"
paginate: true
---

# Skills
### Week 7
COSC-300/500 Applied AI Essentials

---

## Skills

A **skill** is a reusable, documented procedure.

- A folder with a `SKILL.md`
- Optional scripts, templates, reference files
- The agent **loads it when relevant**
- An open format used by several vendors' tools

Instruction files describe a **place**. Skills describe a **procedure**.

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

## Loaded in stages

| Stage | In the context | When |
|---|---|---|
| 1 | Name and description | Always |
| 2 | The full `SKILL.md` | When your request matches |
| 3 | Templates, examples | When the steps call for them |

A long skill costs nothing on tasks that don't use it.

---

## How the agent picks a skill

- It sees every skill's **name and description**
- When your request matches, it loads the full instructions
- **The description is the trigger**: write it carefully

---

## Descriptions

| Description | Verdict |
|---|---|
| "Helps with reports." | Too vague |
| "Weekly status." | No "when" |
| "Turn my notes folder into a weekly status update. Use when asked for a status report or weekly summary." | What **and** when |

Or ask by name: "Use the weekly-status skill."

---

## Writing the instructions

1. **Steps**, in order
2. **Output**: format and where to save
3. **Rules**: never do, and what to do when unclear
4. **Supporting files**: a template, an example

Not "format it properly". Say what proper means.

<!-- Test: could a classmate follow it without asking you anything? -->

---

## Which one?

- Same **fact about the folder** twice → instruction file
- Same **procedure** twice → skill
- One-time job → brief

---

## Testing a skill

- Does it **trigger**? And stay out when it shouldn't?
- Does it follow **every step**?
- Does it hold up on **awkward input**?
- Revise, then rerun everything

---

## Live demo: writing a skill

1. Pick a task I do every week
2. Write the description
3. Write the steps
4. Run it on a real input
5. Fix what went wrong
