# Week 11: A first API program and what it costs

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note.** The program below uses Anthropic's Python library. If the course's access route is Bedrock, swap in the equivalent code and model ID. The example rates in the cost section are for illustration; bring the current price list for the model in use.

## What you will be able to do

- Read a short program that makes an API call, and say what each part does.
- Explain how a program keeps a multi-turn conversation.
- Request structured output and check it before using it.
- Estimate the cost of a call, and of an application, from token counts.
- Keep an API key safe.

## A first program

A program that calls a model is short. This one sends a single question and prints the answer:

```python
from anthropic import Anthropic

client = Anthropic()   # reads your API key from the environment

response = client.messages.create(
    model="MODEL-ID",
    max_tokens=500,
    system="You are a concise tutor for first-year students.",
    messages=[
        {"role": "user", "content": "Explain recursion in three sentences."}
    ],
)

print(response.content[0].text)
print(response.usage)
```

Read it against the request from the last topic. The parts are the same: a model, a length limit, a system prompt, and a list of messages. The program builds the request, sends it, and receives a response that holds the model's text and a count of the tokens used. The exact code depends on the access route used in the course, and Claude Code will write it. Your job is to recognize the parts.

> **Instructor note: live build.** Using Claude Code, build in front of the class: (1) a first call that prints the response, (2) a system prompt that changes the behavior, (3) the same prompt at two temperatures, run a few times each, (4) a loop that keeps a multi-turn conversation by appending to the messages list, (5) a request for structured JSON output, with the program parsing it. Narrate what Claude Code writes and run each step.

### The system prompt does the specializing

Change one line, the system prompt, and the same program becomes a different product:

| System prompt | Reply to "Explain recursion" |
|---|---|
| "You are a concise tutor for first-year students." | Three plain sentences and an everyday comparison |
| "You are a strict code reviewer. Reply only with problems you find." | A complaint that no code was provided |
| "Answer only questions about the Maryville course catalog. For anything else, say you can't help." | A polite refusal |

This is the vendor-written system prompt from Week 2, and now you're the one writing it. Many AI products are, at their core, a carefully written system prompt, some tools, and an interface.

### Temperature

Run the same request several times at a low temperature and the answers are nearly identical. Raise it and they vary more. Low settings suit tasks with one right answer, such as pulling fields out of a document. Higher settings suit brainstorming. This is the sampling from Week 1, with the control in your hands. Some models and routes restrict or fix this setting, so check what yours allows.

### Keeping a conversation

The last topic said the model remembers nothing between calls. A chat program creates the appearance of memory with a list:

1. Start with an empty list of messages.
2. Add the user's message to the list.
3. Send the **whole list** to the model.
4. Add the model's reply to the list.
5. Go back to step 2.

By the tenth turn, the request contains all nine earlier exchanges. Every chat product you've used does this. It is why each turn of a long conversation costs more than the one before, and why your program, and not the model, decides what a conversation "remembers". A program can trim old turns, summarize them, or drop them, which is what compaction did in Week 9.

## Structured output

Programs often need data instead of prose. You can ask a model to respond in **JSON** that matches a format you describe:

> Return JSON with exactly these fields: `term`, `definition` (one sentence), and `example`. Return only the JSON.

```json
{
  "term": "recursion",
  "definition": "A method in which a function solves a problem by calling itself on a smaller version of it.",
  "example": "Counting the files in a folder by counting each subfolder the same way."
}
```

Your program can then use the fields directly: put `term` in one column of a spreadsheet and `definition` in another, or show them on a flashcard.

Check what comes back before you use it. A program that assumes the format will break on the day the reply arrives with a sentence before the JSON, a missing field, or a number written as a word. Three precautions:

- **Validate.** Have the program confirm that the reply is valid JSON and that every required field is present, and handle the case where it isn't, by retrying or reporting an error.
- **Use the API's structured output feature** where one is available. Many APIs can be given a schema and will hold the reply to it.
- **Check the content as well as the shape.** Valid JSON can still contain a wrong definition. Week 3 applies to data too.

## Cost and tokens

Every API response reports how many tokens were used:

- **Input tokens**: everything you sent. That includes the system prompt, the whole message history, and any tool definitions.
- **Output tokens**: what the model wrote.

The price is tokens multiplied by the model's rate. Rates are quoted per million tokens, and output tokens usually cost several times as much as input tokens. Larger models cost more than smaller ones.

### A worked example

Suppose a model's rates are $3 per million input tokens and $15 per million output tokens. These are example figures. Look up the current price list for the model you use.

One call with 1,200 input tokens and 300 output tokens:

| | Tokens | Rate per million | Cost |
|---|---|---|---|
| Input | 1,200 | $3 | $0.0036 |
| Output | 300 | $15 | $0.0045 |
| **Total** | | | **$0.0081** |

Under a cent. Now suppose that call is one step in an application: a tutoring assistant used by 200 students, 10 questions each per day.

> 200 students × 10 calls × $0.0081 × 30 days ≈ $486 per month

Small numbers add up when they are multiplied by users and days. The general estimate is:

> calls per day × average cost per call × days

### What drives the cost

| Driver | Why it matters | What to do |
|---|---|---|
| **Long conversations** | The whole history is sent as input on every turn | Trim or summarize old turns. Start new conversations. |
| **A large system prompt or many tools** | They're sent with every call | Keep them to what the task needs |
| **Long outputs** | Output is the expensive side | Ask for concise replies. Set a sensible `max_tokens`. |
| **A bigger model than the task needs** | Rates differ several times over between tiers | Use a small model for simple, high-volume steps |
| **Extended thinking** | Thinking is billed as output | Reserve it for hard problems |
| **Agent loops** | Each tool round trip is another call, with a growing context | Limit the number of steps |

This is the reasoning behind the usage limits you've lived with all term. A subscription gives you a fixed allowance for a flat fee. The API charges for exactly what you use, with no ceiling unless you set one.

Your **Claude Pro subscription does not include API usage**. API use is billed separately, which is why the course provides access for these two weeks.

## Keeping the key safe

An **API key** is a long string that identifies your account to the API. Anyone who has it can make calls that are billed to you.

- **Never write the key in your code.** The program above reads it from the environment, a setting on your computer that sits outside the project files.
- **Never commit it.** Once a key is in a repository's history, treat it as exposed. People scan public repositories for keys.
- **Never paste it into a chat.**
- **If a key leaks, revoke it** in the provider's console and create a new one.
- **Set a spending limit** on the account, so that a mistake or a leaked key has a ceiling.

Tell your coding assistant this rule in the instruction file: "The API key is read from the environment. Never write it in any file."

## Key terms

**API key**: a secret string that identifies your account to an API. **Input and output tokens**: the tokens sent to and produced by the model, both billed. **Structured output**: a response in a machine-readable format such as JSON. **Validation**: checking that data has the expected shape before using it. **Environment variable**: a setting stored on the computer, outside the project's files, where secrets such as keys are kept.
