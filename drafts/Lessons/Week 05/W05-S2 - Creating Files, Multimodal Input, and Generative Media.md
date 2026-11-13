# Week 5, Session 2: Creating Files, Multimodal Input, and Generative Media

**COSC-300/500 Applied AI Essentials** · Surfaces: S1 Chat assistant, S2 Embedded copilot · Capabilities: C12 File and document creation, C13 Multimodal input, C10 Generative media · 4D focus: Description

> **Instructor note: preparation.** Check which Copilot in Outlook features work on student accounts this term (summarize a thread, draft a reply, the chat button) and plan the demo around those. Pick an image generation tool other than Claude for the media segment and say up front that Claude does not generate raster images natively. Have a screenshot, a chart image, and a scanned page ready for the multimodal demo. Timing: 15 min files and multimodal, 10 min Outlook, 15 min generative media, 35 min lab.

## What you will be able to do after this session

- Produce documents, spreadsheets, slides, and simple pages from a chat.
- Use images, screenshots, and PDFs as input, and check how the model read them.
- Use AI inside an application and judge when that beats a separate assistant.
- Discuss provenance, deepfakes, and copyright in generated media.

## 1. File and document creation

From a chat, you can now produce finished files (capability **C12**): Word or PDF reports, spreadsheets, slide decks, diagrams, and simple interactive web pages. The model writes the content and, often, the code that builds the file.

Your job doesn't change. The file looks finished, which makes errors easier to miss. Check the content, the numbers, and the claims as carefully as you would in a plain-text answer.

## 2. Multimodal input

Models can read more than text (capability **C13**):

- **Screenshots**: "What does this error message mean?"
- **Charts**: "What does this graph claim, and is the claim supported?"
- **Scanned PDFs and photos** of documents.
- **Handwritten notes.**

They're good at this, but not perfect. Be especially careful with small text, numbers read off a chart, and dense tables. If a number matters, check it against the original.

> **Instructor note: demo.** Show the three prepared images. For the chart, ask the model to extract the values, then compare against the source data; small misreadings are common and make the point.

## 3. AI inside an application

An **embedded copilot** (surface **S2**) is AI built into an application you already use. On Maryville accounts, the example is **Copilot in Outlook**: it can summarize a long email thread or help draft a reply, right where the email is.

Embedded AI is convenient: there's no copying and pasting, and it works on what's in front of you. Its limit is the flip side: it mostly sees that one application's context.

| Inside the app | A separate assistant |
|---|---|
| Quick tasks on what's in front of you | Work that draws on many sources |
| No setup | Projects, files, agents |
| Limited to that app | Broader tools and models |

For most graduates, an embedded copilot in Microsoft 365 will be the first AI they meet at work, which is a good reason to know what it does well.

> **Instructor note: demo.** Summarize a real (non-sensitive) thread and draft a reply in Outlook. Keep it short and fair; the point is that this is the right tool for this job.

## 4. Generative media

Generative media (capability **C10**) means images, and increasingly video, produced by AI. Claude does **not** generate raster images natively; it can make diagrams, charts, and vector graphics as code. For today's assignment you'll use another tool for any generated image.

Generated media raises real questions:

- **Provenance and labeling.** Label AI-generated images as AI-generated, in this course and generally.
- **Deepfakes.** Realistic fakes of real people can deceive and harm. Don't generate images of real people without their consent.
- **Copyright.** Questions about training data, imitating an artist's style, and who owns the output are unsettled and vary by jurisdiction.

## 5. Lab: finish the package

Complete this week's deliverable from your Tuesday analysis:

1. A **2-page report** with charts.
2. A **5-slide** summary deck.
3. **One generated image or diagram**, labeled as AI-generated.
4. A **verification log**: three numbers you recomputed independently and one error you caught.

> **Instructor note.** The most common shortfall is a thin verification log. Ask to see it before students leave. If someone genuinely found no error, ask them what they checked and how; "no errors" is acceptable only with evidence.

## Assignment: Data-to-deliverable package

Take a provided or self-sourced dataset of at least 500 rows, with some mess. Have AI clean and analyze it, then produce the report, deck, labeled image or diagram, and verification log described above.

**500 extension:** add a methods appendix explaining each analysis step the AI ran and one alternative analysis you considered and rejected.

**Estimated time:** 4 hours.

## Looking ahead: the big shift

Next week we stop chatting with AI and start **delegating work** to an agent that acts on files on your computer.

- Claude Academy: **Introduction to Claude Cowork**, lessons 1–5.
- **AI Fluency: Framework and foundations**, lessons 6–7.
- **Make a backup copy** of the practice folder you plan to use.
- Journal entry.

## Key terms

**Embedded copilot**: AI inside an existing application. **Multimodal**: able to take more than one kind of input, such as text and images. **Provenance**: where a piece of content came from and how it was made.

> **Instructor note: book links.** Generative Media; Designing with AI.
