# Week 10: Coding with AI II: building and reviewing

**Surfaces:** Coding assistant [E] · **Capabilities:** Plan mode and autonomy controls [E], Instruction files and skills [E] · **4D:** Discernment

## Goals
Students will be able to:
- Break a written specification into steps and direct an assistant through them.
- Use tests as acceptance criteria, and ask the assistant to write tests before code.
- Read a diff, ask the assistant to explain unclear changes, and spot common failure patterns (silent test edits, hard-coded values, over-broad changes, security problems).
- Debug by reproducing a failure first, then judging whether a fix addresses the cause.
- Use sub-agents for review (brief).

## Before class
- Claude Academy: **Claude Code in action**.
- Claude Academy: **The AI-native SDLC playbook**.
- Optional: **Introduction to subagents**.

## Topics
1. Specifications and tests
2. Reviewing AI-written code
3. Debugging, changing code, and sub-agents
4. The capstone project
- Lab and assignment: Spec-driven build with tests

## Class time (two 75-minute meetings)
- 20 min: Specification-driven work. Writing a spec, splitting it into steps, acceptance tests.
- 20 min: Reviewing AI-written code. Live review of a deliberately flawed change set.
- 35 min: Lab: start the spec-driven build (the coding test in the Artifacts folder is the model).
- 10 min: Debugging with an assistant; changing code you did not write.
- 10 min: Capstone proposal briefing: expectations and examples.
- 45 min: Lab: continue the build.
- 10 min: Share-out of failure patterns found in review.

## Assignment: Spec-driven build with tests
Using a provided specification and acceptance test suite, direct the assistant through the steps. Submit the repository, the test results at each step, and a review log of at least five AI-proposed changes you inspected: what it did, whether you accepted it, and why.
- **500 extension:** add a requirement change midway (provided) and document how the assistant handled the existing tests.
- Estimated time: 4–5 hours.
- **Also due: capstone proposal** (1 page: problem, users, tools and surfaces, what success looks like).

## Responsible use
Dependency and supply-chain risk; who is accountable for shipped code.

## Other resources
From `03 - Supplementary Resources` (links there):
- Anthropic Engineering, *Claude Code best practices*
- Claude Code documentation

## Instructor notes
- Reuse the library-system coding test (Artifacts/Coding Assistant Usage Comparison) at reduced scope for non-majors.
