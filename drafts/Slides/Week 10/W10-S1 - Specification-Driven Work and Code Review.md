---
marp: true
title: "Week 10 · Session 1: Specification-Driven Work and Code Review"
paginate: true
---

# Coding with AI II
### Week 10 · Session 1
**4D focus: Discernment**

---

## Today

| Time | |
|---|---|
| 20 min | Specification-driven work |
| 20 min | Reviewing AI-written code |
| 35 min | Lab: start the spec-driven build |

---

## Specification-driven work

1. **Write the spec**: what the software must do
2. **Split** it into steps
3. **Acceptance tests** for each step
4. Direct the assistant one step at a time
5. Tests pass → move on

---

## Tests as acceptance criteria

- A test is a **checkable promise**
- "Done" means the tests pass, not "the AI said it's done"
- Ask for **tests before code**
- Keep the tests you were given **unchanged**

---

## Reviewing AI-written code

You don't need to write it to review it:

- Read the **diff**
- Ask: *"Explain this change in plain English"*
- Ask: *"What could break?"*
- Run it

---

## Failure patterns to watch for

- **Silent test edits**: it changes the test instead of the code
- **Hard-coded values** that make one test pass
- **Over-broad changes**: touched files it didn't need to
- **Security problems**: secrets, unchecked input
- **"Done" claims** without running the tests

---

## Live review

A deliberately flawed change set.

Find:
- the edited test
- the hard-coded value
- the unnecessary change

<!-- Prepare a diff with all three planted. -->

---

## Passing tests ≠ working software

From our own coding test:

- One assistant's app **passed 112 of 114 tests**
- Then failed on the first real request when actually run
- The tests never ran requests the way a real server does

Run it for real, too.

---

## Lab: start the spec-driven build

- Provided: a specification and acceptance test suite
- Modeled on the library lending system from our coding test
- Reduced scope for this class
- Run the tests after every step; log the results

---

## Next session

- Debugging with an assistant
- Capstone proposal briefing
- More build time
