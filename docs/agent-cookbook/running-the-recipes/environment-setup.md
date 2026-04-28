---
sidebar_position: 2
---

# Environment Setup

Configure your environment to run Agent Cookbook recipes.

## Prerequisites

- **Python 3.10+** - Check with `python --version`
- **Teradata instance** - SQL Engine or VantageCloud Lake
- **LLM API key** - OpenAI, Anthropic, AWS Bedrock, or LiteLLM
- **Git** - For cloning the repository

## Step 1: Clone and Explore

```bash
git clone https://github.com/Teradata/teradata_agent_cookbook.git
cd teradata_agent_cookbook

# Explore the structure
ls recipes/          # See available recipes
ls launcher/         # Launcher utilities
ls ui/               # Web interface
```

## Step 2: Create Environment File

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Teradata Connection
TERADATA_HOST=your-instance.teradata.com
TERADATA_USER=your_username
TERADATA_PASSWORD=your_password
TERADATA_DATABASE=your_database

# LLM Provider (choose one)
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-ant-...
# OR
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

# Optional: UI Configuration
UI_PORT=5173
RECIPE_BASE_PORT=8001
```

## Step 3: Install Dependencies

### Option A: Using uv (Recommended)

```bash
pip install uv
uv sync
```

### Option B: Using pip

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Step 4: Verify Teradata Connection

```bash
python -c "from shared.connection import get_connection; conn = get_connection(); print('Connected!')"
```

**Error? Check**:
- Credentials in `.env`
- Teradata instance is running
- Network connectivity

## Step 5: Verify LLM Setup

```bash
python -c "from shared.llm_providers import get_llm_client; client = get_llm_client('openai'); print('LLM configured!')"
```

**Error? Check**:
- API key is valid
- Model name is correct
- Provider is accessible

## Step 6: Run Launcher Setup

```bash
python launcher.py all --setup
```

This:
1. ✅ Creates sample data (teddy_retailers)
2. ✅ Tests all connections
3. ✅ Validates recipe configurations

## Troubleshooting

### "AttributeError: module has no attribute..."
- Restart Python interpreter
- Reinstall dependencies: `pip install --upgrade -r requirements.txt`

### "Connection timeout"
- Verify Teradata hostname
- Check firewall rules
- Test connectivity: `nc -zv host 1025`

### "API key not found"
- Ensure `.env` file exists
- Check file is in project root
- Reload shell: `source ~/.bashrc` or restart terminal

### "ModuleNotFoundError"
- Activate virtual environment
- Reinstall: `pip install -r requirements.txt`

## Next Steps

- **[Agent Servers and UI](/agent-cookbook/running-the-recipes/agent-servers-ui/)** - Understanding the architecture
- **[Running Data Analyst](/agent-cookbook/running-the-recipes/data-analyst-recipe/)** - Your first agent
