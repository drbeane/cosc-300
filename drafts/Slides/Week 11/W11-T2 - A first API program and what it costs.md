---
marp: true
title: "Week 11: A first API program and what it costs"
paginate: true
---

# A first API program and what it costs
### Week 11
COSC-300/500 Applied AI Essentials

---

## A first program

```python
client = Anthropic()   # key comes from the environment

response = client.messages.create(
    model="MODEL-ID",
    max_tokens=500,
    system="You are a concise tutor.",
    messages=[{"role": "user", "content": "Explain recursion."}],
)

print(response.content[0].text)
print(response.usage)
```

Same parts as the request: model, limit, system prompt, messages.

<!-- Use the code for the access route chosen. Claude Code writes it; students recognize the parts. -->

---

## Live build

1. A first call
2. Add a system prompt
3. Change the temperature: same prompt, different runs
4. A multi-turn loop
5. Ask for **structured JSON** output

---

## The system prompt does the specializing

| System prompt | Reply to "Explain recursion" |
|---|---|
| "A concise tutor for first-years" | Three plain sentences |
| "A strict code reviewer" | "No code was provided" |
| "Only the course catalog" | A polite refusal |

Many products are a system prompt, some tools, and an interface.

---

## Keeping a conversation

1. Add the user's message to a list
2. Send the **whole list**
3. Add the reply to the list
4. Repeat

Your program, not the model, decides what a conversation remembers.

---

## Structured output

```json
{
  "term": "recursion",
  "definition": "A function solving a problem by calling itself on a smaller version.",
  "example": "Counting files folder by folder."
}
```

- **Validate** before you use it
- Use the API's schema feature where there is one
- Valid JSON can still be wrong

---

## Cost and tokens

- The response reports **input** and **output** tokens
- Price = tokens × rate (output usually costs more)
- Estimate: calls per day × tokens per call × price

> Your Claude Pro subscription does **not** include API usage. It's billed separately.

---

## A worked example

Example rates: $3 per million in, $15 per million out.

| | Tokens | Cost |
|---|---|---|
| Input | 1,200 | $0.0036 |
| Output | 300 | $0.0045 |
| **Total** | | **$0.0081** |

200 students × 10 calls × 30 days ≈ **$486 a month**

<!-- Look up the current price list for the model in use and redo the sum live. -->

---

## What drives the cost

- Long conversations: history is resent every turn
- Big system prompts and many tools
- Long outputs
- A bigger model than the task needs
- Agent loops

A subscription has a ceiling. The API doesn't, unless you set one.

---

## Keeping the key safe

- Never in your code
- Never committed
- Never pasted into a chat
- Leaked? **Revoke it**
- Set a **spending limit**
