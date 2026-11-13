# Week 10: Debugging, changing code, and sub-agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare two example capstone proposals, one strong and one too vague, to show. Prepare the mid-project requirement change for the 500 extension. Timing: 10 min debugging, 10 min capstone briefing, 45 min lab, 10 min share-out.

## What you will be able to do

- Debug with an assistant by reproducing a failure first and judging whether a fix addresses the cause.
- Change code you didn't write while keeping existing tests passing.
- Handle a change in requirements without weakening the tests.
- Explain how sub-agents can help with review.

## Debugging with an assistant

When something breaks, it's tempting to paste the error and accept the first fix. A better process:

1. **Reproduce** the failure first: find the exact steps that make it happen.
2. Give the assistant the **exact error** and the steps.
3. Ask for the **cause** before asking for a fix.
4. Judge whether the proposed fix addresses the cause or only hides the symptom.
5. Re-run **everything**, not just the failing test.

A fix that makes the error go away without explaining why it happened often comes back.

### Symptom and cause

Suppose the lending system crashes when a member with no loans opens their loan history.

| | What the assistant does | Result |
|---|---|---|
| **Hides the symptom** | Wraps the history page so that any error is caught and an empty page is shown | The crash is gone. So is every future error on that page, including real ones. |
| **Fixes the cause** | Finds that the code assumed every member has at least one loan, and handles the empty case | The crash is gone, and the page says "No loans yet." |

Both make the error disappear, and only the second is a fix. Ask "Why did this happen?" and expect an answer you can follow: the code assumed something that wasn't true. If the explanation is vague, or the fix is to catch and ignore the error, push back.

### A good bug report

The quality of the fix depends on the report, which is the Description skill again. Give the assistant:

- **What you did**, step by step.
- **What you expected.**
- **What happened**, with the exact error message, copied in full. Don't paraphrase it.
- **Whether it used to work**, and what changed since.

> Steps: start the app, register a new member "Lee", open Lee's loan history. Expected: an empty list. Got: the page crashes with the error below. It worked before step 5, when returns were added. Find the cause and explain it before changing anything.

After the fix, add a test for the bug so that it can't come back unnoticed. And when two attempts at a fix have failed, stop. Go back to the last working commit, as in Week 9, and approach the problem again with what you've learned.

## Changing code you didn't write

Much real software work means changing code someone else wrote. An assistant helps a great deal here:

- Ask it to **explain the codebase** before changing anything.
- Find the tests that cover the part you're changing.
- Change in small steps.
- Keep the existing tests passing, and add tests for the new behavior.

Reading comes before changing. Useful questions to ask about code that's new to you:

> Give me a tour of this project. What are the main parts, what does each do, and where would I look to change how loans are recorded?

> Before changing anything, list the files you'd need to touch to add a 21-day loan period for staff members, and the tests that cover them.

### When requirements change

Requirements change in the middle of real projects. Suppose the library decides that the loan limit is now 3 for new members. Some existing tests check for a limit of 5, and they will fail.

This is the one situation where changing a test is correct, and it needs care. The rule from the last topic was never "tests must not change". It was "a test must not change to hide a failure". When the requirement itself changes:

1. **Update the specification first**, so that it states the new rule.
2. **Update the tests that encode the old rule**, deliberately, and say which ones and why.
3. **Then change the code** to make the updated tests pass.
4. **Check that no other test changed.**

A test edit that follows a spec change, and that you asked for, is maintenance. One that appears unrequested in a diff is the failure pattern from the last topic. The 500 extension this week has you watch how an assistant handles exactly this.

## Sub-agents

An agent can start helper agents, called **sub-agents**, for parts of a job. Two common uses: running several independent searches in parallel, and **review**. A sub-agent asked to review a change starts fresh and hasn't seen the reasoning that produced it, so it's less likely to approve a mistake just because the mistake seemed sensible at the time. It isn't grading its own work.

| | Reviewing in the same session | Reviewing with a sub-agent |
|---|---|---|
| What the reviewer has seen | All the reasoning that led to the change | Only the change, and what it's told to check |
| Likely blind spot | Agrees with its own earlier assumptions | Lacks background, and may flag things that are fine |
| Effect on the main context | Review fills it further | The sub-agent works in its own context and returns a summary |

That last row is a second benefit. A sub-agent has its own context window. It can read fifty files to answer one question and hand back a paragraph, so the main session's context stays clear. This is Week 2's context management, done by splitting the work.

Sub-agents have costs. Each one uses your allowance, and several running in parallel use it quickly. A sub-agent also knows only what it was told, so the agent that starts it has to write it a good brief. And a sub-agent's review is still an AI review. It catches a good deal, and it doesn't replace your running the tests and the program.

You can ask for one directly: "Use a separate agent to review this change against the specification. It should check for edited tests, hard-coded values, and changes outside the scope of step 4."

## Key terms

**Debugging**: finding and fixing the cause of a failure. **Reproduce**: make a failure happen again on demand. **Root cause**: the underlying reason for a failure, as distinct from its visible symptom. **Sub-agent**: a helper agent started by another agent for part of a task.
