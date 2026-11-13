---
marp: true
title: "Week 13: Always-on agents"
paginate: true
---

# Always-on agents
### Week 13
COSC-300/500 Applied AI Essentials

---

## The top of the autonomy ladder

1. Chat
2. Grounded in sources
3. Acting on your computer
4. Building software
5. Building with models
6. **Working while you're away** ← this week

---

## What makes an agent "always-on"

- Its **own cloud computer** with a browser
- Keeps working after you close the app
- Acts across **your accounts**
- **Checks in** when it needs approval

---

## Compared with what you've used

| | Local agent | Scheduled task | Always-on agent |
|---|---|---|---|
| Runs | When you start it | On a timetable | Continuously |
| Where | Your computer | Vendor's cloud | Vendor's cloud |
| Decides when to act | No | No | **Yes** |

---

## Triggers and check-ins

**Trigger**: what makes the agent act
- You (local agent) · the clock (scheduled task) · **events** (always-on)

**Check-in**: the agent contacts you
- to report, to ask, or to request approval

Check-ins arrive in a messaging app: easy to answer, easy to approve without reading.

---

## What they're good for

- **Watching**: prices, postings, news, page changes
- **Triage**: what needs your attention?
- **Event-driven routines**
- **Long-running errands** with waiting built in

The timing is set by the world, not by you.

---

## How supervision changes

| Stage | When you check the work |
|---|---|
| Chat | Every reply |
| Local agent | Plan, approvals, result |
| Scheduled task | After each run |
| Always-on | When it checks in, and when you choose to look |

You have to create the moments.

---

## The landscape

- **Meta Muse**: free tier; Muse app, WhatsApp, web
- **OpenAI dots**: on ChatGPT Pro ($100+) plans
- **OpenClaw**: open source, self-hosted
- **Claude**: scheduled and handed-off tasks, for comparison

<!-- Verify current Muse tiers, limits, and eligibility on Meta's own pages before class. -->
