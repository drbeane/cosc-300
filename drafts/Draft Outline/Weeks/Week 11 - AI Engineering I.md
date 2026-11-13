# Week 11: AI Engineering I: Models as Components

**Surfaces:** S8 API and agent platforms [D, raised to hands-on here] · **Capabilities:** C5 [S] · **4D:** Description

An exploratory week. Students see how AI products are built by building a small one. They write little code themselves: Claude Code writes it while they specify, run, and inspect. The aim is understanding, not engineering fluency.

## Goals
Students will be able to:
- Explain what an API call to a model contains: model, system prompt, messages, parameters such as temperature, and the response.
- Make an API call from a short program, handle a multi-turn conversation, and request structured output (JSON).
- Explain tool use (function calling): the model asks for a tool, the program runs it, the result goes back. Connect this to the agents from weeks 6–8.
- Estimate the cost of a call from token counts and prices.

## Before class
- Claude Academy: **Claude Platform 101**.
- Claude Academy: **Building with the Claude API**, sections "Accessing Claude with the API" and "Tool use with Claude" (watch; code-along optional).
- API access through the department's Bedrock account and a local open model (details on hold; see Open decisions in the Course Outline).

## Session 1 (75 min)
- 15 min: From chat to API. What the apps are doing behind the scenes; why companies build on APIs.
- 20 min: Live build. A first call, a system prompt, temperature, a multi-turn loop, structured JSON output.
- 10 min: Cost and tokens. Reading usage from a response; estimating a monthly bill.
- 30 min: Guided practice: each student gets a working first program.

## Session 2 (75 min)
- 20 min: Tool use. Demo: a model that calls a weather or calculator function; trace the message blocks.
- 10 min: Workflows vs agents: chaining, routing, parallelization (concept).
- 35 min: Lab: add a tool to the first program.
- 10 min: Share-out.

## Assignment: First API program with tool use
Using Claude Code to write the code, build a small command-line or notebook program that (1) uses a system prompt for a specific job, (2) returns structured JSON, and (3) calls at least one tool you define (for example, a unit converter, a lookup in a CSV file, or a date calculator). Submit the code, three sample runs with their token usage and estimated cost, and a 300-word explanation in your own words of what happens in one tool-use round trip.
- **500 extension:** run the same program against a local open model as well as Claude on Bedrock, and compare quality, speed, and cost.
- Estimated time: 3–4 hours.

## Responsible use
API keys as secrets; spend limits; what data an API provider retains.

## Other resources
From `03 - Supplementary Resources` (links there):
- Amazon Bedrock Workshop (aws-samples)
- Ollama or LM Studio for a local model
- Claude Cookbooks

## Instructor notes
- API usage is not included in Claude Pro (Evidence 04, S8). Likely access: Bedrock plus local models; on hold. Building with the Claude API teaches the direct Anthropic API; the request format on Bedrock differs slightly, so provide a short adapter note or starter code.
- Book: From Chat to API (and selected AI Engineering lessons: structured output, tool use).
- Academy **Claude with Amazon Bedrock** matches the likely access route; consider assigning its first section in place of the direct-API sections.
