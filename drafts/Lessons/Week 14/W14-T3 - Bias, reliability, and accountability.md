# Week 14: Bias, reliability, and accountability

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

## What you will be able to do

- Explain where bias in AI systems comes from and how to look for it.
- Explain why reliability matters more at an organization's scale.
- Say who is accountable when an AI-supported workflow goes wrong.
- Decide where human oversight belongs in a workflow, and what makes it effective.

Go back to the **failure gallery** from week 3.

- Which of these failures would hurt someone if the system were used for real decisions?
- Would any group be affected more than others?
- Who would be accountable when it went wrong: the vendor, the organization, the person who used the output?

**Bias** in AI systems shows up when outputs are systematically worse, or different, for some groups: in language, in assumptions, in the quality of answers. **Reliability** is whether the system performs consistently across the cases it will meet. **Accountability** is who answers for the result. "The AI did it" is never an answer an organization can give.

## Bias

A model learns from an enormous body of human writing, and that writing reflects the world that produced it, including its imbalances. Some groups, languages, and places are written about more than others, and some are written about in narrower ways. A model's output carries those patterns unless something corrects for them.

Bias shows up in several forms:

| Form | Example |
|---|---|
| **Uneven quality** | Answers are more accurate in English than in less widely written languages. Names from some cultures are misspelled or mixed up more often. |
| **Assumptions** | Asked to write about "a nurse" and "an engineer", a model assigns genders. An image generator returns a narrow range of people for "a professional". |
| **Different treatment** | Two resumes that differ only in the name receive different summaries or scores. |
| **Missing perspectives** | Advice assumes a reader in the United States with a car, a bank account, and reliable internet. |

Bias matters most where a system's output affects decisions about people: hiring, lending, admissions, grading, housing, medical triage. One person's skewed answer is a single error. The same skew applied to ten thousand applications is a pattern of unfair treatment, and in many settings a legal problem.

Bias can be tested for, using the evaluation methods of Week 12:

- **Paired cases.** Write inputs that are identical except for one detail, such as a name or an age, and compare the outputs. If they differ, find out why.
- **Results by group.** Don't stop at the overall score. Check whether the system does as well for each group it will serve.
- **Review by the people affected.** They notice what the builders don't.

## Reliability

In Week 3, a model that was right nineteen times in twenty was a hazard for one student. For an organization the arithmetic changes. A system that handles a thousand cases a day and is right 95% of the time is wrong fifty times a day, every day.

So an organization asks about more than average accuracy:

- **Which cases fail?** Random failures and failures concentrated in one group are different problems.
- **How bad is a failure?** A clumsy sentence and a wrong dosage both count as one error.
- **Is it consistent?** Does the same input get the same decision tomorrow, and after the vendor updates the model?
- **Would anyone notice?** A failure that produces an error message gets fixed. One that produces a confident wrong answer gets acted on.

Models change underneath a workflow. A vendor replaces a model with a newer one, and a prompt that worked in March behaves differently in June. Rerunning the test set after any change is the only way to know.

## Accountability

When an AI-supported workflow causes harm, several parties had a hand in it:

| Party | What they controlled |
|---|---|
| The **vendor** | The model and the product's safeguards |
| The **organization** | The decision to use it, for this purpose, with these checks |
| The **person** who used the output | Whether they reviewed it before acting |

In practice the organization that deploys a system answers to the people it affects, and the professional who signs the work answers for the work. A customer who was wrongly denied has a claim against the company, whatever tool the company used. A lawyer who files a brief with invented citations is the one sanctioned. Vendors' terms of service generally place responsibility for how the tool is used on the customer.

The principle from Week 3 holds at every scale: you are responsible for what you submit or send, whoever or whatever drafted it. An organization needs to make that concrete by naming, for each AI-supported workflow, the person who is answerable for its results.

## Where human oversight belongs

Human review belongs before consequential decisions, where errors are costly or hard to undo, and where people could be affected unequally. It doesn't belong everywhere: oversight that rubber-stamps every output without real review gives a false sense of safety. Effective oversight is placed deliberately and done seriously.

There are three common arrangements:

| Arrangement | How it works | Suits |
|---|---|---|
| **Human in the loop** | A person approves each output before it takes effect | Consequential or irreversible decisions |
| **Human on the loop** | The system acts, and a person monitors and can step in | High-volume work where single errors are small and fixable |
| **Review by sample** | A person checks a share of outputs after the fact | Low-stakes work, to catch drift over time |

You've used all three: approving an agent's actions in Week 6, checking a scheduled task's output in Week 8, and spot-checking a sample throughout.

### What makes oversight real

"A human reviews every decision" sounds safe and often isn't. If a reviewer sees two hundred AI recommendations a day, has thirty seconds for each, and finds that the system is usually right, they'll approve nearly all of them. This is the approval fatigue of Week 6 at the scale of an organization. It has a name, **automation bias**: the tendency to accept a system's output because a system produced it.

For oversight to mean something, the reviewer needs:

- **Time** to look at each case properly.
- **Information**: the evidence behind the recommendation as well as the recommendation.
- **Expertise** to judge it.
- **Authority** to overrule it without having to justify themselves more than they would for agreeing.
- **A volume they can sustain.**

If those are absent, the organization has automation with a person's name attached. It's better to place serious review at the few points that matter than to place token review everywhere.

For your capstone's risk section, name the points in your workflow where a person checks the output, what they check, and what would happen if they stopped.

> **Instructor note.** Run the gallery discussion in small groups for 15 minutes, then 15 minutes whole class. Ask each group to pick one failure and propose where oversight would have caught it.

## Key terms

**Bias**: systematically different or worse results for some groups. **Reliability**: consistent performance across the cases a system will meet. **Accountability**: who answers for the result. **Human oversight**: human review placed at points in a workflow where it can catch consequential errors. **Human in the loop**: a person approves each output before it takes effect. **Automation bias**: the tendency to accept a system's output because a system produced it.
