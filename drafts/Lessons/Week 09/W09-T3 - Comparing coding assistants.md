# Week 9: Comparing coding assistants

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Write three one-page specs (budget tracker, flashcard app, course-planner page), each small enough to finish in about two hours of directed work. Recheck GitHub Copilot Student's current terms the week of class (credits, model selection, whether sign-ups are open); they changed twice in 2026. Timing: 10 min comparison, 55 min lab, 10 min share-out.

## What you will be able to do

- Describe the forms a coding assistant comes in.
- Compare two coding assistants on capability, model choice, and usage allowance.
- Run a fair comparison of two tools on the same task.
- Explain why a comparison has a short shelf life.

## The forms a coding assistant takes

Coding assistants come in a few forms, and one product often offers more than one:

| Form | What it's like | Examples |
|---|---|---|
| **Autocomplete** | Suggests the next few lines as you type. You stay in control of every line. | The original GitHub Copilot |
| **Chat in the editor** | A side panel that can see your open files and answer questions or propose edits | Copilot Chat, most editors |
| **Agent in the editor or terminal** | Takes a task, plans, edits many files, runs commands and tests | Claude Code, Copilot's agent mode, OpenAI's Codex, Cursor |
| **Cloud agent** | Works on a copy of the repository on the vendor's servers and returns a finished change for review | Offered by several vendors |

This course uses the agent form, because it matches the delegation skills you've built since Week 6. Much of the market for these tools is the same few models inside different products, which is the company, model, and product distinction from Week 1. Two assistants can differ because of the model, or because of the harness around it: how it searches the project, what it puts in the context, and how it checks its work.

## The two you have

You have access to two coding assistants that work in VS Code: Claude Code, included in your Claude Pro subscription, and GitHub Copilot Student, which GitHub offers free to verified students.

| | Claude Code (Claude Pro) | GitHub Copilot Student |
|---|---|---|
| Where it works | VS Code, terminal | VS Code, terminal |
| Planning step | Plan mode | Plan agent |
| Model choice | Yes | Automatic selection only |
| Allowance | Pro's five-hour and weekly limits | A monthly credit allowance |

Both are real coding assistants. The differences are in model choice and in how much use the allowance supports.

## What our own tests showed

While preparing this course we ran the same ten-prompt coding project, a small library lending application, on several tools, once each:

- On Claude Pro, using the Sonnet model, the project used about **2%** of a weekly allowance and passed every acceptance test.
- On GitHub Copilot Student, with automatic model selection, it used **27%** of the monthly allowance; the result failed 2 of the acceptance tests, and a separate bug stopped the application from launching.

These are single runs, so treat them as data points, not laws. You'll be able to make your own comparison in this week's 500 extension.

Notice that the two results differ on two separate things. One is **quality**: whether the finished application worked. The other is **cost**: how much of an allowance the work used. A tool can be strong on one and weak on the other, and for a student on a fixed allowance both matter. A tool that produces good work and runs out in the second week of the month is a problem of a different kind from one that never runs out and produces work you have to fix.

## Comparing tools fairly

Opinions about coding assistants are everywhere, and most rest on one person's experience with one task. To compare two tools in a way you can trust, use the habits from Week 2's prompt testing:

- **Use the same task.** Give both tools the same written specification, word for word.
- **Start from the same place.** Use the same starting repository and the same instruction file.
- **Decide what you'll measure before you start.** Useful measures are below.
- **Judge with the same checks.** Run the same acceptance tests on both results.
- **Repeat if you can.** Output varies from run to run. One run each tells you less than it seems to.
- **Record the date and the versions.** See the next section.

| Measure | How to record it |
|---|---|
| Did it work? | Number of acceptance checks passed |
| How much did you have to step in? | Count of corrections and restarts |
| How long did it take? | Minutes from first prompt to working result |
| What did it cost? | Share of the allowance used |
| Could you follow what it did? | Your own rating of its plans and explanations |

## Comparisons go out of date

Any comparison of AI tools is a snapshot. Models are replaced several times a year, plans and allowances are revised, and features one tool lacked last term may be there now. The table above was correct when this lesson was written and may not be when you read it.

What lasts is the method: the same task, the same checks, and a record of what you measured. When a new tool appears, or your employer hands you one you've never used, you'll be able to find out for yourself how it performs on your kind of work.

## Key terms

**Autocomplete**: a coding assistant that suggests the next lines as you type. **Agent mode**: a coding assistant that plans and carries out a multi-step task in a project. **Acceptance test**: a check that decides whether a piece of software does what was asked. **Allowance**: how much use a plan permits in a period.

> **Instructor note.** Present these as the course's own test observations, one run per configuration. If students ask, the full results are in the course materials. Don't oversell: the honest point is that model choice and allowance size both matter.
