---
marp: true
title: "Week 3: Verification habits"
paginate: true
---

# Verification habits
### Week 3
COSC-300/500 Applied AI Essentials

---

## How much to check?

Two questions:

- **What would a mistake cost?**
- **How likely is a mistake?**

| Situation | Checking |
|---|---|
| Brainstorm, rough outline | Read it over |
| Study guide, email to a colleague | Spot-check the facts |
| Paper, report, advice you'll act on | Verify every claim it depends on |
| Medical, legal, financial, safety | Starting point only |

---

## First: pull out the checkable claims

Mark every:

- name
- number and date
- quotation
- citation
- "X caused Y"

The list is shorter than the text makes it seem.

---

## Five habits

- **Trace sources**: open the link, find the claim
- **Recompute**: redo the numbers yourself or in code
- **Test**: run the code, follow the steps
- **Cross-check**: a new chat, a second model, a non-AI source
- **Ask about uncertainty**: "Which claims are you least sure of?"

---

## Trace sources: three ways to fail

1. The source **doesn't exist**
2. The source exists and **doesn't say that**
3. The source says it and **isn't reliable**

A link that exists is not a link that supports the claim.

Use Ctrl+F on the page.

<!-- Number 2 is the most common with web-search tools. Show one live if you have an example. -->

---

## Recompute and test

- Is the answer the right **size**? A ten-second estimate catches a lot
- Let a spreadsheet add the column
- Ask the model to calculate **in code**
- Run code on more than the example shown
- Follow the steps: menus change

---

## Cross-check

- Same model, **new chat**
- A different model
- A source that isn't AI

**Agreement** is weak evidence: models share mistakes.
**Disagreement** tells you where to dig.

---

## Match the check to the error

| Worried about | Best check |
|---|---|
| Hallucination | Trace sources |
| Outdated knowledge | Find a current, dated source |
| Arithmetic | Recompute |
| Reasoning | Follow the steps; new chat |
| Misread instructions | Compare to your prompt |
| Sycophancy | Ask again, neutrally |

---

## Self-critique: useful, but limited

- Asking "check your answer" sometimes catches errors
- It also invents new problems or confirms old ones
- Same chat, same context, same pull
- It is **not** a substitute for an outside check

---

## When you can't verify it

- Leave it out
- Say that it's unverified
- Ask someone who would know

Don't present it as established. You're responsible for what you send.
