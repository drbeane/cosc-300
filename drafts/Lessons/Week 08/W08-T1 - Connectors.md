# Week 8: Connectors

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

> **Instructor note: preparation.** Connect a test calendar or test storage account to Claude for the connector demo; don't demo with your real accounts. Prepare a browser-agent task on a site that is safe to automate (a test form, or a research task across public pages). Set up one scheduled task the day before so you can show its results. Print or post the midterm planning sheet. Timing: 20 min connectors, 15 min browser agents, 10 min scheduled tasks, 30 min midterm workshop.

## What you will be able to do

- Connect an agent to an outside service and explain what it can see and do there.

So far your agent has worked on files in a folder. Much of your work, though, lives in other services: calendar, email, cloud storage, course tools, databases. A **connector** lets an agent reach one of those services.

Most connectors are built on the **Model Context Protocol (MCP)**, an open standard for connecting AI applications to tools and data. Because it's a standard, one connector can work across many AI applications. A connector exposes two kinds of things:

- **Tools**: actions the agent can take, such as creating an event or searching files.
- **Resources**: data the agent can read, such as a document or a calendar.

You'll look inside a connector, and build a small one, in week 12. This week you're a user.

## Read versus write

Connectors differ in what they allow:

| Read | Write |
|---|---|
| See your calendar | Create or change events |
| Read your email | **Send** email |
| List your files | Delete files |

Grant the least access the task needs. A digest of your calendar needs read access only.

> **Instructor note: demo.** Connect the test account. Show the permission screen and talk through each permission. Run a read-only task, then show what a write action looks like and where the approval appears.

## Key terms

**Connector**: a link that lets an agent reach an outside service. **MCP (Model Context Protocol)**: an open standard for connecting AI applications to tools and data.
