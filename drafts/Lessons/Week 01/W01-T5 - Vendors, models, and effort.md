# Week 1: Vendors, models, and effort

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

> **Instructor note: preparation.** Recheck the model pickers in Claude, Copilot Chat, and one free tool this week; they change often. The Claude menu steps and model names below were checked against Anthropic's help center on 2026-11-13, and the OpenAI model names against OpenAI's developer models page the same day. Recheck the tiers table before class. On 2026-10-03 the Maryville Copilot account showed only GPT 5.6 Sol with Quick response, Think deeper, and Auto; a student account may differ. Have the privacy settings pages for Claude and Copilot ready to show. Timing: 15 min vendors and models, 40 min lab, 10 min privacy, 10 min share-out.

## What you will be able to do

- Tell apart the company, the model, and the product when someone names an AI tool.
- Identify the major AI vendors and the tiers of models they offer.
- Explain why a reasoning model, or a higher effort setting, behaves differently from a fast model.
- Choose a model and an effort level for a task, and say what the choice costs.
- Find out which model a tool is using, and find a model's system card.

## Company, model, and product

People say "I asked ChatGPT" or "I used Claude" as if each were one thing. Three different things hide behind those names, and it helps to keep them apart.

| | What it is | Examples |
|---|---|---|
| **Company** | The vendor that builds and sells the technology | Anthropic, OpenAI, Google, Microsoft, Meta |
| **Model** | The trained system that reads your text and writes the reply | Claude Sonnet, Claude Opus, Gemini |
| **Product** | The software you open, which sends your words to a model | The Claude app, ChatGPT, Copilot, Claude Code |

The three don't line up one to one:

- **One product can use several models.** The Claude app lets you pick from a menu. ChatGPT is a product; the models behind it have their own names.
- **One model can sit inside several products.** The same Claude model answers you in the Claude app, in Claude Code, and inside other companies' tools.
- **A product can use another company's models.** Microsoft's Copilot runs on models from OpenAI and, in some configurations, Anthropic.

So when an answer is poor, ask which **model** produced it. When a feature is missing, such as file upload or web search, that is usually the **product**. The surfaces map in the previous topic is a map of products. This topic is about the models inside them.

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

Most vendors offer a family of models at different sizes. Anthropic's and OpenAI's families each have four:

| Tier | Trade-off | Claude (Anthropic) | GPT (OpenAI) |
|---|---|---|---|
| Top | Most capable; slowest and most expensive | Fable | Astra |
| Large | Close to the top tier at a lower cost | Opus | Sol |
| Middle | A balance of capability, speed, and cost | Sonnet | Terra |
| Small | Fast and cheap | Haiku | Luna |

The two columns are matched by where each model sits in its own family. A model is not equal to the one beside it, and on a given task either vendor's model may do better. Each name also carries a version number, such as Sonnet 5.5 or GPT-6.1 Sol, which rises with each release.

Families change. Vendors release new versions several times a year, and they add and rename tiers. These names were current in November 2026 and will be different by the time you graduate. The pattern of a few sizes, from most capable to fastest, has held for years.

Bigger is not always better. For a quick rewrite or a simple classification, a small model is faster and uses less of your allowance. For a hard analytical problem or a long chain of reasoning, the larger model may get it right where the small one doesn't. Choosing a model is a judgment about the task.

## Effort and "thinking"

Many current models can **reason** before answering: they work through the problem internally, sometimes at length, before writing the response. Tools expose this as an effort setting or a "think deeper" option. Claude has effort levels from Low to Max. Copilot Chat offers Quick response and Think deeper.

More thinking helps most on problems with several steps where an early mistake ruins the result: math, logic, planning, careful analysis. On simple tasks it's usually wasted.

## What a bigger model or more effort costs

On a subscription you don't pay per message, so the cost is easy to miss. There are two:

- **Time.** A large model at high effort can take a minute or more on a question a small model answers in seconds.
- **Allowance.** Claude Pro has a usage limit that resets every five hours and a second limit for the week, and both are shared across all models. Larger models and higher effort use them up faster. When you reach a limit, you wait or pay extra.

You can see where you stand in Claude under **Settings**, then **Usage**. If you run out during this week's lab, that is useful information about your choices.

## Choosing a model and effort level

A default that works for most tasks:

1. **Start in the middle.** Use the middle model at its default effort.
2. **Move up when the answer is wrong, not when it is merely plain.** If a multi-step problem comes back with a mistake in the reasoning, try more effort or the large model.
3. **Move down for quick or repeated work.** Short rewrites, simple questions, and anything you'll run many times.
4. **Check your prompt before you move up.** A vague request gets a vague answer from any model. Describing the task better often helps more than a bigger model, and it costs nothing. That is next week's topic.

Three tasks show how this plays out:

| Task | Reasonable choice | Why |
|---|---|---|
| Make an email sound friendlier | Small or middle model, low effort | One step, easy to judge, nothing to reason through |
| Turn a 30-page reading into a study guide | Middle model, default effort | Long input, but the job is summarizing |
| Find the flaw in a budget where the totals don't add up | Large model or higher effort | Several steps, and one early mistake ruins the answer |

Choosing a model and an effort level is a skill you'll use all term.

## Which model am I using?

Look before you compare two answers. If you don't know which model wrote each one, you can't tell what caused the difference.

:::steps Find and change the model in Claude
1. Look next to the send button. The menu there shows the current model and effort level.
2. Select the model name, then choose a model. **More models** shows the rest.
3. To change effort, select the model name, select **Effort**, and choose a level. The recommended level for each model is marked **Default**.

A change applies from Claude's next response, so you can switch partway through a chat. These steps are from Anthropic's page [Change the model, effort, and thinking settings](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings).
:::

In other tools, look for a menu near the message box or at the top of the chat. If there isn't one, the tool has chosen for you.

Don't rely on asking the AI which model it is. Models often get their own name or version wrong.

### What you can choose depends on the tool

| Tool | Models | Effort control |
|---|---|---|
| Claude Pro | Several, from a menu | Yes, from Low to Max |
| Copilot Chat (Maryville) | One model on the account we tested | Quick response, Think deeper, or Auto |
| Free tiers | Usually smaller models | Limited |

> **Instructor note.** Say plainly that the Copilot row reflects one faculty account on one date. The point to land is not "Copilot is bad" but that a tool that hides model choice also hides a variable you need to understand.

## Model cards and system cards

When a vendor releases a model, it usually publishes a document describing what the model can do, how it was tested, and where it falls short. The usual names are **model card** and **system card**.

A card is the vendor's own account of its model. It is the best single source for a model's knowledge cutoff, its test results, and the risks the vendor checked for. It is also written by the company selling the model, so read it as you would any manufacturer's description.

Cards can run to a hundred pages or more. Read the summary, then go to the section you need.

- Anthropic lists its cards at [anthropic.com/system-cards](https://www.anthropic.com/system-cards).
- For another vendor, search for the model's name with "model card" or "system card".

## Key terms

**Vendor**: a company that builds and sells AI models or products. **Model**: the trained system that reads your text and writes the reply. **Product**: the software you open, which sends your words to a model. **Model tier**: a size class within a model family. **Reasoning model**: a model that works through a problem before answering. **Effort setting**: a control over how much a model reasons. **Usage limit**: the amount of work a subscription allows in a period of time. **Model card / system card**: a vendor's published description of a model's capabilities, testing, and limits.
