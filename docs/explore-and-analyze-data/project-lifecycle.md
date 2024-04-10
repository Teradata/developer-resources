---
id: project-lifecycle
title: Project lifecycle
description: See the whole project lifecycle at a glance.
sidebar_position: 3
---

# Project lifecycle

AI Unlimited provides [magic commands](/docs/explore-and-analyze-data/magic-commands.md) for creating and managing projects in Jupyter notebooks. 

`%<command_name>`

If you create a project, you are its owner. Once a project is created, the Git repository owner can [add collaborators](/docs/manage-ai-unlimited/add-collaborators.md) to the project in the repository. Back in the notebook, you'll need to update the engine for those new users. 

You might be the owner of one or more projects and a collaborator on others. While owners and collaborators can use the same magic commands, their points of view are somewhat different. 

The most fundamental magic commands reveal the overall project lifecycle, for both points of view. 

***A graphic with the content below, with arrows to show the flow and suspend-resume cycle. Show the commands, and include details that support what happens.***

## Project owner

Run AI Unlimited

Create project

Create user authorizations

Deploy AI/ML engine

Connect to engine

Create data objects and run queries (different color)

Suspend project (say what’s saved)

Resume project (arrow back to Suspend & mention what project info is still there)

Delete project (say what this does [can only the owner do this?])

## Collaborators

Run AI Unlimited

Resume project

Deploy AI/ML engine

Connect to engine

Create more data objects and run more queries (different color)

Suspend project (say what’s saved)

Resume project (arrow back to Suspend & mention what project info is still there)





