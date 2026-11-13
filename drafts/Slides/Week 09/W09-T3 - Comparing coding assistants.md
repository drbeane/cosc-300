---
marp: true
title: "Week 9: Comparing coding assistants"
paginate: true
---

# Comparing coding assistants
### Week 9
COSC-300/500 Applied AI Essentials

---

## The forms a coding assistant takes

- **Autocomplete**: suggests the next lines as you type
- **Chat in the editor**: sees your open files
- **Agent**: plans, edits many files, runs commands and tests
- **Cloud agent**: works on a copy and returns a finished change

This course uses the agent form.

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

## Two different things

**Quality**: did the finished application work?

**Cost**: how much of the allowance did it use?

On a fixed allowance, both matter.

---

## Comparing tools fairly

- The **same task**, word for word
- The **same starting point**
- Decide what you'll **measure** first
- The **same checks** on both results
- Repeat if you can
- Record the **date and versions**

---

## What to measure

| Measure | Record |
|---|---|
| Did it work? | Checks passed |
| How much did you step in? | Corrections and restarts |
| How long? | Minutes to a working result |
| What did it cost? | Share of allowance |

---

## Comparisons go out of date

- Models are replaced several times a year
- Plans and allowances are revised

The method lasts: same task, same checks, a record of what you measured.
