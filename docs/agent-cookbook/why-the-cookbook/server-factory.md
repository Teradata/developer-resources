---
sidebar_position: 3
---

# Server Factory Pattern

The server factory is the hidden gem that makes Agent Cookbook production-ready.

## The Problem

Building a production API for each agent would require:

- Middleware setup (authentication, logging, error handling)
- Endpoint boilerplate (info, invoke, health checks)
- Configuration loading (environment variables, secrets)
- Repeatability (copy-paste across all recipes)

This leads to **code duplication** and **maintenance burden**.

## The Solution: Server Factory

As Daniel explains:

> "The hidden parts of agentic development was the server configuration. That is the one that you can derive the most value from our recipes."

The server factory is a Python module that generates FastAPI apps with all the infrastructure:

```python
# In server.py (just 3 lines!)
from server_factory import create_app
from agent import create_agent

app = create_app(recipe_path=__file__, agent_factory=create_agent)
```

That's it. Everything else is handled.

## What the Factory Provides

### 1. **Uniform Endpoints**

Every recipe exposes the same API:

```
GET  /info
     Response: { "name", "description", "llm_providers", "port" }

POST /invoke
     Body: { "query": "Your question", "llm": "openai", ... }
     Response: { "result", "reasoning", "tokens_used" }

GET  /health
     Response: { "status": "healthy" }
```

### 2. **Configuration Loading**

Automatically reads from:
- `recipe.yaml` - Recipe metadata
- `.env` - LLM keys, Teradata credentials
- Environment variables

### 3. **Middleware Stack**

- **Logging**: All requests logged with structured output
- **Error Handling**: Graceful error responses
- **Authentication**: Optional API key validation
- **CORS**: Cross-origin requests allowed for UI

### 4. **Standardized Response Format**

All responses follow the same structure:

```json
{
  "status": "success",
  "data": {
    "result": "Agent response here",
    "metadata": {
      "llm_model": "gpt-3.5-turbo",
      "tokens_used": 127,
      "execution_time_ms": 340
    }
  }
}
```

## Agent Integration

Your agent defines the interface:

```python
def create_agent(llm, tools, config):
    """
    Factory function that creates your agent.
    
    Args:
        llm: LLM client (automatically instantiated)
        tools: Tools available to the agent
        config: Configuration from recipe.yaml + .env
    
    Returns:
        Your agent instance with a __call__ method
    """
    return MyAgent(llm=llm, tools=tools, ...)
```

The factory:
1. Introspects the agent's signature
2. Builds matching FastAPI endpoints
3. Calls the agent with the right parameters
4. Returns standardized responses

## Benefits

| Aspect | Traditional | Factory |
|--------|-----------|---------|
| **Lines of code** | 200-500 | ~50 |
| **Setup time** | 2-3 hours | 15 minutes |
| **Debugging** | Per-recipe | Centralized |
| **API consistency** | Manual | Automatic |
| **Adding middleware** | Edit all recipes | Edit factory once |

## Architecture Diagram

```
┌─────────────────────────────────────┐
│          Browser / UI               │
│      (localhost:5173)               │
└─────────────────────────────────────┘
    ↓ POST /invoke
┌─────────────────────────────────────┐
│      FastAPI Server (Port 8001)     │
│  ┌─────────────────────────────────┐│
│  │   Server Factory (created)      ││
│  │  - Routing                       ││
│  │  - Middleware                    ││
│  │  - Error Handling                ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │   Your Agent (recipe-specific)  ││
│  │  - LLM interaction               ││
│  │  - Tool execution                ││
│  │  - Business logic                ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
    ↓ Query
┌─────────────────────────────────────┐
│      Teradata database              │
│      (via connection pool)          │
└─────────────────────────────────────┘
```

## Next Steps

- **[LLM Providers](/agent-cookbook/why-the-cookbook/llm-providers/)** - Configure your language model
- **[Running the Recipes](/agent-cookbook/running-the-recipes/)** - See it in action
