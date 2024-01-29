---
id: project-lifecycle
title: The project lifecycle
description: See the whole project lifecycle at a glance.
sidebar_position: 2
---

# The project lifecycle

[will work on this after "Run a Sample Workload" - don't want this to be too redundant with that - was hoping to show here, at-a-glance, what happens in a project - maybe not a good idea - or maybe this does not show any code (that's in the magic command reference in the notebook) - maybe can keep this at a higher level - is there other storytelling about a project that should go here that's not in the the sample workload topic and not in a nb? - re-watch demos]

You create, run, and manage an analytics project in a Jupyter notebook using the AI Unlimited Jupyter Kernel and the magic commands it provides. Learn more (link) about Jupyter notebooks [maybe something comparable to the Vantage  links Thripti found? Current assumption is that Vantage doc links are not ok, but we'll ask].

Analytic workloads aside, here's the project lifecycle, in terms of what you do:


**Get your API key.**
The first time you log in to the workspace service using your credentials for your AI Unlimited Git repo, your API key is generated. Copy it.

[image of the key in workspaces--to show its location there - this is good use of a screenshot, because the user is not necessarily in workspaces now, and we want to point out where this one small thing is on that UI]


**Create the project.**
Provide the API key and the CSP environment variables. [add how-to details]

[code]


**Connect to your data**



**Optionally, add collaborators to the project--WHEN? before or after running workload(s)** (supported for [demo](docs\install-ai-unlimited\demo\index.md) and [production](link) installations only)

[code]





**Back up project information**

[code]


**Suspend the project**
When you're done for the time-being, you can suspend the project. You only pay for the time a project is active. [Blah] gets retained so you can resume the project [just as it is now]

[code]


**Resume the project**
Whenever you like, resume the project. [what details to add?]

[code]


**What else...**
[Blah blah]

[code]


**Do they ever remove a project completely?**
[Why they might want to... what it means... totally irrecoverable?]

[code]


