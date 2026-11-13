# Week 1: What a large language model is

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Explain a large language model (LLM) as a next-token predictor trained in two stages, and say what a knowledge cutoff means.

The AI systems in this course are built on **large language models**, or LLMs. Understanding roughly how they work will help you predict where they succeed and where they fail.

## A next-token predictor

An LLM reads and writes text as **tokens**, which are pieces of words. In English a token is about three-quarters of a word on average. Given the text so far, the model calculates a probability for every possible next token, picks one, adds it to the text, and repeats. A full answer is thousands of these predictions in a row.

If you give a model "The capital of France is", the token "Paris" is very likely, and the model will almost always produce it. For an open question with many reasonable answers, the probabilities are spread out, and the model's choice could go many ways.

This is a simple mechanism with surprising results. To predict text well across a huge range of subjects, a model has to absorb a great deal about language, facts, reasoning patterns, and how people explain things. But it is important to remember what it is doing: producing **plausible** continuations. Plausible usually coincides with true. Not always.

## Trained in two stages

Models are built in two main stages.

1. **Pretraining.** The model learns to predict the next token across an enormous amount of text. The result has broad knowledge and fluent language, but it is not yet a helpful assistant; given a question, it might continue with more questions.
2. **Tuning into an assistant.** Further training, using examples and feedback, teaches the model to follow instructions, answer helpfully, take on an assistant's manner, and decline some requests.

## The knowledge cutoff

Pretraining data stops at some date, called the **knowledge cutoff**. The model knows nothing about events after it unless a tool provides the information: a web search, a file you upload, or a connection to another service. When you ask about anything recent, ask yourself whether the tool you're using actually looked it up or is answering from what it learned during training.

## Why answers vary

Models don't always choose the single most likely token. They **sample** from the probabilities, which makes their writing more natural and varied. The consequence is that the same prompt can produce different answers on different runs: different wording, different structure, and sometimes different facts.

> **Instructor note: live demo.** Run your prepared prompt three times in fresh chats and put the outputs side by side. Ask the class what stayed the same and what changed. Usually the structure stays similar, wording varies, and occasionally a factual detail differs. That last case is the key teaching moment: if a fact can change between runs, at least one run was not reliable.

## What this means for you

Fluency is not accuracy, and confidence is not accuracy. A model sounds just as sure when it is wrong. Unless it has a tool, it does not look anything up. Your role, throughout this course, is to decide what to ask, describe it well, and check what comes back.

## Key terms

**Token**: a piece of a word; the unit models read, write, and are billed in. **LLM**: large language model. **Knowledge cutoff**: the date after which a model's training data stops. **Sampling**: choosing the next token from a probability distribution rather than always the top choice.
