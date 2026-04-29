---
sidebar_position: 3
---

# Agent Servers and UI Architecture

Understand how the launcher, servers, and UI work together.

## Architecture Overview

```
┌────────────────────────────────────────────────────────┐
│                    Browser (Port 5173)                │
│              Agent Cookbook Web UI (React)            │
└────────────────────────────────────────────────────────┘
              ↓ GET /info, POST /invoke
        ┌─────────────────────────────────────┐
        │  Launcher (Python orchestrator)     │
        │  - Discovers recipes                │
        │  - Starts services                  │
        │  - Manages ports                    │
        └─────────────────────────────────────┘
              ↓ HTTP requests distributed
    ┌─────────┴──────────┬──────────┬──────────┐
    ↓                    ↓          ↓          ↓
┌─────────┐         ┌─────────┐ ┌─────────┐ ┌──────┐
│ Port    │         │ Port    │ │ Port    │ │ Port │
│ 8001    │         │ 8002    │ │ 8003    │ │ ...  │
│         │         │         │ │         │ │      │
│data-    │         │data-    │ │data-    │ │other │
│analyst  │         │analyst- │ │analyst- │ │recipes
│ (FastAPI)│         │multiturn│ │dbt      │ │      │
└─────────┘         └─────────┘ └─────────┘ └──────┘
    ↓ SQL queries       ↓              ↓
    └──────────────┬────┴──────────────┘
                   ↓
             ┌──────────────┐
             │   Teradata   │
             │   Database   │
             └──────────────┘
```

## The Launcher

The launcher orchestrates everything:

```python
# Start all recipes
python launcher.py all

# Or specific recipes
python launcher.py data-analyst data-analyst-multiturn

# With setup phase
python launcher.py all --setup
```

### Launcher Discovery Process

1. **Scans `recipes/` directory** - Finds all `recipe.yaml` files
2. **Reads metadata** - Port, LLM providers, dependencies
3. **Starts services** - One FastAPI server per port
4. **Launches UI** - React app connects to all services
5. **Displays URLs** - Shows where everything is running

### Example Output

```
[INFO] Starting Agent Cookbook...
[INFO] Found 1 recipe: data-analyst
[INFO] Starting data-analyst on port 8001...
[INFO] Server running on http://localhost:8001/info
[INFO] Starting UI on port 5173...
[INFO] UI ready: http://localhost:5173
[INFO] Press Ctrl+C to stop all services
```

## Agent Servers (FastAPI)

Each recipe runs as a FastAPI server with uniform endpoints.

### Server.py (Boilerplate)

```python
from server_factory import create_app
from agent import create_agent

app = create_app(recipe_path=__file__, agent_factory=create_agent)

if __name__ == "__main__":
    import uvicorn
    import os
    port = int(os.getenv("PORT", 8001))
    uvicorn.run(app, host="0.0.0.0", port=port)
```

The factory provides:
- ✓ `/info` - Metadata endpoint
- ✓ `/invoke` - Agent execution
- ✓ `/health` - Health check

### Recipe Configuration (recipe.yaml)

As Daniel explains:

> "We have a Python server. This is gonna be an individual script per recipe which you can see here in server.py from server factory."

```yaml
name: "Data Analyst"
description: "SQL query generation and execution"
family: "basic-agents"
port: 8001
llm_providers:
  - openai
  - anthropic
  - bedrock
  - litellm
```

## The Web UI (React)

The React app at `localhost:5173` provides:

### Features

1. **Recipe Selector** - Dropdown of available agents
2. **Chat Interface** - Send questions, receive responses
3. **LLM Provider Choice** - Switch between providers
4. **Response Display** - See results and metadata
5. **History** - Track queries and responses

### UI-to-Server Flow

```javascript
// User submits query in UI
1. UI sends: POST /invoke to http://localhost:8001/invoke
   Body: { query: "How many customers?", llm: "openai" }

2. Server (FastAPI) receives and calls agent

3. Agent:
   - Connects to Teradata
   - Generates SQL
   - Executes query
   - Returns results

4. Server returns: { status: "success", data: { result: "..." } }

5. UI displays results to user
```

## Ports and Services

| Service | Port | Purpose |
|---------|------|---------|
| data-analyst | 8001 | SQL generation |
| data-analyst-multiturn | 8002 | With memory |
| data-analyst-dbt | 8003 | Schema discovery |
| data-analyst-mcp | 8004 | MCP tools |
| governed | 8005 | With security |
| vector-search | 8006 | Semantic search |
| open-analytics | 8007 | Computation |
| UI | 5173 | Web interface |

## Request Flow Example

**User asks**: "How many customers in New York?"

```
1. UI (localhost:5173) → POST http://localhost:8001/invoke
   {
     "query": "How many customers in New York?",
     "llm": "openai"
   }

2. FastAPI Server
   - Calls create_agent()
   - Instantiates LLM client
   - Loads available tools

3. Agent Logic
   - Constructs prompt with schema
   - LLM generates: SELECT COUNT(*) FROM customers WHERE state='NY'
   - Validates SQL
   - Executes on Teradata

4. Response
   {
     "status": "success",
     "data": {
       "result": "1,325 customers",
       "sql_executed": "SELECT COUNT(*)",
       "tokens_used": 127
     }
   }

5. UI displays result to user
```

## Monitoring Services

```bash
# Check if server is running
curl http://localhost:8001/health

# Get server info
curl http://localhost:8001/info

# Invoke agent manually
curl -X POST http://localhost:8001/invoke \
  -H "Content-Type: application/json" \
  -d '{"query": "Show me tables"}'
```

## Next Steps

- **[Running Data Analyst](/agent-cookbook/running-the-recipes/data-analyst-recipe/)** - Hands-on walkthrough
- **[Expanding with Your Agents](/agent-cookbook/running-the-recipes/expanding-agents/)** - Build your own
