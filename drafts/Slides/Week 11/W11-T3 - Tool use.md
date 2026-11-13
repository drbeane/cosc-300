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
