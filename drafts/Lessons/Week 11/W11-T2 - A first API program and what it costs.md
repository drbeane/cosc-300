# Week 11: A first API program and what it costs

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Make an API call from a short program, handle a multi-turn conversation, and request structured output.
- Estimate the cost of a call from its token counts.

## Live build

> **Instructor note: live build.** Using Claude Code, build in front of the class: (1) a first call that prints the response, (2) a system prompt that changes the behavior, (3) the same prompt at two temperatures, run a few times each, (4) a loop that keeps a multi-turn conversation by appending to the messages list, (5) a request for structured JSON output, with the program parsing it. Narrate what Claude Code writes and run each step.

### Structured output

Programs often need data, not prose. You can ask a model to respond in **JSON** that matches a format you describe, for example `{"term": "...", "definition": "...", "example": "..."}`. Your program can then use the fields directly. Check that what comes back actually matches the format; a program that assumes it does will break when it doesn't.

## Cost and tokens

API responses report how many tokens were used: **input tokens** (everything you sent) and **output tokens** (what the model wrote). Price is tokens multiplied by the model's rate, and output tokens usually cost more than input tokens. To estimate a monthly bill for an application:

> calls per day × average tokens per call × price per token × days

Your **Claude Pro subscription does not include API usage**. API use is billed separately, which is why the course provides access for these two weeks.

## Key terms

**Input and output tokens**: the tokens sent to and produced by the model, both billed. **Structured output**: a response in a machine-readable format such as JSON.
