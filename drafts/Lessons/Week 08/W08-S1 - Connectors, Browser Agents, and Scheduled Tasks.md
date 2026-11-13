# Week 8, Session 1: Connectors, Browser Agents, and Scheduled Tasks

**COSC-300/500 Applied AI Essentials** · Surfaces: S4 Local agent, S5 Cloud and background agents, S6 Browser and computer-use agents · Capabilities: C6 MCP connectors, C1 Autonomy controls · 4D focus: Diligence

> **Instructor note: preparation.** Connect a test calendar or test storage account to Claude for the connector demo; don't demo with your real accounts. Prepare a browser-agent task on a site that is safe to automate (a test form, or a research task across public pages). Set up one scheduled task the day before so you can show its results. Print or post the midterm planning sheet. Timing: 20 min connectors, 15 min browser agents, 10 min scheduled tasks, 30 min midterm workshop.

## What you will be able to do after this session

- Connect an agent to an outside service and explain what it can see and do there.
- Use a browser agent and describe where browser agents fail.
- Hand off or schedule a task and review work done while you were away.
- Plan your midterm project.

## 1. Connectors

So far your agent has worked on files in a folder. Much of your work, though, lives in other services: calendar, email, cloud storage, course tools, databases. A **connector** (capability **C6**) lets an agent reach one of those services.

Most connectors are built on the **Model Context Protocol (MCP)**, an open standard for connecting AI applications to tools and data. Because it's a standard, one connector can work across many AI applications. A connector exposes two kinds of things:

- **Tools**: actions the agent can take, such as creating an event or searching files.
- **Resources**: data the agent can read, such as a document or a calendar.

You'll look inside a connector, and build a small one, in week 12. Today you're a user.

### Read versus write

Connectors differ in what they allow:

| Read | Write |
|---|---|
| See your calendar | Create or change events |
| Read your email | **Send** email |
| List your files | Delete files |

Grant the least access the task needs. A digest of your calendar needs read access only.

> **Instructor note: demo.** Connect the test account. Show the permission screen and talk through each permission. Run a read-only task, then show what a write action looks like and where the approval appears.

## 2. Browser and computer-use agents

A **browser agent** (surface **S6**) operates a web browser: it clicks, types, scrolls, and reads pages. Claude in Chrome is an example. Browser agents are useful for sites that have no connector, such as filling in a form or gathering information across several pages.

They also fail in characteristic ways. They're slow and literal. Pop-ups, logins, and changing layouts confuse them. They can click the wrong thing. And every page they read is **untrusted input**, which matters a great deal on Thursday. Watch a browser agent the first few times you use it for a task.

> **Instructor note: demo.** Run the prepared browser task. If it fails or hesitates somewhere, narrate it: those failures are the content.

## 3. Background and scheduled tasks

Some work doesn't need you present (surface **S5**). You can **hand off** a task and close your laptop, or **schedule** one to run every morning or every week. When you return, you review what was done.

This changes what delegation means: you're now delegating across time. It also raises a new supervision question. When you weren't watching, how will you know whether a run went well?

- What ran, and when?
- What did it change?
- Did anything fail without telling you?
- Would you notice a bad run?

> **Instructor note: demo.** Show the results of the scheduled task you set up yesterday and walk through how you'd check it.

## 4. The midterm project

Your midterm is an **agent workflow** for a real recurring task. It must use:

1. at least **one skill you wrote** (your week 7 skill, or a new one);
2. at least **one connector or browser step**;
3. a **scheduled or handed-off run**.

You'll also write a 2-page design and risk report. Details are in the assignment at the end of Thursday's lesson.

## 5. Workshop: plan and get approval

Use the planning sheet to answer:

- What is the task, and who benefits?
- Which skill and which connector or browser step?
- What will the agent be allowed to touch, and why?
- How will you know if a run went badly?

Get your plan signed off before you leave.

> **Instructor note.** Steer students away from workflows that need write access to anything important. A digest, a tracker, or a report that's saved to a folder is ideal. Reject plans that involve real financial accounts, sending email to other people automatically, or anything involving other people's data.

## Coming up Thursday

Agent security, with a live demonstration of prompt injection, and lab time for the midterm.

## Key terms

**Connector**: a link that lets an agent reach an outside service. **MCP (Model Context Protocol)**: an open standard for connecting AI applications to tools and data. **Browser agent**: an agent that operates a web browser. **Scheduled task**: an agent task set to run at set times.
