# Week 8: Browser agents and scheduled tasks

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

## What you will be able to do

- Use a browser agent and describe where browser agents fail.
- Hand off or schedule a task and review work done while you were away.

## Browser and computer-use agents

A **browser agent** operates a web browser: it clicks, types, scrolls, and reads pages. Claude in Chrome is an example. Browser agents are useful for sites that have no connector, such as filling in a form or gathering information across several pages.

They also fail in characteristic ways. They're slow and literal. Pop-ups, logins, and changing layouts confuse them. They can click the wrong thing. And every page they read is **untrusted input**, which matters a great deal when we get to prompt injection. Watch a browser agent the first few times you use it for a task.

> **Instructor note: demo.** Run the prepared browser task. If it fails or hesitates somewhere, narrate it: those failures are the content.

## Background and scheduled tasks

Some work doesn't need you present. You can **hand off** a task and close your laptop, or **schedule** one to run every morning or every week. When you return, you review what was done.

This changes what delegation means: you're now delegating across time. It also raises a new supervision question. When you weren't watching, how will you know whether a run went well?

- What ran, and when?
- What did it change?
- Did anything fail without telling you?
- Would you notice a bad run?

> **Instructor note: demo.** Show the results of the scheduled task you set up yesterday and walk through how you'd check it.

## Key terms

**Browser agent**: an agent that operates a web browser. **Scheduled task**: an agent task set to run at set times.
