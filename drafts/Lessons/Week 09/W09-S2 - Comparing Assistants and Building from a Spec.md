# Week 9, Session 2: Comparing Assistants and Building from a Spec

**COSC-300/500 Applied AI Essentials** · Surfaces: Coding assistant, Local agent · Capabilities: Plan mode and autonomy controls, Instruction files and skills, Usage and context commands · 4D focus: Delegation

> **Instructor note: preparation.** Write three one-page specs (budget tracker, flashcard app, course-planner page), each small enough to finish in about two hours of directed work. Recheck GitHub Copilot Student's current terms the week of class (credits, model selection, whether sign-ups are open); they changed twice in 2026. Timing: 10 min comparison, 55 min lab, 10 min share-out.

## What you will be able to do after this session

- Compare two coding assistants on capability, model choice, and usage allowance.
- Build a small application from a written specification using an instruction file, plan mode, and small commits.

## 1. Comparing assistants

You have access to two coding assistants that work in VS Code: Claude Code, included in your Claude Pro subscription, and GitHub Copilot Student, which GitHub offers free to verified students.

| | Claude Code (Claude Pro) | GitHub Copilot Student |
|---|---|---|
| Where it works | VS Code, terminal | VS Code, terminal |
| Planning step | Plan mode | Plan agent |
| Model choice | Yes | Automatic selection only |
| Allowance | Pro's five-hour and weekly limits | A monthly credit allowance |

Both are real coding assistants. The differences are in model choice and in how much use the allowance supports.

### What our own tests showed

While preparing this course we ran the same ten-prompt coding project, a small library lending application, on several tools, once each:

- On Claude Pro, using the Sonnet model, the project used about **2%** of a weekly allowance and passed every acceptance test.
- On GitHub Copilot Student, with automatic model selection, it used **27%** of the monthly allowance; the result failed 2 of the acceptance tests, and a separate bug stopped the application from launching.

These are single runs, so treat them as data points, not laws. You'll be able to make your own comparison in this week's 500 extension.

> **Instructor note.** Present these as the course's own test observations, one run per configuration. If students ask, the full results are in the course materials. Don't oversell: the honest point is that model choice and allowance size both matter.

## 2. Lab: your first app from a spec

Choose one of three one-page specifications: a personal **budget tracker**, a **flashcard** app, or a **course-planner** web page.

### Requirements

- An **instruction file** (`CLAUDE.md` or `AGENTS.md`).
- **Five or more commits** with meaningful messages.
- A short **README** explaining what the app does and how to run it.

### Work this way

1. Write the instruction file first: what the project is, the technology, any conventions.
2. Ask for a **plan** and edit it before approving.
3. Build one feature at a time.
4. **Run the app** after every change.
5. **Read the diff**, then commit.
6. If a change breaks things, **revert** it rather than piling fixes on top.

> **Instructor note.** Many students will let the assistant build everything in one go. Ask them to stop after the first feature, run it, and commit. The one-feature-at-a-time rhythm is the skill.

## 3. Share-out

What did the plan get wrong? What did you accept **without understanding it**? Did a commit save you from a bad change?

## 4. Responsible use

- **Secrets** such as API keys and passwords never belong in code or in a chat. If one ends up in a repository, assume it's been exposed.
- **Licenses.** Code suggested by an AI can resemble existing code with license terms.
- **Accountability.** You're responsible for what you ship, whoever wrote it.

## Assignment: First app from a spec

Build a small application from one of the provided specifications.

**Submit:**
- A link to the repository, which must include an instruction file, at least five commits with meaningful messages, and a README.
- A 300-word reflection on what you reviewed and what you accepted without understanding.

**500 extension:** build the same feature with GitHub Copilot Student and compare process, quality, and usage consumed.

**Estimated time:** 3–4 hours.

## Before next week

- Claude Academy: **Claude Code in action**.
- **The AI-native SDLC playbook**.
- Optional: **Introduction to subagents**.
- Start thinking about your **capstone project**; the proposal is due next week.
- Journal entry.
