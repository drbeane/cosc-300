# Week 11: Tool Use

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Prepare a demo program with one tool (a calculator or a fake weather lookup) that prints every message exchanged so the class can trace the round trip. Check the current tool-definition format for your API route. Timing: 20 min tool use, 10 min workflows vs agents, 35 min lab, 10 min share-out.

## What you will be able to do

- Explain tool use: the model asks for a tool, the program runs it, the result goes back.

A model on its own can only produce text. It can't look up today's weather, read a file, or do exact arithmetic reliably. **Tool use** (also called function calling) gives it a way to ask your program to do those things.

## The round trip

1. Your program sends a request that includes **tool definitions**: the name of each tool, a description, and the inputs it takes.
2. The model replies, not with an answer, but with a **tool request**: "call `convert_units` with value 5, from miles, to kilometers."
3. **Your program** runs the function.
4. Your program sends the **result** back to the model.
5. The model uses the result to write its final answer.

The model never runs anything itself. It asks; your program decides whether and how to act.

## A tool definition

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

## Key terms

**Tool use (function calling)**: a model requesting that a program run a defined function. **Tool definition**: a tool's name, description, and input format.
