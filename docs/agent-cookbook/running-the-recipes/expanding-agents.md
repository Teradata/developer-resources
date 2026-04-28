---
sidebar_position: 5
---

# Expanding with Your Own Agents

Build on data-analyst to create your custom agents.

## Starting with Data Analyst

The data-analyst recipe is intentionally simple, providing:

- ✅ Proven folder structure
- ✅ Working setup.sql and dependencies
- ✅ Teradata connection pooling
- ✅ LLM client configuration
- ✅ FastAPI server boilerplate

**Best practice**: Copy and customize rather than build from scratch.

## Quick Copy-and-Customize

### Step 1: Copy the Recipe

```bash
cp -r recipes/basic_agents/data_analyst recipes/basic_agents/my_custom_agent
cd recipes/basic_agents/my_custom_agent
```

### Step 2: Update Metadata

Edit `recipe.yaml`:

```yaml
name: "My Custom Agent"
description: "My unique agent implementation"
family: "basic-agents"
port: 8008                    # Pick a unique port (8001-8007 taken)
llm_providers: ["openai"]
```

### Step 3: Add Your Logic

Edit `agent.py`:

```python
def create_agent(llm, tools, config):
    # Import your custom tools
    from my_tools import CustomTool1, CustomTool2
    
    # Create tools
    tools = [
        CustomTool1(config),
        CustomTool2(config),
    ]
    
    # Return your agent
    class MyAgent:
        def __init__(self, llm, tools):
            self.llm = llm
            self.tools = tools
        
        def __call__(self, query):
            # Your agent logic
            return "Result"
    
    return MyAgent(llm=llm, tools=tools)
```

### Step 4: Add Dependencies

Edit `pyproject.toml`:

```toml
dependencies = [
    "fastapi>=0.100.0",
    "uvicorn[standard]>=0.24.0",
    # Your custom libraries:
    "pandas",
    "numpy",
    "requests",
]
```

### Step 5: Test Locally

```bash
# Server starts automatically on port 8008
python launcher.py my_custom_agent

# In another terminal
curl http://localhost:8008/info
curl -X POST http://localhost:8008/invoke \
  -H "Content-Type: application/json" \
  -d '{"query": "test query", "llm": "openai"}'
```

### Step 6: See in UI

```bash
python launcher.py all
```

Your new agent appears in the recipe dropdown!

## Custom Tool Example

Build a tool that your agent can use:

```python
# In agent.py
class WebSearchTool:
    def __init__(self, config):
        self.api_key = config.get('SEARCH_API_KEY')
    
    def search(self, query):
        """Search the web and return results"""
        import requests
        results = requests.get(
            f"https://api.search.com/search?q={query}",
            headers={"Authorization": f"Bearer {self.api_key}"}
        )
        return results.json()['results']
    
    def __call__(self, query):
        return self.search(query)
```

Then use in agent:

```python
def create_agent(llm, tools, config):
    search_tool = WebSearchTool(config)
    
    return MyAgent(llm=llm, tools=[search_tool])
```

## Common Customizations

### 1. Add Database Tools

```python
def create_agent(llm, tools, config):
    from shared.connection import get_connection
    
    conn = get_connection(config)
    
    tools = [
        QueryTool(conn),
        SchemaTool(conn),
    ]
    
    return Agent(llm=llm, tools=tools)
```

### 2. Add External APIs

```python
def create_agent(llm, tools, config):
    tools = [
        WeatherAPI(config),
        NewsAPI(config),
        TranslationAPI(config),
    ]
    
    return Agent(llm=llm, tools=tools)
```

### 3. Add Memory/Context

```python
def create_agent(llm, tools, config):
    memory = ConversationMemory()
    
    return Agent(
        llm=llm,
        tools=tools,
        memory=memory  # Enables multi-turn
    )
```

## Publishing Your Recipe

Ready to share? Contribute back to the cookbook:

1. **Fork on GitHub** - https://github.com/Teradata/teradata_agent_cookbook
2. **Add your recipe** to `recipes/` with proper structure
3. **Create PR** with documentation
4. **Get reviewed** by maintainers
5. **Merged** into upstream for others to use

## Next Steps

- **[FAQ](/agent-cookbook/faq/)** - Troubleshooting and advanced topics
- **[GitHub Repository](https://github.com/Teradata/teradata_agent_cookbook)** - See all recipes
- **[Server Factory Pattern](/agent-cookbook/why-the-cookbook/server-factory/)** - Deep dive on architecture
