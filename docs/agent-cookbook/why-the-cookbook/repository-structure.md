---
sidebar_position: 2
---

# Repository Structure

Understanding how Agent Cookbook is organized helps you navigate and extend it.

## Top-Level Directories

```
teradata_agent_cookbook/
├── recipes/              # Recipe implementations
├── launcher/             # Orchestration tool
├── shared/               # Shared utilities
├── ui/                   # React web interface
└── docs/                 # Documentation
```

## `recipes/` - The Heart of the Cookbook

This is where agent implementations live:

```
recipes/
├── basic_agents/         # Foundation agents
│   └── data_analyst/     # SQL query agent
├── enterprise/           # Production-grade agents (coming soon)
│   ├── governed/         # With row-level security
│   ├── vector_search/    # Semantic search
│   └── open_analytics/   # Server-side computation
└── advanced/             # Advanced patterns (coming soon)
```

### Recipe Structure

Each recipe follows the same pattern:

```
data_analyst/
├── recipe.yaml           # Metadata (name, port, LLM providers)
├── server.py             # FastAPI entry point (boilerplate)
├── agent.py              # Your agent logic
├── pyproject.toml        # Python dependencies
├── uv.lock               # Locked dependencies
├── setup.sql             # Data initialization
└── README.md             # Recipe-specific docs
```

## `launcher/` - Orchestration

The launcher simplifies running recipes:

```
launcher/
├── launcher.py           # Main entry point
├── config/               # Configuration management
├── metadata.py           # Recipe discovery
└── server_manager.py     # Process management
```

### Launcher Features

- **Discovery**: Automatically finds all recipes
- **Startup**: Initializes services in correct order
- **Port Management**: Assigns ports from configuration
- **UI Launch**: Starts the React interface

**Example**: `python launcher.py all` starts everything.

## `shared/` - Shared Utilities

Common code reused by recipes:

```
shared/
├── connection.py         # Teradata connection pooling
├── config.py             # Configuration loading
├── llm_providers.py      # LLM client factories
├── auth.py               # Authentication helpers
└── logging.py            # Unified logging
```

## `ui/` - Web Interface

React application for testing recipes:

```
ui/
├── src/
│   ├── components/       # UI components
│   ├── pages/            # Page layouts
│   ├── services/         # API clients
│   └── App.js
└── package.json          # Dependencies
```

**Port**: 5173 (default)

## File Organization Principles

1. **Modularity** - Each recipe is independent
2. **Reusability** - Shared code in `shared/`
3. **Configuration** - Settings in `recipe.yaml` and `.env`
4. **Simplicity** - Minimal boilerplate in `server.py`

## Next Steps

- **[Server Factory Pattern](/agent-cookbook/why-the-cookbook/server-factory/)** - Learn the architecture
- **[Running the Recipes](/agent-cookbook/running-the-recipes/)** - Get your first agent running
