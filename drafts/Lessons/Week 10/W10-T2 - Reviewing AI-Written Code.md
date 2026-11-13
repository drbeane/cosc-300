# Week 10: Reviewing AI-Written Code

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

## What you will be able to do

- Read a diff and spot common failure patterns in AI-written code.

You don't need to be able to write code to review it usefully. You need to:

- read the **diff** to see what changed;
- ask, "Explain this change in plain English";
- ask, "What could this break?";
- **run it**.

## Failure patterns to watch for

- **Silent test edits.** The assistant changes the test so it passes, instead of fixing the code.
- **Hard-coded values.** A special case written to satisfy one test, not a real solution.
- **Over-broad changes.** Files touched that had nothing to do with the task.
- **Security problems.** Secrets in code, or user input used without checking.
- **"Done" claims without evidence.** The assistant says it's finished but didn't run the tests.

> **Instructor note: live review.** Put the flawed change set on screen and ask the class to find the three planted problems. Give hints only after a few minutes. Then show how asking the assistant "Did you modify any test files? Why?" surfaces the first one.

## Passing tests is not the same as working software

While building the coding test for this course, we saw one assistant's application pass 112 of 114 acceptance tests and then fail on the first real request when it was actually run as a web server. The tests had never sent requests the way a real server does, so they couldn't catch the problem. Tests are strong evidence, not proof. Run the software for real too.
