# Week 4: Research agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

> **Instructor note: preparation.** Run a research request yourself the day before on a topic you know, and find at least one citation that doesn't support its claim; it makes a strong example. Set up a NotebookLM notebook with three or four sources. Check NotebookLM's current name: Google's documentation has begun calling it Gemini Notebook. This lab uses Claude Pro's Research feature; Copilot Chat (Basic) and Claude Free have no research agent. Timing: 15 min research agents, 10 min notebooks, 10 min retrieval concept, 40 min lab.

## What you will be able to do

- Explain how a research agent differs from a chat with web search.
- Write a research request that states the question, scope, and kind of sources you want.
- Name five ways a research report goes wrong.
- Audit a report by checking its citations against its claims.

## What a research agent does

A chat with web search runs a search or two, reads the top results, and answers. A **research agent** goes much further. Given a question, it:

1. **Plans**: breaks the question into sub-questions.
2. **Searches**: runs many searches, often dozens.
3. **Reads**: opens the sources it finds and pulls out what's relevant.
4. **Adjusts**: follows up on what it learned with new searches.
5. **Writes**: produces a structured report with citations.

Most major products have this feature, usually called Research or Deep Research. A run takes minutes instead of seconds and can read far more sources than you could in the same time.

This is your first look at an **agent**: a model that works through a multi-step task by choosing its own next actions, in this case which searches to run and which pages to read. Agents are the subject of the second half of the course. For now, notice what changes when a tool takes many steps on its own. You see the question and the finished report, and you don't see most of the decisions in between.

| | Chat with web search | Research agent |
|---|---|---|
| Searches | One or a few | Dozens |
| Time | Seconds | Several minutes or more |
| Output | A short answer with a few links | A long, structured report with many citations |
| Usage | Small | Large: one run can use a noticeable share of a plan's allowance |
| Best for | A quick fact, a current detail | A survey of a topic, a comparison, a question with many parts |

## Writing a research request

A research run is expensive in time and usage, and you can't steer it once it starts. The Description skill matters more here than in a chat. A good request states:

- **The question**, as specifically as you can.
- **The purpose**: what the report is for and who will read it.
- **The scope**: time period, places, populations, what to leave out.
- **The sources you want**: peer-reviewed studies, government data, news, industry reports.
- **The output**: length, sections, and how to handle disagreement among sources.

> **Weak:** Research remote work.

> **Strong:** I'm writing a two-page brief for a small company deciding whether to keep a hybrid schedule. Research what studies since 2020 have found about the effect of remote and hybrid work on the productivity and retention of employees in their first three years of work. Prefer peer-reviewed studies and large surveys over opinion pieces and vendor reports. Where studies disagree, say so and explain why they might. End with a list of what the research doesn't yet answer.

Many research tools ask clarifying questions before they start. Answer them carefully. A minute spent there saves a ten-minute run in the wrong direction.

## Why the report needs an audit

A long, well-formatted, heavily cited report looks authoritative whether or not it is. That's the "fluent is not correct" problem from Week 3 in a stronger form, because citations are a signal we have learned to trust.

The citations do make a research report checkable in a way a plain answer isn't. Each claim points to a place you can look. They don't make the report correct.

### Where research agents go wrong

| Problem | What it looks like |
|---|---|
| **The citation doesn't support the claim** | The report says "a 2023 study found a 13% increase." The linked page is about the topic but gives a different figure, or none. |
| **The source is weak or outdated** | A statistic traced to a company blog selling a product, or to a page from eight years ago presented as current. |
| **Two sources are merged** | A finding from one study and a population from another are combined into a claim neither one makes. |
| **A link is broken or fabricated** | The page doesn't load, or the article can't be found anywhere. This is less common with tools that search live, but it happens. |
| **A gap is presented as consensus** | The agent found two sources that agree and reports "research shows", when the question is contested or barely studied. |

Two further limits affect coverage. A research agent can generally read only what is openly on the web. Much scholarly work sits behind paywalls, so the agent may rely on an abstract, a press release, or a news story about a study instead of the study. It also reads what its searches turn up, and popular pages turn up more than good ones.

## How to audit a report

1. **Read the report and mark the claims your work will depend on.** You don't have to check every sentence. Check the ones you'll repeat.
2. **For each, open the citation.** Does the page load? Is it what the report says it is?
3. **Find the supporting passage.** Search the page for the key number or phrase. Read the sentences around it.
4. **Judge the match.** Does the source say what the report says, at the same strength? "Associated with" is weaker than "causes". "In one company" is weaker than "employees".
5. **Judge the source.** Who published it, when, and with what interest in the answer?
6. **Record a verdict.**

| Verdict | Meaning |
|---|---|
| **Supports** | The source states the claim. |
| **Partly supports** | The source says something related but weaker, narrower, or with a different figure. |
| **Does not support** | The source is real but doesn't contain the claim. |
| **Fabricated or inaccessible** | The source can't be found or opened. |

You'll use this table in the lab and the assignment. Expect to find problems. In published tests of AI research and search tools, a meaningful share of citations failed to support the claims attached to them, and results varied a good deal by tool and topic.

When you find a claim that doesn't hold, the fix is the loop from Week 3. Tell the model which claim failed and why, and ask it to correct the passage or find a better source. Then check the new one.

## Key terms

**Research agent**: a tool that plans and runs many searches over multiple steps and returns a cited report. **Agent**: a model that works through a multi-step task by choosing its own next actions. **Citation audit**: checking each citation in a report against the claim it is attached to. **Paywall**: a barrier that limits a source to paying readers.

> **Instructor note: book links.** Retrieval-Augmented Generation (concept only); Grounding and Citations.
