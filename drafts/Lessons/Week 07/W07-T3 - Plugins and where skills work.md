# Week 7: Plugins and where skills work

**COSC-300/500 Applied AI Essentials** · 4D focus: Description

> **Instructor note: preparation.** Set up a shared folder or Canvas page for the class skill library. Have one example plugin to show (installed or from a marketplace) and be ready to open its contents. Timing: 10 min plugins, 10 min skills in chat vs agent, 45 min lab, 10 min share-out.

## What you will be able to do

- Explain what a plugin is and why organizations use them.
- Explain why skills and instruction files are limited in chat without a working folder.

## Plugins

A **plugin** bundles several pieces, such as skills, connectors, and other components, into one package that can be installed and shared. Organizations use plugins to package "the way we do things here": a set of skills for the sales team's proposals, connected to the CRM, installed by everyone on the team at once.

> **Instructor note: demo.** Open an example plugin and show its contents. The point is that a plugin is just organized skills and connections, not something mysterious.

## Skills in chat vs skills in an agent

Skills also work in a regular Claude chat. But they're more limited there, because a chat has no working folder.

| In chat | In an agent working in a folder |
|---|---|
| Works on uploaded **copies** of your files | Works on the **real files** |
| Standing instructions are typed into a settings field | An instruction file **lives with the work** |
| Can't run your project's tests or local tools | Can run scripts, tests, and local tools |
| You download the results | Results are saved in place |

So "skills work in chat" is true, and "skills work best in an agent with a folder" is also true. The accurate summary is that skills are **limited** in chat, not absent.

## Key terms

**Plugin**: a package bundling skills, connectors, and other components for sharing.

> **Instructor note.** Save a copy of the class skill library; it feeds the midterm.
