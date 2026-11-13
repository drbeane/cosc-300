# Week 6: From Chat to Agent

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** This is the start of the course's centerpiece. Build the demo folder: 8–12 documents about one subject with planted inconsistencies (different dates for the same event, conflicting figures, a document that contradicts a policy). Keep a clean copy so you can rerun the demo. Prepare a small practice folder for students without suitable material (a mix of downloads, notes, and PDFs to organize). Make sure every student has the Claude desktop app installed and signed in to Pro before class. Timing: 20 min chat to agent, 15 min demo, 10 min task briefs, 30 min guided practice.

## What you will be able to do

- Explain the difference between a chat and an agent: the model, its tools, and the harness that runs them.

## From chat to agent

For five weeks you've worked in chat. You ask, the AI answers, and you copy the result out. Even with projects, file uploads, and code execution, you are the one moving material in and out and running each step.

From now on, you **delegate**. You point an agent at a folder on your computer and describe a job. It reads the files, makes a plan, carries out the work over many steps, checks its own work, and saves finished results where they belong. Your role becomes the role of a manager: define the job, approve the plan, decide what the agent may do without asking, and review the result.

| Chat | Agent |
|---|---|
| Answers one message at a time | Works through many steps |
| Sees what you paste or upload | Reads your folder directly |
| Returns text for you to copy | Saves finished files in place |
| You run every step | It plans, acts, and checks its own work |

## What makes an agent

An agent has three parts:

- **The model** does the thinking.
- **Tools** let it act: read a file, write a file, run code, search the web.
- **The harness** is the program that runs the model, carries out the tool calls, and enforces the rules about what's allowed.

The same model can be a chat assistant or an agent. What changes is the tools and the harness around it.

### The tool-use loop

An agent works in a loop:

1. The model decides it needs a tool ("read `report.docx`").
2. The harness runs the tool.
3. The result goes back into the model's context.
4. The model decides what to do next, and the loop repeats until the job is done.

This loop is what lets an agent check its own work: it can read the file it just wrote, run the code it just changed, or compare its output against the brief. You'll see the loop from the inside in week 11.

## The local agent: Claude Cowork

A **local agent** works directly on the files and folders on your computer. In this course it's **Claude Cowork**, which runs from the Claude desktop app. You choose a folder; Cowork can read, write, and organize files there and produce finished deliverables. It asks before taking actions that need your approval.

> **Instructor note: demo.** Point Cowork at the demo folder with this brief: "Reconcile these documents. Produce a report listing every conflict you find, which documents disagree, and which version seems correct and why. Save it as conflicts.md." Ask for a plan first and read it aloud. Edit one step of the plan, then approve. While it runs, narrate the tool calls. Afterward, check two of its reported conflicts against the documents. If it missed one you planted, even better: that's the review lesson.

## Key terms

**Agent**: an AI that uses tools in a loop to complete multi-step tasks. **Harness**: the program that runs the model and its tools and enforces permissions. **Tool-use loop**: the cycle of the model requesting a tool, the harness running it, and the result returning to the model.

> **Instructor note: book links.** Understanding Harnesses; Agents and Tool Use; Using Agents for Knowledge Work. Copilot Chat (Basic) has no local agent, so this week depends on the course subscription.
