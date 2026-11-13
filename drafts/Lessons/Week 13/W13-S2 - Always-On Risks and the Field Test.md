# Week 13, Session 2: Always-On Risks and the Field Test

**COSC-300/500 Applied AI Essentials** · Surfaces: S7 Always-on agent, S5 · Capabilities: C1, C6 · 4D focus: Diligence

> **Instructor note: preparation.** Set up a scheduled Cowork task that does the same job as your Muse demo task, so you can compare them live. Timing: 20 min risks, 10 min when it's worth it, 35 min lab, 10 min monitoring plan.

## What you will be able to do after this session

- Weigh the privacy and security trade-offs of an always-on agent.
- Decide when an always-on agent is worth it compared with a scheduled task.
- Launch, monitor, and audit a multi-day agent task.

## 1. Three risks

### Prompt injection, everywhere

An always-on agent reads your email, browses the web, and receives messages from other people. Every one of those is **untrusted input**, and any of them could contain instructions (week 8). Meta itself acknowledges that prompt injection is unresolved for Muse. The agent is exposed to untrusted content continuously, not just when you ask it to do something.

### Vendor access to your data

The agent holds credentials to your accounts. The vendor may access data to operate and secure the service, and may train on your interactions unless you opt out. When you connect an account, you're extending your trust to the vendor as well as to the agent.

### Mistakes while you're not watching

There's no plan review before each action. An error early in a multi-day task can compound for days. You may find out late, or not at all.

Recall the **dangerous combination** from week 8: private data, untrusted content, and the ability to send data out. An always-on agent connected to your email has all three, running around the clock. That's why this week's setup uses a throwaway account.

## 2. When is an always-on agent worth it?

For many jobs, a scheduled task does the same work with less risk.

| Question | Always-on agent | Scheduled task |
|---|---|---|
| Does it need to react to events as they happen? | ✓ | |
| Is it a fixed routine? | | ✓ |
| Is it easy to audit afterward? | | ✓ |
| How much access does it need? | Broad | Narrow |

An always-on agent earns its risk when the job really requires reacting to things as they happen: a reply that arrives, a price that drops, a message that needs routing. If the job is "every morning, summarize these sources," a scheduled task is simpler and safer.

> **Instructor note: demo.** Show the scheduled Cowork task alongside the Muse task. Compare the results, how easy each is to audit, and what access each needed.

## 3. Lab: launch the field test

Give the assistant a **low-stakes** task that runs over three to five days. Some options:

- monitor a few news sources or websites and send a daily digest;
- track the price of an item **without buying it**;
- keep a running list from messages you forward to it.

## 4. Your monitoring plan

Before you leave, write down:

- when you'll check in each day;
- what a bad run would look like;
- what you'll log;
- when you would **shut it off**.

### The log

| Date | Check-in | Did it ask for approval? | Errors | Notes |
|---|---|---|---|---|
| | | | | |

> **Instructor note.** Students paired with the demo account should keep the same log by observing its runs. Check in with them midweek.

## 5. Responsible use

- **Throwaway accounts only.**
- No school, work, or financial accounts connected.
- Nothing that sends or buys without your approval.

## Assignment: Always-on agent field test

Run a low-stakes task over 3–5 days.

**Submit:**
- Your setup: the permissions you granted and refused, with reasons.
- Your log of each check-in, approval, and error.
- A 500-word assessment: Did it save effort? What went wrong? Would you trust it with more access, and why or why not?

**500 extension:** run the same task as a scheduled task in Claude and compare reliability, effort, and risk.

**Estimated time:** 3 hours, spread across the week.

## Before next week

- Claude Academy: **Deploying Claude Enterprise with confidence** (selected lessons, to be posted).
- One field course that fits your interests: **AI Fluency for** small businesses, nonprofits, educators, or creative work.
- **Bring your capstone draft.**
- Journal entry.
