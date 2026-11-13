# Week 9: The development environment and Claude Code

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Set up VS Code, Git, GitHub, and Claude Code, and explain what each does.
- Read a diff.
- Commit work in small steps and roll back a bad change.
- Use plan mode, permission settings, an instruction file, and the context and usage commands.

## A tour of the environment

Developers work in a small set of tools, and a coding assistant works in the same ones.

| Tool | What it does | An everyday comparison |
|---|---|---|
| **VS Code** | The editor: a file list, the files themselves, a built-in terminal, and extensions | A word processor for code |
| **Terminal** | A text interface where you type commands and the computer prints results | Giving the computer instructions in writing instead of by clicking |
| **Git** | Tracks every change to the project and lets you undo any of them | Version history for a whole folder |
| **GitHub** | Stores the repository online and lets you share it | Cloud storage built for Git |

Git and GitHub are different things. **Git** is a program on your computer that records the history. **GitHub** is a website that holds a copy of the repository, so that it's backed up and other people can see it.

The terminal looks intimidating and is simple in use: you type a command, press Enter, and read what comes back. You'll type few commands this week, because the assistant runs most of them. You do need to be able to read what it ran and what was printed.

## Git in four moves

- **commit**: save a snapshot of the project with a short message saying what changed.
- **diff**: see exactly what changed, line by line.
- **revert**: undo a change.
- **push**: send your commits to GitHub.

A project's history is a chain of commits, each with a message:

```
a41f9c2  Add category field to expense form
7be0d15  Save expenses to a file
3c2a8e0  Show a list of expenses
1d9f4b7  First version: empty page with a title
```

You can return to any point in that chain. Git is your safety net when an AI is writing code. If you commit after each small step that works, any bad change can be undone in seconds.

### Reading a diff

A **diff** shows what a change did. Lines that were removed start with a minus sign and lines that were added start with a plus sign. VS Code shows the same thing in red and green.

```diff
 function total(expenses) {
-  return expenses.length;
+  return expenses.reduce((sum, e) => sum + e.amount, 0);
 }
```

You don't need to follow the code to learn something from this. One line changed, inside something called `total`. The old line returned a length, which is a count. The new one adds up amounts. If your request was "the total is showing the number of expenses instead of the sum", this diff is small, in the right place, and does what you asked.

When you look at a diff, ask:

- **Is it the size I expected?** You asked for a small fix and forty files changed. Find out why before accepting.
- **Is it in the places I expected?** A change to the chart shouldn't touch the file that saves your data.
- **Was anything deleted?** Read removed lines with care, especially tests and checks.
- **Is there anything I should ask about?** "Explain this change in plain language" is always available.

### Small commits

The habit to build is **small commits**: one working step, one commit.

| | One large commit at the end | A commit per working step |
|---|---|---|
| When something breaks | You can't tell which change caused it | It was the last step |
| Undoing | You lose everything, or untangle it by hand | You go back one commit |
| Reviewing | A diff of hundreds of lines | A diff you can read |

Write messages that say what changed: "Add category field to expense form" is useful a week later. "Update" and "fix stuff" are not. You can ask the assistant to commit for you and to write the message. Read the message before you accept it.

When a change breaks the program and the fix isn't obvious, **go back** to the last commit that worked and try again with a better description. Piling fixes on top of a broken change usually makes a bigger mess. This is the fresh-start habit from Week 2, applied to code.

## Claude Code

Claude Code is Anthropic's coding assistant. You'll use it inside VS Code. Five features matter this week, and you've met the ideas behind most of them.

| Feature | What it does | Where you saw the idea |
|---|---|---|
| **Plan mode** | Claude Code proposes a plan and makes no changes until you approve it | Week 6, plan first |
| **Permission modes** | You choose whether it asks before each action, accepts edits automatically, or works more autonomously | Week 6, autonomy controls |
| **The instruction file** | It reads a `CLAUDE.md` file in the project, or an `AGENTS.md` file if there's no CLAUDE.md | Week 7, instruction files |
| **`/context`** | Shows what's filling the context window | Week 2, the context window |
| **`/usage`** | Shows how much of your plan's allowance you've used | Week 6, usage |

Commands that begin with a slash are typed into Claude Code's message box. They control the tool and aren't sent to the model as a request.

### Plan mode and permissions

Use plan mode for anything larger than a one-line change. The plan tells you which files the assistant intends to touch and in what order, and you can edit it before any code is written. Reading a plan is easier than reading code, which makes it the best checkpoint for someone who isn't a programmer.

For permissions, start with the setting that asks before each action. Running a command in the terminal deserves the same thought as an agent action in Week 6: a command can install software or delete files. As you gain trust in a project, letting edits through automatically is reasonable, because Git lets you undo them. Commands that reach outside the project folder are a different matter.

### The instruction file for a project

For a software project, the instruction file typically says:

```markdown
# Budget tracker

A single-page web app for tracking personal expenses. No server.

## Technology
- Plain HTML, CSS, and JavaScript. No frameworks.
- Expenses are saved in the browser's local storage.

## How to run
Open `index.html` in a browser.

## Conventions
- Amounts are stored in cents, as whole numbers, and shown in dollars.
- Dates are YYYY-MM-DD.

## Rules
- Build one feature at a time and stop so that I can run it.
- Don't add dependencies without asking.
- I'm not a programmer. Explain each change in plain language.
```

The last rule matters. Telling the assistant who you are changes how it explains its work.

### `/context` as a lesson in itself

Run `/context` at the start of a fresh session. You'll see that the system prompt and tool definitions use a good share of the context **before you've typed anything**, that instruction files and connectors have a standing cost, and how much room is left. It's Week 2's context window, made visible.

When the context fills up, `/compact` summarizes the conversation to make room, and some detail is lost. In a long session, starting a new one for a new feature works better than letting the context fill. The instruction file and the code itself carry what the assistant needs.

> **Instructor note.** Run `/context` live on the projector. Then add a large instruction file and run it again so students see the cost.

## A working rhythm

Put together, the tools give you a routine for each feature:

1. **Describe** one feature.
2. **Plan**: read the plan and edit it.
3. **Build**: let the assistant make the change.
4. **Run** the program and try the feature yourself.
5. **Read the diff.**
6. **Commit**, with a message that says what changed.

Then start the next feature. If step 4 fails and a quick fix doesn't work, go back to the last commit. You'll follow this routine in the lab.

## Key terms

**Editor**: a program for viewing and changing a project's files. **Git**: a program that records the history of a project. **GitHub**: a website that stores repositories online. **Commit**: a saved snapshot of changes, with a message. **Diff**: a line-by-line view of what changed. **Revert**: undo a change by returning to an earlier state. **Push**: send commits to an online repository. **Plan mode**: a mode in which the assistant proposes a plan and changes nothing until it's approved.
