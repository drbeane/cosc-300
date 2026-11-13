---
marp: true
title: "Week 3: Why AI output is wrong"
paginate: true
---

# Why AI output is wrong
### Week 3
COSC-300/500 Applied AI Essentials

---

## Discernment

> Judging what comes back: is it accurate, sourced, and fit for purpose?

The most important skill in this course.

---

## Mostly right is the hard case

- Wrong half the time → you'd check everything
- Right 19 times in 20 → you stop checking
- The 20th answer goes into your paper

The errors that hurt are rare, fluent, and mixed in with correct material.

---

## Fluent is not the same as correct

- In human writing, polish suggests someone did the work
- A model writes polished, confident prose **every time**
- An invented statistic has the same tone as a real one

Judge by checking, not by how it reads.

---

## Six ways AI gets it wrong

1. **Hallucination**: plausible but invented facts, quotes, citations
2. **Outdated knowledge**: past the knowledge cutoff
3. **Arithmetic slips**
4. **Reasoning errors**: a wrong step in a chain
5. **Misread instructions**: answers a different question
6. **Sycophancy**: agrees with you because you pushed

<!-- Students label their lab failures with these six. Give one quick example of each. -->

---

## Why hallucinations happen

- The model predicts **plausible** text, not **verified** text
- When it doesn't know, a fluent guess is often the likeliest continuation
- Specific details are most at risk: names, numbers, dates, citations

A made-up citation looks the same as a real one.

---

## When hallucination is more likely

- The topic is thin in the training data
- You ask for more than exists ("give me ten studies")
- The question assumes something false
- You ask for an exact quotation

Newer models say "I don't know" more often. The rate is lower, not zero.

---

## The quiet errors

**Reasoning errors**
Every step looks sound. The flaw is one assumption near the top.

**Misread instructions**
A good answer to a question you didn't ask.
Reread your prompt and compare, constraint by constraint.

---

## Sycophancy

> **You:** "Isn't it true that X?"
> **AI:** "Yes, you're right…"

- Leading questions get agreement
- Pushback can flip a correct answer to a wrong one
- It affects feedback too: "I worked hard on this, what do you think?"

---

## Ask neutrally

| Leading | Neutral |
|---|---|
| "This is a strong thesis, right?" | "What are its three weakest points?" |
| "Are you sure? I think it's 1848." | "What's your source for that date?" |

Don't say which answer you hope for.

<!-- Live example: push back on a correct answer with confident wrong information. Discuss whether it caves. -->

---

## Where errors are most likely

- Niche or local topics
- Recent events
- Exact numbers, quotations, citations
- Long multi-step reasoning
- Anything you can't easily check
- Questions you asked in a leading way

Match how much you check to what a mistake would cost.
