---
marp: true
title: "Week 10: Debugging, Changing Code, and Sub-Agents"
paginate: true
---

# Debugging, Changing Code, and Sub-Agents
### Week 10
COSC-300/500 Applied AI Essentials

---

## Debugging with an assistant

1. **Reproduce** the failure first
2. Give the assistant the exact error
3. Ask for the **cause** before the fix
4. Judge: does the fix address the cause, or hide the symptom?
5. Re-run everything

---

## Changing code you didn't write

- Ask the assistant to **explain the codebase** first
- Find the tests that cover the area
- Change in small steps
- Keep existing tests passing

---

## Sub-agents (brief)

- An agent can start **helper agents** for parts of a job
- Useful for: independent review, parallel searches
- A fresh reviewer hasn't seen the work being produced, so it isn't grading itself
