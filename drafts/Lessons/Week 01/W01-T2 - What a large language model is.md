# Week 1: What a large language model is

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Explain a large language model (LLM) as a next-token predictor trained in two stages, and say what a knowledge cutoff means.
- Explain why the same prompt can give different answers.
- Say how an LLM differs from a search engine, a database, and a calculator.
- Predict where a model is likely to be reliable and where it isn't.

The AI systems in this course are built on **large language models**, or LLMs. Understanding roughly how they work will help you predict where they succeed and where they fail.

## A next-token predictor

An LLM reads and writes text as **tokens**, which are pieces of words. In English a token is about three-quarters of a word on average. Given the text so far, the model calculates a probability for every possible next token, picks one, adds it to the text, and repeats. A full answer is thousands of these predictions in a row.

If you give a model "The capital of France is", the token "Paris" is very likely, and the model will almost always produce it. For an open question with many reasonable answers, the probabilities are spread out, and the model's choice could go many ways.

Here is what the model's prediction might look like for two different beginnings. The numbers are made up to show the idea.

| "The capital of France is" | | "My favorite thing about autumn is" | |
|---|---|---|---|
| Paris | 97% | the | 31% |
| a | 1% | how | 14% |
| located | 1% | watching | 9% |
| every other token | 1% | every other token | 46% |

On the left, one answer dominates, and the model gives it nearly every time. On the right, hundreds of continuations are reasonable, and different runs will go different ways. The Next-token sampler on the Demos page lets you try this yourself.

Notice that the model handles both the same way. It has no separate mode for facts and another for opinions. A question with one right answer and a question with many are both next-token prediction, and the difference is only in how the probabilities are spread.

This is a simple mechanism with surprising results. To predict text well across a huge range of subjects, a model has to absorb a great deal about language, facts, reasoning patterns, and how people explain things. But it is important to remember what it is doing: producing **plausible** continuations. Plausible usually coincides with true. Not always.

### Where the knowledge lives

A model doesn't store the text it was trained on. Training adjusts billions of numbers inside the model, called **parameters** or weights, until its predictions are good. What the model "knows" is spread across those numbers as patterns. It keeps no list of facts that it could look through.

This explains several things you'll see all term. A model can explain a famous novel's plot well and still misquote its first line, because it kept the gist and not the wording. It can't tell you where it learned something. And it has no reliable sense of which things it knows, which is why it can state a wrong detail as smoothly as a right one.

## Trained in two stages

Models are built in two main stages.

1. **Pretraining.** The model learns to predict the next token across an enormous amount of text. The result has broad knowledge and fluent language, but it is not yet a helpful assistant; given a question, it might continue with more questions.
2. **Tuning into an assistant.** Further training, using examples and feedback, teaches the model to follow instructions, answer helpfully, take on an assistant's manner, and decline some requests.

## The knowledge cutoff

Pretraining data stops at some date, called the **knowledge cutoff**. The model knows nothing about events after it unless a tool provides the information: a web search, a file you upload, or a connection to another service. When you ask about anything recent, ask yourself whether the tool you're using actually looked it up or is answering from what it learned during training.

## Why answers vary

Models don't always choose the single most likely token. They **sample** from the probabilities, which makes their writing more natural and varied. The consequence is that the same prompt can produce different answers on different runs: different wording, different structure, and sometimes different facts.

> **Instructor note: live demo.** Run your prepared prompt three times in fresh chats and put the outputs side by side. Ask the class what stayed the same and what changed. Usually the structure stays similar, wording varies, and occasionally a factual detail differs. That last case is the key teaching moment: if a fact can change between runs, at least one run was not reliable.

## What an LLM is not

It helps to compare an LLM with tools you already know.

| Tool | How it answers | What follows |
|---|---|---|
| **Search engine** | Finds pages that exist and shows them to you | You can see the source. A model alone gives you no source to see. |
| **Database** | Looks up a stored record and returns it exactly | The same question gets the same answer. A model's answer can vary. |
| **Calculator** | Computes by fixed rules | Always right. A model predicts digits, and can slip. |
| **LLM** | Generates likely text from learned patterns | Flexible and fluent, with no built-in check that the result is true |

Modern AI products often combine these. A chat app may run a web search, look something up in your files, or run code for a calculation, and then have the model write the answer from the results. When that happens the product is more reliable than the model alone. Much of this course is about recognizing when a tool was used and when the model was answering from memory.

## Where to expect reliability

The mechanism lets you predict, roughly, where a model will do well:

| More reliable | Less reliable |
|---|---|
| Topics written about widely and consistently | Niche, local, or very recent topics |
| Explaining, summarizing, and rewording text you supply | Recalling exact quotations, figures, and citations from memory |
| Common tasks with many examples: emails, outlines, standard code | Unusual tasks with few examples to learn from |
| Questions where many phrasings of the answer would be fine | Questions where one exact value is required |

Week 3 returns to this in detail. For now, the rule of thumb is that a model is at its best when working with material that is in front of it, and at its weakest when asked for precise details from memory.

## What this means for you

Fluency is not accuracy, and confidence is not accuracy. A model sounds just as sure when it is wrong. Unless it has a tool, it does not look anything up. Your role, throughout this course, is to decide what to ask, describe it well, and check what comes back.

## Key terms

**Token**: a piece of a word; the unit models read, write, and are billed in. **LLM**: large language model. **Knowledge cutoff**: the date after which a model's training data stops. **Sampling**: choosing the next token from a probability distribution rather than always the top choice. **Parameters**: the numbers inside a model that training adjusts; also called weights. **Pretraining**: the first stage of training, in which a model learns to predict text.
