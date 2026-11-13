# Week 11 Lab and Assignment: First API Program with Tool Use

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Add a tool to your own program.

## Guided practice

By the end of class, everyone should have a working first program that:

- uses a system prompt for a specific job you choose;
- returns JSON;
- prints the token usage for each call.

> **Instructor note.** Have the starter code ready for students whose setup fails, so class time isn't lost to configuration. Remind students that their API credentials are secrets.

## Lab: add a tool to your program

Add a tool to the program you built in the guided practice. Pick one:

- a **unit converter**;
- a **lookup in a CSV file** (for example, your course schedule);
- a **date calculator** (days until a deadline).

Use Claude Code to write it; your job is to define what the tool does, write its description, and test it. Try questions that should use the tool and questions that shouldn't.

## Share-out

What did the model do when your tool returned an error? Did it ever call the tool when it shouldn't have, or fail to call it when it should?

## Responsible use

- **API keys are secrets.** Never put them in code you share or commit.
- **Set spend limits** on any account you use.
- Know what data the API provider **retains** from your requests.

## Assignment: First API program with tool use

Using Claude Code to write the code, build a small command-line or notebook program that (1) uses a system prompt for a specific job, (2) returns structured JSON, and (3) calls at least one tool you define.

**Submit:**
- The code.
- Three sample runs, each with its token usage and estimated cost.
- A 300-word explanation, in your own words, of what happens in one tool-use round trip.

**500 extension:** run the same program against a local open model as well as Claude, and compare quality, speed, and cost.

**Estimated time:** 3–4 hours.

## Before next week

- **Building with the Claude API**: watch the sections "Prompt evaluation," "RAG and agentic search," and "Model Context Protocol."
- Optional (500): **Model Context Protocol: Advanced topics**.
- Prepare a short capstone status update for the week 12 checkpoint.
- Journal entry.
