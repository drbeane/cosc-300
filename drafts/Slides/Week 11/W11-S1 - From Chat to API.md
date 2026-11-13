---
marp: true
title: "Week 11 · Session 1: From Chat to API"
paginate: true
---

# AI Engineering I: Models as Components
### Week 11 · Session 1
**4D focus: Description**

---

## Today

| Time | |
|---|---|
| 15 min | From chat to API |
| 20 min | Live build: a first API call |
| 10 min | Cost and tokens |
| 30 min | Guided practice: your first program |

---

## An exploratory week

- You'll **build** a small AI program
- Claude Code writes the code; you specify, run, and inspect
- The goal is **understanding** how AI products are put together, not engineering fluency

---

## What the apps do behind the scenes

Every chat app, copilot, and agent:

1. Builds a **request**: instructions, messages, files, tools
2. Sends it to a model through an **API**
3. Gets a **response**
4. Does something with it

Companies build products on that loop.

---

## Anatomy of an API call

```json
{
  "model": "claude-sonnet-...",
  "system": "You are a concise tutor.",
  "messages": [
    {"role": "user", "content": "Explain recursion."}
  ],
  "max_tokens": 500,
  "temperature": 0.7
}
```

<!-- Use the exact model ID and request format for the access route chosen (Bedrock differs slightly from the direct API). -->

---

## The pieces

| Part | What it does |
|---|---|
| **model** | Which model answers |
| **system** | Standing instructions |
| **messages** | The conversation so far |
| **max_tokens** | Cap on response length |
| **temperature** | How much randomness (week 1's sampling) |

---

## The model remembers nothing

- Each call is **independent**
- A "conversation" = you resend the whole history every time
- That's why long chats cost more and degrade

---

## Live build

1. A first call
2. Add a system prompt
3. Change the temperature: same prompt, different runs
4. A multi-turn loop
5. Ask for **structured JSON** output

---

## Cost and tokens

- The response reports **input** and **output** tokens
- Price = tokens × rate (output usually costs more)
- Estimate: calls per day × tokens per call × price

> Your Claude Pro subscription does **not** include API usage. It's billed separately.

---

## Guided practice

Everyone leaves with a **working first program**:

- System prompt for a specific job
- Returns JSON
- Prints the token usage

---

## Next session

- Tool use: how a model calls a function
- Workflows vs agents
- Lab: add a tool to your program
