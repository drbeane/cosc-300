# Week 10: Specifications and tests

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a deliberately flawed change set (a diff, or a branch to review live) that contains: (1) a test edited to pass instead of the code being fixed, (2) a hard-coded value that makes one test pass, (3) an unrelated file changed for no reason. Prepare the reduced-scope specification and acceptance test suite based on the library lending coding test in the course Artifacts. Run the suite against your reference before class. Timing: 20 min spec-driven work, 20 min code review, 35 min lab.

## What you will be able to do

- Break a written specification into steps and direct an assistant through them.
- Use tests as acceptance criteria.

## Specification-driven work

Last week you built an app from a one-page spec. This week the approach becomes more disciplined:

1. **Write the specification**: what the software must do, precisely.
2. **Split it into steps.**
3. Write **acceptance tests** for each step: checks that prove the step is done.
4. Direct the assistant through **one step at a time**.
5. When the tests pass, move on.

This is how many professional teams now work with coding assistants. It keeps each step small enough to review, and it replaces "the AI says it's done" with an objective check.

## Tests as acceptance criteria

A test is a small program that checks a promise: "after a book is checked out, it is no longer available." When the test passes, the promise holds. Tests turn a vague goal into something you can verify without reading every line of code.

Three habits:

- Ask the assistant to write **tests before code**: define what correct means first.
- **Keep the tests you were given unchanged.** If a provided test fails, the code is wrong, not the test.
- Run the **whole** suite, not only the new tests, so you catch changes that break earlier work.

## Key terms

**Specification**: a precise description of what software must do. **Acceptance test**: a test that checks a requirement has been met.

> **Instructor note.** Reuse the library-system coding test at reduced scope for non-majors.
