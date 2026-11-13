# Week 11: Workflows and agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Connect tool use to the agents you've used since week 6.
- Distinguish workflows from agents.

## This is what agents are

Everything you've used since week 6 is this round trip, repeated:

- When Cowork reads a file, that's a tool call.
- A connector is a set of tools made available over MCP.
- The agent loop is the round trip running again and again until the job is done, with a harness deciding which tool calls need your approval.

## Workflows versus agents

There are two broad ways to build with models.

| Workflow | Agent |
|---|---|
| **You** fix the steps in code | **The model** decides the steps |
| Predictable | Flexible |
| Easier to test | Harder to test |

Common workflow patterns include **chaining** (the output of one call becomes the input of the next), **routing** (a first call decides which of several paths to take), and **parallelization** (several calls run at once and their results are combined). Many real products use workflows where they can and agents where they must.

## Key terms

**Workflow**: a fixed sequence of model calls defined in code. **Chaining, routing, parallelization**: common workflow patterns.
