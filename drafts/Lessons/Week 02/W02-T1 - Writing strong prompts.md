# Week 2: Writing strong prompts

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Print or post three weak prompts for the paired practice. Suggested: "Write a cover letter." / "Explain photosynthesis." / "Make this better." followed by a mediocre paragraph. Prepare one before-and-after pair to run live. Timing: 25 min anatomy of a prompt, 25 min context, 25 min practice.

## What you will be able to do

- Write a prompt that states the goal, context, constraints, audience, and output format.
- Use examples in a prompt and explain why they work.

## Description

This week's 4D skill is **Description**: how you communicate the task. A model cannot read your mind. It sees only what is in its context: your prompt, the conversation so far, anything you've attached, and some instructions you never see. If something important isn't there, the model will fill the gap with a guess. Most disappointing AI output traces back to a description that left too much to guess.

## Anatomy of a strong prompt

A strong prompt usually covers five things:

- **Goal**: what you want, and why you want it.
- **Context**: background the model doesn't have. Who you are, what situation this is for, what's already been decided.
- **Constraints**: length, scope, what to avoid, what must be included.
- **Audience**: who will read the result.
- **Output format**: bullets, a table, a short email, JSON, a numbered plan.

Compare these two prompts.

> **Weak:** Summarize this article.

> **Strong:** Summarize this article for a busy department chair who is deciding whether to fund a pilot program. Use five bullets and stay under 120 words. Lead with the cost and the strength of the evidence. Flag any claim the article makes without support.

The second prompt isn't longer for the sake of it. Each added sentence removes a guess: who it's for, how long, what matters most, what to watch for.

### Techniques that help

- **Be clear and direct.** Say exactly what you want rather than hinting.
- **Use structure.** For longer prompts, separate the parts with headings or tags such as `<article>` and `<instructions>` so the model can tell your material from your request.
- **Give examples.** One or two examples of a good output show format, tone, and level better than a paragraph of description.
- **Set a role and audience.** "You are reviewing this as a hiring manager in a small accounting firm" focuses the response.
- **Ask for uncertainty.** "Tell me which parts you're least sure of" invites the model to flag weak spots instead of smoothing over them.

### Why examples work

Models continue patterns. When your prompt includes an example of what you want, the model picks up its format, length, and tone and continues in kind. This is called **in-context learning**: the model learns from the prompt itself, with no retraining. The caution is that it copies flaws too. If your example has a mistake or an odd habit, expect to see it again.

> **Instructor note: live demo.** Run your before-and-after pair. Then show a third version that adds an example output, and point out what changed. Keep the theory light: the goal is that students know examples are powerful and know why.

## Key terms

**In-context learning**: learning a pattern from examples in the prompt.

> **Instructor note: book links.** Prompt Engineering; Tokens, Context, and Randomness; What Context Contains.
