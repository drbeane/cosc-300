---
marp: true
title: "Week 6: From chat to agent"
paginate: true
---

# From chat to agent
### Week 6
COSC-300/500 Applied AI Essentials

---

## The centerpiece of the course

Until now: you **talk**, the AI **answers**, you **copy** the result out.

From now on: you **delegate**, the agent **works on your files**, you **review**.

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

## What the loop looks like

| Step | The model decides | Tool call |
|---|---|---|
| 1 | "See what's here" | List the folder |
| 2 | "Start with the schedule" | Read `schedule.docx` |
| 3 | "Check the invitation" | Read `invitation.pdf` |
| 4 | "Write the report" | Write `conflicts.md` |
| 5 | "Is it complete?" | Read `conflicts.md` |

Slower than chat, and it uses more of your allowance.

<!-- Nobody told it which file to open first. Open the Tool-use tracer demo if there's time. -->

---

## Agents make mistakes differently

- An early mistake **carries forward**
- Mistakes now have **effects**: files change

Hence briefs, plans, approvals, and review.

---

## Local agent: Claude Cowork

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

---

## Your new role

| Before | During | After |
|---|---|---|
| Decide whether to delegate | Read the plan | Review against your criteria |
| Write the brief | Approve or refuse | Check a sample yourself |
| Back up the folder | Interrupt | Decide what to accept |

You manage. The agent produces.

<!-- Keep a clean copy of the demo folder so you can rerun it. -->
