# Week 14: Choosing tools for an organization

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

> **Instructor note: preparation.** Bring the failure gallery from week 3. Set up a small open model running locally on a laptop for the demo (any current small open-weight model run through a local runner). Prepare a one-page comparison of two or three tools on capability, cost, limits, and data terms as a worked example, dated, since prices and terms change. Timing: 20 min choosing tools, 15 min data governance, 10 min local model demo, 30 min bias and accountability.

## What you will be able to do

- Compare tools for an organization on capability, cost, usage limits, data terms, and support.
- Explain the limits of benchmarks.
- Plan a small pilot that tests a tool on an organization's own work.
- Ask the right questions about a tool an employer provides.

Over the term you've used nearly every kind of AI surface: chat, embedded copilots, local agents, browser and scheduled agents, coding assistants, APIs, and an always-on agent. Now step into the role of someone deciding which tools an organization should provide.

An IT office or a manager typically weighs:

- **Capability**: which surfaces and features the tool offers.
- **Cost**: per seat, per task, or per token.
- **Usage limits**: whether people will run out partway through their work.
- **Data terms**: whether the vendor trains on the organization's data, how long data is kept, and where.
- **Support and administration**: single sign-on, admin controls, audit logs, who to call when it breaks.

An individual choosing a tool asks "which is best for me?" An organization has to ask what happens when two hundred people use it, some carelessly, with the organization's data, for years.

| Factor | Questions to ask | Why it matters to an organization |
|---|---|---|
| **Capability** | Does it do the tasks our people do? Chat only, or agents, connectors, and code? | A tool that is strong in general can be weak on the work this organization does |
| **Cost** | Per person per month? Per use? What will it cost at our real volume? | A price that is small for one person is a budget line for five hundred |
| **Usage limits** | What happens when someone reaches the limit in the middle of a task? | A tool people can't rely on at 3 p.m. gets abandoned |
| **Data terms** | Is our data used for training? How long is it kept, and where? Who at the vendor can see it? | This is a legal and contractual matter, and the next topic covers it |
| **Administration** | Can we control who has access, see how it's used, and remove a person who leaves? | Without these, the organization can't enforce its own policy |
| **Fit** | Does it work with the systems we already use? | A tool nobody opens delivers nothing |
| **Lock-in** | How hard would it be to switch later? | Models and prices change every few months |

No tool wins on every row. A small nonprofit may put cost first. A hospital puts data terms first, and no capability makes up for failing there. Deciding the order of the rows is the real decision, and it should be made before anyone looks at a product.

### One tool, or several?

Many organizations end up with more than one: an embedded copilot for everyone, a more capable assistant for the staff whose work needs it, and API access for the few who build things. That is the same arrangement this course has used, with the right tool for each job. The cost is more to administer and more for staff to learn.

## The limits of benchmarks

Vendors publish benchmark scores, and leaderboards rank models. Treat them with care. A benchmark measures someone else's task. Scores change month to month. Vendors tend to highlight the benchmarks they win. The most useful evidence for an organization is an **evaluation on its own work**, like the test sets you built in weeks 2 and 12.

A benchmark is a public test set of the kind you built in Week 12, and the cautions from that week apply. A high score describes those questions. When a benchmark has been public for a while, its questions can end up in training data, and a model may score well partly because it has seen them. And one number hides the pattern of failures, which is what you most need to know.

Benchmarks are still useful for a first cut. A model far down every ranking is unlikely to be the right choice. They narrow the field, and they can't make the decision.

### Run a pilot

The organizational version of your own test set is a **pilot**: a small, time-limited trial on real work.

1. **Choose two or three real tasks** that people in the organization do every week.
2. **Write down what good looks like** for each, before trying anything.
3. **Have a few staff try each candidate tool** on those tasks for two or three weeks. Include people who are skeptical.
4. **Record** quality, time taken, how often the limits were reached, and what went wrong.
5. **Compare against the factors above**, in the order of priority you set.

This is the method from Week 9's comparison of coding assistants: the same tasks, the same checks, and a record of what was measured. A pilot costs a few weeks and is far cheaper than a year's contract for a tool that doesn't fit.

## Copilot in Microsoft 365

For most graduates, the first AI at work will be Copilot inside Microsoft 365. Its strength is that it lives where the work already is: email, documents, meetings. What it can do depends heavily on **which license** an organization buys. The free tier that many institutions provide is much more limited than the paid license. Knowing to ask which one you have is itself a useful skill.

### Questions for your first week at a job

You'll more often be handed a tool than asked to choose one. When that happens, find out:

- **Which AI tools are approved**, and on which kind of account?
- **What data may I put into them?** Customer data? Internal documents?
- **Which license do we have**, and what can it do?
- **Do I need to say when I've used AI** in my work?
- **Who do I ask** when I'm not sure?

If nobody can answer, the organization probably has no policy yet. The last topic this week is about writing one.

## Key terms

**Benchmark**: a standardized test used to compare models. **Pilot**: a small, time-limited trial of a tool on real work. **Lock-in**: the difficulty of switching away from a tool once an organization depends on it. **Seat**: one user's license for a product.

> **Instructor note: book links.** Models and Vendors; Human Oversight in Production; Running LLMs Locally; Limitations and Alignment (selected).
