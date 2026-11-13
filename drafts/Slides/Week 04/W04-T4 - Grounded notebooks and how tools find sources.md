---
marp: true
title: "Week 4: Grounded notebooks and how tools find sources"
paginate: true
---

# Grounded notebooks and how tools find sources
### Week 4
COSC-300/500 Applied AI Essentials

---

## Grounding

Have the model answer from **source material**, not from memory.

- A project grounds answers in your files
- A research agent grounds them in web pages
- A grounded notebook is the strictest form

With the source in context, the model reads the figure off the page.

---

## Grounded notebooks

- Answer **only** from sources you add
- Closed-book: no outside web
- Examples: **NotebookLM** (free), **Copilot Notebooks** (up to 50 sources on Maryville accounts)

<!-- Check NotebookLM's current product name; Google's docs have started calling it Gemini Notebook. -->

---

## What a notebook gives you

- Citations to the **passage**, one click away
- "Your sources don't cover that"
- Study materials: summaries, guides, practice questions

<!-- Demo: one question the sources answer, one they don't. Repeat both in a plain chat. -->

---

## Project vs notebook

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files **plus** what the model knows and can search | **Only** your sources |
| Strength | Working context for building things | Faithful to a fixed set of sources |
| Best for | Ongoing work, drafting | Studying, closed questions |

---

## Grounded doesn't mean guaranteed

A notebook can still:

- misread a passage
- merge two sources
- miss the relevant passage
- faithfully repeat a mistaken source

The citations make checking fast. You still do it.

---

## How tools find what they cite

**Retrieval** (concept only for now):

1. Your sources are split into **chunks**
2. Your question is matched to the most relevant chunks
3. Those chunks go into the context
4. The model answers from them and cites them

We'll build this in week 12.

---

## The model sees pieces

Upload a 300-page handbook, ask a question:

the model may see **five passages**.

It has not read the whole document the way you would.

---

## Matching by meaning

- Each chunk becomes a list of numbers: an **embedding**
- Similar meaning → similar numbers
- "time off after having a baby" finds "Parental leave"

---

## When retrieval fails

- The answer is **spread across** the document
- The passage was **split** between chunks
- Your **wording** didn't match
- The text **couldn't be read** (scans, images)
- **Counting** and totals

Sign: "your sources don't cover that", when you know they do.

---

## What to do

- Rephrase in the document's own terms
- Ask narrower questions
- Point to the place: "In chapter 4…"
- Reduce the sources
- For whole-document questions, give the model the whole document
