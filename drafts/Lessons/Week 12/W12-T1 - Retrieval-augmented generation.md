# Week 12: Retrieval-augmented generation

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Have one worked example of each track ready to show briefly: a tiny RAG program over a few documents, a minimal MCP server, and a 20-item evaluation sheet for an existing tool. Track C exists so that students who prefer not to build can still learn evaluation; present it as a full alternative, not a lesser option. Timing: 20 min RAG, 15 min evaluation, 40 min lab.

## What you will be able to do

- Explain retrieval-augmented generation: chunking, search, retrieval, and grounded answers with citations.
- Follow one question through a RAG system, step by step.
- Explain why retrieval fails, and tell a retrieval failure from a generation failure.
- Decide when RAG is needed and when it isn't.

In week 4 you used projects and notebooks that answer from your documents. This week you look inside. The technique is called **retrieval-augmented generation**, or **RAG**:

1. **Chunk** the documents into passages.
2. **Search** for the passages that best match the question.
3. Place those passages in the model's **context**.
4. The model answers from them and **cites** them.

The name describes the steps. **Retrieval** finds the passages, the prompt is **augmented** with them, and the model **generates** the answer.

### Two phases

A RAG system does its work at two different times.

| Phase | When | What happens |
|---|---|---|
| **Indexing** | Once, when documents are added | Split each document into chunks. Compute an embedding for each chunk. Store the chunks and embeddings. |
| **Answering** | Every time a question is asked | Compute an embedding for the question. Find the closest chunks. Put them in the prompt. Generate the answer. |

When you uploaded sources to a project or notebook in Week 4 and waited a moment before you could ask questions, indexing was what you were waiting for.

### One question, start to finish

Suppose the documents are a student handbook and the question is "Can I get a refund if I withdraw in the third week?"

1. The question is turned into an embedding.
2. The system compares it with the embedding of every chunk and takes the closest few, for example these three:
   - Section 6.1: "Students who withdraw during weeks 2 to 4 receive a 50% tuition refund…"
   - Section 6.3: "Refunds are issued to the original payment method within 30 days…"
   - Section 4.2: "The last day to drop without a W is the end of week 1…"
3. The program builds a prompt: "Answer the question using only the passages below. Cite the section for each claim. If the passages don't contain the answer, say so." The three chunks follow, then the question.
4. The model answers: "Yes. Withdrawing in week 3 gives a 50% tuition refund (6.1), issued to your original payment method within 30 days (6.3)."

The model never saw the rest of the handbook. Its answer could only be as good as those three chunks. The instruction in step 3 is also doing real work: "using only the passages" and "say so if they don't contain the answer" are what keep the model from filling gaps with general knowledge.

## Chunking

Documents are usually too long to send whole, so they're split into chunks. Chunk size is a trade-off. Chunks that are too small lose meaning: a sentence pulled out of its paragraph may not make sense. Chunks that are too large waste context and make it harder to tell which part is relevant.

Where the cuts fall matters as much as size. Splitting every 500 words regardless of content can cut a rule off from its exception, or a table's header from its rows. Splitting at headings and paragraphs keeps related text together. Many systems also **overlap** chunks, so that the last sentences of one are repeated at the start of the next, and a passage that straddles a cut still appears whole in one of them.

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

### Two places to fail

| | Retrieval failure | Generation failure |
|---|---|---|
| What went wrong | The right passage never reached the model | The right passage was there, and the answer was still wrong |
| What it looks like | "The handbook doesn't say", or an answer from the wrong section | A misread number, two passages merged wrongly, a claim the passages don't support |
| How to tell | Look at the retrieved chunks. The answer isn't in them. | Look at the retrieved chunks. The answer is there. |
| What to fix | Chunking, search, the number of chunks retrieved | The prompt, or the model |

So a RAG program should **show you the retrieved chunks**, at least while you're testing. Without them you can't tell which half failed, and you may spend an afternoon rewriting a prompt when the problem was a badly cut chunk. Have your program print the chunks for each question in this week's lab.

## When you need RAG, and when you don't

RAG exists to solve one problem: the documents are too large to put in the context. Context windows are now big enough that for a modest set of documents, you can skip it.

| Situation | Approach |
|---|---|
| A few documents that fit comfortably in the context | Put them all in the prompt. The model reads everything, and nothing can be missed by retrieval. |
| Hundreds or thousands of documents, or documents that change often | RAG |
| Questions about the whole collection ("what themes recur?") | RAG handles these poorly. Summarize in stages, or give the model the whole text if it fits. |
| Information that must be current, such as inventory or today's schedule | A tool that looks it up, as in Week 11 |

A related approach is **agentic search**: instead of retrieving once, an agent is given a search tool and decides for itself what to look for, reads the results, and searches again if it needs more. The research agents of Week 4 and the coding assistants of Week 9 work this way. It costs more per question and copes better with questions that need several steps.

## Key terms

**RAG (retrieval-augmented generation)**: answering from retrieved passages of your documents. **Chunk**: a passage of a document used for retrieval. **Embedding**: a numerical representation of meaning. **Indexing**: preparing documents for retrieval by chunking them and computing embeddings. **Overlap**: repeating the end of one chunk at the start of the next. **Agentic search**: retrieval in which an agent chooses and repeats its own searches.

> **Instructor note: book links.** Retrieval-Augmented Generation; Grounding and Citations; Building an Eval Set. Left out deliberately (builder topics for a later course): vector database operations, hybrid search tuning, fine-tuning, orchestration frameworks, observability.
