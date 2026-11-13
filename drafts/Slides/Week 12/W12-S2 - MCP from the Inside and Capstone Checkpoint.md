---
marp: true
title: "Week 12 · Session 2: MCP from the Inside and Capstone Checkpoint"
paginate: true
---

# MCP from the Inside
### Week 12 · Session 2
**4D focus: Discernment**

---

## Today

| Time | |
|---|---|
| 15 min | MCP from the inside |
| 45 min | Lab |
| 15 min | Capstone checkpoint |

---

## Recall week 8

You **used** connectors.

Today you see **how one is built**.

---

## An MCP server exposes

- **Tools**: actions the agent can take
  - `add_event`, `search_notes`
- **Resources**: data the agent can read
  - your course schedule, a dataset

The agent sees names and descriptions, just like skills.

---

## A tiny server, in outline

```python
@server.tool()
def next_class(course: str) -> str:
    """Return the next meeting time for a course."""
    return schedule[course]
```

The **docstring** is what the agent reads to decide when to call it.

<!-- Use the current MCP Python SDK syntax; check before class. -->

---

## Test, then connect

1. **Inspector**: call each tool by hand
2. Add it to **Claude Code** or **Cowork**
3. Ask a question that should use it
4. Did the agent call the right tool with the right inputs?

> Claude's remote connectors connect from Anthropic's cloud; a server on your laptop needs a local route.

---

## Lab

- Continue your track
- Run your test set
- Record results and failures

---

## Responsible use

- **Grounding does not guarantee accuracy**
- Evaluation is an **accountability tool**: it's how you show a system works
- An MCP server you build can be called by an agent you don't fully control

---

## Capstone checkpoint

**3 minutes each:**

- What you're building
- What works so far
- What's blocking you
- What you'll evaluate

---

## Assignment: Mini RAG app, MCP server, or tool evaluation

All tracks: test set (15+ cases), results, 400-word discussion of failures

- **500 extension:** both code-based and model-based grading, with a check of the model grader against your own judgment on a sample
- About 4–5 hours
- **Also due: capstone checkpoint**

---

## Before next week

- Read: the posted Muse summary (facts and privacy settings) and Meta's Muse help pages
- Claude Academy: **Building effective human-agent teams** (beta)
- Optional: **Introduction to Claude Tag**
- Optional: **AI Fluency**, lesson 12
