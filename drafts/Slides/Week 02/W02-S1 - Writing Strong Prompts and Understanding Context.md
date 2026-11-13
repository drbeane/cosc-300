---
marp: true
title: "Week 2 · Session 1: Writing Strong Prompts and Understanding Context"
paginate: true
---

# Prompting and Context
### Week 2 · Session 1
**4D focus: Description**

---

## Today

| Time | |
|---|---|
| 25 min | Anatomy of a strong prompt |
| 25 min | Context: tokens, windows, what's inside |
| 25 min | Practice: rewrite three weak prompts |

---

## Description

> How you communicate the task decides most of what you get back.

The model can't read your mind.
It only sees what's in its context.

---

## Anatomy of a strong prompt

- **Goal**: what you want and why
- **Context**: background the model doesn't have
- **Constraints**: length, scope, what to avoid
- **Audience**: who will read it
- **Output format**: bullets, table, JSON, email…

---

## Before and after

**Weak**
> Summarize this article.

**Strong**
> Summarize this article for a busy department chair deciding whether to fund a pilot. 5 bullets, under 120 words. Lead with the cost and the evidence. Flag anything the article claims without support.

---

## Techniques that help

- **Be clear and direct**: say exactly what you want
- **Structure**: headings or XML tags to separate parts
- **Examples**: show one or two good outputs
- **Role and audience**: "You are reviewing this as…"
- **Ask for uncertainty**: "Say what you're unsure about"

---

## Why examples work

- The model continues patterns
- One or two examples show format, tone, and level better than a description
- This is called **in-context learning**: learning from the prompt, with no retraining

Caution: it copies your examples' flaws too.

---

# Context

---

## Tokens

- Models read and write **tokens**, not words
- Roughly ¾ of a word each in English
- Everything costs tokens: your prompt, the files, the answer
- Usage limits and prices are counted in tokens

---

## The context window

The model's **working memory** for one conversation.

Finite: when it's full, something has to go.

---

## What fills the context

- **System prompt**: the vendor's instructions (before you type)
- **Conversation history**
- **Files** you attach
- **Tool results**: search results, code output
- **Memory and custom instructions**

You control some of it, not all.

---

## Why long chats degrade

- Early details get crowded out or summarized away
- Old mistakes stay in context and get repeated
- The model loses track of what you asked for

**Fix:** start fresh with a clean summary of what matters.

---

## Practice: rewrite three weak prompts

In pairs:

1. Rewrite each prompt using the anatomy
2. Run the original and your version
3. Swap with another pair and critique

<!-- Provide three weak prompts on handout: e.g. "write a cover letter", "explain photosynthesis", "make this better" (with a paragraph). -->

---

## Next session

- Account-level memory and custom instructions
- Voice mode
- Lab: build a test set and revise a prompt three times
