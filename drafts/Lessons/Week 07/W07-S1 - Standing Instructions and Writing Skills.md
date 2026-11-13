# Week 7, Session 1: Standing Instructions and Writing Skills

**COSC-300/500 Applied AI Essentials** · Surface: S4 Local agent · Capabilities: C2 Instruction files and skills, C3 Projects · 4D focus: Description

> **Instructor note: preparation.** Pick a real task you do every week (for example, a weekly status update from a notes folder) and plan to write a skill for it live. Have a finished version ready in case the live one goes sideways. Check how Cowork currently loads standing context (global instructions, project instructions, skills) and whether it picks up a `CLAUDE.md` in the working folder; as of the last check this was unverified, so don't promise it. Timing: 20 min standing context, 20 min skills, 35 min guided practice.

## What you will be able to do after this session

- Write standing instructions that steer an agent across sessions.
- Explain what a skill is and how an agent decides to use one.
- Write a first skill and run it on a real input.

## 1. The problem standing instructions solve

By now you've probably noticed that you keep typing the same context: who you are, how your folder is organized, what format you want, what the agent should never do. Every time you leave something out, the agent guesses. Standing instructions let you **write it down once**.

## 2. Levels of standing instructions

Standing instructions (part of capability **C2**) come at three levels:

| Level | Applies to | Example |
|---|---|---|
| Global | Everything you do | "Use US spelling. Be brief. Ask before deleting anything." |
| Project | One project or folder | "This is my thesis. Cite in APA. The audience is my committee." |
| Instruction file | One folder or code repository | A file named `AGENTS.md` or `CLAUDE.md` in the folder |

### Instruction files

An **instruction file** is a Markdown file that lives with the work. When an agent starts work in that folder, it reads the file. Because the file is part of the folder, it travels with it, can be tracked in version control, and is shared with anyone who shares the folder.

Two names are common. **AGENTS.md** is a convention that many coding tools from different vendors read. **CLAUDE.md** is the file Claude Code reads; Claude Code also reads AGENTS.md if no CLAUDE.md is present. You'll use these heavily in the coding weeks.

### What belongs in standing instructions

| Standing instructions | A single prompt |
|---|---|
| True every time | True for this task |
| Folder layout and naming conventions | Today's goal |
| Style and format rules | This deliverable's audience |
| Things never to do | This task's constraints |

A good test: if you'd want it to apply next week too, it's a standing instruction.

## 3. Skills

A **skill** is a reusable, documented procedure that an agent can follow. Technically, it's a folder containing a file named `SKILL.md`, plus any supporting files the procedure needs: a template, an example, a script. Skills are an open format; Claude and several other vendors' tools can use them.

### Anatomy of a skill

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

### How the agent decides to use a skill

An agent with several skills sees each skill's name and description all the time. When your request matches a description, it loads the full instructions and follows them. That makes the **description the trigger**: if it's vague, the skill won't be used when it should, or will be used when it shouldn't. Write it carefully, saying both what the skill does and when to use it.

### Skills vs instruction files

Instruction files describe a folder and how to work in it, and they apply to everything done there. Skills describe how to do one particular kind of task, and they're loaded only when that task comes up.

> **Instructor note: live demo.** Write a skill for your chosen task in front of the class. Talk through the description first. Run it on a real input, find something it got wrong, and fix the instructions. The fix is the most instructive part.

## 4. Guided practice: instructions for your week 6 folder

Write standing instructions for the folder you used in last week's assignment:

- what's in the folder and how it's organized;
- naming conventions and formats;
- what the agent must never do.

Add them as project instructions in Cowork (or as an instruction file, if your setup reads one). Then run a small task in the folder and watch whether the agent follows them.

> **Instructor note.** Ask students to include one deliberately checkable rule (for example, "always add a line at the end of any file you create saying 'Edited by agent'") so they can tell whether the instructions were actually read.

## Coming up Thursday

Plugins, the difference between skills in chat and skills in an agent, and a lab in which you write and test a skill of your own.

## Key terms

**Standing instructions**: instructions that apply across many tasks. **Instruction file**: a Markdown file of standing instructions stored in a folder (AGENTS.md, CLAUDE.md). **Skill**: a reusable procedure in a folder with a SKILL.md file. **Description (of a skill)**: the text an agent uses to decide when to load the skill.

> **Instructor note: book links.** Project Instruction Files; Skills; Hand-Off as a Skill.
