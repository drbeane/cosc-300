# Week 11, Session 1: From Chat to API

**COSC-300/500 Applied AI Essentials** · Surface: API and agent platforms · Capability: Model selection · 4D focus: Description

> **Instructor note: preparation.** API access for weeks 11–12 is still an open decision: Claude Pro does not include API usage, and the likely route is the department's Bedrock account plus a local open model. Before this week, settle the route, provision credentials or a shared proxy with spend limits, and prepare starter code. The request examples below use the shape of Anthropic's Messages API; Bedrock's request format differs slightly, so adjust the examples and give students a short adapter note. Replace the placeholder model ID with the exact one for your route. Timing: 15 min chat to API, 20 min live build, 10 min cost, 30 min guided practice.

## What you will be able to do after this session

- Explain what an API call to a model contains.
- Make an API call from a short program, handle a multi-turn conversation, and request structured output.
- Estimate the cost of a call from its token counts.

## 1. An exploratory week

This week and next you'll build small AI programs. You won't be writing the code by hand: Claude Code writes it while you specify what you want, run it, and inspect the results. The aim is to understand how the AI products you've used all term are put together, not to become a software engineer in two weeks.

## 2. What the apps do behind the scenes

Every chat app, copilot, and agent you've used does roughly the same thing:

1. It builds a **request**: instructions, the conversation, any files, and the tools available.
2. It sends the request to a model through an **API** (application programming interface).
3. It receives a **response**.
4. It does something with the response: shows it, runs a tool, saves a file.

Companies build products on this loop. When you understand it, the behavior of the tools you've used makes more sense.

## 3. Anatomy of an API call

Here is the shape of a simple request:

```json
{
  "model": "MODEL-ID",
  "system": "You are a concise tutor for first-year students.",
  "messages": [
    {"role": "user", "content": "Explain recursion in three sentences."}
  ],
  "max_tokens": 500,
  "temperature": 0.7
}
```

| Part | What it does |
|---|---|
| **model** | Which model answers |
| **system** | The system prompt: standing instructions for this program |
| **messages** | The conversation so far, as alternating user and assistant turns |
| **max_tokens** | The maximum length of the response |
| **temperature** | How much randomness in sampling (week 1); lower is more predictable |

### The model remembers nothing

Each API call is **independent**. The model has no memory of earlier calls. A "conversation" is something your program creates by sending the entire history again with every new message. That explains two things you've seen all term: long conversations cost more, because more is sent each time, and they degrade, because the context fills up.

## 4. Live build

> **Instructor note: live build.** Using Claude Code, build in front of the class: (1) a first call that prints the response, (2) a system prompt that changes the behavior, (3) the same prompt at two temperatures, run a few times each, (4) a loop that keeps a multi-turn conversation by appending to the messages list, (5) a request for structured JSON output, with the program parsing it. Narrate what Claude Code writes and run each step.

### Structured output

Programs often need data, not prose. You can ask a model to respond in **JSON** that matches a format you describe, for example `{"term": "...", "definition": "...", "example": "..."}`. Your program can then use the fields directly. Check that what comes back actually matches the format; a program that assumes it does will break when it doesn't.

## 5. Cost and tokens

API responses report how many tokens were used: **input tokens** (everything you sent) and **output tokens** (what the model wrote). Price is tokens multiplied by the model's rate, and output tokens usually cost more than input tokens. To estimate a monthly bill for an application:

> calls per day × average tokens per call × price per token × days

Your **Claude Pro subscription does not include API usage**. API use is billed separately, which is why the course provides access for these two weeks.

## 6. Guided practice

By the end of class, everyone should have a working first program that:

- uses a system prompt for a specific job you choose;
- returns JSON;
- prints the token usage for each call.

> **Instructor note.** Have the starter code ready for students whose setup fails, so the session isn't lost to configuration. Remind students that their API credentials are secrets.

## Coming up Thursday

Tool use: how a model asks a program to run a function. Then you'll add a tool to your program.

## Key terms

**API**: an interface that lets programs talk to a service. **System prompt**: standing instructions for a program's model calls. **Temperature**: a setting controlling randomness in sampling. **Input and output tokens**: the tokens sent to and produced by the model, both billed. **Structured output**: a response in a machine-readable format such as JSON.

> **Instructor note: book links.** From Chat to API; selected AI Engineering lessons on structured output and tool use. Academy's **Claude with Amazon Bedrock** matches the likely access route; consider assigning its first section in place of the direct-API sections.
