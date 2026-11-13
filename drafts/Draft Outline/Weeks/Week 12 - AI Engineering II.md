# Week 12: AI Engineering II: Retrieval, Evaluation, and MCP

**Surfaces:** API and agent platforms [D, hands-on here] · **Capabilities:** MCP connectors [S] · **4D:** Discernment

## Goals
Students will be able to:
- Explain retrieval-augmented generation: chunking, embeddings or keyword search, retrieval, and grounded answers with citations. Connect it to the projects and notebooks from week 4.
- Build an evaluation set for an AI task and grade results with code-based and model-based grading.
- Explain how an MCP server exposes tools and resources to an agent, and build a minimal one (connecting to week 8).

## Before class
- Claude Academy: **Building with the Claude API**, sections "Prompt evaluation", "RAG and agentic search", and "Model Context Protocol" (watch; code-along optional).
- Optional: **Model Context Protocol: Advanced topics** (500).

## Session 1 (75 min)
- 20 min: RAG from the inside. Why it is used; chunking; search; how citations are attached; why retrieval fails.
- 15 min: Evaluation. A typical eval workflow, test sets, code grading vs model grading; tie back to weeks 2 and 3.
- 40 min: Lab: choose a track and start.

## Session 2 (75 min)
- 15 min: MCP from the inside. Defining a tool and a resource; testing with the inspector; adding it to Claude Code or Cowork.
- 45 min: Lab.
- 15 min: Capstone checkpoint: 3-minute status updates.

## Assignment: Mini RAG app or MCP server, with an eval (choose one track)
- **Track A (RAG):** a question-answering program over 10–30 documents of your choice that cites its sources.
- **Track B (MCP):** a small MCP server exposing two tools or resources (for example, your course schedule or a local dataset), connected to Claude.
- **Track C (analysis, for students who prefer not to build):** design and run an evaluation of an existing tool (a Claude project, NotebookLM, or your week 7 skill) on a 20-item test set.
- All tracks: a test set of at least 15 cases, results, and a 400-word discussion of failures.
- **500 extension:** both model-based and code-based grading, with a check of the model grader's agreement with your own judgment on a sample.
- Estimated time: 4–5 hours.
- **Also due: capstone checkpoint.**

## Responsible use
Grounding does not guarantee accuracy; evaluation as an accountability tool.

## Other resources
From `03 - Supplementary Resources` (links there):
- Hamel Husain and Shreya Shankar, *LLM Evals: Everything You Need to Know*
- DeepLearning.AI, *MCP: Build Rich-Context AI Apps with Anthropic*, or the Hugging Face MCP Course

## Instructor notes
- Book: Retrieval-Augmented Generation; Grounding and Citations; Building an Eval Set.
- Track C keeps the week accessible for non-majors without dropping the evaluation skill.
- Left out (builder topics for a later course): vector database operations, hybrid search tuning, fine-tuning, orchestration frameworks, observability.
