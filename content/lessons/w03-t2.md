# Week 3: Verification habits

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

## What you will be able to do

- Decide how much checking an output needs, based on what a mistake would cost.
- Apply five verification habits: trace sources, recompute numbers, test, cross-check, and ask about uncertainty.
- Match the check to the kind of error you're worried about.
- Explain what asking a model to check its own answer can and can't do.

## How much to check

Checking everything in every answer would cancel out the time the tool saved you. Checking nothing means the errors from the last topic end up in your work. The practical question is how much checking a given output deserves. Two things decide it:

- **What would a mistake cost?** Consider who will rely on the output and whether an error can be undone.
- **How likely is a mistake?** The last topic listed where errors concentrate: niche topics, recent events, exact details, long reasoning.

| Situation | Reasonable level of checking |
|---|---|
| Brainstorming gift ideas; a first outline you'll rewrite | Read it over. |
| A study guide you'll learn from; an email to a colleague | Spot-check the specific facts. Confirm anything that surprises you. |
| A paper you'll submit; numbers in a report; advice you'll act on | Verify every factual claim, figure, and citation that the work depends on. |
| Medical, legal, financial, or safety decisions | Treat the output as a starting point for a conversation with a qualified person or an authoritative source. |

Before you check, **pull out the checkable claims**. A page of AI prose mixes facts, opinions, and filler. Go through and mark each name, number, date, quotation, citation, and causal claim ("X caused Y"). Those are the things that can be wrong in a way that matters, and the list is usually shorter than the text makes it seem.

## Five habits

### Trace sources

When an answer cites a source, open it and find the sentence that supports the claim. Three separate things can go wrong:

1. **The source doesn't exist.** The link is dead, or a search for the article's title turns up nothing.
2. **The source exists and doesn't say that.** This is the most common problem with tools that search the web. The page is real and on topic, but the specific claim isn't in it, or the page says something weaker.
3. **The source says it and isn't reliable.** A claim traced to an anonymous forum post or a company's own marketing page is supported, but not well.

A link that exists is not the same as a link that supports the claim. Use your browser's find command (Ctrl+F, or Cmd+F on a Mac) to search the page for the key number or phrase. That takes seconds.

When an answer gives no source, find one yourself. Search for the claim and see whether a source you trust states it. If you can't confirm it anywhere, treat it as unverified, however reasonable it sounds.

### Recompute

Redo the numbers that matter. For a simple figure, use a calculator. For a table, put it in a spreadsheet and let the spreadsheet add the column. In tools that can run code, you can ask the model to do the calculation in code and show it, which is far more reliable than letting it predict the digits.

Before recomputing, do a ten-second sanity check: is the answer the right size? If a model says a 15% tip on a $40 meal is $60, you don't need a calculator to know something went wrong. Rough estimates catch a surprising share of numeric errors.

### Test

If it's code, run it, and try more than the one example the model showed you. If it's a formula for a spreadsheet, try it on a row where you know the answer. If it's a procedure, such as steps for changing a setting, follow the steps. Menus change, and a model may describe last year's version of an app. A test settles the question in a way that reading can't.

### Cross-check

Ask again and compare:

- **The same model in a new chat.** A fresh conversation doesn't carry the first answer, so the model works it out again. If the two answers disagree on a fact, at least one is wrong.
- **A different model or vendor.** Different models make somewhat different mistakes.
- **A source that isn't AI.** A textbook, an official website, or a person who knows.

Agreement between two models is weak evidence. They were trained on much of the same text and can share the same mistake, especially a popular misconception. Disagreement is a strong signal: it tells you exactly where to dig. Cross-checking is good for finding problems and poor at confirming that there are none.

### Ask about uncertainty

Ask the model where its answer is weakest:

> Which of these claims are you least confident in, and why?

> What would I need to verify before relying on this?

This often surfaces the weak points, and it costs one message. Treat the reply as a list of places to look. A model's stated confidence is only loosely tied to whether it is right, so "I'm confident" isn't evidence.

## Match the check to the error

| If you're worried about | The most useful check |
|---|---|
| Hallucinated facts or citations | Trace sources |
| Outdated knowledge | Find a current source and look at its date |
| Arithmetic slips | Recompute |
| Reasoning errors | Follow the steps one at a time. Cross-check in a new chat. |
| Misread instructions | Reread your prompt and compare it to the output, constraint by constraint |
| Sycophancy | Ask again in a new chat, in neutral words |

## Self-critique is useful but limited

Asking a model to "check your answer" sometimes catches real errors, especially slips in arithmetic or a missed instruction. It has limits:

- **It can invent problems.** When asked to find errors, a model tends to find some, including ones that aren't there. "Are you sure?" can talk a model out of a correct answer, which is the sycophancy problem again.
- **It can confirm a mistake.** If the error came from something the model doesn't know, rereading its own answer won't reveal it.
- **It reviews with the same context.** In the same chat, the model's earlier reasoning is right there, pulling it toward the same conclusion. A review in a fresh chat, with only the answer pasted in, is more independent.

Self-critique is a reasonable first pass and never a replacement for an outside check.

## When you can't verify it

Sometimes you can't confirm a claim: there's no source, the topic is beyond you, or there isn't time. You still have options:

- **Leave it out.**
- **Say that it's unverified** when you pass it on.
- **Ask someone** who would know.

What you shouldn't do is present it as established. You are responsible for what you submit or send, whoever or whatever drafted it.

## Key terms

**Verification**: confirming a claim against something independent of the model that made it. **Cross-check**: comparing answers from separate chats, models, or sources. **Self-critique**: asking a model to review its own output. **Primary source**: the original document, data, or record that a claim comes from.
