## Course-long references
| Resource | Type | Notes |
|---|---|---|
| [Claude documentation](https://docs.claude.com/) and [Claude support center](https://support.claude.com/) | Vendor docs | Reference for Cowork, Claude Code, skills, and connectors |
| [Claude Academy](https://academy.claude.com/courses) | Courses | Anthropic's free courses, including the AI Fluency lessons assigned in this course |
| [One Useful Thing](https://www.oneusefulthing.org/) (Ethan Mollick) | Newsletter | The most readable running commentary on practical AI use; periodic "which AI to use" guides help with tool choice |
| *Co-Intelligence* (Mollick, 2024) and [*Co-Existence*](https://www.penguinrandomhouse.com/books/813026/co-existence-by-ethan-mollick/) (Mollick, 2026) | Books (paid) | Candidate optional text; *Co-Existence* is the newer follow-up |
| [Simon Willison's Weblog](https://simonwillison.net/) | Blog | Hands-on notes on new tools, prompt injection, and building with LLMs |
| [OpenAI Academy](https://academy.openai.com/) | Videos and courses | ChatGPT-focused; good for the vendor-plural comparisons |
| [Explore Microsoft 365 Copilot Chat](https://learn.microsoft.com/en-us/training/paths/explore-microsoft-365-copilot-business-chat) (Microsoft Learn) | Learning path | Matches what students have through Maryville |
| [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google) (Coursera) | Short course (free to audit; certificate paid) | Google's equivalent of a prompting course |

## Week 1: How AI systems work
| Resource | Type | Length | Why |
|---|---|---|---|
| [Large Language Models explained briefly](https://3blue1brown.substack.com/p/large-language-models-explained-briefly) (3Blue1Brown) | Video | 8 min | Best short visual introduction; assign before session 1 |
| [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) (Andrej Karpathy) | Video | 1 hr | Clear general-audience talk; the "LLM OS" framing previews agents |
| [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI) (Karpathy) | Video | 3.5 hr | Optional depth for 500 students: pretraining, tuning, hallucination |
| [How I use LLMs](https://www.youtube.com/watch?v=EWvNQjAaOHw) (Karpathy) | Video | 2 hr | A practitioner's tour of tools and features; pairs with the surfaces map |
| [Neural networks series](https://www.3blue1brown.com/topics/neural-networks) (3Blue1Brown) | Video series | 2–3 hr | Transformers and attention, for curious students; beyond what the course requires |
| [Elements of AI](https://www.elementsofai.com/) (University of Helsinki) | MOOC | ~30 hr | Non-technical background for students from other majors |

## Week 2: Prompting and context
| Resource | Type | Length | Why |
|---|---|---|---|
| [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview) (Anthropic docs) | Text | 1 hr | Authoritative techniques: clarity, examples, XML structure |
| [Prompt engineering interactive tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) (Anthropic, GitHub) | Notebook tutorial | 3–4 hr | Exercises with answer keys; the spreadsheet version needs no coding |
| [Google Prompting Essentials](https://www.coursera.org/specializations/prompting-essentials-google) | Short course | ~6 hr | Second vendor's take, for comparison |
| [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) (Anthropic Engineering) | Article | 20 min | Why context, not just the prompt, decides results; previews weeks 6–8 |

## Week 3: Evaluating AI output
| Resource | Type | Length | Why |
|---|---|---|---|
| [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/) (OpenAI, 2025) | Article and paper | 20 min | A vendor's own explanation; argues training rewards guessing over saying "I don't know" |
| [AI search engines fail to produce accurate citations in over 60% of tests](https://www.niemanlab.org/2025/03/ai-search-engines-fail-to-produce-accurate-citations-in-over-60-of-tests-according-to-new-tow-center-study/) (Nieman Lab on the Tow Center study) | Article | 10 min | Concrete evidence for verification habits; also used in week 4 |
| [AI Incident Database](https://incidentdatabase.ai/) | Database | browse | Real-world failures for the class failure gallery |

## Week 4: Research and grounded knowledge work
| Resource | Type | Length | Why |
|---|---|---|---|
| [NotebookLM help](https://support.google.com/notebooklm/) | Vendor docs | 30 min | Setup and source limits for the grounded-notebook comparison |
| Tow Center study, original in the [Columbia Journalism Review](https://www.cjr.org/tow_center/) | Article | 20 min | Method details for the citation audit; 500 extension source |
| [Claude support: projects and research](https://support.claude.com/) | Vendor docs | 20 min | How projects, project memory, and research work on Pro |

## Week 5: Documents, data, and media
| Resource | Type | Length | Why |
|---|---|---|---|
| [Markdown Guide](https://www.markdownguide.org/) | Text | 30 min | Students need fluent Markdown before skills (week 7) |
| [Mermaid documentation](https://mermaid.js.org/) | Text | 30 min | Diagrams as text that AI can write and edit |
| [C2PA and Content Credentials](https://c2pa.org/) | Standard and explainer | 20 min | Provenance and labeling of generated media |

## Week 6: Local agents
| Resource | Type | Length | Why |
|---|---|---|---|
| [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) (Anthropic Engineering) | Article | 30 min | The clearest explanation of workflows vs agents; reused in week 11 |
| [Claude Cowork help articles](https://support.claude.com/) | Vendor docs | 30 min | Setup, permissions, folder access |
| OpenAI Academy material on ChatGPT Work | Videos | 30 min | The competing local agent, for comparison |

## Week 7: Instruction files and skills
| Resource | Type | Length | Why |
|---|---|---|---|
| [AGENTS.md](https://agents.md/) | Specification and examples | 15 min | The cross-vendor standard for agent instruction files |
| [Agent Skills documentation](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) (Anthropic docs) | Text | 30 min | Skill structure and authoring guidance |
| [anthropics/skills](https://github.com/anthropics/skills) (GitHub) | Example skills | browse | Real skills to read before writing one |

## Week 8: Connectors, browser agents, agent security
| Resource | Type | Length | Why |
|---|---|---|---|
| [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (Simon Willison) | Article | 15 min | Private data plus untrusted content plus a way to send data out: the one-paragraph rule for agent risk |
| [OWASP Top 10 for Agentic Applications (2026)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026) | Standard | 1 hr | Industry checklist for the midterm risk report |
| [OWASP 2026 Top 10 for LLM Applications announcement](https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/) | Article | 10 min | Context for the 2026 list |
| [Model Context Protocol](https://modelcontextprotocol.io/) | Official docs | 30 min | What MCP is, from the source |

## Week 9: Coding with AI I
| Resource | Type | Length | Why |
|---|---|---|---|
| [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/2026) (MIT, 2026 lectures) | Video lectures and notes | 1 hr per lecture | Shell and Git lectures, for students new to both |
| [Pro Git](https://git-scm.com/book) | Book (free online) | ch. 1–2 | Reference for commits, diffs, and undoing changes |
| [VS Code getting started](https://code.visualstudio.com/docs) | Vendor docs | 30 min | Setup guide |
| [Claude Code: A Highly Agentic Coding Assistant](https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant) (DeepLearning.AI with Anthropic) | Short course | 1 hr 50 min | Video course, a second source alongside Academy's Claude Code 101 |
| [GitHub Skills](https://skills.github.com/) | Interactive exercises | 30–60 min each | Free hands-on Git, GitHub, and Copilot exercises |

## Week 10: Coding with AI II
| Resource | Type | Length | Why |
|---|---|---|---|
| [Claude Code best practices](https://www.anthropic.com/engineering/claude-code-best-practices) (Anthropic Engineering) | Article | 30 min | Explore, plan, code, commit; test-first workflows |
| [Claude Code documentation](https://docs.claude.com/en/docs/claude-code/overview) | Vendor docs | reference | Plan mode, permissions, CLAUDE.md, subagents |

## Week 11: AI engineering I
| Resource | Type | Length | Why |
|---|---|---|---|
| [Amazon Bedrock Workshop](https://github.com/aws-samples/amazon-bedrock-workshop) (aws-samples, GitHub) | Notebooks | 2–4 hr | Matches the likely Bedrock access route; text generation and tool-use labs |
| [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) (Anthropic, GitHub) | Notebooks | browse | Worked examples of tool use, structured output, and RAG |
| [Ollama](https://ollama.com/) and [LM Studio](https://lmstudio.ai/) | Software and docs | 30 min setup | Running a local open model; LM Studio has a graphical app for non-programmers |
| [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | Article | 30 min | Chaining, routing, parallelization (re-read from week 6) |

## Week 12: AI engineering II
| Resource | Type | Length | Why |
|---|---|---|---|
| [LLM Evals: Everything You Need to Know](https://hamel.dev/blog/posts/evals-faq/) (Hamel Husain and Shreya Shankar) | Article | 1 hr | The best practical guide to error analysis and eval design |
| [MCP: Build Rich-Context AI Apps with Anthropic](https://learn.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic) (DeepLearning.AI) | Short course | 1 hr 38 min | Build an MCP server and client; supports Track B |
| [Hugging Face MCP Course](https://huggingface.co/learn/mcp-course/unit0/introduction) | Course | several hr | Free, open-source alternative for Track B |
| [Hugging Face Agents Course](https://huggingface.co/learn/agents-course) | Course | several hr | Agents with open models; pairs with local models |
| [Evaluating AI Agents](https://community.deeplearning.ai/t/new-course-enroll-in-evaluating-ai-agents/773080) (DeepLearning.AI with Arize) | Short course | ~2 hr | Evaluation of agent behavior, for 500 students |

## Week 13: Always-on assistants
| Resource | Type | Length | Why |
|---|---|---|---|
| [How to get started with Meta Muse](https://theneuron.ai/explainer-articles/how-to-get-started-with-meta-muse/) (The Neuron) | Article | 15 min | Setup, pricing, permission model |
| [Meta debuts Muse](https://axios.com/2026/09/08/meta-debuts-muse-personal-ai-agent) (Axios) | News | 5 min | Launch context |
| [Meta's new Muse AI agent raises privacy concerns](https://www.atlantanewsfirst.com/2026/10/09/metas-new-muse-ai-agent-raises-privacy-concerns/) | News | 5 min | Discussion starter for the risk session |
| [Muse image AI pulls from public Instagram photos by default](https://www.audacy.com/wxrt/news/local/metas-new-muse-image-ai-pulls-from-public-instagram-photos-by-default-users-can-opt-out-in-settings) | News | 5 min | A concrete default-on data use to check in settings |
| [The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) (re-read) | Article | 15 min | Muse with email access meets all three conditions |

## Week 14: AI in organizations
| Resource | Type | Length | Why |
|---|---|---|---|
| [NIST AI 600-1: Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) and [AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) | Framework | 1–2 hr | The standard US reference for capstone governance sections |
| [MIT AI Risk Repository](https://airisk.mit.edu/) | Database | browse | A taxonomy of AI risks for the capstone |
| [Stanford AI Index](https://hai.stanford.edu/ai-index) (2026 report) | Report | selected chapters | Data on adoption, cost, and the workforce |
| *AI Snake Oil* (Narayanan and Kapoor, 2024) | Book (paid) | selected chapters | Critical view of AI claims; balances vendor sources |
| [Ethics of AI](https://ethics-of-ai.mooc.fi/) (University of Helsinki) | MOOC | ~10 hr | Free, self-paced ethics course; optional depth |
| [Anthropic Economic Index](https://www.anthropic.com/economic-index) | Reports | 30 min | How people actually use AI at work |
