# Week 1: The surfaces map

**COSC-300/500 Applied AI Essentials** · 4D focus: Delegation

## What you will be able to do

- Explain what a surface is and how it differs from an interface.
- Name the eight surfaces through which AI is delivered and give an example of each.

## What a surface is

The same model can behave very differently depending on how you reach it. A **surface** is the way you interact with an AI and, just as important, what it can see and change. A model in a chat window can only see what you paste in. The same model working as an agent on your computer can read every file in a folder, run code, and save its work. The surface often matters more than which model is underneath.

A surface has three parts:

- **How you reach the AI**: a chat window, a panel inside another application, a terminal, a schedule that starts it without you.
- **What it can see**: only your message, or also your files, your email, a web page, a whole codebase.
- **What it can change**: nothing outside the conversation, or files on your computer, a calendar, a website, a running program.

## Surface versus interface

It's tempting to treat "surface" as another word for "interface." They overlap, but they are not the same.

An **interface** is the part you look at and operate: the message box, the buttons, the microphone. A surface includes the interface, and it also includes everything the AI is connected to behind it.

Two cases show the difference:

- **Similar interface, different surfaces.** In the Claude desktop app, a chat and a Cowork task both begin with a box you type into. In the chat, the model sees only what you paste or attach. In Cowork, it can read and write the files in a folder you chose. The screens look alike. What the AI can reach is very different.
- **Different interfaces, same surface.** You can use a chat assistant by typing in a browser, by typing in a phone app, or by talking to it. The interface changes each time. What the model can see and change stays about the same.

The interface tells you how to talk to the AI. The surface tells you what it can do once you have. That second question is the one that decides how much you can delegate and how closely you need to supervise, so this course is organized around surfaces.

## The eight surfaces

This course uses eight surfaces:

| Surface | What it is | Example |
|---|---|---|
| Chat assistant | A conversation in a browser or app | Claude, ChatGPT, Copilot Chat |
| Embedded copilot | AI inside an application you already use | Copilot in Outlook |
| Coding assistant | AI inside a development environment, with access to code, terminal, and tests | Claude Code in VS Code |
| Local agent | AI that works directly on the files and folders on your computer | Claude Cowork |
| Cloud or background agent | Work you hand off or schedule; it runs while you're away | Scheduled tasks |
| Browser or computer-use agent | AI that operates a browser: clicks, types, reads pages | Claude in Chrome |
| Always-on agent | An agent with its own cloud computer that keeps working and checks in | Meta Muse |
| API and agent platforms | Building your own programs on top of a model | The Claude API |

The course walks this map in order. Weeks 1–5 are mostly chat. Weeks 6–8 cover local agents and the surfaces that build on them. Weeks 9–10 are coding assistants. Weeks 11–12 build small programs on an API. Week 13 is always-on agents. Weeks 14–15 look at organizations and bring everything together in your capstone.

> **Instructor note.** Keep the tour to about two minutes per surface: the goal is a mental map, not instruction. If a surface isn't available to demo, describe it and say which week it arrives. Students often haven't seen a local agent at all; a 30-second glimpse of an agent saving files into a folder makes the rest of the term concrete.

## Key terms

**Surface**: how you reach an AI and what it can see and change. **Interface**: the part of a tool you look at and operate, such as a message box, buttons, or a microphone.
