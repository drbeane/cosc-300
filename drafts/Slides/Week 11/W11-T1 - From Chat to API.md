---
marp: true
title: "Week 11: From Chat to API"
paginate: true
---

# From Chat to API
### Week 11
COSC-300/500 Applied AI Essentials

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
