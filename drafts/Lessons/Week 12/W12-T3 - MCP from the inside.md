# Week 12: MCP from the inside

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a minimal MCP server with one tool and one resource, using the current MCP SDK syntax (the outline below is illustrative; check it). Have the MCP Inspector installed and know how to add a local server to Claude Code. Note for Track B students: Claude's custom remote connectors connect from Anthropic's cloud, so a server running on a laptop won't be reachable that way without a tunnel; adding it to Claude Code as a local server is the simpler route. Timing: 15 min MCP, 45 min lab, 15 min capstone checkpoint.

## What you will be able to do

- Explain how an MCP server exposes tools and resources to an agent.
- Test a server and connect it to an agent.

In week 8 you **used** connectors. Now you'll see how one is built. An MCP server is a small program that tells an agent what it offers:

- **Tools**: actions the agent can take, such as `add_event` or `search_notes`.
- **Resources**: data the agent can read, such as a course schedule or a dataset.

The agent sees each tool's name and description, exactly as it saw skill descriptions in week 7 and tool definitions last week, and decides when to use them.

## A tiny server, in outline

```python
@server.tool()
def next_class(course: str) -> str:
    """Return the date and time of the next meeting for a course code, e.g. COSC-300."""
    return schedule[course]
```

The docstring, the text in triple quotes, becomes the tool's **description**. It is what the agent reads to decide when to call the tool, so write it with care.

## Test, then connect

1. Use the **Inspector** to call each tool by hand and check the results.
2. Add the server to **Claude Code** or Cowork.
3. Ask a question that should use it.
4. Check: did the agent call the right tool, with the right inputs?

> **Instructor note: demo.** Show your server in the Inspector, then connect it to Claude Code and ask a question that triggers it. Then ask a question that shouldn't, and show the agent leaving it alone.

## Key terms

**MCP server**: a program that exposes tools and resources to AI applications over the Model Context Protocol. **Inspector**: a tool for testing an MCP server by hand.
