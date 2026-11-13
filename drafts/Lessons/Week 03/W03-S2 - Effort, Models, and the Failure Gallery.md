# Week 3, Session 2: Effort, Models, and the Failure Gallery

**COSC-300/500 Applied AI Essentials** · Surface: Chat assistant · Capability: Model selection and effort levels · 4D focus: Discernment

> **Instructor note: preparation.** Choose two or three problems where a fast model reliably fails but a reasoning model or larger model does better: a multi-step word problem, a logic puzzle with a trap, a question needing careful counting. Test them the day before; model behavior shifts. Set up a shared board (Canvas discussion, a shared doc, or a whiteboard) for the failure gallery. Timing: 15 min effort demo, 50 min lab, 10 min share-out.

## What you will be able to do after this session

- Judge when a larger model or more effort is likely to help, and when it won't.
- Use the Description–Discernment loop instead of accepting the first answer.
- Produce and document a genuine AI failure in your own field.

## 1. Does a bigger model or more thinking help?

On Tuesday we listed six ways AI gets things wrong. Some of them respond to more capability; others don't.

> **Instructor note: live test.** Run each prepared problem with a fast model, the same model with more effort, and a larger model. Fill in the table on the board.

| Setting | Right? | Time | Notes |
|---|---|---|---|
| Fast model | | | |
| Same model, more effort | | | |
| Larger model | | | |

What to expect:

- More effort helps most on **multi-step reasoning**, where thinking through the problem catches slips.
- It helps little with **missing knowledge**. If the model doesn't know a fact, thinking longer won't produce it, and may produce a more elaborate wrong answer.
- It doesn't fix **missing sources**. If the answer needs a document or a current fact, you need a tool or an upload, not more effort.
- It always costs more time and more of your usage allowance.

So the right question is not "which is the best model?" but "what kind of error am I trying to avoid?"

## 2. The Description–Discernment loop

The *AI Fluency* course describes working with AI as a loop:

1. **Describe** the task.
2. **Discern**: check what comes back.
3. Feed what you found back into the description: add the missing context, correct the misunderstanding, point out the error.
4. Repeat until the result is good enough for its purpose.

Experienced users rarely accept a first answer for anything that matters. They treat it as a draft and use their checking to steer the next round.

## 3. Lab: make an AI fail in your own field

Choose a topic you know well, from your major, your job, a hobby, or where you grew up. Try to get a confident, wrong answer. Then document:

- the prompt;
- the output;
- **how you detected the error**;
- how you fixed it: by changing the prompt, the model, or the effort level, or by supplying a source.

Strategies that tend to work:

- Ask for specific citations or quotations.
- Ask about something local, niche, or recent.
- Ask for exact figures.
- Ask a leading question that assumes something false.
- Ask for a long chain of reasoning.

> **Instructor note.** Some students will struggle to find a failure on easy topics and conclude the AI is always right. Push them toward specifics: exact dates of local events, the content of a particular page of a textbook, the details of a niche rule in their field. Others will produce "failures" that are really ambiguous questions; ask them whether a knowledgeable person would agree the answer is wrong.

## 4. The failure gallery

Post your best failure to the class board, labeled with its error type from Tuesday's list. As a class we'll look for patterns: which error types were most common, and which fields were most affected. We'll come back to this gallery in week 14 when we discuss the risks of using AI in organizations.

## 5. Responsible use

You are responsible for what you submit or send, regardless of who or what drafted it. "The AI said so" is not a source. When AI helped with your work, disclose it.

## Assignment: Fact-check and failure report

**Part A.** Take a 600–800 word AI-generated explainer on a topic you know well. Verify every factual claim and annotate each as correct, wrong, or unverifiable, with a source for your judgment.

**Part B.** Document two failures of your own: the prompt, the output, how you caught the error, and how you fixed it.

**500 extension:** for each failure, test whether a higher effort setting or a different model fixes it, and report the result.

**Estimated time:** 3 hours.

## Before next week

- Claude Academy: **Claude 101** (the lessons on projects and research).
- Gather **5–10 sources** (PDFs, articles) on a topic you'd like to research for next week's brief.
- Journal entry.

> **Instructor note.** The failure gallery is reused in week 14. Save a copy at the end of class.
