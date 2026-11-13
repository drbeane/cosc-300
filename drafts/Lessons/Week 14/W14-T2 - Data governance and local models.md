# Week 14: Data governance and local models

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

## What you will be able to do

- Explain what data governance is and why it decides which tools may be used.
- Explain the difference between consumer and enterprise terms.
- Sort data into levels of sensitivity and match each to the tools it may go into.
- Explain what shadow AI is and why bans tend to cause it.
- Describe running a model locally as a privacy and cost option.

## Data governance

**Data governance** is the set of rules an organization keeps for its data: who may see it, where it may go, how long it's kept, and who is responsible for it. Every organization has these rules, whether written down or not, because it holds data that belongs to other people: customers, patients, students, employees.

AI tools raise a governance question each time someone pastes something into a chat or connects an account. The data leaves the organization's systems and goes to a vendor. Whether that's acceptable depends on the agreement between the organization and the vendor. You answered this question for yourself in Week 1, with your own privacy settings. An organization has to answer it for everyone it's responsible to.

### Consumer versus enterprise terms

| | Consumer accounts | Enterprise and education accounts |
|---|---|---|
| Training on your data | Often on by default, with an opt-out | Usually off by contract |
| Data retention | The vendor's standard policy | Negotiated |
| Admin controls | None | Single sign-on, permissions, audit |
| Regulated data | Not appropriate | Possible, with the right agreements |

The same product can carry very different terms depending on the account. An employee who pastes a customer list into a personal account and one who pastes it into the company's enterprise account have used the same product and done two very different things.

Three terms come up in these agreements:

- **Training**: whether the vendor may use what you send to improve its models.
- **Retention**: how long the vendor keeps what you send, and whether you can have it deleted.
- **Residency**: which country the data is stored and processed in, which matters under some laws and contracts.

### Regulated data

- **FERPA** protects student education records.
- **HIPAA** protects health information in many settings.
- Client and contract confidentiality binds many professionals.

Whether you may put data into a tool depends on the **account and agreement**, and the tool's quality has no bearing on it. A hospital that wants to use an AI tool with patient records needs a specific agreement with the vendor before any record goes in.

### Sorting data by sensitivity

Most organizations sort their data into a few levels, and a workable AI rule can be built on them.

| Level | Examples | Where it may go |
|---|---|---|
| **Public** | Published web pages, press releases, the course catalog | Any tool |
| **Internal** | Meeting notes, draft plans, internal procedures | Tools on the organization's own account |
| **Confidential** | Customer lists, contracts, unreleased financial results | Approved enterprise tools only |
| **Regulated** | Student records, health records, payment card numbers | Only tools covered by a specific agreement, or none |

When you're unsure which level something is, treat it as the higher one and ask.

### Shadow AI

**Shadow AI** is the use of AI tools at work without the organization's knowledge or approval: a personal chat account open in another tab, with work pasted into it. It's common, and people do it for an ordinary reason. They have work to finish, and the approved tool is missing, weaker, or forbidden.

A ban usually increases it. The work still has to be done, so the use continues on personal accounts with consumer terms, where nobody can see it. An organization does better by providing an approved tool that is good enough to use and stating clear rules about data. The last topic this week returns to this.

## Running a model locally

A small open-weight model can run on a laptop. Nothing leaves the machine, and there's no per-use cost. The trade-offs: local models are smaller and less capable, slower on ordinary hardware, and you're responsible for maintaining them. Organizations choose this when privacy or cost outweighs capability.

| | A vendor's model in the cloud | An open-weight model run locally |
|---|---|---|
| Where the data goes | To the vendor's servers | Nowhere. It stays on the machine. |
| Capability | The strongest models available | Smaller models, weaker on hard tasks |
| Cost | Per seat or per token | Hardware and electricity, with no charge per use |
| Speed | Fast | Depends on the hardware, and often slower |
| Upkeep | The vendor's job | Yours: installing, updating, securing |
| Works offline | No | Yes |

Local models suit tasks that are simple, frequent, and sensitive: sorting documents that can't leave the building, pulling fields out of records, summarizing internal notes. For hard reasoning or long agent tasks, the gap in capability is still wide.

There is a middle route. An organization can run an open-weight model, or a vendor's model, on servers it rents from a cloud provider under its own agreement. The data leaves the laptop but stays within systems the organization controls. The API route discussed in Week 11 was an example.

Local doesn't mean safe in every respect. A local model still hallucinates, and it can still be given tools and be prompt-injected. It removes one risk, the data leaving, and keeps the others.

> **Instructor note: demo.** Run the local model and give it a task from earlier in the term. Compare the result with Claude's. Unplug the network cable or turn off Wi-Fi to make the "nothing leaves the machine" point concrete.

## Key terms

**Data governance**: the rules for how an organization's data is used and protected. **Open-weight model**: a model whose weights are released so anyone can run it. **Retention**: how long a vendor keeps the data you send. **Data residency**: the country where data is stored and processed. **Shadow AI**: use of AI tools at work without the organization's approval. **FERPA** and **HIPAA**: U.S. laws protecting student education records and health information.
