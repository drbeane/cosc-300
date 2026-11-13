# Week 2: Testing and revising prompts

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Explain why one good output doesn't show that a prompt works.
- Build a small set of test inputs that includes normal and difficult cases.
- Revise a prompt one change at a time and record what each change did.
- Decide when a prompt is good enough to stop.

## Why trying it once isn't enough

When people improve a prompt, they usually try it once, look at the result, change something, and try again. This feels like progress, but it tells you very little, for two reasons.

- **Answers vary from run to run.** Models sample their output, as you saw in Week 1, so the same prompt gives a different response each time. If version 2 looks better than version 1, the prompt may have improved, or you may have had a lucky run.
- **A prompt that works on one input can fail on another.** A summarizing prompt tuned on a tidy two-page article may fall apart on a rambling transcript. If you only ever test on one input, you are fitting the prompt to that input.

Most prompts worth revising are ones you'll reuse: a prompt that turns meeting notes into a summary, or one that drafts replies to a common kind of email. For those, the question to ask is whether the prompt works across the range of inputs it will see, and one output can't answer that.

## Build a test set

A **test set** is a small, fixed group of inputs that you run every version of your prompt against. Five is enough to start. Build it before you start revising, so that your prompt isn't shaped by the examples you happened to try.

A good test set covers the range of what the prompt will meet:

| Kind of input | Purpose | Example, for a "meeting notes to summary" prompt |
|---|---|---|
| **Typical** (two or three) | Shows the prompt works on everyday cases | Ordinary notes from a 30-minute team meeting |
| **Long or messy** | Shows it holds up when the input is hard to read | Notes with half-sentences, abbreviations, and a tangent about parking |
| **Short or thin** | Shows it doesn't invent content to fill space | Three lines from a meeting where nothing was decided |
| **Tricky** | Probes a specific worry | Notes where a decision was made and then reversed later in the meeting |

The difficult cases are the valuable ones. Most prompts handle typical inputs on the first try, and the difference between versions shows up at the edges.

## Decide what good looks like

Before you run anything, write down what a good output must do. Without that, you'll judge each output by overall impression, and your standard will shift as you go. Three to five checks is enough:

- Lists every decision, and no decision that was later reversed.
- Names an owner for every action item, or says "no owner stated".
- Is under 150 words.
- Contains nothing that isn't in the notes.

Checks like these are specific enough that two people would agree on whether an output passes. "Sounds professional" is not.

## The revision loop

1. **Run** the current version on all the test inputs.
2. **Read every output** against your checks and note where it fails.
3. **Find a pattern.** Which failure shows up most often, or matters most?
4. **Make one change** aimed at that failure.
5. **Run all the inputs again**, including the ones that already passed.
6. **Record** what you changed, why, and what happened.

Two parts of this loop are easy to skip and shouldn't be.

**Change one thing at a time.** If you add an example, tighten the length limit, and reword the goal all at once, and the outputs improve, you won't know which change helped. One of them may have made things worse while another covered for it.

**Rerun the inputs that already passed.** A change that fixes one case often breaks another. Telling the model to "be concise" may fix a rambling summary of the long notes and cause it to drop an action item from the typical ones. You only catch this if you rerun everything.

### A worked example

| Version | What changed | Why | Result on the 5 inputs |
|---|---|---|---|
| v1 | "Summarize these meeting notes." | Starting point | Readable, but lengths range from 60 to 400 words. Action items are buried in paragraphs. The thin input got a padded summary. |
| v2 | Added the audience and format: "for team members who missed the meeting. Sections: Decisions, Action items, Open questions." | Outputs had no consistent shape | All five now have the three sections. The reversed decision is listed as final. Thin input still padded. |
| v3 | Added: "If the notes don't say who owns an item or nothing was decided, say so. Don't fill in gaps." | Padding and invented owners | Thin input now reads "No decisions recorded." Owners are correct. Reversed decision is still wrong. |
| v4 | Added: "If a decision changes during the meeting, report only the final outcome and note that it changed." | The one remaining failure | All five pass all four checks. |

Each row has one change, a reason tied to something seen in the outputs, and a result on all five inputs. Your log this week will look like this.

Because output varies, run an input two or three times when a result is borderline. A prompt that passes four runs in five is different from one that passes every time, and for a task you'll repeat a hundred times, that difference matters.

## When to stop

A prompt is finished when it passes your checks on every test input, or when the remaining failures are cheaper to fix by hand than by more revising. You are not aiming for a perfect prompt.

Two warning signs that you've gone too far:

- **The prompt has grown a rule for every case.** A long list of special instructions is hard to maintain, and the model gives each one less weight. If you find yourself adding the sixth "also, never…", step back and rewrite the description of what you want.
- **You are tuning to the test set.** If a prompt passes all five inputs only because you wrote instructions about those five, it will fail on the sixth. Add a new input now and then to check.

This habit of testing against a fixed set is the beginning of **evaluation**. It returns in Week 3, when you judge whether output is correct, and becomes a full topic in Week 12, when you'll build a test set for a program.

## Key terms

**Test set**: a fixed set of inputs used to compare versions of a prompt or system. **Edge case**: an unusual input that is likely to expose a weakness. **Evaluation**: measuring how well a prompt or system performs against stated criteria.
