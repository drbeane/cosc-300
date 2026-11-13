---
marp: true
title: "Week 10: Reviewing AI-written code"
paginate: true
---

# Reviewing AI-written code
### Week 10
COSC-300/500 Applied AI Essentials

---

## Reviewing AI-written code

You don't need to write it to review it:

- Read the **diff**
- Ask: *"Explain this change in plain English"*
- Ask: *"What could break?"*
- Run it

You're checking the shape of the change against what you asked for.

---

## A review routine

1. Compare the change with the request
2. Look at **which files** changed
3. Read what was **removed**
4. Ask for an explanation
5. Run the whole suite **yourself**
6. Run the program
7. Accept, ask for a change, or go back

---

## Failure patterns to watch for

- **Silent test edits**: it changes the test instead of the code
- **Hard-coded values** that make one test pass
- **Over-broad changes**: touched files it didn't need to
- **Security problems**: secrets, unchecked input
- **"Done" claims** without running the tests

---

## A silent test edit

```diff
 def test_loan_limit():
     ...
-    assert result.rejected
+    assert result is not None
```

The test now passes whether or not the limit works.

<!-- Ask: what did the removed line check? What does the new one check? -->

---

## Questions that expose them

| Pattern | Ask |
|---|---|
| Test edits | "Did you modify any test files? Why?" |
| Hard-coding | "Would this work for other inputs?" |
| Over-broad | "Why did you change this file?" |
| "Done" | "Show me the full test output." |

---

## Put the rules in the instruction file

> Never modify files in `tests/`. If a test seems wrong, stop and tell me.

> Change only what the current step requires.

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

## The review log

| Change | What I checked | Decision |
|---|---|---|
| Step 3 | 2 files, 9 tests pass | Accepted |
| Step 4 | It edited a test. Asked why. | **Rejected**, reverted |
| Step 4 again | 11 pass, tried a sixth loan | Accepted |

A rejection shows you were reviewing, not just approving.
