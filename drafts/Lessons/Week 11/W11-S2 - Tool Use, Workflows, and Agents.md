# Week 11, Session 2: Tool Use, Workflows, and Agents

**COSC-300/500 Applied AI Essentials** · Surface: S8 API and agent platforms · Capability: C5 · 4D focus: Description

> **Instructor note: preparation.** Prepare a demo program with one tool (a calculator or a fake weather lookup) that prints every message exchanged so the class can trace the round trip. Check the current tool-definition format for your API route. Timing: 20 min tool use, 10 min workflows vs agents, 35 min lab, 10 min share-out.

## What you will be able to do after this session

- Explain tool use: the model asks for a tool, the program runs it, the result goes back.
- Connect tool use to the agents you've used since week 6.
- Distinguish workflows from agents.
- Add a tool to your own program.

## 1. Tool use

A model on its own can only produce text. It can't look up today's weather, read a file, or do exact arithmetic reliably. **Tool use** (also called function calling) gives it a way to ask your program to do those things.

### The round trip

1. Your program sends a request that includes **tool definitions**: the name of each tool, a description, and the inputs it takes.
2. The model replies, not with an answer, but with a **tool request**: "call `convert_units` with value 5, from miles, to kilometers."
3. **Your program** runs the function.
4. Your program sends the **result** back to the model.
5. The model uses the result to write its final answer.

The model never runs anything itself. It asks; your program decides whether and how to act.

### A tool definition

```json
{
  "name": "convert_units",
  "description": "Convert a length between units. Use for any unit conversion question.",
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

Notice the **description**. Just as with skills in week 7, the model reads the description to decide when to use the tool. A vague description means the tool gets used at the wrong times, or not at all.

> **Instructor note: demo.** Run your traced program. On screen, find the tool definition in the request, the tool request in the model's reply, the tool result your program sends back, and the final answer. Then ask a question that shouldn't need the tool and show that the model answers directly.

## 2. This is what agents are

Everything you've used since week 6 is this round trip, repeated:

- When Cowork reads a file, that's a tool call.
- A connector is a set of tools made available over MCP.
- The agent loop is the round trip running again and again until the job is done, with a harness deciding which tool calls need your approval.

## 3. Workflows versus agents

There are two broad ways to build with models.

| Workflow | Agent |
|---|---|
| **You** fix the steps in code | **The model** decides the steps |
| Predictable | Flexible |
| Easier to test | Harder to test |

Common workflow patterns include **chaining** (the output of one call becomes the input of the next), **routing** (a first call decides which of several paths to take), and **parallelization** (several calls run at once and their results are combined). Many real products use workflows where they can and agents where they must.

## 4. Lab: add a tool to your program

Add a tool to the program you built on Tuesday. Pick one:

- a **unit converter**;
- a **lookup in a CSV file** (for example, your course schedule);
- a **date calculator** (days until a deadline).

Use Claude Code to write it; your job is to define what the tool does, write its description, and test it. Try questions that should use the tool and questions that shouldn't.

## 5. Share-out

What did the model do when your tool returned an error? Did it ever call the tool when it shouldn't have, or fail to call it when it should?

## 6. Responsible use

- **API keys are secrets.** Never put them in code you share or commit.
- **Set spend limits** on any account you use.
- Know what data the API provider **retains** from your requests.

## Assignment: First API program with tool use

Using Claude Code to write the code, build a small command-line or notebook program that (1) uses a system prompt for a specific job, (2) returns structured JSON, and (3) calls at least one tool you define.

**Submit:**
- The code.
- Three sample runs, each with its token usage and estimated cost.
- A 300-word explanation, in your own words, of what happens in one tool-use round trip.

**500 extension:** run the same program against a local open model as well as Claude, and compare quality, speed, and cost.

**Estimated time:** 3–4 hours.

## Before next week

- **Building with the Claude API**: watch the sections "Prompt evaluation," "RAG and agentic search," and "Model Context Protocol."
- Optional (500): **Model Context Protocol: Advanced topics**.
- Prepare a short capstone status update for Thursday.
- Journal entry.

## Key terms

**Tool use (function calling)**: a model requesting that a program run a defined function. **Tool definition**: a tool's name, description, and input format. **Workflow**: a fixed sequence of model calls defined in code. **Chaining, routing, parallelization**: common workflow patterns.
