# Week 7: Standing instructions

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Pick a real task you do every week (for example, a weekly status update from a notes folder) and plan to write a skill for it live. Have a finished version ready in case the live one goes sideways. Check how Cowork currently loads standing context (global instructions, project instructions, skills) and whether it picks up a `CLAUDE.md` in the working folder; as of the last check this was unverified, so don't promise it. Timing: 20 min standing context, 20 min skills, 35 min guided practice.

## What you will be able to do

- Explain the levels of standing instructions and what each applies to.
- Write an instruction file for a folder.
- Decide what belongs in standing instructions and what belongs in a single brief.
- Test whether an agent is following your instructions, and revise them when it isn't.

## The problem standing instructions solve

Last week you wrote task briefs. By now you've probably noticed that parts of every brief are the same: who you are, how your folder is organized, what format you want, what the agent should never do. Every time you leave one of those out, the agent guesses.

**Standing instructions** let you write those parts down once. They are added to the agent's context at the start of every task, so each brief only has to cover what is particular to that task. You met this idea in Week 2 as custom instructions and in Week 4 as project instructions. For agents it matters more, because an agent acts on what it assumes.

## Levels of standing instructions

Standing instructions come at three levels:

| Level | Applies to | Where it lives | Example |
|---|---|---|---|
| **Global** | Everything you do | Your account or app settings | "Use US spelling. Be brief. Ask before deleting anything." |
| **Project** | One project or workspace | The project's settings | "This is my thesis. Cite in APA. The audience is my committee." |
| **Instruction file** | One folder or code repository | A file inside the folder | A file named `AGENTS.md` or `CLAUDE.md` |

All the levels that apply to a task are loaded together. If you're working in your thesis folder, the agent has your global instructions, the project's, and the folder's instruction file. Put each instruction at the narrowest level where it is always true. "Cite in APA" belongs to the thesis and would be noise everywhere else.

When two levels disagree, the more specific one generally wins, but don't rely on that. Conflicting instructions make an agent's behavior hard to predict, so resolve them.

## Instruction files

An **instruction file** is a Markdown file that lives with the work. When an agent starts work in that folder, it reads the file. Because the file is part of the folder:

- **It travels with the folder.** Copy the folder to another computer and the instructions come along.
- **It can be shared.** Anyone who works in the folder, with their own agent, gets the same instructions.
- **It can be tracked.** In a code repository the file is under version control, so you can see when a rule changed and why. Week 9 covers version control.
- **You can read and edit it** like any other file. Nothing about it is hidden in a settings page.

Two names are common. **AGENTS.md** is a convention that many coding tools from different vendors read. **CLAUDE.md** is the file Claude Code reads. Claude Code also reads AGENTS.md if no CLAUDE.md is present. You'll use these heavily in the coding weeks.

### What an instruction file looks like

Here is one for the course folder a student used in Week 6:

```markdown
# Coursework folder

This folder holds my files for the Spring 2027 semester.

## Layout
- One subfolder per course: `BIOL 210/`, `COSC 300/`, `ENGL 104/`.
- Inside each: `readings/`, `assignments/`, `notes/`.
- `inbox/` is where new downloads land before they are sorted.
- `index.md` lists every file with a one-line description.

## Conventions
- File names: `YYYY-MM-DD - Course - Title`.
- Notes are Markdown. Assignments I submit are Word files.
- When you add or move a file, update `index.md`.

## Rules
- Never delete a file. Move anything unwanted to `archive/`.
- Never edit files in `readings/`.
- If you can't tell which course a file belongs to, leave it in `inbox/` and tell me.
- Assignments are my own work. Give feedback on drafts. Don't rewrite them.
```

It has three sections, and most instruction files need the same three:

1. **What this is**: the purpose of the folder and how it's laid out, so that the agent doesn't have to explore to find out.
2. **Conventions**: how things are named and formatted here.
3. **Rules**: what must always or never happen.

### Writing instructions that get followed

- **Be specific.** "Keep things organized" gives the agent nothing to act on. "File names: `YYYY-MM-DD - Course - Title`" does.
- **Say why, when it isn't obvious.** "Never edit files in `readings/`, because they are the originals I cite from" lets the agent apply the rule sensibly to a case you didn't list.
- **Keep it short.** The file is read on every task and takes up context each time. A page is plenty for most folders. Long files bury the rules that matter.
- **Leave out what the agent can see for itself.** It can list the folder. It can't know that `inbox/` is a staging area unless you say so.
- **Don't shout.** As in Week 2, capitals and repetition make a current model apply a rule too rigidly. State it once, plainly.
- **No secrets.** An instruction file is shared with everyone who gets the folder. Passwords and personal details don't belong in it.

Many agent tools can draft an instruction file for you by examining the folder. That's a useful start. Edit the draft, because the agent can describe what it sees and can't know your rules.

## What belongs in standing instructions

| Standing instructions | A single brief |
|---|---|
| True every time | True for this task |
| Folder layout and naming conventions | Today's goal |
| Style and format rules | This deliverable's audience |
| Things never to do | This task's constraints and acceptance criteria |

A good test: if you'd want it to apply next week too, it's a standing instruction.

## Test and revise

Standing instructions are prompts, and they need testing like the prompts in Week 2.

- **Check that they're being read.** Include one rule whose effect you can see, such as "end every file you create with the line `Edited by agent`". If the line doesn't appear, the instructions aren't being loaded.
- **Run a small task and compare** the result with each rule.
- **Revise when the agent gets something wrong.** When you find yourself correcting the same thing twice, add it to the file. Over time the file becomes a record of what an agent needs to know to work in that folder.
- **Prune.** Remove rules that no longer apply. Stale instructions cause the same trouble as stale memory.

Standing instructions make an agent much more likely to follow your rules. They don't guarantee it, especially late in a long task. For anything that must not happen, such as deleting files, keep the controls from Week 6 in place as well: approvals, backups, and working on copies.

## Key terms

**Standing instructions**: instructions that apply across many tasks. **Instruction file**: a Markdown file of standing instructions stored in a folder (AGENTS.md, CLAUDE.md). **Global instructions**: standing instructions that apply to all of your work in a product.

> **Instructor note: book links.** Project Instruction Files; Skills; Hand-Off as a Skill.
