# Week 8: Connectors, browser agents, background tasks, and agent security

**Surfaces:** Local agent [E], Cloud and background agents [S], Browser and computer-use agents [S] · **Capabilities:** MCP connectors [S], Plan mode and autonomy controls [E] · **4D:** Diligence

## Goals
Students will be able to:
- Connect an agent to an outside service with a connector (MCP) and explain what the connector lets it see and do.
- Use a browser agent for a web task and describe where browser agents fail.
- Hand off or schedule a task and review work done while away.
- Explain prompt injection and apply least privilege to an agent's tools and permissions.

## Before class
- Claude Academy: **Introduction to Model Context Protocol** (concept lessons; the build lessons return in week 12).
- Claude Academy: **Introduction to Claude Cowork**, lessons 9–11 (Claude in Chrome; Microsoft 365; working safely).

## Topics
1. Connectors
2. Browser agents and scheduled tasks
3. Prompt injection and defenses
- Lab and assignment: Midterm project: agent workflow

## Class time (two 75-minute meetings)
- 20 min: Connectors. What MCP is, as a user: connecting calendar, mail, storage, or a course tool. Read vs write permissions.
- 15 min: Browser and computer-use agents. Demo of a form-filling or research task; common failures.
- 10 min: Background and scheduled tasks. Handing off work, scheduling, reviewing results.
- 30 min: Midterm project workshop: plan and get approval.
- 30 min: Agent security. Prompt injection with a live (safe) demo: a web page or document with hidden instructions. Untrusted input, tool permissions, least privilege, and why the plan review from week 6 matters.
- 35 min: Midterm project lab.
- 10 min: Checklist for the risk note.

## Assignment: Midterm project: an agent workflow
Build a working agent workflow for a real recurring task that uses (1) at least one skill you wrote, (2) at least one connector or browser step, and (3) a scheduled or handed-off run. Submit the skills and instructions, evidence of two runs (outputs and screenshots), and a 2-page report: the task, the design, what the agent is allowed to touch and why, how you would detect a bad run, and one prompt-injection risk with a mitigation.
- **500 extension:** a threat model for the workflow (assets, entry points, mitigations) and one controlled test of a mitigation.
- Due end of week 8 (or start of week 9). Estimated time: 6–8 hours.

## Responsible use
Least privilege, connecting only accounts you own, keeping secrets out of prompts and files.

## Other resources
From `03 - Supplementary Resources` (links there):
- Simon Willison, *The lethal trifecta for AI agents*
- OWASP Top 10 for Agentic Applications (2026)
- modelcontextprotocol.io

## Instructor notes
- Book: Prompt Injection and Untrusted Input; Guardrails and Tool Permissions; Agent Files and Hooks (sub-agents and hooks, brief).
- Use only test accounts for injection demos.
