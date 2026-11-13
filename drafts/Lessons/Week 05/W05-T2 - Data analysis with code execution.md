# Week 5: Data analysis with code execution

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

## What you will be able to do

- Explain what code execution is and why it is more reliable than a model doing arithmetic.
- Ask for a cleaning plan before an analysis, and approve or change it.
- Ask questions of a dataset that are specific enough to check.
- Check an analysis as well as its chart, and keep a verification log.
- Decide what data you may upload.

## What code execution is

Many chat tools can **write and run code** on data you upload. You upload a spreadsheet or CSV and ask a question. The model writes a short program, usually in Python, runs it in a private workspace on the vendor's servers, reads the result, and reports back, often with a chart. Vendors call the feature code execution, data analysis, or an analysis tool.

This is far more reliable than asking a model to do arithmetic directly. In Week 3 you saw that models make calculation slips, because they predict digits the way they predict words. With code execution the model writes the instructions and the computer does the calculation. A computer adds 5,000 rows correctly every time.

It also changes what the model can see. A file with 50,000 rows won't fit usefully in the context window. With code execution it doesn't have to: the program reads the whole file, and only the results go into the context.

## The code ran, but is the analysis right?

"The code ran" doesn't mean "the analysis is right." The arithmetic is now reliable. The **decisions** are still the model's, and it makes many of them without telling you:

| Decision | How it can go wrong |
|---|---|
| Which rows to drop | Rows with a blank value are removed, and they turn out to be a quarter of the data, all from one region. |
| How to treat duplicates | An order entered twice is counted twice, which inflates the total. |
| How to group categories | "NY" and "New York" are counted as two states. |
| How to read a column | A column of dollar amounts with `$` signs is read as text, and the rows that fail to convert are skipped. |
| Which calculation to run | You asked for the "average", and the model chose the mean when a few huge values make the median the fairer number. |
| What to compare | Totals are compared between groups of very different sizes, when a rate per person was needed. |

Any of these can be wrong, and the chart will look just as convincing. A clean bar chart of the wrong numbers is the "fluent is not correct" problem from Week 3 in a new form.

The code is visible. Most tools let you open it. **Read it**, or if you don't read code, ask the model to explain each step in plain language:

> Before I rely on this, list every step your code took, in order, in plain language. Include any rows you removed or changed, and how many.

## A workflow that holds up

### 1. Look before you analyze

Ask the model to describe the file first: how many rows and columns, what each column holds, how many values are missing, and anything that looks wrong.

> Don't analyze anything yet. Describe this dataset: the number of rows, each column and its type, the count of missing values per column, and any problems you notice, such as duplicates, inconsistent spellings, or values that look impossible.

### 2. Ask for a cleaning plan

Have the model propose what it would fix, and wait for your approval.

> Propose a cleaning plan as a numbered list. For each step, say what you'd change, how many rows it affects, and why. Wait for my approval before changing anything.

Read the plan as the owner of the data. You know things the model doesn't: that a blank in the "discount" column means no discount, or that the negative quantities are returns and should stay. Approve it, or change it.

### 3. Ask specific questions

"Analyze this data" gets you a generic tour. A specific question gets an answer you can check. If you aren't sure what to ask, three kinds of question work on almost any dataset:

- **Change over time**: "How did monthly sales change across 2025?"
- **Comparison between groups**: "Which region has the highest average order value?"
- **What's unusual**: "Which customers ordered far more than is typical?"

Say what you mean by terms that have more than one reading. "Average" could be mean or median. "Top customers" could be by revenue or by number of orders.

### 4. Ask for the table as well as the chart

A chart shows a shape. A table shows the numbers you can check. Ask for both, and ask for the row count that each number is based on.

> **Instructor note: demo.** Upload your messy dataset. First, ask for a cleaning plan before any analysis, and show students how to approve or change it. Then run the analysis and produce a chart. Then open the code and find the wrong aggregation together. Ask the class: would you have caught this from the chart alone?

## Check the analysis, not just the chart

- **Compare row counts** before and after cleaning. What was dropped, and why? If 5,000 rows went in and 3,800 came out, you need to know where 1,200 went.
- **Check units and categories.** Are "NY" and "New York" being counted separately? Are some amounts in dollars and others in thousands?
- **Do a size check.** Does the total look plausible? If average order value is $40 and there are 5,000 orders, total revenue should be near $200,000. A reported $2 million means something is wrong.
- **Recompute three numbers yourself**, in a spreadsheet or by hand. Filter the original file to one group and use the spreadsheet's own sum or average. Choose numbers your conclusions depend on.
- **Make sure the chart matches the table.** Check that the tallest bar is the largest number, that the axis starts where you think it does, and that the labels are on the right bars.

### The verification log

Write down what you checked as you go. A **verification log** records the number, how you recomputed it, what you got, and whether it matched.

| Number checked | The AI's value | How I recomputed it | My value | Match? |
|---|---|---|---|---|
| Total rows after cleaning | 4,812 | Counted rows in the cleaned CSV in Excel | 4,812 | Yes |
| Average order value, Midwest | $52.10 | Filtered to Midwest in Excel and used AVERAGE | $47.85 | **No** |
| Orders in March | 431 | Filtered by month and counted | 431 | Yes |

The second row is the valuable one. Following it up might show that the model's figure included duplicate orders. You then tell the model what you found, it fixes the code, and you check again. That's the Description–Discernment loop applied to data. You'll keep a log like this for this week's assignment.

## Responsible use: what may you upload?

An uploaded file goes to the vendor's servers. Before uploading data, think about whose it is.

- **Student records** are protected by a federal law called **FERPA**. Grades, ID numbers, and class rosters don't belong in a consumer AI tool.
- **Employer and client data** is usually confidential, and many employers have a policy naming which AI tools are approved for it.
- **Health and financial records** have their own legal protections.
- **Personal information about other people**, such as names, addresses, and phone numbers, deserves the same care even when no law names it.

A useful test: if you wouldn't email it to a stranger, don't upload it to a consumer AI tool.

When a dataset has sensitive columns that the analysis doesn't need, remove them first. Delete the name and email columns, or replace names with ID numbers, before you upload. For this course, use public data or the dataset provided.

## Key terms

**Code execution**: the model writes and runs a program to answer a question. **Data cleaning**: fixing or removing errors, duplicates, and inconsistencies in a dataset before analysis. **Aggregation**: combining many rows into one number, such as a total or an average. **Verification log**: a record of what you checked and what you found. **FERPA**: the U.S. law that protects the privacy of student education records.
