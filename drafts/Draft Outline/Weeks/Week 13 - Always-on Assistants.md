# Week 13: Always-on Assistants (Meta Muse)

**Surfaces:** Always-on personal agent [D, hands-on here], Cloud and background agents [S] · **Capabilities:** Plan mode and autonomy controls [E], MCP connectors [S] · **4D:** Diligence

The last step on the autonomy ladder: an agent that keeps working while you are away, acts across your accounts, and checks in when it needs you. Placed late so students bring connectors, permissions, prompt injection, and evaluation to it.

## Goals
Students will be able to:
- Describe how an always-on agent differs from a scheduled task and a local agent: its own cloud computer, persistent operation, notifications, and approvals.
- Set up an always-on assistant safely: a minimal set of connections, read-only where possible, approvals for anything that spends money or sends messages.
- Run, monitor, and audit a multi-day task.
- Weigh the privacy and security trade-offs: training defaults, vendor access to data, prompt injection.

## Before class
- Read: Evidence 19 summary (Muse facts, privacy settings) and Meta's Muse help pages (link to be added once verified).
- Claude Academy: **Building effective human-agent teams** (beta).
- Optional: **Introduction to Claude Tag** (a team-based proactive agent, for comparison).
- Optional: **AI Fluency: Framework and foundations**, lesson 12 (Diligence).

## Session 1 (75 min)
- 15 min: The always-on landscape. Meta Muse (free tier), OpenAI dots (on $100+ plans), OpenClaw (open source, self-hosted), and Claude's scheduled and handed-off tasks for comparison.
- 20 min: Demo. Muse set up with a throwaway account, one connection, approvals on; a task that runs over several days.
- 10 min: Settings walk-through: training opt-out, permissions (read vs send), purchase approvals.
- 30 min: Guided setup (or paired with an instructor account for students who cannot sign up).

## Session 2 (75 min)
- 20 min: Risks. Prompt injection on an agent that reads your email and the web; vendor data access; mistakes that happen while you are not watching. Meta itself says injection is unresolved.
- 10 min: When is an always-on agent worth it? Compare with a scheduled Cowork task for the same job.
- 35 min: Lab: launch the field-test task.
- 10 min: Monitoring plan for the week.

## Assignment: Always-on agent field test
Give the assistant a low-stakes task that runs over 3–5 days (for example, monitor a few sources and send a daily digest; track prices on an item without buying it; maintain a running list from messages you forward). Keep a log of each check-in, approval, and error. Submit the setup (permissions granted and refused, with reasons), the log, and a 500-word assessment: did it save effort, what went wrong, and would you trust it with more access?
- **500 extension:** run the same task as a scheduled task in Claude and compare reliability, effort, and risk.
- Estimated time: 3 hours spread across the week.

## Responsible use
Throwaway accounts only; no school, work, or financial accounts connected; nothing that sends or buys without approval.

## Other resources
From `03 - Supplementary Resources` (links there):
- The Neuron, *How to get started with Meta Muse*
- News on Muse privacy defaults (two articles)
- Re-read *The lethal trifecta*

## Instructor notes
- Muse is for US adults 18+ and requires a payment card at signup, even on the free tier (third-party reports; verify on Meta's pages). Plan an instructor demo account as the fallback.
- Training on interaction data is on by default; walk students through the opt-out.
- This week does not use the Claude subscription for its main task; that fits the course's vendor-plural design.
