# Week 14, Session 1: Choosing Tools, Data Governance, and Accountability

**COSC-300/500 Applied AI Essentials** · Surface: S2 Embedded copilot; review of all surfaces · 4D focus: Diligence

> **Instructor note: preparation.** Bring the failure gallery from week 3. Set up a small open model running locally on a laptop for the demo (any current small open-weight model run through a local runner). Prepare a one-page comparison of two or three tools on capability, cost, limits, and data terms as a worked example, dated, since prices and terms change. Timing: 20 min choosing tools, 15 min data governance, 10 min local model demo, 30 min bias and accountability.

## What you will be able to do after this session

- Compare tools for an organization on capability, cost, usage limits, data terms, and support, and explain the limits of benchmarks.
- Explain the difference between consumer and enterprise terms.
- Analyze bias, reliability, and accountability in an AI-supported workflow, and decide where human oversight belongs.
- Describe running a model locally as a privacy and cost option.

## 1. Choosing tools for an organization

Over the term you've used nearly every kind of AI surface: chat, embedded copilots, local agents, browser and scheduled agents, coding assistants, APIs, and an always-on agent. Now step into the role of someone deciding which tools an organization should provide.

An IT office or a manager typically weighs:

- **Capability**: which surfaces and features the tool offers.
- **Cost**: per seat, per task, or per token.
- **Usage limits**: whether people will run out partway through their work.
- **Data terms**: whether the vendor trains on the organization's data, how long data is kept, and where.
- **Support and administration**: single sign-on, admin controls, audit logs, who to call when it breaks.

### The limits of benchmarks

Vendors publish benchmark scores, and leaderboards rank models. Treat them with care. A benchmark measures someone else's task. Scores change month to month. Vendors tend to highlight the benchmarks they win. The most useful evidence for an organization is an **evaluation on its own work**, like the test sets you built in weeks 2 and 12.

### Copilot in Microsoft 365

For most graduates, the first AI at work will be Copilot inside Microsoft 365 (surface **S2**). Its strength is that it lives where the work already is: email, documents, meetings. What it can do depends heavily on **which license** an organization buys. The free tier that many institutions provide is much more limited than the paid license. Knowing to ask which one you have is itself a useful skill.

## 2. Data governance

### Consumer versus enterprise terms

| | Consumer accounts | Enterprise and education accounts |
|---|---|---|
| Training on your data | Often on by default, with an opt-out | Usually off by contract |
| Data retention | The vendor's standard policy | Negotiated |
| Admin controls | None | Single sign-on, permissions, audit |
| Regulated data | Not appropriate | Possible, with the right agreements |

The same product can carry very different terms depending on the account.

### Regulated data

- **FERPA** protects student education records.
- **HIPAA** protects health information in many settings.
- Client and contract confidentiality binds many professionals.

Whether you may put data into a tool depends on the **account and agreement**, not on how good the tool is.

## 3. Running a model locally

A small open-weight model can run on a laptop. Nothing leaves the machine, and there's no per-use cost. The trade-offs: local models are smaller and less capable, slower on ordinary hardware, and you're responsible for maintaining them. Organizations choose this when privacy or cost outweighs capability.

> **Instructor note: demo.** Run the local model and give it a task from earlier in the term. Compare the result with Claude's. Unplug the network cable or turn off Wi-Fi to make the "nothing leaves the machine" point concrete.

## 4. Bias, reliability, and accountability

Go back to the **failure gallery** from week 3.

- Which of these failures would hurt someone if the system were used for real decisions?
- Would any group be affected more than others?
- Who would be accountable when it went wrong: the vendor, the organization, the person who used the output?

**Bias** in AI systems shows up when outputs are systematically worse, or different, for some groups: in language, in assumptions, in the quality of answers. **Reliability** is whether the system performs consistently across the cases it will meet. **Accountability** is who answers for the result. "The AI did it" is never an answer an organization can give.

### Where human oversight belongs

Human review belongs before consequential decisions, where errors are costly or hard to undo, and where people could be affected unequally. It doesn't belong everywhere: oversight that rubber-stamps every output without real review gives a false sense of safety. Effective oversight is placed deliberately and done seriously.

> **Instructor note.** Run the gallery discussion in small groups for 15 minutes, then 15 minutes whole class. Ask each group to pick one failure and propose where oversight would have caught it.

## Coming up Thursday

Workforce effects, organizational AI-use policy, and capstone peer review.

## Key terms

**Benchmark**: a standardized test used to compare models. **Data governance**: the rules for how an organization's data is used and protected. **Open-weight model**: a model whose weights are released so anyone can run it. **Human oversight**: human review placed at points in a workflow where it can catch consequential errors.

> **Instructor note: book links.** Models and Vendors; Human Oversight in Production; Running LLMs Locally; Limitations and Alignment (selected).
