# Week 3, Session 1: Why AI Output Is Wrong and How to Check It

**COSC-300/500 Applied AI Essentials** · Surface: Chat assistant · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a handout of five AI answers on general topics: one with a fabricated citation, one with an arithmetic error, one with an outdated fact, one that answers a slightly different question than was asked, and one that is correct. Have one live example of sycophancy ready (ask a question, then push back on a correct answer and see whether it caves). Timing: 25 min why outputs are wrong, 25 min verification habits, 25 min practice.

## What you will be able to do after this session

- Explain why models hallucinate and name the situations where errors are most likely.
- Apply verification habits: check claims against sources, recompute numbers, test code, ask about uncertainty.
- Recognize confident errors and sycophancy.

## 1. Discernment

This week's skill is **Discernment**: judging whether what comes back is accurate, properly sourced, and fit for its purpose. It is the most important skill in this course. Everything else you learn, from prompting to delegating work to agents, depends on your ability to tell good output from bad.

## 2. Six ways AI gets it wrong

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

## 3. Verification habits

- **Trace sources.** Open the link and find the sentence that supports the claim. A link that exists is not the same as a link that supports.
- **Recompute.** Redo important numbers yourself, or in a spreadsheet or code you control.
- **Test.** If it's code, run it. If it's a procedure, try it.
- **Cross-check.** Ask a second model, or the same model in a fresh chat, and compare. Disagreement is a signal to dig.
- **Ask about uncertainty.** "Which of these claims are you least confident in?" often surfaces the weak points.

### Self-critique is useful but limited

Asking a model to "check your answer" sometimes catches real errors. It also sometimes invents problems that weren't there, or confidently confirms a mistake. It's a reasonable first pass, never a replacement for an outside check.

## 4. Practice: find the problems

Your handout has five AI-generated answers. Some are subtly wrong. For each one, decide whether it is right, wrong, or impossible to tell from what you have, and write down **how you know**. Work individually for 15 minutes, then compare with a neighbor.

> **Instructor note: debrief.** Go through each answer and reveal the planted error. Ask which errors were caught and which were missed, and why. The arithmetic error is usually missed by students who don't recompute; the misread-instruction case is often missed by everyone. Ask: what was your fastest reliable check?

## Coming up Thursday

Does a bigger model or more thinking fix these errors? And a lab in which you try to make an AI fail in your own field.

## Key terms

**Hallucination**: plausible but invented output. **Sycophancy**: agreeing with the user rather than with the evidence. **Discernment**: judging whether output is accurate, sourced, and fit for purpose.

> **Instructor note: book links.** Why Hallucinations Happen; What Language Models Cannot Do.
