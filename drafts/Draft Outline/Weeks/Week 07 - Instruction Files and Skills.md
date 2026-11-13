# Week 7: Instruction Files and Skills

**Surfaces:** S4 [E] · **Capabilities:** C2 Instruction files and skills [E], C3 Projects and project memory [E] · **4D:** Description

## Goals
Students will be able to:
- Write standing instructions (global instructions, project instructions, AGENTS.md or CLAUDE.md) that steer an agent across sessions.
- Write a skill: a reusable, documented procedure the agent loads when relevant.
- Test and refine a skill on real inputs.
- Explain why instruction files and skills are limited in a chat with no working directory.

## Before class
- Claude Academy: **Introduction to agent skills**.
- Claude Academy: **Introduction to Claude Cowork**, lessons 6–8 (standing context; skills; plugins).

## Session 1 (75 min)
- 20 min: Standing context. Global and project instructions; AGENTS.md as a cross-vendor convention. What belongs in standing instructions vs a single prompt.
- 20 min: Skills. Anatomy of a skill (description, instructions, supporting files); how an agent decides to use one. Demo: writing a skill live.
- 35 min: Guided practice: write instructions for the student's working folder from week 6.

## Session 2 (75 min)
- 10 min: Plugins: bundling skills and connectors to share with a team.
- 10 min: Skills in chat vs in an agent with a folder: what works, what does not.
- 45 min: Lab: write a skill for a recurring task, test it on three inputs, revise.
- 10 min: Share-out; collect skills into a class library.

## Assignment: Write and test a skill
Write a skill for a task you do repeatedly (for example, formatting a lab report, turning lecture notes into flashcards, triaging a folder of downloads, producing a weekly status update). Test it on at least three different inputs, revise it at least once, and submit the skill files, the test inputs and outputs, and a short change log.
- **500 extension:** have a classmate use your skill without help and report what broke; revise based on that test.
- Estimated time: 3–4 hours.

## Responsible use
Skills from others are code-like instructions: read before installing. Validating skills before sharing.

## Other resources
From `03 - Supplementary Resources` (links there):
- AGENTS.md specification
- Anthropic Agent Skills docs and the anthropics/skills examples

## Instructor notes
- Book: Project Instruction Files; Skills; Hand-Off as a Skill.
- The class skill library feeds the midterm project.
