---
marp: true
title: "Week 7: Plugins and where skills work"
paginate: true
---

# Plugins and where skills work
### Week 7
COSC-300/500 Applied AI Essentials

---

## Plugins

- A **bundle** of skills, connectors, and other pieces
- Shared with a team as one unit
- How organizations package "the way we do things"

---

## Why organizations use plugins

- **Consistency**: same procedure, same template
- **Onboarding**: install it and the agent knows the team's procedures
- **Updating**: change it once, everyone gets it

Shared through **marketplaces**, public or private.

<!-- Open an example plugin and show its contents. It's organized skills and connections, nothing mysterious. -->

---

## Read before you install

A skill is instructions an agent follows **with your files and permissions**.

- Consider the source
- Read the `SKILL.md`
- Look at the scripts
- Check what it connects to
- Try it on a copy, with approvals on

Before you share one: no personal details, no passwords.

---

## Skills in chat vs in an agent

| In chat | In an agent with a folder |
|---|---|
| Works on **uploaded copies** | Works on **the real files** |
| Instructions typed in settings | Instruction file **lives with the work** |
| Can't run your tests or tools | Can run scripts, tests, local tools |
| Results downloaded | Results saved in place |

Skills run in chat, but they're **limited** there.

---

## Where to run a skill

| The task | Better place |
|---|---|
| One pasted item into another | Chat is fine |
| Reads or writes many files | Agent with the folder |
| Must follow folder conventions | Agent |
| Runs a script or test | Agent |

Decide where it will run, and write for that place.
