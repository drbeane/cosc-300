# Week 9: From chat window to coding assistant

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Setup takes longer than expected, especially for non-majors. Post a setup guide a week ahead and hold office hours before class. Prepare a small sample repository on GitHub that students can clone, with one obvious small improvement to make. Check the current Claude Code shortcuts and commands in the installed version (plan mode toggle, `/plan`, `/context`, `/usage`, `/compact`) since these change. Timing: 10 min chat limits, 20 min tour, 15 min Claude Code features, 30 min setup clinic.

## What you will be able to do

- Explain why a coding assistant with access to the repository, terminal, and tests beats copying code from a chat window.

## No coding experience assumed

The next two weeks are about software, but you won't be graded on writing code. You'll learn to **specify** software work, **supervise** an assistant while it does the work, and **check** the result. Those are the same skills you've been building with agents since week 6, applied to code.

## Coding in a chat window, and its limits

You can ask a chat assistant for code, paste it into a file, and run it. For one small script, that works. It breaks down when:

- the project has many files that need to change together;
- you need to run the code to see whether it works;
- you need to run tests;
- you need to undo a change that broke something.

Copying back and forth between a chat window and an editor becomes the bottleneck, and errors creep in at every copy.

## The coding assistant in the development environment

A **coding assistant** works inside the development environment. It has access to:

- **the repository**: every file in the project;
- **the terminal**: it can install packages and run programs;
- **the tests**: it can check whether the code actually works.

Because it can run things, it can try a change, see the error, and fix it, in the same tool-use loop you met in week 6.

## Key terms

**Repository**: a project's files plus their history, tracked by Git. **Terminal**: a text interface for running commands.

> **Instructor note: book links.** Coding in a Chat Window; Coding Assistants in the Editor.
