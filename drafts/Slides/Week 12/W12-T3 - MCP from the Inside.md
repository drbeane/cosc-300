---
marp: true
title: "Week 12: MCP from the Inside"
paginate: true
---

# MCP from the Inside
### Week 12
COSC-300/500 Applied AI Essentials

---

## Recall week 8

You **used** connectors.

Now you see **how one is built**.

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
