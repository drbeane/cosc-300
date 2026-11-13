---
marp: true
title: "Week 5: Structured files"
paginate: true
---

# Structured files
### Week 5
COSC-300/500 Applied AI Essentials

---

## Format is part of the description

Week 2: describe the **task**.
This week: describe the **shape of the output**.

"Make it look nice" → hard to reuse.
Name a format → something you can edit, check, and move.

---

## Structured files

Formats people **and** AI both read and write well:

| Format | Good for |
|---|---|
| **Markdown** | Documents, notes, instructions |
| **CSV** | Tables of data |
| **JSON** | Structured records, app data |
| **Mermaid** | Diagrams as text |

All four are plain text: nothing is hidden.

---

## Why they matter

- Easy to check, edit, and version
- Move cleanly between tools
- Instruction files and skills (week 7) **are** Markdown
- Programs exchange data with models as JSON (week 11)

---

## Markdown in 30 seconds

```markdown
# Heading
## Subheading
- bullet
**bold**, *italic*
| table | row |
```

Chat replies are written in Markdown. So are these slides.

---

## CSV

```
student_id,major,credits,gpa
1041,Nursing,62,3.4
1042,"Business, Marketing",45,3.1
1043,Cybersecurity,,3.8
```

- One row per line, commas between values
- Quotes around a value that contains a comma
- Everything is text: nothing says `gpa` is a number

---

## What goes wrong in a CSV

- An unquoted comma shifts the row
- "NY", "New York", "new york"
- Mixed date formats
- `$1,200` and `45%` stored as text
- Blank cells: zero, unknown, or not applicable?

<!-- These are the problems planted in the demo dataset for the next topic. -->

---

## JSON

```json
{
  "name": "Ada Okafor",
  "year": 2027,
  "majors": ["Data Science", "Mathematics"],
  "advisor": { "name": "Dr. Lee" }
}
```

- Objects in `{ }`, lists in `[ ]`
- Can nest, which a CSV can't
- Strict: one missing comma breaks the file

---

## Mermaid in 30 seconds

```mermaid
flowchart LR
  A[Question] --> B[Search] --> C[Read] --> D[Report]
```

Ask: *"Draw this process as a Mermaid flowchart."*

You can fix a text diagram. You can't fix an image.

---

## Choosing a format

| You want | Ask for |
|---|---|
| A document or instructions | Markdown |
| A table to sort or chart | CSV |
| Nested records, output for a program | JSON |
| A diagram | Mermaid |

Work in a plain format while checking. Convert to a finished file at the end.
