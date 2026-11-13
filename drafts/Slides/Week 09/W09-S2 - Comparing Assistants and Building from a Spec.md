---
marp: true
title: "Week 9 · Session 2: Comparing Assistants and Building from a Spec"
paginate: true
---

# Your First App from a Spec
### Week 9 · Session 2
**4D focus: Delegation**

---

## Today

| Time | |
|---|---|
| 10 min | Comparing assistants |
| 55 min | Lab: a small app from a spec |
| 10 min | Share-out |

---

## Claude Code vs GitHub Copilot Student

| | Claude Code (Pro) | GitHub Copilot Student |
|---|---|---|
| Where | VS Code, terminal | VS Code, terminal |
| Plan step | Plan mode | Plan agent |
| Model choice | Yes | Automatic only |
| Allowance | Pro's 5-hour and weekly limits | Monthly credit allowance |

<!-- Re-check Copilot Student terms the week of class; they changed twice in 2026. -->

---

## What the class's own tests showed

Same 10-prompt build, one run each:

- Claude Pro (Sonnet): about **2%** of a weekly allowance
- Copilot Student (automatic): **27%** of the monthly allowance; app failed 2 tests and wouldn't launch

One run each: treat as a data point, not a law.

---

# Lab
## A small app from a spec

---

## Pick one

- Personal budget tracker
- Flashcard app
- Course-planner web page

One-page spec provided for each.

---

## Requirements

- An **instruction file** (`CLAUDE.md` or `AGENTS.md`)
- **Five or more commits** with meaningful messages
- A short **README**

---

## Work this way

1. Write the instruction file first
2. Ask for a **plan**; edit it
3. One feature at a time
4. Run it after every change
5. Read the diff, then commit
6. Bad change? **Revert**

---

## Share-out

- What did the plan get wrong?
- What did you accept **without understanding**?
- Did a commit save you?

---

## Responsible use

- **Secrets** (API keys, passwords) never in code or chat
- **Licenses**: AI-suggested code may resemble licensed code
- You're accountable for what you ship

---

## Assignment: First app from a spec

Submit: repository link (instruction file, 5+ commits, README) and 300-word reflection on what you reviewed and what you accepted without understanding

- **500 extension:** build the same feature with GitHub Copilot Student; compare process, quality, usage
- About 3–4 hours

---

## Before next week

- Claude Academy: **Claude Code in action**
- **The AI-native SDLC playbook**
- Optional: **Introduction to subagents**
- Start thinking about your **capstone**: proposal due week 10
