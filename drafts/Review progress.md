# Lesson and slide review progress

Tracks the review of every lesson and deck after all 15 weeks were posted (started 2026-11-13). If work stops partway, resume at the first row marked "to do".

## How the review works
For each topic, in order:
1. Read the lesson draft and its deck in `drafts/`.
2. If the lesson is thin (a section that only lists points, a term used without explanation, no worked example), expand it in the draft. Expand the deck to match.
3. Run `node tools/sync.mjs drafts`, then `git checkout content/resources.md` if only its line endings changed.
4. Run `node build.mjs`, restore the Dropbox ignore stream on `dist`, commit, and push after every few topics.
5. Update the table below and add a line to `NOTES.md`.

Week 1 was already expanded before this review, so it is checked last.

## Status
Statuses: **to do**, **expanded** (lesson and deck rewritten longer), **fine** (reviewed, no change needed).

| Session | Status | Notes |
|---|---|---|
| W02-T1 Writing strong prompts | to do | |
| W02-T2 Tokens and the context window | to do | |
| W02-T3 Memory, custom instructions, and voice | to do | |
| W02-T4 Testing and revising prompts | to do | |
| W02-Lab Prompt revision log | to do | |
| W03-T1 Why AI output is wrong | to do | |
| W03-T2 Verification habits | to do | |
| W03-T3 Effort, models, and the Description–Discernment loop | to do | |
| W03-Lab Fact-check and failure report | to do | |
| W04-T1 AI as a writing partner | to do | |
| W04-T2 Projects | to do | |
| W04-T3 Research agents | to do | |
| W04-T4 Grounded notebooks and how tools find sources | to do | |
| W04-Lab Research brief with citation audit | to do | |
| W05-T1 Structured files | to do | |
| W05-T2 Data analysis with code execution | to do | |
| W05-T3 Creating files, multimodal input, and generative media | to do | |
| W05-T4 AI inside an application | to do | |
| W05-Lab Data-to-deliverable package | to do | |
| W06-T1 From chat to agent | to do | |
| W06-T2 The task brief | to do | |
| W06-T3 Autonomy controls and usage | to do | |
| W06-Lab Folder-scale delegation task | to do | |
| W07-T1 Standing instructions | to do | |
| W07-T2 Skills | to do | |
| W07-T3 Plugins and where skills work | to do | |
| W07-Lab Write and test a skill | to do | |
| W08-T1 Connectors | to do | |
| W08-T2 Browser agents and scheduled tasks | to do | |
| W08-T3 Prompt injection and defenses | to do | |
| W08-Lab Midterm project: agent workflow | to do | |
| W09-T1 From chat window to coding assistant | to do | |
| W09-T2 The development environment and Claude Code | to do | |
| W09-T3 Comparing coding assistants | to do | |
| W09-Lab First app from a spec | to do | |
| W10-T1 Specifications and tests | to do | |
| W10-T2 Reviewing AI-written code | to do | |
| W10-T3 Debugging, changing code, and sub-agents | to do | |
| W10-T4 The capstone project | to do | |
| W10-Lab Spec-driven build with tests | to do | |
| W11-T1 From chat to API | to do | |
| W11-T2 A first API program and what it costs | to do | |
| W11-T3 Tool use | to do | |
| W11-T4 Workflows and agents | to do | |
| W11-Lab First API program with tool use | to do | |
| W12-T1 Retrieval-augmented generation | to do | |
| W12-T2 Evaluation | to do | |
| W12-T3 MCP from the inside | to do | |
| W12-Lab Mini RAG app or MCP server with an eval | to do | |
| W13-T1 Always-on agents | to do | |
| W13-T2 Setting up an always-on agent safely | to do | |
| W13-T3 Always-on risks and when it is worth it | to do | |
| W13-Lab Always-on agent field test | to do | |
| W14-T1 Choosing tools for an organization | to do | |
| W14-T2 Data governance and local models | to do | |
| W14-T3 Bias, reliability, and accountability | to do | |
| W14-T4 Workforce effects and AI-use policy | to do | |
| W14-Lab Capstone draft and peer review | to do | |
| W15-T1 Capstone presentations | to do | |
| W15-T2 Course synthesis | to do | |
| W15-Lab Capstone final | to do | |
| W01-T1 About this course | to do | Expanded earlier; check only |
| W01-T2 What a large language model is | to do | Check only |
| W01-T3 The surfaces map | to do | Check only |
| W01-T4 The 4D framework | to do | Short (172 words) |
| W01-T5 Vendors, models, and effort | to do | Expanded earlier; check only |
| W01-T6 Privacy settings | to do | Expanded earlier; check only |
| W01-Lab Three-vendor comparison | to do | Check only |
