---
marp: true
title: "Week 4 · Session 2: Research Agents, Grounded Notebooks, and Citations"
paginate: true
---

# Research Agents and Grounding
### Week 4 · Session 2
**4D focus: Discernment**

---

## Today

| Time | |
|---|---|
| 15 min | Research agents |
| 10 min | Grounded notebooks |
| 10 min | Concept: retrieval and grounding |
| 40 min | Lab: run research, trace citations |

---

## Research agents

A research agent:

1. Breaks your question into sub-questions
2. Runs many searches
3. Reads the sources
4. Writes a report **with citations**

Minutes of work instead of seconds; much broader coverage.

---

## Where research agents go wrong

- Citation **doesn't support** the claim
- Source is **low quality** or outdated
- Claim is **merged** from two sources incorrectly
- Link is **broken or fabricated**
- Gaps presented as consensus

A cited report still needs auditing.

---

## Grounded notebooks

- Answer **only** from sources you add
- Closed-book: no outside web
- Examples: **NotebookLM** (free), **Copilot Notebooks** (up to 50 sources on Maryville accounts)

<!-- Check NotebookLM's current product name; Google's docs have started calling it Gemini Notebook. -->

---

## Project vs notebook

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files **plus** what the model knows and can search | **Only** your sources |
| Strength | Working context for building things | Faithful to a fixed set of sources |
| Best for | Ongoing work, drafting | Studying, closed questions |

---

## How tools find what they cite

**Retrieval** (concept only today):

1. Your sources are split into chunks
2. Your question is matched to the most relevant chunks
3. Those chunks go into the context
4. The model answers from them and cites them

If retrieval misses the right chunk, the answer suffers. We'll build this in week 12.

---

# Lab

---

## Run a research agent on your topic

1. Open your project from Session 1
2. Run a research request on your question
3. Save the report
4. Start the audit: open each citation

<!-- Copilot Chat (Basic) and Claude Free have no research agent; this lab uses Pro. -->

---

## Classify every citation

| Citation | Claim it supports | Verdict |
|---|---|---|
| 1 | | Supports / Partly / Does not / Fabricated or inaccessible |
| 2 | | |
| … | | |

Audit at least **10**.

---

## Assignment: Research brief with citation audit

- 2-page brief using your project and a research run
- Audit table: 10+ citations, classified
- Short note: project vs NotebookLM on the same sources
- **500 extension:** 1 page on citation reliability, drawing on 2+ published studies
- About 4 hours

---

## Before next week

- Claude Academy: **Claude 101**, lessons on files and creating content
- Finish **AI capabilities and limitations**
- Optional: **AI Fluency for creative work**
- Find a messy dataset (500+ rows), or use the one provided
