# Week 13: Always-on risks and when it is worth it

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

> **Instructor note: preparation.** Set up a scheduled Cowork task that does the same job as your Muse demo task, so you can compare them live. Timing: 20 min risks, 10 min when it's worth it, 35 min lab, 10 min monitoring plan.

## What you will be able to do

- Weigh the privacy and security trade-offs of an always-on agent.
- Decide when an always-on agent is worth it compared with a scheduled task.

## Three risks

### Prompt injection, everywhere

An always-on agent reads your email, browses the web, and receives messages from other people. Every one of those is **untrusted input**, and any of them could contain instructions (week 8). Meta itself acknowledges that prompt injection is unresolved for Muse. The agent is exposed to untrusted content continuously, not just when you ask it to do something.

### Vendor access to your data

The agent holds credentials to your accounts. The vendor may access data to operate and secure the service, and may train on your interactions unless you opt out. When you connect an account, you're extending your trust to the vendor as well as to the agent.

### Mistakes while you're not watching

There's no plan review before each action. An error early in a multi-day task can compound for days. You may find out late, or not at all.

Recall the **dangerous combination** from week 8: private data, untrusted content, and the ability to send data out. An always-on agent connected to your email has all three, running around the clock. That's why this week's setup uses a throwaway account.

## When is an always-on agent worth it?

For many jobs, a scheduled task does the same work with less risk.

| Question | Always-on agent | Scheduled task |
|---|---|---|
| Does it need to react to events as they happen? | ✓ | |
| Is it a fixed routine? | | ✓ |
| Is it easy to audit afterward? | | ✓ |
| How much access does it need? | Broad | Narrow |

An always-on agent earns its risk when the job really requires reacting to things as they happen: a reply that arrives, a price that drops, a message that needs routing. If the job is "every morning, summarize these sources," a scheduled task is simpler and safer.

> **Instructor note: demo.** Show the scheduled Cowork task alongside the Muse task. Compare the results, how easy each is to audit, and what access each needed.
