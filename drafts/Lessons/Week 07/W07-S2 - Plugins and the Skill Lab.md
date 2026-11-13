# Week 7, Session 2: Plugins and the Skill Lab

**COSC-300/500 Applied AI Essentials** · Surface: S4 Local agent · Capability: C2 Instruction files and skills · 4D focus: Description

> **Instructor note: preparation.** Set up a shared folder or Canvas page for the class skill library. Have one example plugin to show (installed or from a marketplace) and be ready to open its contents. Timing: 10 min plugins, 10 min skills in chat vs agent, 45 min lab, 10 min share-out.

## What you will be able to do after this session

- Explain what a plugin is and why organizations use them.
- Explain why skills and instruction files are limited in chat without a working folder.
- Write, test, and revise a skill for a recurring task.

## 1. Plugins

A **plugin** bundles several pieces, such as skills, connectors, and other components, into one package that can be installed and shared. Organizations use plugins to package "the way we do things here": a set of skills for the sales team's proposals, connected to the CRM, installed by everyone on the team at once.

> **Instructor note: demo.** Open an example plugin and show its contents. The point is that a plugin is just organized skills and connections, not something mysterious.

## 2. Skills in chat vs skills in an agent

Skills also work in a regular Claude chat. But they're more limited there, because a chat has no working folder.

| In chat | In an agent working in a folder |
|---|---|
| Works on uploaded **copies** of your files | Works on the **real files** |
| Standing instructions are typed into a settings field | An instruction file **lives with the work** |
| Can't run your project's tests or local tools | Can run scripts, tests, and local tools |
| You download the results | Results are saved in place |

So "skills work in chat" is true, and "skills work best in an agent with a folder" is also true. The accurate summary is that skills are **limited** in chat, not absent.

## 3. Lab: write and test a skill

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

## 4. Share-out and the class skill library

Add your skill to the class library and tell the class one thing that surprised you while testing it. The library is a resource for the **midterm project** next week, which asks you to build a workflow using at least one skill.

## 5. Responsible use

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

## Key terms

**Plugin**: a package bundling skills, connectors, and other components for sharing.

> **Instructor note.** Save a copy of the class skill library; it feeds the midterm.
