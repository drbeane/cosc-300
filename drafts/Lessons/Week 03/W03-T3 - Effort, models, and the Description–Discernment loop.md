# Week 3: Effort, models, and the Description–Discernment loop

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Choose two or three problems where a fast model reliably fails but a reasoning model or larger model does better: a multi-step word problem, a logic puzzle with a trap, a question needing careful counting. Test them the day before; model behavior shifts. Set up a shared board (Canvas discussion, a shared doc, or a whiteboard) for the failure gallery. Timing: 15 min effort demo, 50 min lab, 10 min share-out.

## What you will be able to do

- Judge when a larger model or more effort is likely to help, and when it won't.
- Use the Description–Discernment loop instead of accepting the first answer.

## Does a bigger model or more thinking help?

Earlier this week we listed six ways AI gets things wrong. Some of them respond to more capability; others don't.

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

## The Description–Discernment loop

The *AI Fluency* course describes working with AI as a loop:

1. **Describe** the task.
2. **Discern**: check what comes back.
3. Feed what you found back into the description: add the missing context, correct the misunderstanding, point out the error.
4. Repeat until the result is good enough for its purpose.

Experienced users rarely accept a first answer for anything that matters. They treat it as a draft and use their checking to steer the next round.
