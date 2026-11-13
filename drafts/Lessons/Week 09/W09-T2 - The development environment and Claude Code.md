# Week 9: The development environment and Claude Code

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Set up VS Code, Git, GitHub, and Claude Code, and explain what each does.
- Commit work in small steps and roll back a bad change.
- Use plan mode, permission settings, an instruction file, and the context and usage commands.

## A tour of the environment

| Tool | What it does |
|---|---|
| **VS Code** | The editor: files, a built-in terminal, extensions |
| **Terminal** | A text interface for running commands |
| **Git** | Tracks every change to the project and lets you undo any of them |
| **GitHub** | Stores the repository online and lets you share it |

### Git in four moves

- **commit**: save a snapshot of the project with a short message saying what changed;
- **diff**: see exactly what changed, line by line;
- **revert**: undo a change;
- **push**: send your commits to GitHub.

Git is your safety net when an AI is writing code. If you commit after each small step that works, any bad change can be undone in seconds. **Small commits** are the habit to build.

## Claude Code

Claude Code is Anthropic's coding assistant. You'll use it inside VS Code. Five features matter this week:

- **Plan mode.** As in Cowork, Claude Code can propose a plan and make no changes until you approve it.
- **Permission modes.** You choose whether it asks before each action, accepts edits automatically, or works more autonomously.
- **The instruction file.** Claude Code reads a `CLAUDE.md` file in the project, or an `AGENTS.md` file if there's no CLAUDE.md. This is where you describe the project and its conventions (week 7).
- **`/context`.** Shows what's filling the context window.
- **`/usage`.** Shows how much of your plan's allowance you've used.

### `/context` as a lesson in itself

Run `/context` at the start of a fresh session. You'll see that the system prompt and tool definitions use a good share of the context **before you've typed anything**, that instruction files and connectors have a standing cost, and how much room is left. It's week 2's context window, made visible. When the context fills up, `/compact` summarizes the conversation to make room, and some detail is lost.

> **Instructor note.** Run `/context` live on the projector. Then add a large instruction file and run it again so students see the cost.

## Key terms

**Commit**: a saved snapshot of changes. **Diff**: a line-by-line view of what changed.
