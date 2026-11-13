# Week 9, Session 1: The Development Environment and Claude Code

**COSC-300/500 Applied AI Essentials** · Surfaces: S3 Coding assistant, S4 Local agent · Capabilities: C1 Plan mode and autonomy controls, C2 Instruction files, C8 Usage and context commands · 4D focus: Delegation

> **Instructor note: preparation.** Setup takes longer than expected, especially for non-majors. Post a setup guide a week ahead and hold office hours before class. Prepare a small sample repository on GitHub that students can clone, with one obvious small improvement to make. Check the current Claude Code shortcuts and commands in the installed version (plan mode toggle, `/plan`, `/context`, `/usage`, `/compact`) since these change. Timing: 10 min chat limits, 20 min tour, 15 min Claude Code features, 30 min setup clinic.

## What you will be able to do after this session

- Set up VS Code, Git, GitHub, and Claude Code, and explain what each does.
- Explain why a coding assistant with access to the repository, terminal, and tests beats copying code from a chat window.
- Use plan mode, permission settings, an instruction file, and the context and usage commands.
- Commit work in small steps and roll back a bad change.

## 1. No coding experience assumed

The next two weeks are about software, but you won't be graded on writing code. You'll learn to **specify** software work, **supervise** an assistant while it does the work, and **check** the result. Those are the same skills you've been building with agents since week 6, applied to code.

## 2. Coding in a chat window, and its limits

You can ask a chat assistant for code, paste it into a file, and run it. For one small script, that works. It breaks down when:

- the project has many files that need to change together;
- you need to run the code to see whether it works;
- you need to run tests;
- you need to undo a change that broke something.

Copying back and forth between a chat window and an editor becomes the bottleneck, and errors creep in at every copy.

## 3. The coding assistant in the development environment

A **coding assistant** (surface **S3**) works inside the development environment. It has access to:

- **the repository**: every file in the project;
- **the terminal**: it can install packages and run programs;
- **the tests**: it can check whether the code actually works.

Because it can run things, it can try a change, see the error, and fix it, in the same tool-use loop you met in week 6.

## 4. A tour of the environment

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

## 5. Claude Code

Claude Code is Anthropic's coding assistant. You'll use it inside VS Code. Five features matter this week:

- **Plan mode.** As in Cowork, Claude Code can propose a plan and make no changes until you approve it.
- **Permission modes.** You choose whether it asks before each action, accepts edits automatically, or works more autonomously.
- **The instruction file.** Claude Code reads a `CLAUDE.md` file in the project, or an `AGENTS.md` file if there's no CLAUDE.md. This is where you describe the project and its conventions (week 7).
- **`/context`.** Shows what's filling the context window.
- **`/usage`.** Shows how much of your plan's allowance you've used.

### `/context` as a lesson in itself

Run `/context` at the start of a fresh session. You'll see that the system prompt and tool definitions use a good share of the context **before you've typed anything**, that instruction files and connectors have a standing cost, and how much room is left. It's week 2's context window, made visible. When the context fills up, `/compact` summarizes the conversation to make room, and some detail is lost.

> **Instructor note.** Run `/context` live on the projector. Then add a large instruction file and run it again so students see the cost.

## 6. Setup clinic

1. Confirm VS Code, Git, and Claude Code are installed.
2. Sign in to Claude Code with your Claude Pro account.
3. Clone the sample repository.
4. Ask Claude Code, **in plan mode**, for one small change.
5. Review the diff, approve, run the program, and commit.

> **Instructor note.** Pair students who finish quickly with those who are stuck. Common problems: Git not on the system path (Windows), not signed in, the wrong folder opened in VS Code.

## Coming up Thursday

Comparing Claude Code with GitHub Copilot Student, and building your first app from a specification.

## Key terms

**Repository**: a project's files plus their history, tracked by Git. **Commit**: a saved snapshot of changes. **Diff**: a line-by-line view of what changed. **Terminal**: a text interface for running commands.

> **Instructor note: book links.** Coding in a Chat Window; Coding Assistants in the Editor.
