# Week 12: Evaluation

**COSC-300/500 Applied AI Essentials** · 4D focus: Discernment

## What you will be able to do

- Build an evaluation set and explain code-based and model-based grading.

How do you know an AI system works? Not from one good demo. You've already built the habit: in week 2 you tested prompts on five inputs; in week 3 you documented failures. **Evaluation** makes it systematic:

1. Build a **test set** of realistic cases, including hard ones.
2. Decide the expected answer, or the criteria a good answer must meet, for each.
3. Run the system on every case.
4. **Grade** the results.

## Two ways to grade

| Code-based grading | Model-based grading |
|---|---|
| Exact checks: the right number, valid JSON, a required phrase | Another model judges quality against criteria |
| Fast and objective | Handles open-ended answers |
| Can't judge nuance or quality | Can be wrong; check it against your own judgment |

Good evaluations often use both: code for what can be checked exactly, a model grader for the rest, and a human spot-check of the model grader.

## Key terms

**Evaluation**: systematically testing a system on a set of cases. **Model-based grading**: using a model to judge outputs.
