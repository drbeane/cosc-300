# COSC-300 / COSC-500 Applied AI Essentials: 15-Week Course Outline (draft)

_Drafted 2026-10-21 by Claude for review; sessions corrected to 75 minutes and resources added the same day. Built from the draft course outlines and module detail in Claude Access/Drafts, the Evidence master list, the course promo, the provost talking points, and the Claude Academy catalog (academy.claude.com/courses). 🔴 marks anything that needs a decision._

## Course description
This course introduces students to the practical use of modern AI tools in professional settings. The course emphasizes AI literacy, responsible use, prompt design, workflow integration, output evaluation, and human-AI collaboration. Students learn to use modern tools and platforms to support research, writing, analysis, coding, communication, and task automation. They also examine limitations, risks, ethics, privacy, bias, and organizational considerations involved in deploying AI in real-world environments.

No prerequisites. Open to all majors. COSC-300 (undergraduate) and COSC-500 (graduate) are cross-listed: same topics, different expectations for student work.

## Learning outcomes
By the end of the course, students will be able to:
1. Explain how large language models work well enough to predict where they succeed and fail.
2. Choose an appropriate AI tool, surface, and model for a task, and justify the choice on quality, cost, and risk.
3. Write prompts, instructions, and task briefs that reliably produce useful results.
4. Evaluate AI output for accuracy, sourcing, and fitness for purpose, and document that evaluation.
5. Delegate multi-step work to an AI agent, supervise it (plans, permissions, review), and recover when it goes wrong.
6. Customize and extend agents with instruction files, skills, and connectors.
7. Work with an AI coding assistant in a real development environment, using tests and version control as safeguards.
8. Describe how AI applications are built (APIs, tool use, retrieval, evaluation) and build a small one with AI assistance.
9. Analyze the privacy, security, bias, and organizational implications of an AI deployment and propose safeguards.

## Organizing framework
Two ideas give the course its shape.

**Ordered by autonomy.** The course moves from talking to an AI (chat), to grounding it in sources and files, to letting it act on a computer, to having it build software, to building with it directly, and finally to agents that act unattended. Supervision skills grow with the autonomy granted.

**The 4D framework from Anthropic's AI Fluency course** runs through every week: *Delegation* (what to hand to AI), *Description* (how to communicate the task), *Discernment* (evaluating what comes back), and *Diligence* (responsibility for the result). Each weekly outline names the D it emphasizes. Two threads run through every week rather than being held to the end: **output evaluation** and **responsible use**.

## Format
- 15 weeks, two 75-minute sessions a week (TTh 8:00–9:15), 2.5 contact hours a week.
- Content is organized by topic, not by class meeting: three to six topics a week, plus one lab and assignment page. A meeting covers as many topics as fit.
- Typical week: concepts and demonstrations with guided practice first, then a lab on the week's assignment, a share-out, and discussion.
- Every student has the required premium subscription (Claude Pro preferred). Other tools are used where they are the right fit (Copilot Chat, NotebookLM, GitHub Copilot Student, an image generator, Meta Muse).

## Schedule at a glance

| Week | Topic | Surfaces | Capabilities | 4D emphasis | Assignment |
|---|---|---|---|---|---|
| 1 | How AI systems work and how they are delivered | Chat assistant, map of all eight surfaces | Model selection and effort levels | Delegation | Three-vendor comparison |
| 2 | Prompting and context | Chat assistant | Memory and custom instructions, Voice | Description | Prompt revision log |
| 3 | Evaluating AI output | Chat assistant | Model selection and effort levels | Discernment | Fact-check and failure report |
| 4 | Research and grounded knowledge work | Chat assistant | Projects and project memory, Research agent, Grounded notebook | Discernment | Research brief with citation audit |
| 5 | Documents, data, and media | Chat assistant, Embedded copilot | Generative media, Data analysis with code execution, File and document creation, Multimodal input | Description | Data-to-deliverable package |
| 6 | Local agents: delegating real work | Local agent | Plan mode and autonomy controls, Usage and context commands | Delegation | Folder-scale delegation task |
| 7 | Instruction files and skills | Local agent | Instruction files and skills, Projects and project memory | Description | Write and test a skill |
| 8 | Connectors, browser agents, background tasks, and agent security | Local agent, Cloud and background agents, Browser and computer-use agents | MCP connectors, Plan mode and autonomy controls | Diligence | Midterm project: agent workflow |
| 9 | Coding with AI I: the development environment | Coding assistant, Local agent | Plan mode and autonomy controls, Instruction files and skills, Usage and context commands | Delegation | First app from a spec |
| 10 | Coding with AI II: building and reviewing | Coding assistant | Plan mode and autonomy controls, Instruction files and skills | Discernment | Spec-driven build with tests |
| 11 | AI engineering I: models as components | API and agent platforms | Model selection and effort levels | Description | First API program with tool use |
| 12 | AI engineering II: retrieval, evaluation, and MCP | API and agent platforms | MCP connectors | Discernment | Mini RAG app or MCP server with an eval |
| 13 | Always-on assistants (Meta Muse) | Always-on agent, Cloud and background agents | Plan mode and autonomy controls, MCP connectors | Diligence | Always-on agent field test |
| 14 | AI in organizations | Embedded copilot, all | review | Diligence | Capstone draft and peer review |
| 15 | Capstone presentations and synthesis | all | all | all | Capstone final |

## Assessment (suggested)

| Component | Weight | Notes |
|---|---|---|
| Weekly assignments (12: weeks 1–7 and 9–13) | 40% | Lowest one dropped |
| Midterm project (week 8) | 15% | An agent workflow built on skills and a connector |
| Capstone project (weeks 10–15) | 25% | Proposal week 10, checkpoint week 12, draft week 14, final week 15 |
| AI use journal and reflections | 10% | Short weekly entry: what was delegated, what was checked, what went wrong |
| Claude Academy courses | 10% | Completion certificates or badges for the assigned courses (see the Resource Map) |

**COSC-500 expectations.** Graduate students complete a "500 extension" on most assignments (listed in each weekly outline): typically a larger scope, a written critical analysis drawing on published sources, or a short teaching demo for the class. The graduate capstone includes an evaluation with measured results and a short literature-grounded discussion.

## Capstone
Students design, prototype, and evaluate an AI-supported workflow for a real or realistic task in their own field: tool and surface choice with justification, a working prototype (agent workflow, skill set, app, or always-on setup), an evaluation plan with results, and a risk and governance section. Milestones: proposal (week 10), checkpoint (week 12), draft and peer review (week 14), presentation and final report (week 15).

## Coverage check
Every item on the Evidence master list is placed.
- Surfaces: Chat assistant (weeks 1–5), Embedded copilot (5, 14), Coding assistant (9–10), Local agent (6–9), Cloud and background agents (8, 13), Browser and computer-use agents (8), Always-on agent (13), API and agent platforms (11–12).
- Capabilities: Plan mode and autonomy controls (6, 8, 9, 10, 13), Instruction files and skills (7, 9, 10), Projects and project memory (4, 7), Research agent (4), Model selection and effort levels (1, 3, 11), MCP connectors (8, 12, 13), Grounded notebook (4), Usage and context commands (6, 9), Voice (2), Generative media (5), Data analysis with code execution (5), File and document creation (5), Multimodal input (5), Memory and custom instructions (2).

## Changes from the 8-module draft
- Spread over 15 weeks: agent work now gets three weeks (6–8), coding gets two (9–10).
- Output evaluation gets its own week (3) in addition to the thread.
- **AI engineering added as two hands-on weeks (11–12).** These replace the single API demo in the old Module 8. Students build with AI assistance, so no prior coding is required, but the focus is understanding how AI products are put together.
- **Always-on assistants moved near the end (13), using Meta Muse**, after agent security and connectors are understood.
- AI in organizations (old Module 8) is week 14; the capstone takes week 15.

## Open decisions 🔴
1. **API access for weeks 11–12 (on hold).** Claude Pro does not include API usage. Likely approach: a combination of the department's Bedrock account and local open models. Details to be settled later.
2. **Muse access.** US adults 18+, payment card at signup (third-party reports, Evidence 19). Plan an instructor demo for students who cannot or will not sign up, and require a throwaway setup with no sensitive accounts connected.
3. **Engineering weeks for non-programmers.** Students can complete them by directing Claude Code, but the weeks may feel steep for some majors. Option: make week 12 a choice between a build track and an analysis track.
4. **Claude Academy as graded work.** Confirm students can earn completion badges on free Academy accounts and how they submit them.
5. **Spring calendar.** Week numbers ignore spring break and the final exam slot; capstone presentations could move to the exam period.

## Files in this folder
- `00 - Course Outline.md` (this file)
- `01 - Assignments Overview.md`: all assignments in one place
- `02 - Claude Academy Resource Map.md`: Academy courses mapped to weeks
- `03 - Supplementary Resources.md`: outside videos, courses, articles, and standards mapped to weeks and outcomes
- `Weeks/`: one outline per week
