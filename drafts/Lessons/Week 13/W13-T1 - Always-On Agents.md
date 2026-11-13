# Week 13: Always-On Agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

> **Instructor note: preparation.** Everything about Muse in this lesson comes from news and third-party reports (launched 2026-09-08; US adults 18+; payment card at signup even for the free tier; training on interaction data on by default; free, $20, and $100 tiers). Verify each point on Meta's own pages before class and correct this text if anything has changed. Set up the instructor demo account with a throwaway identity, one low-risk connection, and approvals on, and start a multi-day task a few days early so you can show its history. Students who are under 18, outside the US, or unwilling to give a card will pair with the demo account; say this without making anyone explain why. Timing: 15 min landscape, 20 min demo, 10 min settings, 30 min guided setup.

## What you will be able to do

- Describe how an always-on agent differs from a scheduled task and a local agent.

## The top of the autonomy ladder

At the start of the course you saw the plan: chat, then grounding in sources, then acting on your computer, then building software, then building with models directly, and finally agents that work while you're away. This is that final step.

## What makes an agent "always-on"

An **always-on agent** has a few defining features:

- It runs on its **own computer in the cloud**, usually with its own browser.
- It **keeps working after you close the app**.
- It acts across **your accounts**: email, calendar, messaging, shopping sites.
- It **checks in** when it needs a decision or an approval.

### Compared with what you've used

| | Local agent (week 6) | Scheduled task (week 8) | Always-on agent |
|---|---|---|---|
| When it runs | When you start it | On a timetable | Continuously |
| Where it runs | Your computer | The vendor's cloud | The vendor's cloud |
| Decides for itself when to act | No | No | **Yes** |

That last row is the important one. An always-on agent watches for things and decides when to act, which is what makes it useful and what makes it risky.

## The landscape

- **Meta Muse**: Meta's personal agent, launched in September 2026. Reached through the Muse app, WhatsApp, and the web. Has a free tier.
- **OpenAI dots**: an always-on agent available on OpenAI's ChatGPT Pro plans ($100 a month and up).
- **OpenClaw**: open-source software you run yourself, on a machine that stays on, with your own model access. Powerful and demanding; it carries real security risk if misconfigured.
- **Claude**: Claude doesn't currently offer an always-on agent. Its scheduled and handed-off tasks, which you used in week 8, are the comparison point.

This week we use **Muse**, because its free tier makes hands-on use possible without another subscription. That's also a good example of the course's approach: the right tool for each job, not one vendor for everything.

## Key terms

**Always-on agent**: an agent that runs continuously in the cloud, acts across your accounts, and checks in when needed.

> **Instructor note.** Book links: none specific; draw on Prompt Injection and Untrusted Input and Guardrails and Tool Permissions. This week does not use the Claude subscription for its main task, which fits the course's vendor-plural design.
