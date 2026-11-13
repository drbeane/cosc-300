---
marp: true
title: "Week 4: Grounded Notebooks and How Tools Find Sources"
paginate: true
---

# Grounded Notebooks and How Tools Find Sources
### Week 4
COSC-300/500 Applied AI Essentials

---

## Grounded notebooks

- Answer **only** from sources you add
- Closed-book: no outside web
- Examples: **NotebookLM** (free), **Copilot Notebooks** (up to 50 sources on Maryville accounts)

<!-- Check NotebookLM's current product name; Google's docs have started calling it Gemini Notebook. -->

---

## Project vs notebook

| | Project | Grounded notebook |
|---|---|---|
| Sources | Your files **plus** what the model knows and can search | **Only** your sources |
| Strength | Working context for building things | Faithful to a fixed set of sources |
| Best for | Ongoing work, drafting | Studying, closed questions |

---

## How tools find what they cite

**Retrieval** (concept only for now):

1. Your sources are split into chunks
2. Your question is matched to the most relevant chunks
3. Those chunks go into the context
4. The model answers from them and cites them

If retrieval misses the right chunk, the answer suffers. We'll build this in week 12.
