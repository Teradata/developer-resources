---
sidebar_position: 4
---

# Running the Data Analyst Recipe

Your first hands-on walkthrough with the data-analyst agent.

## Starting the Recipe

```bash
# Option 1: Just data-analyst
python launcher.py data-analyst

# Option 2: All recipes
python launcher.py all

# Option 3: With setup (first time)
python launcher.py data-analyst --setup
```

## Expected Output

```
[INFO] Starting data-analyst on port 8001...
[INFO] Server running on http://localhost:8001
[INFO] Ready to receive requests
```

## Testing via Command Line

### Test 1: Get Server Info

```bash
curl http://localhost:8001/info
```

**Response**:
```json
{
  "name": "Data Analyst",
  "description": "SQL query generation and execution",
  "port": 8001,
  "llm_providers": ["openai", "anthropic", "bedrock", "litellm"]
}
```

### Test 2: List Available Tables

```bash
curl -X POST http://localhost:8001/invoke \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What tables are available?",
    "llm": "openai"
  }'
```

**Response**:
```json
{
  "status": "success",
  "data": {
    "result": "Available tables: customers, orders, products, ...",
    "metadata": {
      "llm_model": "gpt-3.5-turbo",
      "tokens_used": 45
    }
  }
}
```

### Test 3: Query Customer Data

```bash
curl -X POST http://localhost:8001/invoke \
  -H "Content-Type: application/json" \
  -d '{
    "query": "How many customers do we have?",
    "llm": "openai"
  }'
```

**Response**:
```json
{
  "status": "success",
  "data": {
    "result": "We have 1,000 customers.",
    "sql_executed": "SELECT COUNT(*) FROM customers;",
    "tokens_used": 120
  }
}
```

## Testing via Web UI

1. **Open browser**: `http://localhost:5173`
2. **Select recipe**: Choose "data-analyst" from dropdown
3. **Select LLM**: Choose "OpenAI" or "LiteLLM"
4. **Type query**: "What's our top product by revenue?"
5. **Send**: Click send or press Enter
6. **Review**: See results and SQL executed

## Example Queries to Try

### Basic Queries
- "How many orders do we have?"
- "List all product categories"
- "What's the oldest order?"

### Analysis Queries
- "What's our revenue this month?"
- "Who is our top customer?"
- "Which products need restocking?"

### Complex Queries
- "Compare revenue by region"
- "Find customers with more than 10 orders"
- "Show month-over-month sales growth"

## Understanding the Data

The default dataset includes:

- **customers** - Customer information (ID, name, location)
- **orders** - Order records (date, customer_id, total)
- **products** - Product catalog (name, category, price)
- **order_items** - Order line items (order_id, product_id, quantity)

## How It Works Behind the Scenes

As explained in the video:

> "We have a very simple shorthand here with the start agents. This one displays what are the agents that are available. We can choose the number 1 and number 5, which is the UI...for example, I can ask here what tables are available to me in this system, and this agent will reply me with what tables are available."

**The flow**:

1. **User question** → "How many customers?"
2. **LLM sees schema** → Knows tables and columns
3. **LLM generates SQL** → `SELECT COUNT(*) FROM customers`
4. **SQL validation** → Check syntax
5. **Execute** → Query runs on Teradata
6. **Format response** → "We have 1,000 customers"

## Agent Implementation

The agent logic lives in `recipes/basic_agents/data_analyst/agent.py`:

```python
def create_agent(llm, tools, config):
    """
    Simple SQL-based agent that:
    1. Sees the schema
    2. Generates SQL
    3. Executes queries
    4. Formats results
    """
    schema = load_schema(config['database'])
    
    tools = [
        QueryExecutor(schema),
        SchemaInspector(schema),
    ]
    
    return SQLAgent(llm=llm, tools=tools, schema=schema)
```

**Note**: This is intentionally simple to show agentic development from first principles.

## Troubleshooting

### ERROR: "Connection refused"
- Is the server running? Check output for port 8001
- Try: `curl http://localhost:8001/health`

### ERROR: "Invalid query"
- Teradata connection issue
- Check `.env` credentials
- Verify database access

### LLM returns empty response
- Check API key in `.env`
- Verify internet connectivity
- Try a simpler query first

### Slow responses
- Network latency - normal for first query
- Try a provider switch (use LiteLLM)
- Check Teradata performance

## Performance Tips

1. **Cache schema** - Agent caches table info after first load
2. **Short queries** - Faster LLM processing
3. **Use GPT-3.5** - Cheaper than GPT-4, still effective

## Next Steps

- **[Expanding with Your Agents](/agent-cookbook/running-the-recipes/expanding-agents/)** - Build on this foundation
- **[FAQ](/agent-cookbook/faq/)** - Common questions
- **[GitHub Repository](https://github.com/Teradata/teradata_agent_cookbook)** - Explore the code
