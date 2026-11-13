# Week 3: Why AI output is wrong

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a handout of five AI answers on general topics: one with a fabricated citation, one with an arithmetic error, one with an outdated fact, one that answers a slightly different question than was asked, and one that is correct. Have one live example of sycophancy ready (ask a question, then push back on a correct answer and see whether it caves). Timing: 25 min why outputs are wrong, 25 min verification habits, 25 min practice.

## What you will be able to do

- Explain why models hallucinate and name the situations where errors are most likely.
- Recognize confident errors and sycophancy.

## Discernment

This week's skill is **Discernment**: judging whether what comes back is accurate, properly sourced, and fit for its purpose. It is the most important skill in this course. Everything else you learn, from prompting to delegating work to agents, depends on your ability to tell good output from bad.

## Six ways AI gets it wrong

1. **Hallucination.** The model produces plausible but invented content: facts, quotations, statistics, citations to papers that don't exist.
2. **Outdated knowledge.** The question depends on something after the model's knowledge cutoff, and no tool supplied the current information.
3. **Arithmetic slips.** Models can do a great deal of math correctly but still make simple calculation errors, especially in long chains.
4. **Reasoning errors.** One wrong step early in a chain of reasoning carries through to a confident wrong conclusion.
5. **Misread instructions.** The model answers a slightly different question from the one you asked, or ignores a constraint.
6. **Sycophancy.** The model agrees with you because of how you asked, or changes a correct answer because you pushed back.

### Why hallucinations happen

Recall from week 1 that a model predicts plausible text. When it knows the answer, the plausible continuation is usually the true one. When it doesn't, a fluent guess is often still the most likely continuation, and nothing in the basic mechanism stops it from writing one. That's why the details most at risk are specific ones: names, numbers, dates, quotations, and citations. A made-up citation has exactly the shape of a real one.

### Sycophancy

Ask "Isn't it true that X?" and a model will often agree. Push back on a correct answer with "Are you sure? I think it's Y," and it may switch to Y. Models are trained to be helpful and agreeable, and that can turn into telling you what you seem to want to hear. Ask neutrally instead: "What's the evidence for and against X?"

> **Instructor note: live example.** Ask a question the model gets right, then push back with confident but wrong information. Whether or not it caves, discuss what happened. Current models resist more than older ones, so it may take a fairly leading push.

### Where errors are most likely

Be most careful with niche or local topics, recent events, exact numbers and quotations, long multi-step reasoning, and anything you can't easily check yourself.

## Key terms

**Hallucination**: plausible but invented output. **Sycophancy**: agreeing with the user rather than with the evidence. **Discernment**: judging whether output is accurate, sourced, and fit for purpose.

> **Instructor note: book links.** Why Hallucinations Happen; What Language Models Cannot Do.
