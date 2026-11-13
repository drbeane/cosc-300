# Week 10, Session 2: Debugging and the Capstone Briefing

**COSC-300/500 Applied AI Essentials** · Surface: S3 Coding assistant · Capabilities: C1, C2 · 4D focus: Discernment

> **Instructor note: preparation.** Prepare two example capstone proposals, one strong and one too vague, to show. Prepare the mid-project requirement change for the 500 extension. Timing: 10 min debugging, 10 min capstone briefing, 45 min lab, 10 min share-out.

## What you will be able to do after this session

- Debug with an assistant by reproducing a failure first and judging whether a fix addresses the cause.
- Change code you didn't write while keeping existing tests passing.
- Explain how sub-agents can help with review.
- Write a capstone proposal.

## 1. Debugging with an assistant

When something breaks, it's tempting to paste the error and accept the first fix. A better process:

1. **Reproduce** the failure first: find the exact steps that make it happen.
2. Give the assistant the **exact error** and the steps.
3. Ask for the **cause** before asking for a fix.
4. Judge whether the proposed fix addresses the cause or only hides the symptom.
5. Re-run **everything**, not just the failing test.

A fix that makes the error go away without explaining why it happened often comes back.

## 2. Changing code you didn't write

Much real software work means changing code someone else wrote. An assistant helps a great deal here:

- Ask it to **explain the codebase** before changing anything.
- Find the tests that cover the part you're changing.
- Change in small steps.
- Keep the existing tests passing, and add tests for the new behavior.

## 3. Sub-agents

An agent can start helper agents, called **sub-agents**, for parts of a job. Two common uses: running several independent searches in parallel, and **review**. A sub-agent asked to review a change starts fresh and hasn't seen the reasoning that produced it, so it's less likely to approve a mistake just because the mistake seemed sensible at the time. It isn't grading its own work.

## 4. The capstone

Your capstone runs from now until the end of the term. You'll **design, prototype, and evaluate an AI-supported workflow** for a real or realistic task in your own field. It includes:

- your choice of tools and surfaces, with a justification;
- a working prototype: an agent workflow, a skill set, an app, or an always-on setup;
- an evaluation plan, and results;
- a risk and governance section.

| Week | Milestone |
|---|---|
| 10 | **Proposal** (1 page) |
| 12 | Checkpoint (short status update in class) |
| 14 | Draft, peer review, and a draft AI-use policy |
| 15 | Presentation and final report |

### The proposal (due this week)

One page covering:

- **the problem**: what task, and why it matters;
- **the users**: who does this task now;
- **tools and surfaces** you plan to use;
- **what success looks like**, in terms you could measure.

> **Instructor note.** Show the strong and vague examples side by side. The vague one usually fails on "what success looks like." Push students toward a task they actually know, from their job, another course, a club, or their family's business.

## 5. Lab: continue the build

Continue through the specification. Run the tests after every step. Keep a **review log** of at least five changes the assistant proposed: what it did, whether you accepted it, and why.

## 6. Share-out

What failure patterns did you catch in review? Did you find a silent test edit or a hard-coded value in your own build?

## 7. Responsible use

Every package your code depends on is someone else's code. **Supply-chain risk** includes unknown or misspelled packages that an assistant suggests. And someone is **accountable** for software that ships. If you shipped it, that's you.

## Assignment: Spec-driven build with tests

Using the provided specification and acceptance test suite, direct the assistant through the steps.

**Submit:**
- The repository.
- Test results at each step.
- A review log of at least five AI-proposed changes you inspected: what it did, whether you accepted it, and why.

**500 extension:** partway through, apply the provided requirement change and document how the assistant handled the existing tests.

**Also due: capstone proposal** (1 page).

**Estimated time:** 4–5 hours.

## Before next week

- Claude Academy: **Claude Platform 101**.
- **Building with the Claude API**: watch the sections "Accessing Claude with the API" and "Tool use with Claude." Coding along is optional.
- Instructions for API access will be posted.
- Journal entry.

## Key terms

**Debugging**: finding and fixing the cause of a failure. **Sub-agent**: a helper agent started by another agent for part of a task. **Supply-chain risk**: risk from the third-party code your project depends on.
