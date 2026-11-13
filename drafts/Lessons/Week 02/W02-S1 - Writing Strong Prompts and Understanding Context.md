# Week 2, Session 1: Writing Strong Prompts and Understanding Context

**COSC-300/500 Applied AI Essentials** · Surface: Chat assistant · 4D focus: Description

> **Instructor note: preparation.** Print or post three weak prompts for the paired practice. Suggested: "Write a cover letter." / "Explain photosynthesis." / "Make this better." followed by a mediocre paragraph. Prepare one before-and-after pair to run live. Timing: 25 min anatomy of a prompt, 25 min context, 25 min practice.

## What you will be able to do after this session

- Write a prompt that states the goal, context, constraints, audience, and output format.
- Explain tokens and the context window, and list what fills the context.
- Use examples in a prompt and explain why they work.

## 1. Description

This week's 4D skill is **Description**: how you communicate the task. A model cannot read your mind. It sees only what is in its context: your prompt, the conversation so far, anything you've attached, and some instructions you never see. If something important isn't there, the model will fill the gap with a guess. Most disappointing AI output traces back to a description that left too much to guess.

## 2. Anatomy of a strong prompt

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

## 3. Context

### Tokens

Models read and write **tokens**, not words. In English a token averages about three-quarters of a word. Everything is measured in tokens: your prompt, the files you attach, the response, the conversation history. Usage limits and API prices are counted in tokens too.

### The context window

The **context window** is the model's working memory for a conversation: the total amount of text it can consider at once. It is large, but finite. When a conversation or set of files exceeds it, something has to give. Older material may be summarized or dropped.

### What fills the context

More is in the context than what you typed:

- **The system prompt**: instructions from the tool's vendor, present before you type anything.
- **The conversation history.**
- **Files** you've attached.
- **Tool results**: search results, the output of code the model ran.
- **Memory and custom instructions**: things the tool remembers about you.

You control some of this, but not all of it. Weeks 6 and 9 will show you tools that let you see what's in the context directly.

### Why long chats degrade

Very long conversations tend to get worse. Early details get crowded out or summarized away. Mistakes made earlier stay in the context and get repeated. The model loses track of what you originally asked. When a conversation has drifted, the fix is usually to **start fresh**: open a new chat with a clean summary of what matters.

## 4. Practice: rewrite three weak prompts

Work in pairs.

1. Rewrite each of the three weak prompts using the anatomy above. Invent any context you need.
2. Run the original and your version on the same tool.
3. Swap with another pair and critique each other's rewrites. Which added detail made the biggest difference? Is anything unnecessary?

> **Instructor note.** Expect students to over-correct by writing very long prompts. Use the critique to ask: which sentences actually changed the output? That habit of testing what matters sets up Thursday's lab.

## Coming up Thursday

Memory and custom instructions, voice mode, and a lab in which you build a small test set and revise a prompt three times.

## Key terms

**Context window**: the amount of text a model can consider at once. **System prompt**: instructions supplied by the tool's vendor. **In-context learning**: learning a pattern from examples in the prompt.

> **Instructor note: book links.** Prompt Engineering; Tokens, Context, and Randomness; What Context Contains.
