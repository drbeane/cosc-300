# Week 5: Creating files, multimodal input, and generative media

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Check which Copilot in Outlook features work on student accounts this term (summarize a thread, draft a reply, the chat button) and plan the demo around those. Pick an image generation tool other than Claude for the media segment and say up front that Claude does not generate raster images natively. Have a screenshot, a chart image, and a scanned page ready for the multimodal demo. Timing: 15 min files and multimodal, 10 min Outlook, 15 min generative media, 35 min lab.

## What you will be able to do

- Produce documents, spreadsheets, slides, and simple pages from a chat, and describe them well enough to get a usable first version.
- Use images, screenshots, and PDFs as input, and check how the model read them.
- Write a prompt for a generated image.
- Discuss provenance, deepfakes, and copyright in generated media.

## File and document creation

From a chat, you can now produce finished files: Word or PDF reports, spreadsheets with working formulas, slide decks, diagrams, and simple interactive web pages. The model writes the content and, behind the scenes, the code that builds the file. You download the result and open it in the usual application.

Many products also show the work in a panel beside the chat, where you can see it and ask for changes. In Claude this is called an **artifact**. A small interactive page, such as a quiz, a calculator, or a chart you can filter, can be built and used right there.

### Describing a file

A file has more to describe than a chat answer. A good request covers:

- **The content**: where it comes from. Point to the analysis, notes, or source the file should be built from, so that the model doesn't invent material.
- **The audience and purpose**: who opens this file and what they'll do with it.
- **The structure**: sections for a report, slide-by-slide topics for a deck, columns for a spreadsheet.
- **The length**: pages, slides, rows.
- **The look**, where it matters: plain and professional, the school's colors, large type for projection.

> Build a five-slide deck from the analysis above, for department heads who have ten minutes. Slide 1: the question and the one-sentence answer. Slides 2–4: one finding each, with the chart that supports it and a headline that states the finding. Slide 5: what we recommend and what we still don't know. Use only numbers from the analysis. Keep each slide under 30 words apart from the chart.

It often works best in two steps. Agree on the content first as an outline in Markdown, as in the first topic this week. When the outline is right, ask for the file. Fixing an outline is quick, and fixing a finished deck is slow.

### A finished look hides errors

Your job doesn't change. A formatted report with a title page and charts looks more trustworthy than the same words in a chat, and it is exactly as likely to contain a wrong number. After the file is built, check:

- **The numbers** against the analysis they came from. Figures are sometimes retyped, rounded, or changed on the way into a document.
- **The charts**: right data, right labels, a sensible axis.
- **The claims**, including any the model added to fill out a section.
- **The file itself**: open it in the real application. Slides may have text running off the edge, and spreadsheet formulas may point at the wrong cells.

## Multimodal input

A **multimodal** model takes more than one kind of input. Current models read images as well as text, and many products accept audio and video too. Uses that come up all the time:

| Input | What you might ask |
|---|---|
| A screenshot of an error message | "What does this mean, and what should I try first?" |
| A chart from an article | "What does this graph claim? Does the data shown support the headline?" |
| A photo of a whiteboard or handwritten notes | "Type these up as an outline." |
| A scanned or photographed document | "Pull out the dates and amounts into a table." |
| A photo of an object | "What is this part called, and what is it for?" |
| A screenshot of an app's settings | "Where do I turn off notifications?" |

Models are good at this, and not perfect. Know where they slip:

- **Small or blurry text.** A model may confidently read a smudged "8" as a "3". It will rarely tell you it had trouble.
- **Numbers read off a chart.** Estimating a bar's height from a picture is approximate. If you have the underlying data, use it.
- **Dense tables.** Values can drift into the wrong row or column, especially in a photographed table.
- **Handwriting.** Names and numbers are the usual casualties.
- **Counting and position.** "How many people are in this photo?" and "which item is third from the left?" are less reliable than you'd expect.
- **Long PDFs.** Some tools read only the text of a PDF and skip its charts and images, and scanned pages may not be read at all. Ask the model what it can see.

The check is the same as always. If a number matters, compare it against the original.

A privacy note: a screenshot often contains more than you meant to share, such as other tabs, names in a sidebar, or a notification. Crop before you upload.

> **Instructor note: demo.** Show the three prepared images. For the chart, ask the model to extract the values, then compare against the source data; small misreadings are common and make the point.

## Generative media

Generative media means images, audio, and video produced by AI from a description. Image generators have become very capable in a short time. Photorealistic pictures and readable text inside an image, which were weak points a few years ago, are now routine.

Claude does **not** generate raster images natively, meaning images made of pixels, such as photos and illustrations. It can make diagrams, charts, and vector graphics by writing code, which is how the Mermaid diagrams earlier this week work. For this week's assignment you'll use another tool for any generated image.

### Describing an image

An image prompt is a description, and the anatomy from Week 2 applies with different parts:

- **Subject**: what is in the picture.
- **Setting**: where and when.
- **Composition**: close-up or wide, the angle, what's in front.
- **Style**: photograph, watercolor, flat icon, technical diagram.
- **Mood and lighting**: bright and clinical, warm evening light.
- **Use**: a slide background needs empty space for a title. A logo needs to work small.

> **Weak:** A picture of a nurse.

> **Strong:** A wide photograph of a nurse in blue scrubs at a hospital workstation at night, seen from the side, reviewing a tablet. Soft light from the screen, the corridor behind out of focus. Calm and focused mood. Leave the left third of the image dark and empty for a slide title.

Expect to revise. Generate, look, and adjust the description. Check generated images the way you check text: for extra fingers and odd objects, and for garbled or misspelled words in signs and labels. If the picture is meant to show something real, such as a piece of equipment or a map, compare it to the real thing. A generated diagram of the heart may look right and be anatomically wrong.

### Questions generated media raises

- **Provenance and labeling.** **Provenance** is the record of where a piece of content came from and how it was made. Label AI-generated images as AI-generated, in this course and generally. Some generators attach provenance data or an invisible watermark to their output, and some platforms display a label. These marks are useful, but they can be stripped out, so their absence doesn't prove an image is real.
- **Deepfakes.** A **deepfake** is realistic fake media of a real person: their face, their voice, or both. Deepfakes are used in fraud (a cloned voice asking a relative for money), harassment, and political deception. Don't generate images or audio of real people without their consent. On the receiving end, treat an urgent, surprising request by voice or video as something to verify through a channel you already trust.
- **Copyright.** Three questions are being worked out in courts and legislatures and vary by country: whether training a model on copyrighted work is permitted, whether imitating a living artist's style is fair, and who owns AI output. In the United States, work generated without meaningful human authorship has generally not been eligible for copyright. For anything commercial, check the tool's terms and your employer's policy.
- **Bias.** Image models reflect their training data. Asked for "a CEO" or "a nurse", they may return a narrow range of people. Look at what you got, and describe what you want.

## Key terms

**Artifact**: a document, page, or other piece of work that a chat tool builds and displays beside the conversation. **Multimodal**: able to take more than one kind of input, such as text and images. **Generative media**: images, audio, or video produced by AI. **Raster image**: an image made of pixels, such as a photo. **Provenance**: where a piece of content came from and how it was made. **Deepfake**: realistic fake media of a real person.

> **Instructor note: book links.** Generative Media; Designing with AI.
