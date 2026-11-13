---
marp: true
title: "Week 12: Retrieval-Augmented Generation"
paginate: true
---

# Retrieval-Augmented Generation
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
