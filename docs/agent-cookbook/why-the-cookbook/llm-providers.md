---
sidebar_position: 4
---

# LLM Providers

Agent Cookbook supports multiple language models. Choose the one that fits your needs.

## Supported Providers

### OpenAI
- **Models**: GPT-3.5 Turbo, GPT-4, GPT-4 Turbo
- **Cost**: Medium ($0.002-$0.03 per 1K tokens)
- **Speed**: Fast
- **Best for**: Production use, high accuracy

**Setup**:
```bash
export OPENAI_API_KEY="sk-..."
```

### Anthropic
- **Models**: Claude 3 Opus, Sonnet, Haiku
- **Cost**: Medium ($0.003-$0.02 per 1K tokens)
- **Speed**: Medium
- **Best for**: Reasoning-heavy tasks

**Setup**:
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

### AWS Bedrock
- **Models**: Claude, Llama, Mistral
- **Cost**: Low ($0.0008-$0.004 per 1K tokens)
- **Speed**: Medium
- **Best for**: AWS deployments, cost-sensitive

**Setup**:
```bash
export AWS_REGION="us-east-1"
export AWS_ACCESS_KEY_ID="..."
export AWS_SECRET_ACCESS_KEY="..."
```

### LiteLLM (Recommended for Learning)
- **Models**: All of the above via proxy
- **Cost**: Lowest (direct provider pricing)
- **Speed**: Depends on underlying model
- **Best for**: Testing, cost optimization, model comparison

**Setup**:
```bash
export LITELLM_MASTER_KEY="your-key"
# Or use provider keys (OpenAI, Anthropic, etc.)
export OPENAI_API_KEY="sk-..."
```

## Comparison Matrix

| Feature | OpenAI | Anthropic | Bedrock | LiteLLM |
|---------|--------|-----------|---------|---------|
| Easy to start | ✅ | ✅ | Complex | ✅ |
| Multiple models | Limited | Limited | Full | Full |
| Cost control | Medium | Medium | High | Best |
| Self-hosted | ❌ | ❌ | ❌ | ✅ |
| Fallback support | ❌ | ❌ | ❌ | ✅ |

## Switching Providers

Recipes support switching providers via recipe.yaml:

```yaml
llm_providers:
  - openai
  - anthropic
  - bedrock
  - litellm
```

At runtime, specify which to use:

```bash
# Use OpenAI
python launcher.py data-analyst --llm openai

# Use Anthropic
python launcher.py data-analyst --llm anthropic

# Use LiteLLM (proxy to your choice)
python launcher.py data-analyst --llm litellm
```

## Best Practices

1. **Start with LiteLLM** - Lowest barrier to entry
2. **Test with GPT-3.5** - Fast and cheap
3. **Use Claude for reasoning** - Better at complex logic
4. **Switch to GPT-4 for accuracy** - When results matter
5. **Consider Bedrock** - If already on AWS

## Configuration

All providers use environment variables. Create a `.env` file:

```env
# OpenAI
OPENAI_API_KEY=sk-...

# Anthropic  
ANTHROPIC_API_KEY=sk-ant-...

# AWS Bedrock
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

Load via launcher:
```bash
source .env
python launcher.py all
```

## Troubleshooting

**"Model not found" error**
- Verify model name matches provider (e.g., `gpt-3.5-turbo` not `gpt-35`)
- Check API key is valid
- Ensure model is available in your region

**High costs**
- Switch to LiteLLM or Bedrock
- Use GPT-3.5 instead of GPT-4
- Cache prompts when possible

**Slow responses**
- Check provider status pages
- Try a different provider
- Reduce prompt size

## Next Steps

- **[Running the Recipes](/agent-cookbook/running-the-recipes/)** - Try your first agent
- **[FAQ](/agent-cookbook/faq/)** - More provider questions
