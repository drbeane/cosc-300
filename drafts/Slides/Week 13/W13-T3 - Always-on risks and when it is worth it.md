---
marp: true
title: "Week 13: Always-on risks and when it is worth it"
paginate: true
---

# Always-on risks and when it is worth it
### Week 13
COSC-300/500 Applied AI Essentials

---

## Risk 1: prompt injection, everywhere

An always-on agent reads:

- your email
- the web
- messages from other people

Every one is untrusted input. Meta itself says prompt injection is **unresolved**.

---

## Risk 2: vendor data access

- The agent holds credentials to your accounts
- The vendor may access data to run and secure the service
- Training on your interactions unless you opt out

---

## Risk 3: mistakes while you're not watching

- No plan review before each action
- Errors compound over days
- You find out late, or not at all

**Week 8's dangerous combination, running 24/7.**

---

## When is it worth it?

Compare with a **scheduled Cowork task** for the same job:

| Question | Always-on | Scheduled task |
|---|---|---|
| Needs to react to events? | ✓ | |
| Fixed routine? | | ✓ |
| Easy to audit? | | ✓ |
| Access needed | Broad | Narrow |
