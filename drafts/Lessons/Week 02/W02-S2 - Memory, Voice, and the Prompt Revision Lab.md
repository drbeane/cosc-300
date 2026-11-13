# Week 2, Session 2: Memory, Voice, and the Prompt Revision Lab

**COSC-300/500 Applied AI Essentials** · Surface: S1 Chat assistant · Capabilities: C14 Memory and custom instructions, C9 Voice · 4D focus: Description

> **Instructor note: preparation.** Have your own Claude memory and preferences settings ready to show (review them first for anything you'd rather not project). Prepare a quick voice-mode demo. Timing: 15 min memory and instructions, 10 min voice, 40 min lab, 10 min share-out.

## What you will be able to do after this session

- Use memory and custom instructions deliberately, and review what a tool has stored about you.
- Judge when voice is better than typing.
- Iterate on a prompt against a set of test inputs instead of tweaking by feel.

## 1. Standing context

On Tuesday you saw that everything in the context shapes the response. Two features let you put context there **every time**, without retyping it:

- **Custom instructions** (sometimes called preferences): something you write once about who you are and how you want responses. For example: "I'm a nursing student. Use plain language. Prefer short answers with a summary first."
- **Memory**: facts the tool saves about you from past conversations and brings into new ones.

Both are capability **C14**. Both enter the context of every chat quietly, which is their strength and their risk.

### What belongs there, and what doesn't

Good candidates for standing context are things that are true across most of your work: your role or field, format preferences, constraints you always want respected. Bad candidates are details of a single task (they'll leak into unrelated chats) and anything sensitive you wouldn't want to resurface later.

### Know what's stored about you

Open your memory settings and read what's there. You can edit or delete items, and most tools let you turn memory off for a chat or entirely. Making a habit of checking is part of responsible use: the tool's picture of you shapes every answer it gives.

> **Instructor note: demo.** Show your own memory page, edit one item, and show how to turn memory off. If a student finds something surprising in their own memory, that's a good moment to discuss what they've been sharing.

## 2. Voice

Voice mode (capability **C9**) lets you talk instead of type. It's good for thinking out loud, practicing an explanation, being quizzed, or working when your hands are busy. It's weaker for precise instructions and long, structured prompts, where typed text is easier to control and review.

> **Instructor note: demo.** Ask Claude by voice to quiz you on this week's terms. Keep it to two or three minutes.

## 3. Stop tweaking by feel

When people improve a prompt, they usually try it once, look at the result, change something, and try again. The trouble is that one good output proves very little. Because answers vary from run to run, and because a prompt that works on one input can fail on another, you can't tell whether your change helped.

A better habit: build a small set of **test inputs** first. Five is enough to start. Include normal cases and a couple of tricky ones. Run every version of your prompt on all five, and compare versions on the same inputs. This is the beginning of **evaluation**, which returns in week 3 and becomes a full topic in week 12.

## 4. Lab: prompt revision

1. Pick a recurring task. Examples: turning meeting notes into a summary, drafting a cover letter for different jobs, explaining a concept from your major at two reading levels.
2. Write 5 test inputs.
3. Write your first prompt and run it on all 5.
4. Revise the prompt at least three times. For each version, record what you changed and why, and the results on all five inputs.

Keep a table like this:

| Version | What changed | Why | Result on the 5 inputs |
|---|---|---|---|
| v1 | — | — | |
| v2 | | | |
| v3 | | | |
| v4 | | | |

> **Instructor note.** Students will want to change several things at once. Encourage one or two changes per version so they can tell what made the difference. If someone's v1 is already excellent, ask them to make the test inputs harder.

## 5. Share-out

Which change made the biggest difference? Did any change make things worse? Which input was the hardest to get right?

## Assignment: Prompt revision log

Choose a recurring task, create 5 test inputs, and take a prompt through at least three documented revisions.

**Submit:**
- Your 5 test inputs.
- Four prompt versions, each with its outputs, what you changed, and why.
- Your final prompt and a 300-word reflection.

**500 extension:** define a simple scoring rubric and score each version on it. Report the scores.

**Estimated time:** 3 hours.

## Before next week

- Claude Academy: **AI Fluency: Framework and foundations**, lessons 10–11.
- Start **AI capabilities and limitations** (finish by week 5).
- Journal entry.

## Key terms

**Custom instructions**: standing instructions you write about yourself and your preferences. **Memory**: information a tool saves about you across chats. **Test set**: a fixed set of inputs used to compare versions of a prompt or system.

> **Instructor note: responsible use.** What memory stores about you; turning it off; reviewing saved memories. The test-set habit introduced here sets up the evaluation work in weeks 3 and 12.
