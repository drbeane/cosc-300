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

## Risk 4: you stop paying attention

- Check-ins arrive among everything else
- After a week you approve without reading
- After a month you stop opening them

A reliable agent gives you less reason to look.

---

## Monitoring

| Check | How often |
|---|---|
| Activity history | Daily, for a new task |
| The output | Each time |
| Approval requests | Each one, **before** answering |
| Connections | Weekly |
| Is it still needed? | Monthly |

Decide in advance what would make you shut it off.

---

## When is it worth it?

Compare with a **scheduled Cowork task** for the same job:

| Question | Always-on | Scheduled task |
|---|---|---|
| Needs to react to events? | ✓ | |
| Fixed routine? | | ✓ |
| Easy to audit? | | ✓ |
| Access needed | Broad | Narrow |

<!-- Show the scheduled Cowork task beside the Muse task. Compare results, ease of audit, and access. -->

---

## Five questions

1. Does the timing depend on **events**?
2. What **access** does it need?
3. What's the **worst** it could do with that access?
4. Would I **notice**?
5. What does it **save** me?

---

## Weigh these

| Task | Verdict |
|---|---|
| "Tell me when this textbook drops below $40." | Reasonable |
| "Reply to routine emails for me." | Not yet |
| "Summarize three news sites every morning." | Scheduled task |
| "Draft replies and ask me before sending." | Possible, with care |

Act for you, or prepare work for you to approve?
