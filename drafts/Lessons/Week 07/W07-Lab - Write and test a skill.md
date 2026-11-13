# Week 7 lab and assignment: Write and test a skill

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Write a first skill and run it on a real input.
- Write, test, and revise a skill for a recurring task.

## Guided practice: instructions for your week 6 folder

Write standing instructions for the folder you used in last week's assignment:

- what's in the folder and how it's organized;
- naming conventions and formats;
- what the agent must never do.

Add them as project instructions in Cowork (or as an instruction file, if your setup reads one). Then run a small task in the folder and watch whether the agent follows them.

> **Instructor note.** Ask students to include one deliberately checkable rule (for example, "always add a line at the end of any file you create saying 'Edited by agent'") so they can tell whether the instructions were actually read.

## Lab: write and test a skill

### Pick a task you do repeatedly

Some ideas: formatting a lab report to your department's standard, turning lecture notes into flashcards, triaging a messy downloads folder, writing a weekly status update, preparing a meeting agenda from a template. The best choices are tasks you genuinely repeat, so the skill will be useful after the assignment.

### Write it

1. **Description**: what it does and when to use it.
2. **Steps**: what to do, in order.
3. **Output**: what format, and where to save it.
4. **Rules**: what it must never do.
5. **Supporting files** if the task needs them: a template, an example of good output.

### Test it

Run it on **three different inputs**. For each run, check:

- Did it trigger when it should have (and only then)?
- Did it follow every step?
- Is the output right?
- What broke?

Then **revise** the skill and run it again. Keep a short change log: what you changed and why.

> **Instructor note.** The most common failure is a vague description, so the skill doesn't trigger. The second is steps that assume knowledge the agent doesn't have ("format it properly"). When a student's skill misbehaves, ask them to read it as if they'd never seen the task before.

## Share-out and the class skill library

Add your skill to the class library and tell the class one thing that surprised you while testing it. The library is a resource for the **midterm project** next week, which asks you to build a workflow using at least one skill.

## Responsible use

Skills are instructions that an agent will follow, which makes them a lot like code. Before you install someone else's skill, read it. A skill can tell an agent to do things you didn't intend, including sending data somewhere or deleting files. Check skills before you share them, too.

## Assignment: Write and test a skill

Write a skill for a task you do repeatedly.

**Submit:**
- The skill files.
- Three test inputs and the outputs from each run.
- A short change log covering at least one revision.

**500 extension:** have a classmate use your skill without any help from you. Report what broke and revise the skill based on that test.

**Estimated time:** 3–4 hours.

## Before next week

- Claude Academy: **Introduction to Model Context Protocol** (the concept lessons).
- **Introduction to Claude Cowork**, lessons 9–11.
- Think about your **midterm project**: a real recurring task worth automating.
- Journal entry.
