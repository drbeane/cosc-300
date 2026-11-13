---
marp: true
title: "Week 1: What a Large Language Model Is"
paginate: true
---

# What a Large Language Model Is
### Week 1
COSC-300/500 Applied AI Essentials

---

## A next-token predictor

- Text is split into **tokens** (word pieces)
- The model predicts **the next token**, then the next, then the next
- Each prediction is a probability over all possible tokens
- A full answer is thousands of these predictions in a row

> "The capital of France is ___" → *Paris* (very likely), *a* (less likely), …

---

## Trained in two stages

**1. Pretraining**
Predict the next token across a huge amount of text.
Result: broad knowledge and fluent language, but not yet an assistant.

**2. Tuning into an assistant**
Examples and feedback teach it to follow instructions, answer helpfully, and refuse some requests.

---

## Knowledge cutoff

- Pretraining data stops at a date: the **knowledge cutoff**
- The model knows nothing after it **unless a tool supplies it**
  - web search, uploaded files, connectors
- Ask: *"Does this answer depend on anything recent?"*

---

## Why answers vary

- The model **samples** from its probabilities, rather than always taking the top choice
- Same prompt, different runs → different wording, sometimes different facts
- That variety is useful for brainstorming
- It's a risk when you need the same answer every time

---

## Live demo: same prompt, three runs

1. One prompt, run three times in fresh chats
2. Compare: wording, structure, facts
3. What stayed the same? What changed?

<!-- Use a prompt with a factual element and an open-ended element, e.g. "Explain why the 1918 flu spread so quickly, in 5 bullets." -->

---

## What this means for you

- Fluent ≠ correct
- Confident ≠ correct
- The model doesn't "look things up" unless it has a tool to do so
- Your job: **decide, describe, check**
