---
marp: true
title: "Week 12 · Session 1: Retrieval and Evaluation"
paginate: true
---

# AI Engineering II: Retrieval and Evaluation
### Week 12 · Session 1
**4D focus: Discernment**

---

## Today

| Time | |
|---|---|
| 20 min | RAG from the inside |
| 15 min | Evaluation |
| 40 min | Lab: choose a track and start |

---

## Retrieval-augmented generation (RAG)

Week 4's projects and notebooks, from the inside:

1. **Chunk** the documents
2. **Search** for chunks that match the question
3. Put the best chunks in the **context**
4. The model answers **and cites** them

---

## Chunking

- Documents are too long to send whole
- Split into passages (paragraphs, sections)
- Too small: lose meaning
- Too large: waste context, blur relevance

---

## Search

| Keyword search | Embedding search |
|---|---|
| Matches words | Matches **meaning** |
| "car" ≠ "automobile" | "car" ≈ "automobile" |
| Simple, predictable | Better for paraphrased questions |

Many systems use both.

---

## Why retrieval fails

- The right chunk wasn't retrieved
- The chunk was cut in the wrong place
- Too many irrelevant chunks
- The answer needs facts from several places

A grounded answer can still be **wrong**.

---

## Evaluation

> How do you know your AI system works?

Weeks 2 and 3, made systematic:

1. A **test set** of realistic cases
2. Expected answers or criteria
3. Run the system on all of them
4. **Grade** the results

---

## Two ways to grade

| Code grading | Model grading |
|---|---|
| Exact checks: right number, valid JSON | Another model judges quality |
| Fast, objective | Handles open-ended answers |
| Can't judge nuance | Can be wrong; check it against your judgment |

---

## Three tracks

- **A · RAG**: Q&A over 10–30 of your documents, with citations
- **B · MCP**: a small MCP server with two tools or resources, connected to Claude
- **C · Analysis**: evaluate an existing tool (a project, NotebookLM, or your week 7 skill) on a 20-item test set

All tracks: 15+ test cases, results, discussion of failures.

---

## Lab: choose and start

1. Pick your track
2. Draft your test set **first**
3. Start building (or set up the tool you'll evaluate)

---

## Next session

- MCP from the inside
- Lab time
- Capstone checkpoint
