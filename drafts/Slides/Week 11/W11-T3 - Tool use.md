---
marp: true
title: "Week 11: Tool use"
paginate: true
---

# Tool use
### Week 11
COSC-300/500 Applied AI Essentials

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

## Message by message

"How far is a 5-mile run in kilometers?"

| # | Who | What |
|---|---|---|
| 1 | Program → model | Question + tool definition |
| 2 | Model → program | Request: `convert_units(5, miles, kilometers)` |
| 3 | Program | Runs the function: 8.04672 |
| 4 | Program → model | The tool result |
| 5 | Model → program | "About 8.05 kilometers." |

Two API calls. The arithmetic was done by ordinary code.

---

## The program is in control

- It can **refuse** a request
- It can **ask a person** (every approval prompt since week 6)
- It can **limit the loop**
- It should **check the inputs**: they're generated text

A failed tool? Send the error back in plain words.

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

## The description is the trigger

| Description | Verdict |
|---|---|
| "Converts things." | Too vague |
| "Use for any unit conversion question." | Promises too much |
| "Convert a length between miles, km, meters, feet. Don't use for weight, temperature, or currency." | What, when, and when not |

Same lesson as skills in week 7.

---

## Demo: trace the message blocks

- Calculator or weather tool
- Print every message as it goes back and forth
- Find the tool request, the tool result, the final answer
