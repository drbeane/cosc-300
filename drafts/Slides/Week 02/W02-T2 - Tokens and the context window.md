---
marp: true
title: "Week 2: Tokens and the context window"
paginate: true
---

# Tokens and the context window
### Week 2
COSC-300/500 Applied AI Essentials

---

## Tokens

- Models read and write **tokens**, not words
- Roughly ¾ of a word each in English
- Everything costs tokens: your prompt, the files, the answer
- Usage limits and prices are counted in tokens

---

## How much is that?

| Text | Words | Tokens (about) |
|---|---|---|
| A short question | 15 | 20 |
| One page | 500 | 650 |
| A 10-page paper | 5,000 | 6,500 |
| A 300-page novel | 90,000 | 120,000 |

Code, tables, and other languages often take more.

---

## The context window

The model's **working memory** for one conversation.

- Counted in tokens
- Hundreds of thousands, and for some models a million or more
- Finite: when it's full, something has to go

<!-- Recheck current window sizes on the vendors' model pages before class. -->

---

## The model rereads everything, every time

- The model keeps no memory between messages
- Each turn, the product sends the **whole conversation** again
- Message 30 carries the 29 before it
- A new chat starts empty

What isn't in the context doesn't exist for the model.

<!-- This surprises students. It explains why long chats with big files burn through usage limits. -->

---

## What fills the context

- **System prompt**: the vendor's instructions (before you type)
- **Memory and custom instructions**
- **Conversation history**
- **Files** you attach
- **Tool results**: search results, code output

You control some of it, not all.

<!-- Demo: Context window budget. Add a long file, then a web search, and watch the bar fill. -->

---

## Why long chats degrade

- Early details get crowded out
- Old mistakes stay in context and get repeated
- The topic drifts
- The product may summarize or drop old messages

---

## Signs a chat has degraded

- It repeats a mistake you already corrected
- It forgets a constraint you set early
- It contradicts itself
- Answers get more generic

---

## Start fresh with a handoff

> Summarize what we've decided so far so I can continue in a new conversation. Include the goal, the decisions, the current draft, and what is still open. Leave out the approaches we rejected.

- One conversation per task
- Attach only what the task needs
- Edit and resend a message that went wrong
