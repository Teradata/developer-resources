---
sidebar_position: 1
---

# Running the Recipes

Learn how to set up your environment and run your first agent.

## Quick Start (5 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/Teradata/teradata_agent_cookbook.git
cd teradata_agent_cookbook

# 2. Set up environment
cp .env.example .env
# Edit .env with your API keys

# 3. Run the launcher
python launcher.py all --setup

# 4. Open in browser
open http://localhost:5173
```

## What You'll See

1. **Launcher starting recipes** - Output shows each agent starting
2. **UI loading** - React interface appears at localhost:5173
3. **Recipe dropdown** - Select which agent to test  
4. **Chat interface** - Ask questions in natural language
5. **Results** - Agent responds with SQL execution and results

## Available Recipes

### Basic Agents (Available Now)
- **data-analyst** - SQL query generation and execution

### Coming Soon
- **data-analyst-multiturn** - Multi-turn conversations  
- **data-analyst-dbt** - Schema discovery via DBT
- **data-analyst-mcp** - MCP tool integration
- **governed** - Row-level security
- **vector-search** - Semantic search
- **open-analytics** - Server-side computation

## Next Steps

- **[Environment Setup](/agent-cookbook/running-the-recipes/environment-setup/)** - Detailed configuration
- **[Agent Server Architecture](/agent-cookbook/running-the-recipes/agent-servers-ui/)** - How it all works together
- **[Running Data Analyst](/agent-cookbook/running-the-recipes/data-analyst-recipe/)** - Deep dive on first agent
- **[Expanding with Your Agents](/agent-cookbook/running-the-recipes/expanding-agents/)** - Build your own agents
