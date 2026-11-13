---
marp: true
title: "Week 10: Specifications and tests"
paginate: true
---

# Specifications and tests
### Week 10
COSC-300/500 Applied AI Essentials

---

## Why a specification

Last week the assistant filled gaps with its own choices.

A **specification** is the task brief, written for software.

Code does exactly what it says, so the gaps matter more.

---

## What a specification contains

- **Purpose**: what it's for, who uses it
- **Requirements**: numbered statements
- **Rules and edge cases**
- **Data**: what is stored
- **Out of scope**: what it doesn't do

Without "out of scope", assistants add features nobody asked for.

---

## Make requirements testable

| Vague | Testable |
|---|---|
| "Members shouldn't borrow too many books." | "A member with 5 books on loan can't borrow a sixth. Message: 'Loan limit reached'." |
| "Handle overdue books properly." | "Overdue = more than 14 days after checkout." |

---

## Specification-driven work

1. **Write the spec**: what the software must do
2. **Split** it into steps
3. **Acceptance tests** for each step
4. Direct the assistant one step at a time
5. Tests pass → commit → move on

---

## A test is a checkable promise

```python
def test_loan_limit():
    member = register_member("Ada")
    for n in range(5):
        check_out(member, add_book(f"Book {n}"))

    result = check_out(member, add_book("One too many"))

    assert result.rejected
    assert result.message == "Loan limit reached"
```

<!-- Read it aloud line by line. Nobody needs to know Python to follow it. -->

---

## Reading test results

```
test_add_book ............ passed
test_check_out ........... passed
test_loan_limit .......... FAILED
  expected "Loan limit reached", got "Too many books"

2 passed, 1 failed
```

Which promise broke, and how. Give the assistant this output exactly.

---

## Tests as acceptance criteria

- A test is a **checkable promise**
- "Done" means the tests pass, not "the AI said it's done"
- Ask for **tests before code**
- Keep the tests you were given **unchanged**
- Run the **whole suite**, every time

---

## What tests can't tell you

They check the promises someone wrote down.

A suite can pass while the software fails in real use.

Run the program yourself too.
