# Week 8: Connectors

**COSC-300/500 Applied AI Essentials** · 4D focus: Diligence

> **Instructor note: preparation.** Connect a test calendar or test storage account to Claude for the connector demo; don't demo with your real accounts. Prepare a browser-agent task on a site that is safe to automate (a test form, or a research task across public pages). Set up one scheduled task the day before so you can show its results. Print or post the midterm planning sheet. Timing: 20 min connectors, 15 min browser agents, 10 min scheduled tasks, 30 min midterm workshop.

## What you will be able to do

- Explain what a connector is and what MCP standardizes.
- Connect an agent to an outside service and explain what it can see and do there.
- Tell read access from write access, and grant the least a task needs.
- Review and remove the connections on your account.

## Beyond the folder

So far your agent has worked on files in a folder. Much of your work, though, lives in other services: calendar, email, cloud storage, course tools, project trackers, databases. Without a connection, the only way to bring that material to a model is to copy it in by hand.

A **connector** lets an agent reach one of those services directly. With a calendar connector, "What do I have on Thursday, and where could I fit a two-hour study block?" is answered from your real calendar. With a storage connector, an agent can find last semester's report without your uploading it.

## MCP

Most connectors are built on the **Model Context Protocol (MCP)**, an open standard for connecting AI applications to tools and data.

Before a standard existed, every pairing needed its own custom link: one for this chat app and that calendar, another for a different app and the same calendar. A standard works like a common plug. A service builds one connector, called an **MCP server**, and any AI application that speaks MCP can use it. That is why the list of available connectors has grown so quickly, and why a connector you learn in one product often exists in others.

A connector exposes two kinds of things:

- **Tools**: actions the agent can take, such as creating an event or searching files.
- **Resources**: data the agent can read, such as a document or a calendar.

Each tool comes with a short description of what it does. Those descriptions go into the model's context, and the model chooses a tool by reading them, in the same way it chooses a skill by its description. When you ask about Thursday, the model sees a tool described as "list calendar events in a date range" and calls it. This is the tool-use loop from Week 6, with tools that reach outside your computer.

You'll look inside a connector, and build a small one, in Week 12. This week you're a user.

## Connecting a service

The steps are similar across products:

:::steps Connecting a service
1. Open the product's settings and find the list of connectors (some products call them integrations or apps).
2. Choose the service and select **Connect**.
3. You're sent to that service's own sign-in page. Sign in there. The AI product doesn't see your password.
4. The service shows a **permission screen** listing what the connector is asking to do. Read it.
5. Approve, and you're returned to the AI product. The connector's tools are now available.
:::

Step 4 is the one that matters. The permission screen is the service telling you exactly what you're handing over. People select "Allow" without reading it, the same way they accept terms of service.

After connecting, the service has issued the AI product a kind of key that stands in for you. The agent acts **as you**, with the access you granted. To the calendar, an event the agent creates is an event you created.

## Read versus write

Connectors differ in what they allow:

| Read | Write |
|---|---|
| See your calendar | Create or change events |
| Read your email | **Send** email |
| List and open your files | Change or delete files |
| Look up a record | Edit a record |

The difference in risk is large. A mistake with read access shows the agent something it didn't need to see. A mistake with write access changes something, and some changes can't be taken back: a sent email, a deleted file, a meeting invitation that went to forty people.

**Grant the least access the task needs.** A morning digest of your calendar needs read access only. If a connector offers a read-only option, start there. If it only offers read and write together, keep approvals on for write actions, as in Week 6.

Scope matters as well as type. "All files in my drive" and "the files in one folder" are both read access, and they're very different amounts of it. Choose the narrowest scope the service offers.

> **Instructor note: demo.** Connect the test account. Show the permission screen and talk through each permission. Run a read-only task, then show what a write action looks like and where the approval appears.

## What a connector adds, and what it costs

| It adds | It costs |
|---|---|
| Answers drawn from your real, current data | The agent can see private material |
| No copying and pasting between apps | Content from the service enters the context, where it may contain instructions (the last topic this week) |
| Tasks that span services, such as "find the syllabus in my drive and add its due dates to my calendar" | Each connector's tool descriptions use context, even when unused |
| Scheduled work that can run without you | Mistakes can now happen in services other people see |

## Keep your connections tidy

Connections accumulate. You connect a service for one task and forget it, and months later an agent still has access.

- **Connect what the current work needs**, and no more. Many products let you switch connectors on and off per conversation.
- **Review the list** a few times a year, in the AI product's settings and in each service's own list of connected apps.
- **Disconnect what you no longer use.** Removing it in the service's settings takes the key away.
- **Connect only accounts you own.** A shared club inbox or an employer's system needs that organization's permission first.

## Key terms

**Connector**: a link that lets an agent reach an outside service. **MCP (Model Context Protocol)**: an open standard for connecting AI applications to tools and data. **MCP server**: the program that offers a service's tools and resources through MCP. **Tool**: an action a connector lets an agent take. **Resource**: data a connector lets an agent read. **Permission screen**: the page where a service lists what a connector is asking to do.
