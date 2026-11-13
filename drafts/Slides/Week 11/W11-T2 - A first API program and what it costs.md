---
marp: true
title: "Week 11: A first API program and what it costs"
paginate: true
---

# A first API program and what it costs
### Week 11
COSC-300/500 Applied AI Essentials

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
