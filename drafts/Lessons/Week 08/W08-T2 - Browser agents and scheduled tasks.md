# Week 8: Browser agents and scheduled tasks

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

## What you will be able to do

- Explain how a browser agent works and when to use one instead of a connector.
- Describe where browser agents fail, and supervise one.
- Hand off or schedule a task, and write a brief that works without you there.
- Review work done while you were away, and tell a failed run from a quiet success.

## Browser and computer-use agents

A connector exists only when someone has built one. Many websites have none: a utility company's account page, a conference registration form, a state licensing lookup. A **browser agent** handles these by operating a web browser the way you do. It reads the page, clicks, types, scrolls, and moves between pages. Claude in Chrome is an example. A **computer-use agent** does the same across a whole desktop, working with any application it can see.

### How it works

A browser agent runs the tool-use loop from Week 6, with tools for looking and acting:

1. It looks at the page, through a screenshot or the page's text.
2. It decides on one action: select this button, type in that field.
3. The action is carried out.
4. It looks at the page again to see what happened, and repeats.

Every click is a full step of the loop. A task you'd finish in thirty seconds can take an agent several minutes.

### Browser agent or connector?

| | Connector | Browser agent |
|---|---|---|
| How it reaches the service | Through tools the service provides | Through the same web pages you use |
| Speed | Fast | Slow: one action at a time |
| Reliability | High: a tool either works or reports an error | Lower: pages change and confuse it |
| Works where | Only where a connector exists | Almost any website |
| Good for | Routine access to a supported service | Sites with no connector, one-off tasks across several pages |

Use a connector when one exists. Reach for a browser agent when it's the only way in.

Typical uses: filling in a long form from information you supply, gathering the same detail from a dozen pages into a table, checking several sites for a price or a date, or working through a web application's menus to change a setting.

### Where browser agents fail

- **They're slow and literal.** They do what the page seems to ask, one step at a time.
- **Pop-ups, cookie banners, and sign-in prompts** interrupt them, and they may dismiss the wrong thing.
- **Layouts change.** A button that moved since last week can leave an agent stuck or selecting something else.
- **They can click the wrong thing**, and on the web a click can submit, buy, or delete.
- **They can lose their place** in a long task and repeat a step, such as submitting a form twice.
- **They work in your signed-in browser.** Whatever you're logged in to, the agent can reach.
- **Every page they read is untrusted input.** A web page was written by someone else and can contain text aimed at the agent. This matters a great deal in the next topic, on prompt injection.

### Supervising a browser agent

- **Watch it the first few times** you use it for a task.
- **Keep approvals on** for anything that submits, sends, or pays. Don't let an agent enter passwords or payment details. Do those steps yourself.
- **Limit where it can go.** Many browser agents let you approve sites one at a time. Use a separate browser profile, without your banking and email sessions, when a task doesn't need them.
- **Give it a brief**, as in Week 6: the goal, the sites to use, what it must not do, and where to stop. "Fill in the form and stop before submitting so I can check it" is a good constraint.

> **Instructor note: demo.** Run the prepared browser task. If it fails or hesitates somewhere, narrate it: those failures are the content.

## Background and scheduled tasks

Some work doesn't need you present. There are two ways to step away:

- **Hand off**: start a task and walk away. It keeps working without you watching, and the result is waiting when you return. Some products run the task on the vendor's servers, so you can close your laptop. Others need your computer to stay on.
- **Schedule**: set a task to run at fixed times, such as every weekday at 7:00 or every Sunday evening.

Good candidates are tasks that repeat, that mostly read, and whose output you'll look at anyway:

- A morning digest of today's calendar and the assignments due this week.
- A weekly summary of new postings on three job boards that match your criteria.
- A Friday report listing which files changed in a project folder.

This changes what delegation means. You're now delegating across time, and three things from Week 6 stop working: you can't read the plan before each run, you can't approve actions as they come up, and you can't interrupt.

### A brief for a run you won't see

Since you won't be there, the brief has to carry more:

- **Say what to do when something is missing.** "If the calendar can't be reached, write that at the top of the digest. Don't produce a digest from memory."
- **Keep it to reading and saving** wherever you can. A scheduled task that writes a file to a folder can do little harm. One that sends email to other people can.
- **Ask for a record.** Have each run end with a short log: when it ran, what it read, what it produced, and anything that went wrong.
- **Make the output dated**, so that you can tell today's run from yesterday's.

Run it by hand, and watch, at least twice before you schedule it.

### Reviewing work done while you were away

When you weren't watching, how will you know whether a run went well?

| Question | How to check |
|---|---|
| Did it run, and when? | Look at the run history, or the date on the output. |
| What did it change? | Read the run's log. Compare the folder with what you expected. |
| Did anything fail without telling you? | Look for an empty or unusually short output, or the same content as yesterday. |
| Is the content right? | Spot-check one item against its source, as in Week 3. |

The failure to worry about is the quiet one. A run that crashes leaves an obvious gap. A run that couldn't reach your calendar and wrote "No events today" looks like a success. That is why the brief should make the task report problems in the output itself, and why you should check a scheduled task's results closely for the first week and occasionally after that.

Scheduled tasks also keep going after you stop paying attention. They use your allowance on every run and keep whatever access they were given. Review your list of scheduled tasks now and then, and delete the ones you no longer read.

> **Instructor note: demo.** Show the results of the scheduled task you set up yesterday and walk through how you'd check it.

## Key terms

**Browser agent**: an agent that operates a web browser. **Computer-use agent**: an agent that operates a computer's screen, keyboard, and pointer. **Hand-off**: starting a task that continues without you. **Scheduled task**: an agent task set to run at set times. **Silent failure**: a run that went wrong without reporting an error.
