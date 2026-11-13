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

## Where it stands
Last updated 2026-11-13. Weeks 2 to 13 are done and pushed. **Resume at W14-T1.** The helper `tools/publish.sh "message"` syncs, builds, commits and pushes. Note: the site does not draw Mermaid diagrams, so use tables for flows.

## Status
Statuses: **to do**, **expanded** (lesson and deck rewritten longer), **fine** (reviewed, no change needed).

| Session | Status | Notes |
|---|---|---|
| W02-T1 Writing strong prompts | expanded | Added the coworker test, a technique per problem, a worked example of few-shot, outdated advice |
| W02-T2 Tokens and the context window | expanded | Added token estimates, how history is resent each turn, signs of a degraded chat, handoff summary |
| W02-T3 Memory, custom instructions, and voice | expanded | Added an example of instructions, two kinds of memory, costs of memory, voice table |
| W02-T4 Testing and revising prompts | expanded | Was 174 words. Added test set design, checks, the revision loop, a worked log, when to stop |
| W02-Lab Prompt revision log | expanded | Small additions: the three weak prompts, test set guidance, reflection questions. Deck unchanged |
| W03-T1 Why AI output is wrong | expanded | Added an example per error type, why fluent is not correct, when hallucination is likely, leading and neutral questions |
| W03-T2 Verification habits | expanded | Was 172 words. Added how much to check, a section per habit, check-to-error table, what to do when you can't verify |
| W03-T3 Effort, models, and the Description–Discernment loop | expanded | Added fix-to-error table, a worked pass through the loop, feedback examples, when to stop |
| W03-Lab Fact-check and failure report | fine | |
| W04-T1 AI as a writing partner | expanded | Added a table of stages, feedback techniques, keeping your voice, a disclosure example |
| W04-T2 Projects | expanded | Added the parts table, how to write project instructions, choosing files, testing the project |
| W04-T3 Research agents | expanded | Added search vs research, writing a request, failure table, audit steps |
| W04-T4 Grounded notebooks and how tools find sources | expanded | Added grounding, what a notebook gives you, embeddings, retrieval failures and fixes |
| W04-Lab Research brief with citation audit | fine |  |
| W05-T1 Structured files | expanded | Added a section per format with examples, common CSV problems, choosing a format |
| W05-T2 Data analysis with code execution | expanded | Added how code execution works, a table of hidden decisions, a four-step workflow, a sample verification log |
| W05-T3 Creating files, multimodal input, and generative media | expanded | Added describing a file, where image reading slips, describing an image, deepfakes and bias |
| W05-T4 AI inside an application | expanded | Was 223 words. Added tasks by app, what it can't see, choice examples, checking before sending |
| W05-Lab Data-to-deliverable package | fine |  |
| W06-T1 From chat to agent | expanded | Added a step-by-step trace of the loop, how agent mistakes differ, the manager's role |
| W06-T2 The task brief | expanded | Was 167 words. Added a section per part, checkable criteria, weak and strong briefs, when not to delegate |
| W06-T3 Autonomy controls and usage | expanded | Added a settings table, what to look for in a plan, approval fatigue, reviewing the result, cost drivers |
| W06-Lab Folder-scale delegation task | fine | Fixed one reference to the brief's four parts |
| W07-T1 Standing instructions | expanded | Added a full example instruction file, how to write rules that get followed, testing and revising |
| W07-T2 Skills | expanded | Added staged loading, good and bad descriptions, writing the steps, skill vs instruction file, testing |
| W07-T3 Plugins and where skills work | expanded | Added plugin contents, why organizations use them, read before you install, where to run a skill |
| W07-Lab Write and test a skill | fine |  |
| W08-T1 Connectors | expanded | Added what MCP standardizes, how tools are chosen, connecting steps, scope, tidying connections |
| W08-T2 Browser agents and scheduled tasks | expanded | Added how a browser agent works, connector vs browser table, supervising, briefs for unattended runs, silent failures |
| W08-T3 Prompt injection and defenses | expanded | Added where injections hide, jailbreak vs injection, a worked workflow check, signs of trouble |
| W08-Lab Midterm project: agent workflow | fine |  |
| W09-T1 From chat window to coding assistant | expanded | Added plain definitions of project terms, why chat coding breaks down, the loop in a project, your role |
| W09-T2 The development environment and Claude Code | expanded | Added reading a diff, small commits table, a project instruction file, a working rhythm |
| W09-T3 Comparing coding assistants | expanded | Added forms of coding assistant, quality vs cost, how to compare fairly, why comparisons date |
| W09-Lab First app from a spec | fine |  |
| W10-T1 Specifications and tests | expanded | Added what a spec contains, testable requirements, a readable test and its output, regressions |
| W10-T2 Reviewing AI-written code | expanded | Added a review routine, a diff of a silent test edit, questions per pattern, a sample review log |
| W10-T3 Debugging, changing code, and sub-agents | expanded | Added symptom vs cause, a good bug report, changing requirements, sub-agent trade-offs |
| W10-T4 The capstone project | expanded | Added choosing and sizing a task, measurable success, a short example proposal |
| W10-Lab Spec-driven build with tests | fine |  |
| W11-T1 From chat to API | expanded | Added what an API is, chat app vs API, the parts of a response |
| W11-T2 A first API program and what it costs | expanded | Added a readable first program, system prompt examples, the conversation loop, a worked cost example, key safety |
| W11-T3 Tool use | expanded | Added a message-by-message trace, program control and tool errors, good and bad tool descriptions |
| W11-T4 Workflows and agents | expanded | Was 223 words. Added what agents are from the inside, a pattern per section, choosing the simplest design |
| W11-Lab First API program with tool use | fine |  |
| W12-T1 Retrieval-augmented generation | expanded | Added indexing vs answering, one question traced end to end, retrieval vs generation failure, when RAG is needed |
| W12-T2 Evaluation | expanded | Was 210 words. Added a sample test set, three grading methods, a grader rubric, reading failures, cautions |
| W12-T3 MCP from the inside | expanded | Added host, client and server, a fuller example server, design guidance, which half failed |
| W12-Lab Mini RAG app or MCP server with an eval | fine |  |
| W13-T1 Always-on agents | expanded | Added triggers and check-ins, what these agents suit, how supervision changes. No new product facts |
| W13-T2 Setting up an always-on agent safely | expanded | Was 254 words. Added the reason for each rule, a permission record, a multi-day brief, shutting down |
| W13-T3 Always-on risks and when it is worth it | expanded | Added the attention risk, a monitoring table, five questions and worked verdicts |
| W13-Lab Always-on agent field test | fine |  |
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
