---
sidebar_position: 1
---

# Why the Cookbook

Agent Cookbook brings a proven production-ready approach to building intelligent agents with Teradata.

## The Journey: From Notebooks to Production

For years, data scientists have built amazing agent recipes in Jupyter notebooks inside Clearscape Analytics. These notebooks are excellent for learning and experimentation, but they face a critical challenge: **they don't run in production**.

Agent Cookbook solves this by providing:

- **Server-based agents** - Deploy your agent logic as a FastAPI server
- **Uniform interfaces** - Every agent has the same endpoints across recipes
- **UI integration** - Test and explore agents through a web interface
- **Scalable architecture** - Built on proven patterns, ready for enterprise

As Daniel explains in the introduction:

> "What we are bringing to you is an easy way to move from notebook implementations to how you will implement agents in production with actual servers that are serving those agents to a UI."

## The Vision

The Cookbook provides recipes you can:
1. **Learn from** - Understand how production agents work
2. **Build upon** - Extend with your own tools and logic
3. **Deploy** - Ship as real API services
4. **Combine** - Chain multiple agents together

## What's Inside

**Today**: Basic agents for SQL analysis
- `data-analyst` - Single-turn SQL query agent

**Soon**: 
- `data-analyst-multiturn` - With conversation memory
- `data-analyst-dbt` - Schema discovery via DBT integration
- `data-analyst-mcp` - Dynamic tool discovery via MCP
- `governed` - Row-level security
- `vector-search` - Semantic search
- `open-analytics` - Server-side computation
- Enterprise patterns with advanced capabilities

## Repository

Explore the complete source on GitHub:  
[Teradata Agent Cookbook](https://github.com/Teradata/teradata_agent_cookbook)

## Next Steps

- **[Repository Structure](/agent-cookbook/why-the-cookbook/repository-structure/)** - How the Cookbook is organized
- **[Server Factory Pattern](/agent-cookbook/why-the-cookbook/server-factory/)** - The architecture behind uniform APIs
- **[LLM Providers](/agent-cookbook/why-the-cookbook/llm-providers/)** - Choose your language model
- **[Running the Recipes](/agent-cookbook/running-the-recipes/)** - Get started with your first agent
