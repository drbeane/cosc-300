---
marp: true
title: "Week 8 · Session 1: Connectors, Browser Agents, and Scheduled Tasks"
paginate: true
---

# Extending the Agent
### Week 8 · Session 1
**4D focus: Diligence**

---

## Today

| Time | |
|---|---|
| 20 min | Connectors (MCP) |
| 15 min | Browser and computer-use agents |
| 10 min | Background and scheduled tasks |
| 30 min | Midterm workshop: plan and approval |

---

## Connectors (C6)

A **connector** lets an agent reach an outside service:

- Calendar, email, cloud storage
- Course tools, databases, project trackers

Most are built on **MCP**, the Model Context Protocol.

---

## MCP, as a user

- An **open standard** for connecting AI to tools and data
- One connector works across many AI apps
- A connector exposes **tools** (actions) and **resources** (data)

We'll build one in week 12.

---

## Read vs write permissions

| Read | Write |
|---|---|
| See your calendar | Create events |
| Read email | **Send** email |
| List files | Delete files |

**Grant the least you need.**

---

## Browser and computer-use agents (S6)

- The agent **operates a browser**: clicks, types, reads pages
- Useful for sites with no connector
- Example: Claude in Chrome

<!-- Demo: a research or form-filling task on a test site. -->

---

## Where browser agents fail

- Slow and literal
- Confused by pop-ups, logins, changing layouts
- **Reads untrusted content**: every web page is input
- Can click the wrong thing

Watch it the first few times.

---

## Background and scheduled tasks (S5)

- **Hand off** a task and close your laptop
- **Schedule** a task to run every morning or week
- Review what it did when you return

Delegation now includes **time**.

---

## Reviewing work done while you were away

- What ran, and when?
- What did it change?
- Did anything fail silently?
- Would you notice a bad run?

---

## Midterm project: an agent workflow

A real recurring task using:

1. At least **one skill you wrote**
2. At least **one connector or browser step**
3. A **scheduled or handed-off run**

Plus a 2-page design and risk report.

---

## Workshop: plan and get approval

- What's the task? Who benefits?
- Which skill, which connector?
- What will the agent be allowed to touch?
- How will you know a run went badly?

Get your plan signed off before you leave.

---

## Next session

- Agent security: prompt injection
- Midterm lab time
