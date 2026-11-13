# Week 12, Session 2: MCP from the Inside and Capstone Checkpoint

**COSC-300/500 Applied AI Essentials** · Surface: S8 API and agent platforms · Capability: C6 MCP connectors · 4D focus: Discernment

> **Instructor note: preparation.** Prepare a minimal MCP server with one tool and one resource, using the current MCP SDK syntax (the outline below is illustrative; check it). Have the MCP Inspector installed and know how to add a local server to Claude Code. Note for Track B students: Claude's custom remote connectors connect from Anthropic's cloud, so a server running on a laptop won't be reachable that way without a tunnel; adding it to Claude Code as a local server is the simpler route. Timing: 15 min MCP, 45 min lab, 15 min capstone checkpoint.

## What you will be able to do after this session

- Explain how an MCP server exposes tools and resources to an agent.
- Test a server and connect it to an agent.
- Give a concise status update on your capstone.

## 1. MCP from the inside

In week 8 you **used** connectors. Now you'll see how one is built. An MCP server is a small program that tells an agent what it offers:

- **Tools**: actions the agent can take, such as `add_event` or `search_notes`.
- **Resources**: data the agent can read, such as a course schedule or a dataset.

The agent sees each tool's name and description, exactly as it saw skill descriptions in week 7 and tool definitions last week, and decides when to use them.

### A tiny server, in outline

```python
@server.tool()
def next_class(course: str) -> str:
    """Return the date and time of the next meeting for a course code, e.g. COSC-300."""
    return schedule[course]
```

The docstring, the text in triple quotes, becomes the tool's **description**. It is what the agent reads to decide when to call the tool, so write it with care.

### Test, then connect

1. Use the **Inspector** to call each tool by hand and check the results.
2. Add the server to **Claude Code** or Cowork.
3. Ask a question that should use it.
4. Check: did the agent call the right tool, with the right inputs?

> **Instructor note: demo.** Show your server in the Inspector, then connect it to Claude Code and ask a question that triggers it. Then ask a question that shouldn't, and show the agent leaving it alone.

## 2. Lab

Continue your track. By the end of today you should have run your test set at least once and recorded the results, including failures.

> **Instructor note.** Track C students sometimes underestimate the work of writing good test cases. Check that their 20 items include genuinely hard cases, not just easy ones.

## 3. Responsible use

- **Grounding doesn't guarantee accuracy.** A system that cites its sources can still misread them or retrieve the wrong ones.
- **Evaluation is an accountability tool.** It's how you show, rather than claim, that a system works.
- An MCP server you build can be called by an agent you don't fully control. Give it only the access it needs, and think about what an injected instruction (week 8) could make it do.

## 4. Capstone checkpoint

Each student gives a **3-minute** update:

- what you're building;
- what works so far;
- what's blocking you;
- how you'll evaluate it.

> **Instructor note.** Keep strict time. Note students who are blocked and follow up individually this week.

## Assignment: Mini RAG app, MCP server, or tool evaluation

Choose one track:

- **Track A (RAG):** a question-answering program over 10–30 documents that cites its sources.
- **Track B (MCP):** a small MCP server exposing two tools or resources, connected to Claude.
- **Track C (analysis):** an evaluation of an existing tool on a 20-item test set.

**All tracks submit:** a test set of at least 15 cases, the results, and a 400-word discussion of the failures.

**500 extension:** use both model-based and code-based grading, and check the model grader's agreement with your own judgment on a sample.

**Also due: capstone checkpoint.**

**Estimated time:** 4–5 hours.

## Before next week

- Read the posted summary of Meta Muse (facts and privacy settings) and Meta's own Muse help pages.
- Claude Academy: **Building effective human-agent teams** (beta).
- Optional: **Introduction to Claude Tag**.
- Optional: **AI Fluency: Framework and foundations**, lesson 12.
- Journal entry.

## Key terms

**MCP server**: a program that exposes tools and resources to AI applications over the Model Context Protocol. **Inspector**: a tool for testing an MCP server by hand.
