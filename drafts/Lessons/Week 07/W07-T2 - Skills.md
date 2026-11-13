# Week 7: Skills

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Explain what a skill is and how an agent decides to use one.

A **skill** is a reusable, documented procedure that an agent can follow. Technically, it's a folder containing a file named `SKILL.md`, plus any supporting files the procedure needs: a template, an example, a script. Skills are an open format; Claude and several other vendors' tools can use them.

## Anatomy of a skill

```markdown
---
name: weekly-status
description: Turn my notes folder into a weekly status update.
  Use when asked for a status report or weekly summary.
---
# Weekly status update
1. Read every file in notes/ modified in the last 7 days.
2. Group the items by project.
3. For each project write three short lists: Done, Next, Blocked.
4. Save the result as status/YYYY-MM-DD.md.
5. Never edit the notes themselves.
```

The top section, between the `---` lines, gives the skill a **name** and a **description**. Below it are the instructions.

## How the agent decides to use a skill

An agent with several skills sees each skill's name and description all the time. When your request matches a description, it loads the full instructions and follows them. That makes the **description the trigger**: if it's vague, the skill won't be used when it should, or will be used when it shouldn't. Write it carefully, saying both what the skill does and when to use it.

## Skills vs instruction files

Instruction files describe a folder and how to work in it, and they apply to everything done there. Skills describe how to do one particular kind of task, and they're loaded only when that task comes up.

> **Instructor note: live demo.** Write a skill for your chosen task in front of the class. Talk through the description first. Run it on a real input, find something it got wrong, and fix the instructions. The fix is the most instructive part.

## Key terms

**Skill**: a reusable procedure in a folder with a SKILL.md file. **Description (of a skill)**: the text an agent uses to decide when to load the skill.
