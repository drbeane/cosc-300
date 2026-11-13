# Week 14: Data governance and local models

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

## What you will be able to do

- Explain the difference between consumer and enterprise terms.
- Describe running a model locally as a privacy and cost option.

## Data governance

### Consumer versus enterprise terms

| | Consumer accounts | Enterprise and education accounts |
|---|---|---|
| Training on your data | Often on by default, with an opt-out | Usually off by contract |
| Data retention | The vendor's standard policy | Negotiated |
| Admin controls | None | Single sign-on, permissions, audit |
| Regulated data | Not appropriate | Possible, with the right agreements |

The same product can carry very different terms depending on the account.

### Regulated data

- **FERPA** protects student education records.
- **HIPAA** protects health information in many settings.
- Client and contract confidentiality binds many professionals.

Whether you may put data into a tool depends on the **account and agreement**, not on how good the tool is.

## Running a model locally

A small open-weight model can run on a laptop. Nothing leaves the machine, and there's no per-use cost. The trade-offs: local models are smaller and less capable, slower on ordinary hardware, and you're responsible for maintaining them. Organizations choose this when privacy or cost outweighs capability.

> **Instructor note: demo.** Run the local model and give it a task from earlier in the term. Compare the result with Claude's. Unplug the network cable or turn off Wi-Fi to make the "nothing leaves the machine" point concrete.

## Key terms

**Data governance**: the rules for how an organization's data is used and protected. **Open-weight model**: a model whose weights are released so anyone can run it.
