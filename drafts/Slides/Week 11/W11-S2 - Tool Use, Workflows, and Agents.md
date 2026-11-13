---
marp: true
title: "Week 11 · Session 2: Tool Use, Workflows, and Agents"
paginate: true
---

# Tool Use
### Week 11 · Session 2
**4D focus: Description**

---

## Today

| Time | |
|---|---|
| 20 min | Tool use (function calling) |
| 10 min | Workflows vs agents |
| 35 min | Lab: add a tool to your program |
| 10 min | Share-out |

---

## Tool use

The model can't run code or look things up on its own.

**Tool use** lets it ask *your program* to do it.

---

## The round trip

1. You send a request **with tool definitions**
2. The model replies: *"call `get_weather` with city = St. Louis"*
3. **Your program** runs the function
4. You send the result back
5. The model writes the final answer

---

## A tool definition

```json
{
  "name": "convert_units",
  "description": "Convert a value between units of length.",
  "input_schema": {
    "type": "object",
    "properties": {
      "value": {"type": "number"},
      "from": {"type": "string"},
      "to": {"type": "string"}
    },
    "required": ["value", "from", "to"]
  }
}
```

---

## Demo: trace the message blocks

- Calculator or weather tool
- Print every message as it goes back and forth
- Find the tool request, the tool result, the final answer

---

## This is what agents are

Weeks 6–8, from the inside:

- Cowork reading a file = a tool call
- A connector = a set of tools over MCP
- The agent loop = this round trip, repeated

---

## Workflows vs agents

| Workflow | Agent |
|---|---|
| **You** fix the steps in code | **The model** decides the steps |
| Predictable | Flexible |
| Easier to test | Harder to test |

Common workflow patterns: **chaining**, **routing**, **parallelization**.

---

## Lab: add a tool

Pick one:

- Unit converter
- Lookup in a CSV file
- Date calculator

Use Claude Code to write it. You define what it should do.

---

## Share-out

- What did the model do when your tool returned an error?
- Did it ever call the tool when it shouldn't have?

---

## Responsible use

- **API keys are secrets**: never in code you share
- Set **spend limits**
- Know what data the API provider **retains**

---

## Assignment: First API program with tool use

A program that uses a system prompt, returns JSON, and calls one tool you define. Submit code, 3 runs with token usage and cost, and 300 words explaining one tool-use round trip in your own words.

- **500 extension:** run it on a local open model too; compare quality, speed, cost
- About 3–4 hours

---

## Before next week

- **Building with the Claude API**: "Prompt evaluation", "RAG and agentic search", "Model Context Protocol" (watch)
- Optional (500): **Model Context Protocol: Advanced topics**
- Capstone checkpoint next week
