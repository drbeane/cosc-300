# Week 11: Workflows and agents

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Connect tool use to the agents you've used since Week 6.
- Distinguish workflows from agents, and say what each is good for.
- Recognize three common workflow patterns.
- Choose the simplest design that does a job.

## This is what agents are

Everything you've used since Week 6 is the tool-use round trip, repeated:

| What you saw | What was happening |
|---|---|
| Cowork read a file | The model requested a file-reading tool, and the harness ran it |
| A connector listed your calendar | A tool call to a tool provided over MCP |
| Claude Code ran the tests | A tool call that ran a terminal command and returned the output |
| An approval prompt appeared | The harness paused before running a requested tool |
| A skill was loaded | The model read the skill's description and asked for its instructions |
| The agent kept going for ten minutes | The round trip, running again and again until the model stopped asking for tools |

An agent, then, is a short program around a model:

1. Send the model the task, the conversation so far, and the tool definitions.
2. If the model asks for a tool, run it (after any approval), add the result to the conversation, and go back to step 1.
3. If the model answers without asking for a tool, stop.

That loop is the **harness** from Week 6. The model supplies the judgment about what to do next. The harness supplies everything else: the tools, the permissions, the approvals, and the limits.

## Workflows versus agents

There are two broad ways to build with models. In a **workflow**, you decide the steps in advance and write them into the program. In an **agent**, the model decides the steps as it goes.

| | Workflow | Agent |
|---|---|---|
| Who decides the steps | **You**, in code | **The model**, at run time |
| Behavior | Predictable: the same steps every time | Flexible: adapts to what it finds |
| Testing | Easier: each step can be checked separately | Harder: the path differs from run to run |
| Cost and time | Known in advance | Varies, and can run long |
| When it goes wrong | You can see which step failed | You have to read the trace to find out |
| Suits | Tasks that follow the same path every time | Tasks where the path can't be known in advance |

Sorting incoming support email into categories is a workflow. Each message gets the same treatment. Working out why a program crashes is an agent's job, since nobody can say beforehand which files will need reading.

## Three workflow patterns

### Chaining

The output of one call becomes the input of the next. Each call does one job.

| Step | Input | What the call does |
|---|---|---|
| Call 1 | Lecture notes | Outlines the key points |
| Call 2 | The outline | Writes quiz questions |
| Call 3 | The questions and the notes | Checks each answer against the notes |

Splitting the work lets each prompt be simple and lets you check the result between steps. If the outline is wrong, you find out before any questions are written.

### Routing

A first call classifies the input, and the program sends it down one of several paths.

| Call 1 decides the email is | The program then |
|---|---|
| A deadline question | Answers from the syllabus |
| A technical problem | Uses a troubleshooting prompt |
| Anything else | Forwards it to a person |

Each path has a prompt written for its kind of input. Routing also lets you send easy cases to a small, cheap model and hard ones to a larger model, and send the cases that shouldn't be automated to a person.

### Parallelization

Several calls run at the same time, and the program combines their results.

| Call, all run at once on the same essay | Checks |
|---|---|
| A | The argument |
| B | The citations |
| C | Grammar and style |

The program then combines the three sets of comments into one piece of feedback.

Each call concentrates on one thing, which tends to give better results than asking one call to watch for everything. Running them together is faster than running them in turn.

These patterns combine. A real product might route a request, chain three steps along one path, and run two checks in parallel at the end.

## Choose the simplest thing that works

Agents are the most capable of these designs and the most expensive to run and supervise. A useful order of preference:

1. **One good call.** A clear prompt, with the right context, handles a large share of tasks.
2. **A workflow**, when the task has several steps that are always the same.
3. **An agent**, when the steps depend on what turns up along the way.

Many real products use workflows where they can and agents where they must. Reaching for an agent first is a common mistake, and it costs you predictability you didn't need to give up.

Whichever you choose, the supervision questions from earlier weeks still apply. What can it touch? How would you know that a run went badly? Where does a person check the result? A workflow that forwards uncertain cases to a person, as the routing example does, has that check built in.

For your capstone, ask which of the three your task needs. A weekly report that always follows the same steps is a workflow, even if you build it with an agent tool, and describing it accurately is part of your design justification.

## Key terms

**Workflow**: a fixed sequence of model calls defined in code. **Agent**: a model that chooses its own next steps, using tools in a loop. **Chaining**: passing one call's output to the next call as input. **Routing**: using one call to classify an input and choose a path for it. **Parallelization**: running several calls at once and combining their results.
