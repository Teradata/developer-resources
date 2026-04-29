---
sidebar_position: 3
---

# FAQ

Frequently asked questions about Agent Cookbook.

## Getting Started

### Q: What do I need to get started?

A: Just three things:
1. Python 3.10+ (check with `python --version`)
2. An LLM API key (OpenAI, Anthropic, AWS Bedrock, or LiteLLM)
3. A Teradata SQL Engine connection (free tier available)

See [Running the Recipes](/agent-cookbook/running-the-recipes/) for setup.

### Q: Can I use Agent Cookbook without Teradata?

A: Currently, Agent Cookbook is designed for Teradata. However, the architecture could be adapted for other databases. Check the [GitHub issues](https://github.com/Teradata/teradata_agent_cookbook/issues) for community efforts.

### Q: How much does this cost?

A: Agent Cookbook is **free and open source**. LLM API costs depend on your provider:
- **OpenAI**: ~$0.002/1k tokens (GPT-3.5) or more for GPT-4
- **Anthropic**: Similar pricing
- **AWS Bedrock**: Pay-per-token model
- **LiteLLM**: Lowest cost (proxies multiple providers)

Test with LiteLLM first for the lowest cost.

## LLM Providers

### Q: Which LLM provider should I use?

A: **Start with LiteLLM** or **OpenAI** (GPT-3.5):
- **LiteLLM**: Lowest cost, good quality, proxy to multiple models
- **OpenAI**: GPT-4 is excellent but pricier
- **Anthropic**: Claude 3 has good reasoning
- **AWS Bedrock**: Good if you're already on AWS

See [Why the Cookbook: LLM Providers](/agent-cookbook/why-the-cookbook/llm-providers/) for configuration.

### Q: Can I switch LLM providers mid-conversation?

A: **No** - agents run with one LLM per session. But you can easily select a different provider for the next query through the UI.

### Q: My LLM responses are inaccurate. How do I improve them?

A: Try:
1. **Better prompts** - Edit the system prompt in `agent.py`
2. **More context** - Include more schema/table info in tool descriptions
3. **Better LLM** - Upgrade to GPT-4 or Claude 3
4. **In-context examples** - Add few-shot examples to prompts
5. **Reduce hallucination** - Add stricter constraints on what the agent can query

See [Why the Cookbook: Server Factory](/agent-cookbook/why-the-cookbook/server-factory/) for details.

### Q: LiteLLM says "Model not found". How do I fix it?

A: Verify your model name matches the provider:
```python
# OpenAI models
gpt-3.5-turbo
gpt-4
gpt-4-turbo

# Anthropic models
claude-3-opus
claude-3-sonnet
claude-3-haiku

# AWS Bedrock models (use arn or model ID)
anthropic.claude-3-opus-20240229-v1:0
```

Update your `.env` with the correct model name.

## Running Recipes

### Q: How do I run just one recipe instead of all?

A: Use the launcher with the recipe name:

```bash
python launcher.py data-analyst
```

See [Running the Recipes](/agent-cookbook/running-the-recipes/) for options.

### Q: The UI won't connect to my recipe. What's wrong?

A: Check:
1. Recipe server is running (should see `Uvicorn running on 0.0.0.0:8001`)
2. Port isn't blocked by firewall
3. `.env` file has valid Teradata credentials
4. No typos in `recipe.yaml` port number

Debug with:
```bash
curl http://localhost:8001/info
# Should return recipe metadata
```

### Q: Can I run recipes on different machines?

A: It's possible but requires:
- Network connectivity between UI machine and recipe servers
- Firewall rules allowing traffic on ports 8001-8007
- Shared `.env` file or per-machine config

For production, see the [Running the Recipes](../running-the-recipes/) guide for advanced deployments (coming soon).

### Q: How do I make a recipe call another recipe?

A: Add an HTTP tool that calls another recipe's endpoint:

```python
import httpx

class RecipeChainTool:
    async def call_other_recipe(self, query):
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "http://localhost:8002/invoke",
                json={"query": query}
            )
            return response.json()
```

See [Expanding with Your Agents](/agent-cookbook/running-the-recipes/expanding-agents/) for more details.

## Architecture & Concepts

### Q: What's the difference between data-analyst and data-analyst-multiturn?

A: **data-analyst**: Handles each query independently
- Pro: Simpler, lower latency
- Con: Can't reference previous queries

**data-analyst-multiturn**: Maintains conversation history
- Pro: "Follow-up to your earlier query..." works
- Con: Higher latency, more expensive

### Q: What's the server factory pattern?

A: A pattern where `server_factory.py` does all the repetitive FastAPI setup (authentication, error handling, logging) and your recipe just defines an agent. This minimizes boilerplate.

See [Why the Cookbook: Server Factory Pattern](/agent-cookbook/why-the-cookbook/server-factory/) for details.

### Q: How does the launcher discover recipes?

A: The launcher:
1. Scans `recipes/` directory
2. Finds all `recipe.yaml` files
3. Reads port, LLM providers, and other metadata
4. Starts each recipe server with environment variables

New recipes are automatically discovered - no registration needed!

## Advanced Topics

### Q: Can I add authentication to my recipe?

A: Yes! The server factory supports:
- API key validation
- JWT tokens
- OAuth2

See `shared/auth.py` for templates.

### Q: How do I add logging/monitoring?

A: All servers use Python `logging`. For production, integrate:
- **DataDog**: Python datadog agent
- **New Relic**: APM monitoring
- **ELK Stack**: Elasticsearch, Logstash, Kibana

Logs are printed to console and can be forwarded.

### Q: Can I run recipes in a container?

A: Yes! Each recipe has a `Dockerfile`. Start with Docker:

```bash
docker build -t my-recipe recipes/basic_agents/data_analyst
docker run -p 8001:8001 --env-file .env my-recipe
```

### Q: How do I deploy to Kubernetes?

A: A: Create Kubernetes manifests for each recipe service. See examples in `kubernetes/` folder (if available).

### Q: Can I use Vector Databases instead of SQL?

A: **vector-search** recipe does exactly that! It:
- Embeds documents or data
- Stores in vector index
- Retrieves similar items
- Passes to agent

More advanced recipes (including vector-search) are coming soon.

## Troubleshooting

### Q: "ModuleNotFoundError: No module named 'shared'"

A: Set `PYTHONPATH` before running:
```bash
export PYTHONPATH="${PYTHONPATH}:$(pwd)"
python launcher.py data-analyst
```

Or run from project root.

### Q: My agent generates invalid SQL. How do I fix it?

A: 1. Check your LLM model - GPT-3.5 struggles with complex SQL
2. Add SQL examples to the system prompt
3. Use a syntax validator tool before execution
4. Simplify the schema - fewer tables = better SQL

Review the [Why the Cookbook](../why-the-cookbook/) section for agent architecture details.

### Q: I'm running out of memory. What do I do?

A: Run fewer recipes:
```bash
python launcher.py data-analyst governed
# Instead of: python launcher.py all
```

Or increase system memory/swap.

### Q: The UI is slow. Why?

A: Possible causes:
1. **LLM latency** - OpenAI/Anthropic may be busy
2. **SQL query** - Complex database query taking time
3. **Network** - Slow connection to Teradata

Check recipe logs to identify bottleneck.

### Q: How do I reset everything and start fresh?

A: ```bash
# Warning: This deletes all data!
rm -rf venv/
rm -f .env
python launcher.py all --setup
```

## Community & Support

### Q: Where can I get help?

A: - **GitHub Issues**: https://github.com/Teradata/teradata_agent_cookbook
- **Documentation**: See [Getting Started](../getting-started/)
- **Community**: Check GitHub Discussions

### Q: How do I contribute?

A: See CONTRIBUTING.md in the GitHub repo.

### Q: Is there a roadmap?

A: Yes! Check [What's New](/whats-new/release-notes/) for planned features and recent releases.

---

**Still have questions?** [Open a GitHub issue](https://github.com/Teradata/teradata_agent_cookbook/issues/new) or ask in Discussions!
