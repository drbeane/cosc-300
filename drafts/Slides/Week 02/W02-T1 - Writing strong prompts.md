---
marp: true
title: "Week 2: Writing strong prompts"
paginate: true
---

# Writing strong prompts
### Week 2
COSC-300/500 Applied AI Essentials

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
