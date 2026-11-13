# Week 6, Session 2: Autonomy Controls and the Folder-Scale Lab

**COSC-300/500 Applied AI Essentials** · Surface: Local agent · Capabilities: Plan mode and autonomy controls, Usage and context · 4D focus: Delegation

> **Instructor note: preparation.** Before class, check which permission and approval options the current Cowork interface exposes, and how to see a task's usage (Settings > Usage, or the "Explain usage" skill if available). Have the standard practice folders for each assignment option ready to distribute. Timing: 15 min autonomy controls and usage, 50 min lab, 10 min share-out.

## What you will be able to do after this session

- Review an agent's plan before it runs, and change it.
- Set what an agent may do without asking, and recognize irreversible actions.
- Interrupt and redirect an agent, and recover from a wrong turn.
- Read what a task cost in usage.

## 1. Autonomy controls

Supervising an agent comes down to one question: **how much may it do without asking you?** Agent tools offer a range of answers:

- **Plan first.** The agent researches and proposes a plan. Nothing changes until you approve it.
- **Ask each time.** You approve every action as it comes up.
- **Auto-accept edits.** The agent makes changes without asking; you review afterward.
- **More autonomy.** Fewer checks still, for trusted tasks in safe settings.

There's no single right setting. A new kind of task on important files deserves a plan and frequent approvals. A routine task on a scratch folder can run with more autonomy. As your trust in a particular task grows, you can loosen the controls.

### Plan before acting

Read an agent's plan the way a manager reads a proposal. Is the goal right? Are the inputs right? Is the order sensible? Is anything missing, or anything included that shouldn't be? **Edit the plan** before approving. This is the cheapest moment to catch a mistake: before anything has changed.

### Irreversible actions

Pause before approving anything that is hard to undo:

- deleting or overwriting files;
- sending messages or email;
- spending money;
- acting outside the folder you gave it.

Keep backups and work on copies. An agent that makes a mistake on a copy has cost you a few minutes.

### Interrupt and redirect

You can stop an agent mid-task. When it heads the wrong way, stop it, say what's wrong and what to do instead, and let it continue. Recovering well is a skill; starting over every time something goes wrong wastes the work that was right.

## 2. Usage and context

Every task uses part of your plan's **usage allowance**. On Claude Pro, usage is measured over a rolling five-hour session and over a week. Large folders and long tasks also fill the agent's **context window**, the same working memory you learned about in week 2.

After a task runs, check what it cost. Over time you'll develop a sense of which tasks are cheap and which are expensive, and how the way you write a brief affects the cost.

> **Instructor note: demo.** Show where usage appears in Cowork, and run "Explain usage" or the equivalent on the demo task from Tuesday. In week 9, students will see the `/context` and `/usage` commands in Claude Code, which show more detail.

## 3. Lab: folder-scale delegation

Choose one of these tasks, or propose your own:

1. **Reconcile** a folder of inconsistent documents and report on the conflicts.
2. **Build a knowledge repository**: gather material from several web pages into an organized local collection, then draft a summary from it.
3. **Clean and combine** several data files into a report with charts.
4. **Generate documents** in bulk from a template and a table of data.

Standard practice folders are available for each option.

As you work, capture:

- your **task brief**;
- the agent's **plan**, and the changes you made to it;
- the **approvals** you gave or refused;
- the **outputs**;
- notes on anything that went wrong and how you noticed.

> **Instructor note.** Circulate and ask each student to show you their plan before they approve it. Ask: "What would make you refuse this plan?" Students who can't answer haven't read it.

## 4. Share-out

Where did the agent go wrong? How did you notice? What would you change in your brief next time?

## 5. Responsible use

Give agents access only to the folders they need. Keep them out of folders with sensitive data. Back up before you start. Pay attention to irreversible actions.

## Assignment: Folder-scale delegation task

Complete one of the four tasks above (or your own, with approval).

**Submit:**
- Your task brief.
- The agent's plan, with your changes marked.
- A log of the approvals you gave or refused.
- The outputs.
- A 400-word review memo assessing the result against your acceptance criteria.

**500 extension:** run the same task twice, once with a minimal brief and once with a detailed one, and compare quality, time, and usage.

**Estimated time:** 4 hours.

## Before next week

- Claude Academy: **Introduction to agent skills**.
- **Introduction to Claude Cowork**, lessons 6–8.
- Keep your week 6 working folder; you'll use it again.
- Journal entry.

## Key terms

**Plan mode**: an agent proposes a plan and makes no changes until it's approved. **Approval**: your permission for a specific action. **Irreversible action**: one that can't easily be undone. **Usage allowance**: how much work your plan allows in a period.
