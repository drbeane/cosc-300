# Week 4: Research agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Run a research request yourself the day before on a topic you know, and find at least one citation that doesn't support its claim; it makes a strong example. Set up a NotebookLM notebook with three or four sources. Check NotebookLM's current name: Google's documentation has begun calling it Gemini Notebook. This lab uses Claude Pro's Research feature; Copilot Chat (Basic) and Claude Free have no research agent. Timing: 15 min research agents, 10 min notebooks, 10 min retrieval concept, 40 min lab.

## What you will be able to do

- Run a multi-step research task with a research agent and audit the report it returns.

A **research agent** goes well beyond a single web search. Given a question, it:

1. breaks the question into sub-questions;
2. runs many searches;
3. reads the sources it finds;
4. writes a report with citations.

A research run takes minutes rather than seconds and covers far more ground than you could in the same time. That makes it valuable, and it makes auditing it important, because a long, well-formatted, heavily cited report looks authoritative whether or not it is.

## Where research agents go wrong

- A citation exists but **doesn't support** the claim attached to it.
- The source is **low quality or outdated**.
- Two sources are **merged** into a claim neither one makes.
- A link is **broken**, or occasionally fabricated.
- A gap in the evidence is presented as if it were **consensus**.

A cited report still needs checking. The citations make checking possible; they don't make it unnecessary.

## Key terms

**Research agent**: a tool that searches over many steps and returns a cited report.

> **Instructor note: book links.** Retrieval-Augmented Generation (concept only); Grounding and Citations.
