---
marp: true
title: "Week 1: Vendors, models, and effort"
paginate: true
---

# Vendors, models, and effort
### Week 1
COSC-300/500 Applied AI Essentials

---

## Company, model, product

| | What it is | Examples |
|---|---|---|
| **Company** | Builds and sells the technology | Anthropic, OpenAI, Google |
| **Model** | Reads your text, writes the reply | Claude Sonnet, Gemini |
| **Product** | The software you open | Claude app, ChatGPT, Copilot |

- One product can use several models
- One model can sit inside several products

<!-- Ask: when someone says "I asked ChatGPT", which of the three do they mean? -->

---

## Who makes the models

- **Anthropic**: Claude
- **OpenAI**: ChatGPT, Codex
- **Google**: Gemini
- **Microsoft**: Copilot (built largely on OpenAI models, and now some Anthropic models)
- **Meta**: Muse, Llama
- **Open-weight models**: download and run them yourself

<!-- Verify the current Copilot model mix before class. Our Maryville account showed only GPT 5.6 Sol on 2026-10-03. -->

---

## Model tiers

Most vendors offer a family:

| Tier | Trade-off | Claude example |
|---|---|---|
| Large | Most capable, slowest, most costly | Opus |
| Middle | Balanced | Sonnet |
| Small | Fast and cheap | Haiku |

Bigger isn't always better: pick for the task.

<!-- Anthropic now also has a tier above Opus, called Fable. Names change; the large, middle, small pattern holds. -->

---

## Effort and "thinking"

- **Reasoning models** think before answering
- More thinking → better on hard, multi-step problems
- Costs: slower answers and more usage
- Often wasted on simple tasks

**Choosing a model and an effort level** is a skill you'll use all term.

---

## What it costs

- **Time**: a large model at high effort can take a minute or more
- **Allowance**: Claude Pro has a five-hour limit and a weekly limit, shared across all models
- Larger models and higher effort use the allowance faster

Check yours: **Settings**, then **Usage**

---

## Choosing: a default

1. **Start in the middle**: middle model, default effort
2. **Move up** when the answer is wrong, not merely plain
3. **Move down** for quick or repeated work
4. **Check your prompt** before you move up

---

## Three tasks

| Task | Reasonable choice |
|---|---|
| Make an email sound friendlier | Small or middle, low effort |
| Turn a 30-page reading into a study guide | Middle, default effort |
| Find the flaw in a budget that doesn't add up | Large, or higher effort |

<!-- Ask the class to place two tasks of their own before showing the lab. -->

---

## Which model am I using?

- In Claude: the menu **next to the send button** shows the model and effort
- Select the model name to change it; **Effort** is in the same menu
- No menu in a tool? It chose for you
- Don't ask the AI which model it is. It often gets this wrong

<!-- Show the menu live. Steps checked 2026-11-13 against support.claude.com. -->

---

## What you can choose, by tool

| Tool | Models | Effort control |
|---|---|---|
| Claude Pro | Several, from a menu | Yes, Low to Max |
| Copilot Chat (Maryville) | One model on our test account | Quick / Think deeper / Auto |
| Free tiers | Smaller models | Limited |

<!-- Re-check each picker the week of class; these change often. -->

---

## Model cards and system cards

- The vendor's own description of a model: what it can do, how it was tested, where it falls short
- Best single source for a model's cutoff date and test results
- Written by the seller, so read it that way
- Anthropic's: anthropic.com/system-cards
