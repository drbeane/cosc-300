# Week 6: The task brief

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Explain why a brief for an agent needs more than a prompt for a chat.
- Write a task brief with a goal, inputs, constraints, and acceptance criteria.
- Write acceptance criteria that you can check.
- Decide how much to specify, and when a task shouldn't be delegated.

## Why an agent needs a brief

In a chat, a vague prompt costs you little. You see a weak answer in seconds and reply with a correction. An agent is different in three ways:

- **It works for a long time before you see anything.** A misunderstanding in the first minute shapes twenty minutes of work.
- **It acts.** A chat that misunderstands gives you a poor paragraph. An agent that misunderstands renames two hundred files the wrong way.
- **It makes many small decisions on its own.** Each one is a place where it needs to know what you want.

A **task brief** is the description you hand an agent before it starts. Think of the way you'd brief a capable contractor who has never worked with you: they can do the job, and they need to know what the job is, what they're working with, what is off limits, and how you'll decide it's finished.

## The four parts

| Part | The question it answers | Example |
|---|---|---|
| **Goal** | What does done look like, and why do you want it? | "One combined spreadsheet of all 2025 expenses, so I can total them by category for my tax return." |
| **Inputs** | Which files, folders, or sources should it use? | "The twelve monthly CSV files in `statements/`. Ignore the `old/` folder." |
| **Constraints** | What must it not touch, and what rules apply? | "Don't change or delete the original files. Save new work in `output/`. Dates as YYYY-MM-DD." |
| **Acceptance criteria** | How will you judge whether it succeeded? | "The row count equals the sum of the twelve files. Every row has a category. The total for March matches my March statement, $2,314.07." |

### Goal

State the end result and the reason for it. The reason matters for the same cause it did in Week 2: the agent will meet situations you didn't foresee, and knowing the purpose lets it choose sensibly. An agent that knows the spreadsheet is for a tax return will keep the cents and flag an unclear charge. One that was told only to "combine these files" might round or guess.

### Inputs

Name exactly what the agent should work from, and what it should leave out. Folders collect drafts, duplicates, and old versions, and an agent will happily use `budget_v2_OLD.xlsx` if nothing tells it not to. If one source should win when two disagree, say which.

### Constraints

Constraints are the limits on how the job may be done:

- **What not to touch**: original files, other folders, anything outside the working folder.
- **Where to put results**: a named output folder, and a naming pattern.
- **Format and length**: file types, date formats, a page limit.
- **What to do when unsure**: stop and ask, or make a choice and record it. This one is easy to forget and saves a lot of cleanup.

### Acceptance criteria

Acceptance criteria are the checks that tell you, and the agent, that the job is done. They are the part people leave out most, and the part that improves results most. With them, the agent can check its own work before it reports back, using the loop from the last topic. Without them, "done" means whatever the agent decides.

Write criteria that can be checked:

| Vague | Checkable |
|---|---|
| "The files should be well organized." | "Every file is in exactly one subfolder, named for its course. No files remain in the top folder." |
| "The report should be accurate." | "Every figure in the report appears in one of the source files, and the report names the file." |
| "Make a good index." | "`index.md` lists every file in the folder, one line each, and the number of lines equals the number of files." |

A good test: could someone else read the criterion, look at the result, and say yes or no?

Ask for a **report** as part of the result as well: what the agent did, what it wasn't sure about, and what it left undone. This gives you a place to start your review.

## A weak brief and a strong one

> **Weak:** Organize my downloads folder.

> **Strong:**
> **Goal.** I want to be able to find any course file from this semester in under a minute. Sort the files in this folder by course and type.
>
> **Inputs.** Everything in the top level of this folder. Leave the `personal/` subfolder alone.
>
> **Constraints.** Don't delete anything. Create one subfolder per course (BIOL 210, COSC 300, ENGL 104), each with `readings`, `assignments`, and `notes` inside. Rename each file as `YYYY-MM-DD - Course - Title`, using the date in the document if there is one and the file date if not. If you can't tell which course a file belongs to, put it in `unsorted/` and don't guess.
>
> **Acceptance criteria.** No files remain in the top level except `index.md`. `index.md` lists every file with its new path and a one-line description. The total number of files is the same before and after. End with a list of the files in `unsorted/` and why each is there.

The strong brief is longer, and none of it tells the agent how to read a file or which order to work in. It describes the outcome, the limits, and the checks.

## How much to specify

Too little, and the agent guesses, often wrongly. Too much, and you've done the work yourself, and you may have locked the agent into a worse method than it would have found. A good rule: **specify outcomes and constraints, not every step.** Let the agent work out how. Tell it what, and within what limits.

Specify a step only when the method itself matters: when there's a required procedure, when you've seen the agent choose badly before, or when one way is safe and another isn't.

Two habits help you find the right level:

- **Ask for a plan first.** Before any work, have the agent say what it intends to do. Gaps in your brief show up as surprises in the plan, and fixing the brief at that point costs nothing. The next topic covers this.
- **Ask what's unclear.** "Before you start, tell me anything in this brief that is ambiguous or missing." This is the "ask for questions first" technique from Week 2.

## When not to delegate

Delegation is the first of the four Ds because deciding whether to hand over a task comes before everything else. Don't hand a task to an agent when:

- **You can't check the result.** If you couldn't tell a good outcome from a bad one, you can't accept the work responsibly.
- **The data is sensitive.** An agent reads everything in the folder you give it. Keep it out of folders with financial, medical, or other people's private information.
- **A mistake would be costly and hard to undo.** Sending messages, deleting the only copy of something, or submitting a form are different from drafting a document.
- **The point is for you to do it.** If an assignment exists so that you learn to do the thing, delegating it defeats the purpose.
- **Writing the brief would take longer than the task.** Renaming three files is faster by hand.

Good candidates for delegation are the opposite: tasks that are tedious and repetitive, that involve many files, that have clear rules, and whose results you can check quickly.

## Key terms

**Task brief**: a description of a job with goal, inputs, constraints, and acceptance criteria. **Acceptance criteria**: the checks that decide whether a task was done correctly. **Delegation**: deciding what work to hand to an AI, and handing it over with what it needs. **Constraint**: a limit on how a task may be done.
