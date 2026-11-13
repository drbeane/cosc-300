---
marp: true
title: "Week 9: The development environment and Claude Code"
paginate: true
---

# The development environment and Claude Code
### Week 9
COSC-300/500 Applied AI Essentials

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
