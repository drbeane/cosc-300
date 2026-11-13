---
marp: true
title: "Week 10 · Session 2: Debugging and the Capstone Briefing"
paginate: true
---

# Debugging and the Capstone
### Week 10 · Session 2
**4D focus: Discernment**

---

## Today

| Time | |
|---|---|
| 10 min | Debugging with an assistant |
| 10 min | Capstone proposal briefing |
| 45 min | Lab: continue the build |
| 10 min | Share-out: failure patterns |

---

## Debugging with an assistant

1. **Reproduce** the failure first
2. Give the assistant the exact error
3. Ask for the **cause** before the fix
4. Judge: does the fix address the cause, or hide the symptom?
5. Re-run everything

---

## Changing code you didn't write

- Ask the assistant to **explain the codebase** first
- Find the tests that cover the area
- Change in small steps
- Keep existing tests passing

---

## Sub-agents (brief)

- An agent can start **helper agents** for parts of a job
- Useful for: independent review, parallel searches
- A fresh reviewer hasn't seen the work being produced, so it isn't grading itself

---

## Capstone: the big picture

Design, prototype, and evaluate an **AI-supported workflow** for a real or realistic task in your field.

- Tool and surface choice, with justification
- Working prototype
- Evaluation plan and results
- Risk and governance

---

## Capstone milestones

| Week | Milestone |
|---|---|
| 10 | **Proposal** (1 page) |
| 12 | Checkpoint (status update) |
| 14 | Draft, peer review, AI-use policy |
| 15 | Presentation and final report |

---

## The proposal (due this week)

1 page:

- The **problem**
- The **users**
- **Tools and surfaces** you'll use
- What **success** looks like

<!-- Show two example proposals: one strong, one too vague. -->

---

## Lab: continue the build

- Next steps of the spec
- Tests after every step
- Review log: at least **five** AI-proposed changes

---

## Share-out

What failure patterns did you catch in review?

---

## Responsible use

- **Dependencies**: every package is someone else's code
- **Supply-chain risk**: unknown or misspelled packages
- **Accountability**: who answers for shipped code? You.

---

## Assignment: Spec-driven build with tests

Submit: repository, test results at each step, review log of 5+ AI-proposed changes (what, accepted?, why)

- **500 extension:** a mid-project requirement change; document how the assistant handled existing tests
- About 4–5 hours
- **Also due: capstone proposal**

---

## Before next week

- Claude Academy: **Claude Platform 101**
- **Building with the Claude API**: "Accessing Claude with the API" and "Tool use with Claude" (watch)
- API access instructions will be posted
