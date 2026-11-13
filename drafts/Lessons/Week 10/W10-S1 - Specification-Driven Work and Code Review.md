# Week 10, Session 1: Specification-Driven Work and Code Review

**COSC-300/500 Applied AI Essentials** · Surface: S3 Coding assistant · Capabilities: C1, C2 · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a deliberately flawed change set (a diff, or a branch to review live) that contains: (1) a test edited to pass instead of the code being fixed, (2) a hard-coded value that makes one test pass, (3) an unrelated file changed for no reason. Prepare the reduced-scope specification and acceptance test suite based on the library lending coding test in the course Artifacts. Run the suite against your reference before class. Timing: 20 min spec-driven work, 20 min code review, 35 min lab.

## What you will be able to do after this session

- Break a written specification into steps and direct an assistant through them.
- Use tests as acceptance criteria.
- Read a diff and spot common failure patterns in AI-written code.

## 1. Specification-driven work

Last week you built an app from a one-page spec. This week the approach becomes more disciplined:

1. **Write the specification**: what the software must do, precisely.
2. **Split it into steps.**
3. Write **acceptance tests** for each step: checks that prove the step is done.
4. Direct the assistant through **one step at a time**.
5. When the tests pass, move on.

This is how many professional teams now work with coding assistants. It keeps each step small enough to review, and it replaces "the AI says it's done" with an objective check.

## 2. Tests as acceptance criteria

A test is a small program that checks a promise: "after a book is checked out, it is no longer available." When the test passes, the promise holds. Tests turn a vague goal into something you can verify without reading every line of code.

Three habits:

- Ask the assistant to write **tests before code**: define what correct means first.
- **Keep the tests you were given unchanged.** If a provided test fails, the code is wrong, not the test.
- Run the **whole** suite, not only the new tests, so you catch changes that break earlier work.

## 3. Reviewing AI-written code

You don't need to be able to write code to review it usefully. You need to:

- read the **diff** to see what changed;
- ask, "Explain this change in plain English";
- ask, "What could this break?";
- **run it**.

### Failure patterns to watch for

- **Silent test edits.** The assistant changes the test so it passes, instead of fixing the code.
- **Hard-coded values.** A special case written to satisfy one test, not a real solution.
- **Over-broad changes.** Files touched that had nothing to do with the task.
- **Security problems.** Secrets in code, or user input used without checking.
- **"Done" claims without evidence.** The assistant says it's finished but didn't run the tests.

> **Instructor note: live review.** Put the flawed change set on screen and ask the class to find the three planted problems. Give hints only after a few minutes. Then show how asking the assistant "Did you modify any test files? Why?" surfaces the first one.

### Passing tests is not the same as working software

While building the coding test for this course, we saw one assistant's application pass 112 of 114 acceptance tests and then fail on the first real request when it was actually run as a web server. The tests had never sent requests the way a real server does, so they couldn't catch the problem. Tests are strong evidence, not proof. Run the software for real too.

## 4. Lab: start the spec-driven build

You'll get a specification and an acceptance test suite for a reduced version of a library lending system. Work through the steps in order. Run the tests after every step and keep a log of the results.

> **Instructor note.** Non-majors may need help running the test suite the first time. Show the exact command on the board and keep it there.

## Coming up Thursday

Debugging with an assistant, a briefing on the capstone proposal (due this week), and more build time.

## Key terms

**Specification**: a precise description of what software must do. **Acceptance test**: a test that checks a requirement has been met. **Test suite**: the full set of tests for a project.

> **Instructor note.** Reuse the library-system coding test at reduced scope for non-majors.
