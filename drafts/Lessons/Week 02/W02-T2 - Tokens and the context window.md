# Week 2: Tokens and the context window

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Explain tokens and the context window, and list what fills the context.

## Tokens

Models read and write **tokens**, not words. In English a token averages about three-quarters of a word. Everything is measured in tokens: your prompt, the files you attach, the response, the conversation history. Usage limits and API prices are counted in tokens too.

## The context window

The **context window** is the model's working memory for a conversation: the total amount of text it can consider at once. It is large, but finite. When a conversation or set of files exceeds it, something has to give. Older material may be summarized or dropped.

## What fills the context

More is in the context than what you typed:

- **The system prompt**: instructions from the tool's vendor, present before you type anything.
- **The conversation history.**
- **Files** you've attached.
- **Tool results**: search results, the output of code the model ran.
- **Memory and custom instructions**: things the tool remembers about you.

You control some of this, but not all of it. Weeks 6 and 9 will show you tools that let you see what's in the context directly.

## Why long chats degrade

Very long conversations tend to get worse. Early details get crowded out or summarized away. Mistakes made earlier stay in the context and get repeated. The model loses track of what you originally asked. When a conversation has drifted, the fix is usually to **start fresh**: open a new chat with a clean summary of what matters.

## Key terms

**Context window**: the amount of text a model can consider at once. **System prompt**: instructions supplied by the tool's vendor.
