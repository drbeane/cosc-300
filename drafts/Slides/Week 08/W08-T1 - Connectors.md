---
marp: true
title: "Week 8: Connectors"
paginate: true
---

# Connectors
### Week 8
COSC-300/500 Applied AI Essentials

---

## Connectors

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

## How the model picks a tool

- Each tool has a short **description**
- The descriptions sit in the context
- Your request matches one, and the model calls it

The tool-use loop from week 6, reaching outside your computer.

---

## Connecting a service

1. Find the connector in settings
2. Sign in **on the service's own page**
3. Read the **permission screen**
4. Approve

After that the agent acts **as you**.

<!-- Demo with the test account. Talk through each permission on the screen. -->

---

## Read vs write permissions

| Read | Write |
|---|---|
| See your calendar | Create events |
| Read email | **Send** email |
| List files | Delete files |

**Grant the least you need.**

Scope matters too: one folder, or the whole drive?

---

## What it adds, what it costs

| Adds | Costs |
|---|---|
| Real, current data | The agent sees private material |
| No copy and paste | Outside content enters the context |
| Tasks across services | Mistakes land where others see them |

---

## Keep your connections tidy

- Connect what the current work needs
- Review the list a few times a year
- Disconnect what you no longer use
- Connect only accounts you own
