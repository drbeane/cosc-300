# Week 9: Comparing Coding Assistants

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Write three one-page specs (budget tracker, flashcard app, course-planner page), each small enough to finish in about two hours of directed work. Recheck GitHub Copilot Student's current terms the week of class (credits, model selection, whether sign-ups are open); they changed twice in 2026. Timing: 10 min comparison, 55 min lab, 10 min share-out.

## What you will be able to do

- Compare two coding assistants on capability, model choice, and usage allowance.

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

> **Instructor note.** Present these as the course's own test observations, one run per configuration. If students ask, the full results are in the course materials. Don't oversell: the honest point is that model choice and allowance size both matter.
