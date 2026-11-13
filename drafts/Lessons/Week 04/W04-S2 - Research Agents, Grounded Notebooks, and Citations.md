# Week 4, Session 2: Research Agents, Grounded Notebooks, and Citations

**COSC-300/500 Applied AI Essentials** · Surface: S1 Chat assistant · Capabilities: C4 Research agent, C7 Grounded notebook · 4D focus: Discernment

> **Instructor note: preparation.** Run a research request yourself the day before on a topic you know, and find at least one citation that doesn't support its claim; it makes a strong example. Set up a NotebookLM notebook with three or four sources. Check NotebookLM's current name: Google's documentation has begun calling it Gemini Notebook. This lab uses Claude Pro's Research feature; Copilot Chat (Basic) and Claude Free have no research agent. Timing: 15 min research agents, 10 min notebooks, 10 min retrieval concept, 40 min lab.

## What you will be able to do after this session

- Run a multi-step research task with a research agent and audit the report it returns.
- Use a grounded notebook to answer only from a fixed set of sources, and compare it with a project.
- Explain at a concept level how these tools find what they cite.

## 1. Research agents

A **research agent** (capability **C4**) goes well beyond a single web search. Given a question, it:

1. breaks the question into sub-questions;
2. runs many searches;
3. reads the sources it finds;
4. writes a report with citations.

A research run takes minutes rather than seconds and covers far more ground than you could in the same time. That makes it valuable, and it makes auditing it important, because a long, well-formatted, heavily cited report looks authoritative whether or not it is.

### Where research agents go wrong

- A citation exists but **doesn't support** the claim attached to it.
- The source is **low quality or outdated**.
- Two sources are **merged** into a claim neither one makes.
- A link is **broken**, or occasionally fabricated.
- A gap in the evidence is presented as if it were **consensus**.

A cited report still needs checking. The citations make checking possible; they don't make it unnecessary.

## 2. Grounded notebooks

A **grounded notebook** (capability **C7**) answers only from the sources you add to it. It doesn't use the open web, and it's designed to stay faithful to your documents. Examples are **NotebookLM**, which is free, and **Copilot Notebooks**, which on Maryville accounts allow up to 50 sources.

### Projects and notebooks compared

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files, plus what the model knows and can look up | Only your sources |
| Strength | A working context for producing things | Faithful answers from a fixed set of sources |
| Best for | Ongoing work and drafting | Studying, closed questions about specific documents |

Neither is better in general. If you need to know what *these documents* say, a notebook keeps the model honest. If you need to produce something that draws on your documents and on broader knowledge, a project is more capable.

## 3. How these tools find what they cite

Projects, notebooks, and research agents all depend on **retrieval**. Here's the idea at a concept level; you'll build a simple version in week 12.

1. Your sources are split into **chunks**: passages a few paragraphs long.
2. Your question is compared with the chunks to find the most relevant ones.
3. Those chunks are placed in the model's context.
4. The model answers from them and cites them.

If step 2 misses the right passage, the answer suffers, even though the right information was in your documents. A grounded answer is only as good as what was retrieved.

## 4. Lab: run a research agent and start the audit

1. Open the project you built on Tuesday.
2. Run a research request on your research question.
3. Save the report.
4. Start auditing: open each citation and find the passage that should support the claim.

Classify every citation you check:

| Citation | Claim it is attached to | Verdict |
|---|---|---|
| 1 | | Supports / Partly supports / Does not support / Fabricated or inaccessible |
| 2 | | |

Audit at least ten for the assignment.

> **Instructor note.** Show your prepared example of a non-supporting citation before students start. Many will assume a working link means support; the audit forces them to read. Watch the time: research runs take several minutes, so have students start them in the first five minutes of the lab.

## Assignment: Research brief with citation audit

Produce a 2-page research brief on your topic using your project and a research run. Then audit the research report.

**Submit:**
- The brief.
- An audit table of at least 10 citations, each classified as above.
- A short note comparing your project with NotebookLM on the same sources: what each did well and badly.

**500 extension:** a 1-page discussion of citation reliability in AI research tools, drawing on at least two published studies of AI citation accuracy.

**Estimated time:** 4 hours.

## Before next week

- Claude Academy: **Claude 101** (lessons on files and creating content).
- Finish **AI capabilities and limitations**.
- Optional: **AI Fluency for creative work**.
- Find a messy dataset of at least 500 rows, or plan to use the one provided.

## Key terms

**Research agent**: a tool that searches over many steps and returns a cited report. **Grounded notebook**: a tool that answers only from sources you supply. **Retrieval**: finding the passages most relevant to a question. **Chunk**: a passage of a source document used in retrieval.

> **Instructor note: book links.** Retrieval-Augmented Generation (concept only); Grounding and Citations.
