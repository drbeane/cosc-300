# Week 4: Grounded notebooks and how tools find sources

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

## What you will be able to do

- Use a grounded notebook to answer only from a fixed set of sources, and compare it with a project.
- Explain at a concept level how these tools find what they cite.

## Grounded notebooks

A **grounded notebook** answers only from the sources you add to it. It doesn't use the open web, and it's designed to stay faithful to your documents. Examples are **NotebookLM**, which is free, and **Copilot Notebooks**, which on Maryville accounts allow up to 50 sources.

### Projects and notebooks compared

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files, plus what the model knows and can look up | Only your sources |
| Strength | A working context for producing things | Faithful answers from a fixed set of sources |
| Best for | Ongoing work and drafting | Studying, closed questions about specific documents |

Neither is better in general. If you need to know what *these documents* say, a notebook keeps the model honest. If you need to produce something that draws on your documents and on broader knowledge, a project is more capable.

## How these tools find what they cite

Projects, notebooks, and research agents all depend on **retrieval**. Here's the idea at a concept level; you'll build a simple version in week 12.

1. Your sources are split into **chunks**: passages a few paragraphs long.
2. Your question is compared with the chunks to find the most relevant ones.
3. Those chunks are placed in the model's context.
4. The model answers from them and cites them.

If step 2 misses the right passage, the answer suffers, even though the right information was in your documents. A grounded answer is only as good as what was retrieved.

## Key terms

**Grounded notebook**: a tool that answers only from sources you supply. **Retrieval**: finding the passages most relevant to a question. **Chunk**: a passage of a source document used in retrieval.
