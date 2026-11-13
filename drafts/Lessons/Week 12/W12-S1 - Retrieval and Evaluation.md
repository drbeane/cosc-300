# Week 12, Session 1: Retrieval and Evaluation

**COSC-300/500 Applied AI Essentials** · Surface: API and agent platforms · 4D focus: Discernment

> **Instructor note: preparation.** Have one worked example of each track ready to show briefly: a tiny RAG program over a few documents, a minimal MCP server, and a 20-item evaluation sheet for an existing tool. Track C exists so that students who prefer not to build can still learn evaluation; present it as a full alternative, not a lesser option. Timing: 20 min RAG, 15 min evaluation, 40 min lab.

## What you will be able to do after this session

- Explain retrieval-augmented generation: chunking, search, retrieval, and grounded answers with citations.
- Explain why retrieval fails.
- Build an evaluation set and explain code-based and model-based grading.
- Choose a track for this week's assignment and start it.

## 1. Retrieval-augmented generation

In week 4 you used projects and notebooks that answer from your documents. This week you look inside. The technique is called **retrieval-augmented generation**, or **RAG**:

1. **Chunk** the documents into passages.
2. **Search** for the passages that best match the question.
3. Place those passages in the model's **context**.
4. The model answers from them and **cites** them.

### Chunking

Documents are usually too long to send whole, so they're split into chunks. Chunk size is a trade-off. Chunks that are too small lose meaning: a sentence pulled out of its paragraph may not make sense. Chunks that are too large waste context and make it harder to tell which part is relevant.

### Search

| Keyword search | Embedding (semantic) search |
|---|---|
| Matches the words you used | Matches **meaning** |
| "car" doesn't match "automobile" | "car" matches "automobile" |
| Simple and predictable | Better for paraphrased questions |

Embedding search turns each chunk and each question into a list of numbers that represents its meaning; chunks whose numbers are close to the question's are returned. Many systems combine both kinds of search.

### Why retrieval fails

- The right chunk wasn't retrieved.
- The relevant passage was split across two chunks.
- Too many irrelevant chunks crowded out the useful ones.
- The answer needs facts from several places that weren't all retrieved.

A grounded answer can still be wrong. When a RAG system gives a poor answer, the first question is whether the right material was retrieved.

## 2. Evaluation

How do you know an AI system works? Not from one good demo. You've already built the habit: in week 2 you tested prompts on five inputs; in week 3 you documented failures. **Evaluation** makes it systematic:

1. Build a **test set** of realistic cases, including hard ones.
2. Decide the expected answer, or the criteria a good answer must meet, for each.
3. Run the system on every case.
4. **Grade** the results.

### Two ways to grade

| Code-based grading | Model-based grading |
|---|---|
| Exact checks: the right number, valid JSON, a required phrase | Another model judges quality against criteria |
| Fast and objective | Handles open-ended answers |
| Can't judge nuance or quality | Can be wrong; check it against your own judgment |

Good evaluations often use both: code for what can be checked exactly, a model grader for the rest, and a human spot-check of the model grader.

## 3. This week's assignment: choose a track

- **Track A, RAG.** A question-answering program over 10–30 documents of your choice that cites its sources.
- **Track B, MCP.** A small MCP server exposing two tools or resources (for example, your course schedule or a local dataset), connected to Claude.
- **Track C, analysis.** For students who prefer not to build: design and run an evaluation of an existing tool, such as a Claude project, NotebookLM, or your week 7 skill, on a 20-item test set.

Every track requires a test set of at least 15 cases, your results, and a discussion of failures.

> **Instructor note.** Briefly show your example for each track. Encourage students to pick the track that connects to their capstone; an evaluation built now can become the capstone's evaluation.

## 4. Lab: choose and start

1. Pick your track.
2. **Draft your test set first**, before building anything. Knowing what you'll test sharpens what you build.
3. Start building, or set up the tool you'll evaluate.

## Coming up Thursday

MCP from the inside, more lab time, and the capstone checkpoint.

## Key terms

**RAG (retrieval-augmented generation)**: answering from retrieved passages of your documents. **Chunk**: a passage of a document used for retrieval. **Embedding**: a numerical representation of meaning. **Evaluation**: systematically testing a system on a set of cases. **Model-based grading**: using a model to judge outputs.

> **Instructor note: book links.** Retrieval-Augmented Generation; Grounding and Citations; Building an Eval Set. Left out deliberately (builder topics for a later course): vector database operations, hybrid search tuning, fine-tuning, orchestration frameworks, observability.
