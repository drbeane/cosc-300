---
marp: true
title: "Week 9 · Session 1: The Development Environment and Claude Code"
paginate: true
---

# Coding with AI I
### Week 9 · Session 1
**4D focus: Delegation**

---

## Today

| Time | |
|---|---|
| 10 min | Coding in a chat window, and its limits |
| 20 min | Tour: VS Code, terminal, Git, GitHub |
| 15 min | Claude Code: plan mode, permissions, instruction file, `/context`, `/usage` |
| 30 min | Setup clinic and a first change |

---

## No coding experience assumed

You won't be graded on writing code.

You **will** learn to:
- specify software work
- supervise an assistant doing it
- check the result

---

## Coding in a chat window

- Paste code in, copy code out
- Fine for one small file
- Breaks down when:
  - the project has many files
  - you need to run it
  - you need to test it
  - you need to undo a change

---

## A coding assistant in the environment

It has access to:

- **The repository**: every file
- **The terminal**: run, install, test
- **The tests**: did it actually work?

It can try, fail, read the error, and fix.

---

## The tour

| Tool | What it does |
|---|---|
| **VS Code** | The editor: files, terminal, extensions |
| **Terminal** | Run commands |
| **Git** | Track every change; undo any of them |
| **GitHub** | Store and share the repository online |

---

## Git in four moves

- **commit**: save a snapshot with a message
- **diff**: see exactly what changed
- **revert**: undo a change
- **push**: send it to GitHub

**Small commits are your safety net.**

---

## Claude Code in VS Code

- Plan mode: `Shift+Tab` or `/plan`
- Permission modes: ask, accept edits, auto
- Instruction file: `CLAUDE.md` (or `AGENTS.md`)
- `/context`: what's filling the context window
- `/usage`: what you've used against your plan

<!-- Verify current shortcuts and command names in the installed version before class. -->

---

## `/context` is a lesson in itself

Run it on a fresh session:

- System prompt and tools use tokens **before you type**
- Instruction files and connectors have a **standing cost**
- Compaction (`/compact`) discards detail

Week 2's context window, made visible.

---

## Setup clinic

1. VS Code, Git, Claude Code installed?
2. Sign in to Claude Code with your Pro account
3. Clone the sample repository
4. Ask for one small change, **in plan mode**
5. Review the diff, then commit

---

## Next session

- Claude Code vs GitHub Copilot Student
- Lab: build a small app from a spec
