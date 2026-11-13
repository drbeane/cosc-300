# Week 1: Vendors, Models, and Effort

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Recheck the model pickers in Claude, Copilot Chat, and one free tool this week; they change often. On 2026-10-03 the Maryville Copilot account showed only GPT 5.6 Sol with Quick response, Think deeper, and Auto; a student account may differ. Have the privacy settings pages for Claude and Copilot ready to show. Timing: 15 min vendors and models, 40 min lab, 10 min privacy, 10 min share-out.

## What you will be able to do

- Identify the major AI vendors and the tiers of models they offer.
- Explain why a reasoning model, or a higher effort setting, behaves differently from a fast model.

## Who makes the models

A handful of companies build most of the AI models you will meet:

- **Anthropic** makes Claude, the main tool in this course.
- **OpenAI** makes ChatGPT and the Codex coding agent.
- **Google** makes Gemini and NotebookLM.
- **Microsoft** makes Copilot, which runs on models from OpenAI and, in some configurations, Anthropic.
- **Meta** makes the Muse personal agent and the Llama family of models.
- **Open-weight models** are released for anyone to download and run on their own hardware.

This matters because the same task can go very differently on different vendors' tools, and because the tool your employer gives you may not be the one you'd choose.

## Model tiers

Most vendors offer a family of models at different sizes. Claude's family is a useful example:

| Tier | Trade-off | Claude example |
|---|---|---|
| Large | Most capable; slowest and most expensive | Opus |
| Middle | A balance of capability, speed, and cost | Sonnet |
| Small | Fast and cheap | Haiku |

Bigger is not always better. For a quick rewrite or a simple classification, a small model is faster and uses less of your allowance. For a hard analytical problem or a long chain of reasoning, the larger model may get it right where the small one doesn't. Choosing a model is a judgment about the task.

## Effort and "thinking"

Many current models can **reason** before answering: they work through the problem internally, sometimes at length, before writing the response. Tools expose this as an effort setting or a "think deeper" option.

More thinking helps most on problems with several steps where an early mistake ruins the result: math, logic, planning, careful analysis. It costs you time and usage. On simple tasks it's usually wasted.

Choosing a model and an effort level is a skill you'll use all term.

### What you can choose depends on the tool

| Tool | Models | Effort control |
|---|---|---|
| Claude Pro | Opus, Sonnet, Haiku | Yes |
| Copilot Chat (Maryville) | One model on the account we tested | Quick response, Think deeper, or Auto |
| Free tiers | Usually smaller models | Limited |

> **Instructor note.** Say plainly that the Copilot row reflects one faculty account on one date. The point to land is not "Copilot is bad" but that a tool that hides model choice also hides a variable you need to understand.

## Key terms

**Model tier**: a size class within a model family. **Reasoning model**: a model that works through a problem before answering. **Effort setting**: a control over how much a model reasons.
