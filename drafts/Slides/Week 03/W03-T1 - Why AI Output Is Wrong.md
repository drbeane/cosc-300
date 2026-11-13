---
marp: true
title: "Week 3: Why AI Output Is Wrong"
paginate: true
---

# Why AI Output Is Wrong
### Week 3
COSC-300/500 Applied AI Essentials

---

## Discernment

> Judging what comes back: is it accurate, sourced, and fit for purpose?

The most important skill in this course.

---

## Six ways AI gets it wrong

1. **Hallucination**: plausible but invented facts, quotes, citations
2. **Outdated knowledge**: past the knowledge cutoff
3. **Arithmetic slips**
4. **Reasoning errors**: a wrong step in a chain
5. **Misread instructions**: answers a different question
6. **Sycophancy**: agrees with you because you pushed

---

## Why hallucinations happen

- The model predicts **plausible** text, not **verified** text
- When it doesn't know, a fluent guess is often the likeliest continuation
- Specific details are most at risk: names, numbers, dates, citations

---

## Sycophancy

> **You:** "Isn't it true that X?"
> **AI:** "Yes, you're right…"

- Leading questions get agreement
- Pushback can flip a correct answer to a wrong one
- Ask neutrally: *"What's the evidence for and against X?"*

---

## Where errors are most likely

- Niche or local topics
- Recent events
- Exact numbers and quotations
- Long multi-step reasoning
- Anything you can't easily check
