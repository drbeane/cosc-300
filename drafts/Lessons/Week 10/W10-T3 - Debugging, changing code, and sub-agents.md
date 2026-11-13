# Week 10: Debugging, changing code, and sub-agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare two example capstone proposals, one strong and one too vague, to show. Prepare the mid-project requirement change for the 500 extension. Timing: 10 min debugging, 10 min capstone briefing, 45 min lab, 10 min share-out.

## What you will be able to do

- Debug with an assistant by reproducing a failure first and judging whether a fix addresses the cause.
- Change code you didn't write while keeping existing tests passing.
- Explain how sub-agents can help with review.

## Debugging with an assistant

When something breaks, it's tempting to paste the error and accept the first fix. A better process:

1. **Reproduce** the failure first: find the exact steps that make it happen.
2. Give the assistant the **exact error** and the steps.
3. Ask for the **cause** before asking for a fix.
4. Judge whether the proposed fix addresses the cause or only hides the symptom.
5. Re-run **everything**, not just the failing test.

A fix that makes the error go away without explaining why it happened often comes back.

## Changing code you didn't write

Much real software work means changing code someone else wrote. An assistant helps a great deal here:

- Ask it to **explain the codebase** before changing anything.
- Find the tests that cover the part you're changing.
- Change in small steps.
- Keep the existing tests passing, and add tests for the new behavior.

## Sub-agents

An agent can start helper agents, called **sub-agents**, for parts of a job. Two common uses: running several independent searches in parallel, and **review**. A sub-agent asked to review a change starts fresh and hasn't seen the reasoning that produced it, so it's less likely to approve a mistake just because the mistake seemed sensible at the time. It isn't grading its own work.

## Key terms

**Debugging**: finding and fixing the cause of a failure. **Sub-agent**: a helper agent started by another agent for part of a task.
