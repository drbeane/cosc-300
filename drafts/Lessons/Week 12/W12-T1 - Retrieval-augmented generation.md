# Week 12: Retrieval-augmented generation

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Have one worked example of each track ready to show briefly: a tiny RAG program over a few documents, a minimal MCP server, and a 20-item evaluation sheet for an existing tool. Track C exists so that students who prefer not to build can still learn evaluation; present it as a full alternative, not a lesser option. Timing: 20 min RAG, 15 min evaluation, 40 min lab.

## What you will be able to do

- Explain retrieval-augmented generation: chunking, search, retrieval, and grounded answers with citations.
- Explain why retrieval fails.

In week 4 you used projects and notebooks that answer from your documents. This week you look inside. The technique is called **retrieval-augmented generation**, or **RAG**:

1. **Chunk** the documents into passages.
2. **Search** for the passages that best match the question.
3. Place those passages in the model's **context**.
4. The model answers from them and **cites** them.

## Chunking

Documents are usually too long to send whole, so they're split into chunks. Chunk size is a trade-off. Chunks that are too small lose meaning: a sentence pulled out of its paragraph may not make sense. Chunks that are too large waste context and make it harder to tell which part is relevant.

## Search

| Keyword search | Embedding (semantic) search |
|---|---|
| Matches the words you used | Matches **meaning** |
| "car" doesn't match "automobile" | "car" matches "automobile" |
| Simple and predictable | Better for paraphrased questions |

Embedding search turns each chunk and each question into a list of numbers that represents its meaning; chunks whose numbers are close to the question's are returned. Many systems combine both kinds of search.

## Why retrieval fails

- The right chunk wasn't retrieved.
- The relevant passage was split across two chunks.
- Too many irrelevant chunks crowded out the useful ones.
- The answer needs facts from several places that weren't all retrieved.

A grounded answer can still be wrong. When a RAG system gives a poor answer, the first question is whether the right material was retrieved.

## Key terms

**RAG (retrieval-augmented generation)**: answering from retrieved passages of your documents. **Chunk**: a passage of a document used for retrieval. **Embedding**: a numerical representation of meaning.

> **Instructor note: book links.** Retrieval-Augmented Generation; Grounding and Citations; Building an Eval Set. Left out deliberately (builder topics for a later course): vector database operations, hybrid search tuning, fine-tuning, orchestration frameworks, observability.
