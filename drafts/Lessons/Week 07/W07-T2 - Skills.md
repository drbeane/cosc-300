# Week 7: Skills

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Explain what a skill is and what its folder contains.
- Explain how an agent decides to use a skill, and why the description matters most.
- Write a skill with a clear description, steps, output, and rules.
- Tell when a task calls for a skill, an instruction file, or a single brief.

## What a skill is

Standing instructions describe a place: this folder, these conventions. Some of what you repeat is a **procedure** instead: the steps for turning notes into a weekly update, or for formatting a lab report the way your department wants it. Putting every procedure into an instruction file would make the file long, and most of it would be irrelevant to any one task.

A **skill** is a reusable, documented procedure that an agent can follow. Technically, it's a folder containing a file named `SKILL.md`, plus any supporting files the procedure needs: a template, an example of good output, a script. Skills are an open format. Claude and several other vendors' tools can use them.

```
weekly-status/
├── SKILL.md           the instructions
├── template.md        the layout the update should follow
└── example.md         one finished update, as a model
```

## Anatomy of a skill

```markdown
---
name: weekly-status
description: Turn my notes folder into a weekly status update.
  Use when asked for a status report or weekly summary.
---
# Weekly status update
1. Read every file in notes/ modified in the last 7 days.
2. Group the items by project.
3. For each project write three short lists: Done, Next, Blocked.
4. Follow the layout in template.md. See example.md for tone and length.
5. Save the result as status/YYYY-MM-DD.md.

## Rules
- Never edit the notes themselves.
- If a note doesn't say which project it belongs to, list it under "Unsorted".
- Report only what the notes say. Don't add plans or estimates.
```

The top section, between the `---` lines, gives the skill a **name** and a **description**. Below it are the instructions, written in ordinary Markdown.

## How the agent decides to use a skill

An agent may have dozens of skills installed. Loading all of their instructions into every task would fill the context with procedures that don't apply. Skills are loaded in stages:

| Stage | What is in the context | When |
|---|---|---|
| 1 | Each skill's **name and description** only | Always |
| 2 | The full `SKILL.md` | When your request matches the description |
| 3 | Supporting files, such as the template or example | When the instructions call for them |

This is why a skill can be long and detailed without costing anything on tasks that don't use it.

It also makes the **description the trigger**. The agent chooses a skill by reading descriptions, so a skill with perfect instructions and a vague description will sit unused.

| Description | Problem |
|---|---|
| "Helps with reports." | Too vague. Which reports? The agent can't tell when it applies, or may apply it to everything. |
| "Weekly status." | Says what it is and gives the agent nothing about when to use it. |
| "Turn my notes folder into a weekly status update. Use when asked for a status report or weekly summary." | Says what it does and when to use it, in words a request is likely to contain. |

Write the description to answer two questions: **what does this skill do**, and **when should it be used**. Include the words you would naturally type when you want it: "status report", "weekly summary".

You can also ask for a skill by name, which removes the guesswork: "Use the weekly-status skill."

## Writing the instructions

The body of a skill is a brief that gets reused, so the lessons of Week 6 apply. Cover:

1. **Steps**: what to do, in order.
2. **Output**: the format, and where to save it.
3. **Rules**: what it must never do, and what to do when something is unclear.
4. **Supporting files**, if the task needs them. A template fixes the layout. An example of good output shows tone and length better than a description can, as you saw with in-context learning in Week 2.

Write for a capable reader who has never seen the task. The most common weakness is a step that assumes knowledge the agent doesn't have:

| Assumes too much | Says what to do |
|---|---|
| "Format it properly." | "Use the headings in `template.md`. Dates as YYYY-MM-DD. No bullet longer than one line." |
| "Summarize the important items." | "Include every item marked done or blocked. Skip notes that are only links." |
| "Send it to the usual people." | "Save it to `status/`. Don't send it anywhere." |

A good test is to hand the skill to a classmate and ask whether they could follow it without asking you anything. This week's assignment extension has you do that.

## Skills vs instruction files

| | Instruction file | Skill |
|---|---|---|
| Describes | A folder and how to work in it | How to do one kind of task |
| Loaded | On every task in that folder | Only when that task comes up |
| Contains | Layout, conventions, rules | Steps, output format, supporting files |
| Example | "File names use `YYYY-MM-DD`. Never delete." | "How to produce the weekly status update." |

And a single brief covers what is true only today. A rough guide:

- You've explained the same **fact about the folder** twice: put it in the instruction file.
- You've walked the agent through the same **procedure** twice: make it a skill.
- It's a one-time job: write a brief.

## Testing a skill

A skill is a prompt you'll run many times, so test it the way you tested prompts in Week 2: on several inputs, checking each result.

- **Does it trigger?** Ask in two or three different ways, without naming the skill. Then make a request that shouldn't use it, and confirm it stays out.
- **Does it follow every step?** Compare the output with the steps, one at a time.
- **Does it hold up on awkward input?** Try a week with no notes, or a note with no project.
- **Revise and rerun.** When something breaks, fix the instruction that caused it and run all the inputs again.

> **Instructor note: live demo.** Write a skill for your chosen task in front of the class. Talk through the description first. Run it on a real input, find something it got wrong, and fix the instructions. The fix is the most instructive part.

## Key terms

**Skill**: a reusable procedure in a folder with a SKILL.md file. **Description (of a skill)**: the text an agent uses to decide when to load the skill. **Supporting file**: a template, example, or script stored in a skill's folder. **Trigger**: what causes an agent to load a skill.
