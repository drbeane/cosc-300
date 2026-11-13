# Week 4: Grounded notebooks and how tools find sources

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

## What you will be able to do

- Explain what grounding is and why it reduces hallucination.
- Use a grounded notebook to answer only from a fixed set of sources, and compare it with a project.
- Explain at a concept level how these tools find what they cite.
- Recognize a retrieval failure and work around it.

## Grounding

**Grounding** means giving a model source material and having it answer from that material instead of from what it absorbed in training. Week 3 explained why this helps: a model hallucinates most when it has to produce specifics from memory. With the source in its context, it can read the figure off the page.

Everything in this week is a form of grounding. A project grounds answers in your files. A research agent grounds them in pages it finds on the web. A grounded notebook is the strictest form.

## Grounded notebooks

A **grounded notebook** answers only from the sources you add to it. It doesn't search the open web, and it's designed to stay faithful to your documents. Examples are **NotebookLM**, which is free, and **Copilot Notebooks**, which on Maryville accounts allow up to 50 sources.

What a notebook typically gives you:

- **Answers with citations to passages.** Each statement links to the place in your sources it came from, and selecting the citation shows you the passage. That makes the source-tracing habit from Week 3 a single click.
- **Refusals when the sources are silent.** Ask something your documents don't cover and a notebook will usually tell you so. In a general chat, the model would more likely answer from training.
- **Study materials built from the sources**: summaries, study guides, practice questions, timelines, and in some products an audio discussion of the material.

> **Instructor note: demo.** In your prepared notebook, ask one question the sources answer and select a citation to show the passage. Then ask one the sources don't cover and show the refusal. Ask the same two questions in a plain chat for contrast.

### Projects and notebooks compared

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files, plus what the model knows and can look up | Only your sources |
| When the sources don't cover it | Often answers from general knowledge | Usually says the sources don't cover it |
| Citations | To a file, when asked | To the passage, by default |
| Strength | A working context for producing things | Faithful answers from a fixed set of sources |
| Best for | Ongoing work and drafting | Studying, closed questions about specific documents |

Neither is better in general. If you need to know what *these documents* say, a notebook keeps the model close to them. If you need to produce something that draws on your documents and on broader knowledge, a project is more capable.

Grounded doesn't mean guaranteed. A notebook can still misread a passage, combine two sources into a claim neither makes, or miss the relevant passage altogether. It can also only be as good as its sources: if you load it with a mistaken article, it will report the mistake faithfully. The citations make checking fast. You still have to do it.

## How these tools find what they cite

Projects, notebooks, and research agents all face the same problem. Your sources may be far larger than the context window, and even when they fit, filling the context with everything makes answers worse. So the tool selects. The process of finding the relevant passages is called **retrieval**. Here's the idea at a concept level. You'll build a simple version in Week 12.

1. **Chunk.** Your sources are split into **chunks**: passages a few paragraphs long.
2. **Match.** Your question is compared with every chunk to find the most relevant ones.
3. **Insert.** The top few chunks are placed in the model's context, along with your question.
4. **Answer.** The model writes its answer from those chunks and cites them.

The model answers from the chunks it was handed. It has not read your whole document in the way you would. If you upload a 300-page handbook and ask a question, the model may see five passages from it.

### How matching works

Step 2 can be done by keyword, like a search box, but most tools match by **meaning**. They convert each chunk and your question into a list of numbers, called an **embedding**, that represents what the text is about. Passages about similar things get similar numbers. This is why a question about "time off after having a baby" can find a passage titled "Parental leave" even though they share no words.

### When retrieval fails

If step 2 misses the right passage, the answer suffers, even though the right information was in your documents. A grounded answer is only as good as what was retrieved. Common failures:

| Failure | Why it happens |
|---|---|
| **The answer is spread across the document** | "What are the main themes of this book?" has no single passage. Retrieval finds a few chunks, and the answer reflects only those. |
| **The passage was split** | A table's header landed in one chunk and its rows in another, or a rule and its exception were separated. |
| **Your wording didn't match** | The document calls it "separation" and you asked about "quitting". Meaning-based matching helps but isn't perfect. |
| **The text couldn't be read** | A scanned page, a chart, or a table stored as an image. |
| **Counting and totals** | "How many times does the report mention budget cuts?" requires the whole document, and the model only sees pieces. |

Signs of a retrieval failure: the tool says your sources don't cover something you know is there, or an answer covers only part of what you know the documents say.

What to do:

- **Rephrase using the document's own terms.** If you know the handbook says "separation", ask about separation.
- **Ask narrower questions.** Go section by section instead of asking for everything at once.
- **Point to the place.** "In chapter 4, what does the author say about…"
- **Reduce the sources** to the ones that matter for this question.
- **For whole-document questions**, give the model the document directly in a chat, if it fits in the context, so that it reads all of it.

## Key terms

**Grounding**: having a model answer from supplied source material instead of from training alone. **Grounded notebook**: a tool that answers only from sources you supply. **Retrieval**: finding the passages most relevant to a question. **Chunk**: a passage of a source document used in retrieval. **Embedding**: a list of numbers representing the meaning of a piece of text, used to match questions to passages.
