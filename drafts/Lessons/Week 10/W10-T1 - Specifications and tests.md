# Week 10: Specifications and tests

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a deliberately flawed change set (a diff, or a branch to review live) that contains: (1) a test edited to pass instead of the code being fixed, (2) a hard-coded value that makes one test pass, (3) an unrelated file changed for no reason. Prepare the reduced-scope specification and acceptance test suite based on the library lending coding test in the course Artifacts. Run the suite against your reference before class. Timing: 20 min spec-driven work, 20 min code review, 35 min lab.

## What you will be able to do

- Explain what a specification contains and why it matters more when an assistant writes the code.
- Break a written specification into steps and direct an assistant through them.
- Read a simple test and say what promise it checks.
- Use tests as acceptance criteria, and run the whole suite after each step.

## From "build me an app" to a specification

Last week you built an app from a one-page spec, and you probably saw the assistant fill gaps with its own choices. Some were fine. Others weren't what you wanted, and you found out only when you ran it.

A **specification** (spec) is a precise written description of what software must do. It's the task brief from Week 6, written for software. Precision matters more here than in a document, because code does exactly what it says. If the spec doesn't say whether a member can borrow a book they already have on loan, the assistant will decide, and you may not learn its decision until a user hits it.

### What a specification contains

| Part | What it says | Example, for a library lending system |
|---|---|---|
| **Purpose** | What the software is for, and who uses it | "Lets library staff record loans and returns." |
| **Requirements** | What it must do, as separate, numbered statements | "R3. A member may have at most 5 books on loan at once." |
| **Rules and edge cases** | What happens in unusual situations | "R7. Returning a book that isn't on loan is rejected with a message." |
| **Data** | What is stored about each thing | "A book has a title, an author, and a status: available or on loan." |
| **Out of scope** | What it deliberately doesn't do | "No fines. No reservations." |

Each requirement should be **testable**: you can imagine a check that would show whether it's met.

| Vague | Testable |
|---|---|
| "Members shouldn't borrow too many books." | "A member with 5 books on loan can't borrow a sixth. The attempt is rejected with the message 'Loan limit reached'." |
| "Handle overdue books properly." | "A loan is overdue when today is more than 14 days after the checkout date." |
| "The system should be fast." | "A search of 10,000 books returns in under one second." |

The "out of scope" list is as useful as the requirements. Assistants like to be helpful, and without it they add features nobody asked for, each of which is more code to review and more that can break.

You can use the assistant to improve a spec before any code is written: "Read this specification and list every question you'd need answered before you could build it. Don't write any code." Its questions show you where the gaps are.

## Specification-driven work

With a spec in hand, the work follows a disciplined routine:

1. **Write the specification**: what the software must do, precisely.
2. **Split it into steps.** Each step adds one small piece that can be run and checked.
3. Write **acceptance tests** for each step: checks that prove the step is done.
4. Direct the assistant through **one step at a time**.
5. When the tests pass, **commit** and move on.

For the lending system, the steps might be:

| Step | Adds | Done when |
|---|---|---|
| 1 | Add books and list them | The tests for adding and listing pass |
| 2 | Register members | The member tests pass, and step 1's still pass |
| 3 | Check out a book | A checked-out book shows as on loan |
| 4 | Enforce the loan limit | A sixth loan is rejected |
| 5 | Return a book | The book shows as available again |

This is how many professional teams now work with coding assistants. It keeps each step small enough to review, and it replaces "the AI says it's done" with an objective check. It is also Week 9's working rhythm with one addition: the check at the end of each step is a set of tests instead of your trying the program by hand.

## Tests as acceptance criteria

A **test** is a small program that checks a promise. Here is one, for requirement R3:

```python
def test_loan_limit():
    member = register_member("Ada")
    for n in range(5):
        check_out(member, add_book(f"Book {n}"))

    sixth = add_book("One too many")
    result = check_out(member, sixth)

    assert result.rejected
    assert result.message == "Loan limit reached"
```

You can read it without knowing the language. It registers a member, checks out five books, and tries a sixth. The two `assert` lines state what must be true: the sixth attempt is rejected, with the right message. If either is false, the test **fails**.

A project's tests together are its **test suite**. Running the suite prints a result for each test and a summary:

```
test_add_book ............ passed
test_list_books .......... passed
test_check_out ........... passed
test_loan_limit .......... FAILED
  expected message "Loan limit reached", got "Too many books"

3 passed, 1 failed
```

A failure tells you which promise was broken and often how. Here the limit works and the message is wrong. You can give the assistant that output exactly as printed.

Tests turn a vague goal into something you can verify without reading every line of code. That is what makes them so valuable to someone supervising work they couldn't have written.

### Three habits

- **Ask for tests before code.** Have the assistant write the tests for a step first, from the spec. Read them, since they're the readable part, and confirm that they check what the requirement says. Then have it write code to make them pass. Defining "correct" first stops the tests from being shaped around whatever the code happens to do.
- **Keep the tests you were given unchanged.** If a provided test fails, the code is wrong. Fixing the test is not the answer. The next topic shows what it looks like when an assistant edits a test to make it pass.
- **Run the whole suite, every time.** A change for step 4 can break something from step 2. A bug of that kind is called a **regression**, and you'll catch it only if you rerun the earlier tests. This is the same habit as rerunning all five inputs when you revised a prompt in Week 2.

### What tests can't tell you

Tests check the promises someone thought to write down. They say nothing about a case nobody wrote a test for, and a suite can pass while the software still fails in real use. The next topic has an example from this course's own testing. Passing tests are strong evidence, and you should still run the program yourself.

## Key terms

**Specification**: a precise description of what software must do. **Requirement**: one statement of something the software must do. **Edge case**: an unusual situation the software must still handle. **Test**: a small program that checks a promise about the software. **Acceptance test**: a test that checks a requirement has been met. **Test suite**: the full set of tests for a project. **Regression**: a bug in something that used to work, caused by a later change.

> **Instructor note.** Reuse the library-system coding test at reduced scope for non-majors.
