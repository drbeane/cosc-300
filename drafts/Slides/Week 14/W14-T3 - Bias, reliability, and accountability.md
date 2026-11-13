---
marp: true
title: "Week 14: Bias, reliability, and accountability"
paginate: true
---

# Bias, reliability, and accountability
### Week 14
COSC-300/500 Applied AI Essentials

---

## Bias, reliability, accountability

Back to the **failure gallery** from week 3:

- Which failures would hurt someone if deployed?
- Who would be affected unevenly?
- Who's accountable when it goes wrong?

---

## Bias

Outputs that are systematically worse, or different, for some groups.

- **Uneven quality**: by language, by name
- **Assumptions**: "a nurse", "an engineer"
- **Different treatment**: two resumes, one name changed
- **Missing perspectives**

It matters most where output affects decisions about people.

---

## Testing for bias

- **Paired cases**: identical except for one detail
- **Results by group**, as well as overall
- **Review by the people affected**

Week 12's evaluation methods, pointed at fairness.

---

## Reliability at scale

95% right × 1,000 cases a day = **50 wrong, every day**

- Which cases fail?
- How bad is a failure?
- Is it consistent after the model is updated?
- Would anyone notice?

---

## Accountability

| Party | Controlled |
|---|---|
| Vendor | The model and its safeguards |
| Organization | The decision to use it, and the checks |
| Person | Whether they reviewed it |

The organization answers to the people affected. The professional who signs answers for the work.

"The AI did it" is never an answer.

---

## Where human oversight belongs

- Before consequential decisions
- Where errors are costly or hard to undo
- Where people are affected unequally
- **Not** everywhere: oversight that's rubber-stamping is theater

---

## Three arrangements

| | How | Suits |
|---|---|---|
| **In the loop** | Approves each output | Consequential decisions |
| **On the loop** | Monitors, can step in | High volume, small errors |
| **By sample** | Checks a share afterward | Low stakes, catching drift |

---

## What makes oversight real

200 recommendations a day, 30 seconds each, usually right → approve them all.

**Automation bias.**

A reviewer needs time, information, expertise, authority, and a volume they can sustain.

<!-- Gallery discussion: 15 min in small groups, 15 min whole class. Each group picks one failure and says where oversight would have caught it. -->
