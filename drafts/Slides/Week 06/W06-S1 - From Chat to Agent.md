---
marp: true
title: "Week 6 · Session 1: From Chat to Agent"
paginate: true
---

# Local Agents: Delegating Real Work
### Week 6 · Session 1
**4D focus: Delegation**

---

## Today

| Time | |
|---|---|
| 20 min | From chat to agent |
| 15 min | Demo: a messy folder becomes a report |
| 10 min | Delegation skills: the task brief |
| 30 min | Guided practice: your first folder task |

---

## The centerpiece of the course

Until now: you **talk**, the AI **answers**, you **copy** the result out.

From today: you **delegate**, the agent **works on your files**, you **review**.

---

## Chat vs agent

| Chat | Agent |
|---|---|
| Answers one message | Works through many steps |
| Sees what you paste or upload | Reads your folder directly |
| Returns text | Saves finished files in place |
| You run every step | It plans, acts, checks its own work |

---

## What makes an agent

- **Model**: does the thinking
- **Tools**: read files, write files, run code, search
- **Harness**: the program that runs the loop and enforces permissions

Same model, very different power.

---

## The tool-use loop

1. The model decides it needs a tool
2. The harness runs the tool
3. The result goes back into context
4. Repeat until done

This loop is what lets it **check its own work**.

---

## Local agent (S4): Claude Cowork

- Runs from the **Claude desktop app**
- Works on a **folder you choose** on your computer
- Reads, writes, organizes, and produces deliverables
- Asks before risky actions

---

## Demo: a messy folder becomes a report

1. A folder of inconsistent documents
2. The brief: reconcile them and report conflicts
3. **Review the plan first**
4. Watch it work
5. Check the result against the brief

<!-- Keep a clean copy of the demo folder so you can rerun it. -->

---

## The task brief

- **Goal**: what done looks like
- **Inputs**: which files, which sources
- **Constraints**: what not to touch, format, length
- **Acceptance criteria**: how you'll judge it

A good brief is the difference between a useful result and an hour of cleanup.

---

## How much to specify?

- Too little: the agent guesses, and guesses wrong
- Too much: you've done the work yourself
- **Specify outcomes and constraints, not every step**

## When not to delegate

- You can't check the result
- The data is sensitive
- Mistakes would be costly and hard to undo

---

## Guided practice

Delegate a small folder task:

- Organize and index a set of files by **rules you write**
- Review the plan before approving
- Check the index against the folder

**Work on a copy.**

---

## Next session

- Autonomy controls: plans, approvals, permissions
- What a task cost in usage and context
- Lab: the folder-scale assignment
