# Week 2: Tokens and the context window

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Have the Context window budget demo open (Demos page). Recheck the context window sizes below against the vendors' model pages the week you teach; they rise with most releases.

## What you will be able to do

- Estimate how many tokens a piece of text uses.
- Explain the context window and list what fills it.
- Explain why a model with no memory can still hold a conversation.
- Recognize when a long conversation has degraded, and restart it with a handoff summary.

## Tokens

Last week you saw that models read and write **tokens**, which are pieces of words. In English a token averages about three-quarters of a word. Short common words are usually one token each. Longer or rarer words are split into several: "unbelievably" might become "un", "believ", and "ably". Punctuation, spaces, and line breaks use tokens too.

Some rough conversions for English text:

| Text | Words | Tokens (about) |
|---|---|---|
| A short question | 15 | 20 |
| One page, single-spaced | 500 | 650 |
| A 10-page paper | 5,000 | 6,500 |
| A 300-page novel | 90,000 | 120,000 |

These are estimates. Code, tables, and languages other than English often take more tokens per word, and each model family splits text a little differently.

Tokens matter to you for two reasons:

- **Limits and prices are counted in tokens.** A subscription's usage limit and the price of the API (Week 11) both depend on how many tokens go in and come out. A long attached file costs more than a short question.
- **The model's working space is measured in tokens.** That space is the context window.

## The context window

The **context window** is the total amount of text a model can consider at once, counted in tokens. It works like the model's working memory for one conversation. Everything the model uses to write its next reply has to fit inside it, and the reply itself counts toward it.

Current models have large context windows: hundreds of thousands of tokens, and for some models a million or more. That is enough for several books. It is still finite, and filling it has costs well before you reach the limit, as the last section explains.

### The model rereads everything, every time

A model keeps no memory between your messages. Each time you send one, the product sends the model the **whole conversation so far**: every earlier message, every reply, and every attached file, with your new message at the end. The model reads all of it and writes the next reply. It appears to remember what you said five messages ago because those messages are sent again.

Three things follow from this:

- **Conversations grow.** Message 30 of a chat carries the 29 messages before it. A file you attached at the start is read again on every turn, which is one reason long chats with large files use up a plan's limits quickly.
- **A new chat starts empty.** Nothing carries over from another conversation unless a feature such as memory or a project puts it there. Memory is the next topic, and projects come in Week 4.
- **What isn't in the context doesn't exist for the model.** If you discussed your thesis in another chat yesterday, today's chat knows nothing about it.

## What fills the context

More is in the context than what you typed:

| Part | Where it comes from | Can you see it? | Can you change it? |
|---|---|---|---|
| **System prompt** | The product's vendor, added before you type anything | Usually not | No |
| **Custom instructions and memory** | You, and what the tool has saved about you | Yes, in settings | Yes |
| **Conversation history** | Every earlier message and reply in this chat | Yes | Only by starting a new chat or editing a message |
| **Files** | What you attached | Yes | Yes |
| **Tool results** | Web search results, the output of code the model ran | Sometimes | Indirectly, through what you ask for |

The **system prompt** is a set of instructions the vendor writes for the product. It tells the model things such as today's date, which tools it has, and how it should behave. It can run to thousands of words, and it is one reason the same model can act differently in two products.

Tool results can be large. When a model searches the web, the text of the pages it reads goes into the context. One research question can add tens of thousands of tokens that you never see.

You control some of this, but not all of it. Weeks 6 and 9 will show you tools that let you see what's in the context directly.

> **Instructor note: demo.** Open the Context window budget demo and add a long file, then a web search. Let students watch the bar fill. Ask where the space went.

## Why long chats degrade

Very long conversations tend to get worse, for several reasons:

- **Early details get crowded out.** Models pay less reliable attention to material in the middle of a very long context. A requirement you stated in message 3 can be overlooked by message 40.
- **Old mistakes stay.** A wrong answer, a rejected draft, and a dead end you abandoned are all still in the context, and the model may build on them.
- **The topic drifts.** A chat that began as "help me outline my paper" and wandered through three other subjects leaves the model unsure what you want now.
- **The product may compress the history.** When a conversation approaches the limit, some products summarize or drop the oldest messages to make room. You may not be told, and details are lost in the summary.

Signs that a conversation has degraded: the model repeats a mistake you already corrected, forgets a constraint you set early, contradicts something it said before, or gives answers that are noticeably more generic than they were.

### Starting fresh

When that happens, the fix is usually to **start a new chat** and carry over only what matters. You can ask the model to write the handoff for you:

> Summarize what we've decided so far so I can continue in a new conversation. Include the goal, the decisions we made, the current draft, and what is still open. Leave out the approaches we rejected.

Read the summary and correct it, then paste it into a new chat. The new conversation starts with the decisions and without the dead ends.

Some habits that keep the context clean:

- Use one conversation per task. Start a new chat when the subject changes.
- Attach only the files, or the parts of files, that the task needs.
- If a reply goes wrong early, edit your message and resend it. That replaces the bad reply, where arguing with it leaves it in the context.

## Key terms

**Token**: a piece of a word; the unit models read, write, and are billed in. **Context window**: the amount of text, in tokens, that a model can consider at once. **System prompt**: instructions supplied by the product's vendor, placed in the context before your first message. **Conversation history**: the earlier messages and replies in a chat, which are sent to the model again on every turn.
