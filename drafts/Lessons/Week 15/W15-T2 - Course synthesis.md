# Week 15: Course synthesis

**COSC-300/500 Applied AI Essentials** · 4D focus: All four

## What you will be able to do

- Connect the course's surfaces and skills into one picture.
- Trace how each of the four skills developed across the term.
- Approach an AI tool you've never seen with a set of questions.
- Plan how you'll keep up as the tools change.

## The surfaces map, revisited

In week 1 you saw a map of eight surfaces. You've now used every one.

| Surface | Where we used it |
|---|---|
| Chat assistant | Weeks 1–5 |
| Embedded copilot | Weeks 5 and 14 |
| Coding assistant | Weeks 9–10 |
| Local agent | Weeks 6–9 |
| Cloud and scheduled agents | Weeks 8 and 13 |
| Browser agent | Week 8 |
| Always-on agent | Week 13 |
| API and agent platforms | Weeks 11–12 |

The course moved through these in a deliberate order, which the home page shows as seven stages:

| Stage | Weeks | What changed |
|---|---|---|
| Chat with an AI | 1–3 | You ask, it answers from training |
| Ground it in sources and files | 4–5 | It works from material you supply |
| Let it act on your computer | 6–8 | It takes actions, and you supervise |
| Have it build software | 9–10 | It writes and runs code, and you specify and review |
| Build with it directly | 11–12 | You see the request, the tools, and the loop from the inside |
| Agents that work while you're away | 13 | It decides when to act |
| Put it all together | 14–15 | You choose and govern tools for an organization, and build your own workflow |

At each stage the tool was given more: more of your material, more ability to act, more time without you. And at each stage you took on more of the work of supervising it. That exchange, autonomy on one side and oversight on the other, is the thread of the whole course.

### One mechanism underneath

The eight surfaces look different and rest on the same few ideas:

- A **model** that predicts text (Week 1).
- A **context window** holding everything it can see (Week 2).
- **Tools** it can ask for, and a **harness** that runs them (Weeks 6 and 11).
- **Instructions** that persist: system prompts, custom instructions, instruction files, skills (Weeks 2, 4, and 7).
- **Retrieval** that brings in material when it's too large to fit (Weeks 4 and 12).

A chat app, a coding assistant, and an always-on agent are different arrangements of those five. When you meet a new product, working out which of them it uses, and how, tells you most of what you need to know about what it can do and where it will fail.

## The 4D framework, revisited

- **Delegation.** You learned what to hand off, and what not to: from choosing a task for a chatbot in week 1 to deciding what an always-on agent may do unattended.
- **Description.** Your descriptions grew from prompts to task briefs, instruction files, skills, specifications, and tool definitions. Each is a more durable way of saying what you want.
- **Discernment.** Your checking grew from fact-checks to citation audits, code review, and evaluation sets.
- **Diligence.** Your responsibility grew from privacy settings to permissions, prompt injection, and organizational policy.

| Skill | Early in the term | Midway | By the end |
|---|---|---|---|
| **Delegation** | Is this a job for a chatbot? | What may an agent do in my folder without asking? | What should run unattended, and what must a person decide? |
| **Description** | A prompt with a goal and an audience | A task brief with acceptance criteria. An instruction file. A skill. | A specification with tests. A tool definition. A policy. |
| **Discernment** | Checking a claim against a source | Auditing citations. Recomputing numbers. Reviewing a plan. | Reading a diff. Running a test suite. Building an evaluation set. |
| **Diligence** | Privacy settings. Disclosing AI use. | Least privilege. Approvals. Backups. | Prompt injection. Accountability. Governance. |

Read down a column and you have a snapshot of what you could do at that point. Read across a row and you see the same skill applied to a more capable tool. None of the early forms was replaced. You still write prompts and still check claims against sources.

### Habits that ran through every week

- **One fluent answer proves nothing.** Test on several inputs (Weeks 2, 10, and 12).
- **Check where the risk is.** Match the checking to what a mistake would cost (Week 3).
- **Plan before acting, and read the plan** (Weeks 6 and 9).
- **Work in small steps you can undo**: copies, commits, one feature at a time (Weeks 6 and 9).
- **Grant the least access the task needs** (Weeks 8 and 13).
- **You are responsible for what goes out under your name** (every week).

## What changed in the tools this term?

> **Instructor note.** Walk through your prepared list. Ask students what they noticed changing. The point: much of what was specific about the tools in week 1 is already different.

## How to keep up

The tools will keep changing faster than any course can. What lasts is a way of approaching them:

- Watch **surfaces and capabilities**, not product names. A new product is usually a new combination of things you already understand.
- Keep a **test set** for the work you care about, and run it on any new tool before you trust it.
- Read vendors' own changelogs and documentation, not only headlines.
- Keep the habits: **brief, review, verify, limit access.**

### Questions for a tool you've never seen

Some time after this course, you'll be handed an AI tool that didn't exist when you took it. These questions will get you most of the way:

1. **What kind of surface is it?** A chat, an embedded copilot, an agent, something that runs alone?
2. **What can it see?** Only what I type, or my files, my accounts, the web?
3. **What can it do?** Answer, or act? Can its actions be undone?
4. **What stays in its context from one use to the next?** Memory, instructions, connections?
5. **Where does my data go**, and under what terms?
6. **How will I know when it's wrong?** What can I check, and how quickly?
7. **What does it cost**, and what happens when I reach a limit?

Then try it on your own test set before you rely on it.

### Sources worth following

- **The vendors' own documentation and release notes.** These are dull and accurate.
- **Model cards and system cards**, which you first looked up in Week 1, for what a new model is and isn't good at.
- **People who test tools and show their method**, in preference to people who announce results.
- **Your own records.** The journal you kept this term is a dated account of what worked for you. Keep adding to it.

Be skeptical of announcements, in both directions. Claims that a new release changes everything and claims that none of this works are both common, and both usually lack a test set.

## What stays yours

The final journal entry asks what you'll never delegate, and why. It's the question the course began with in Week 1, and it's worth a considered answer.

The tools will keep getting more capable, and the list of tasks they can do will keep growing. What they can do is one question. What you want them to do is a different one, and it stays open however capable they become. Some work you'll keep because a mistake would be too costly. Some you'll keep because your name is on it. And some you'll keep because doing it yourself is how you learn, or because you'd simply rather do it.

Deciding that, task by task, is Delegation. It was the first skill in this course, and it's the one you'll use most.

## Key terms

**Surface**: a way of reaching a model, such as a chat app, an embedded copilot, or an agent. **Autonomy**: how much a tool does without asking. **Oversight**: the checking a person does of a tool's work.
