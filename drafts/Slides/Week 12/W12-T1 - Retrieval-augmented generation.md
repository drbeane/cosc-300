---
marp: true
title: "Week 12: Retrieval-augmented generation"
paginate: true
---

# Retrieval-augmented generation
### Week 12
COSC-300/500 Applied AI Essentials

---

## Retrieval-augmented generation (RAG)

Week 4's projects and notebooks, from the inside:

1. **Chunk** the documents
2. **Search** for chunks that match the question
3. Put the best chunks in the **context**
4. The model answers **and cites** them

---

## Two phases

| Phase | When | What happens |
|---|---|---|
| **Indexing** | Once | Chunk, embed, store |
| **Answering** | Every question | Embed the question, find the closest chunks, generate |

---

## One question, start to finish

"Can I get a refund if I withdraw in the third week?"

1. Embed the question
2. Closest chunks: sections 6.1, 6.3, 4.2
3. Prompt: "Answer using **only** these passages. Cite the section. Say so if they don't contain the answer."
4. "Yes: 50% (6.1), within 30 days (6.3)."

The model never saw the rest of the handbook.

<!-- Open the Retrieval and evaluation explorer demo here if there's time. -->

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

## Two places to fail

| | Retrieval failure | Generation failure |
|---|---|---|
| What happened | The passage never reached the model | It was there, and the answer was still wrong |
| Fix | Chunking, search | The prompt, the model |

**Print the retrieved chunks.** Otherwise you can't tell which half failed.

---

## Do you need RAG?

| Situation | Approach |
|---|---|
| A few documents that fit | Put them all in the prompt |
| Hundreds, or changing often | RAG |
| Questions about the whole collection | Summarize in stages |
| Must be current | A tool |

**Agentic search**: an agent with a search tool, searching more than once.
