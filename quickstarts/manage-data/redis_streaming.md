---
sidebar_position: 15
ft:originId: redis-streaming
author: Daniel Herrera
email: developer.relations@teradata.com
ft:lastEdition: "2026-07-14"
ft:description: Stream event data from local Redis to Teradata
keywords: [redis, streaming, events, teradata, python]
---

# Stream Events from Redis to Teradata

This guide demonstrates how to ingest event data from a local Redis stream into Teradata using Python. 

## Architecture

```
Redis Stream (event producer)
       ↓
Redis (in-memory message broker)
       ↓
Python Consumer (reads & ingests)
       ↓
Teradata (event data storage)
```

## Prerequisites

- Teradata Vantage instance with network access
- Python 3.8+
- `uv` (Python package manager - install from [uv.astral.sh](https://docs.astral.sh/uv/getting-started/))
- Redis (Docker or local installation)
- Docker (for running Redis container)

## Step 1: Create the event data table in Teradata

Connect to your Teradata instance and create the events table:

```sql
CREATE TABLE event_data (
    event_id BIGINT NOT NULL,
    event_type VARCHAR(100),
    user_id BIGINT,
    event_timestamp TIMESTAMP,
    country VARCHAR(10),
    PRIMARY KEY (event_id)
);
```

This table will store all events streamed from Redis.

## Step 2: Start Redis locally

We'll use Docker for simplicity. Run the following command:

```bash
docker run -d --name redis-events -p 6379:6379 redis:7-alpine
```

This starts a Redis container on `localhost:6379`.

If you prefer to use an existing Redis installation, ensure it's running and accessible on port 6379.

Verify Redis is running:

```bash
docker exec redis-events redis-cli ping 
```

You should see `PONG` in response.

## Step 3: Set up Python environment with uv

### Create pyproject.toml

Create a `pyproject.toml` file in your project directory:

```toml
[project]
name = "redis-teradata-streaming"
version = "0.1.0"
description = "Stream event data from Redis to Teradata"
requires-python = ">=3.8"
dependencies = [
    "redis==5.0.1",
    "teradatasql==20.0.0.61",
    "python-dotenv==1.0.0",
]
```

### Sync dependencies

Install all dependencies and create a lockfile:

```bash
uv sync
```

This creates `uv.lock` which ensures reproducible environments across machines.


## Step 4: Create the event producer script

Create a file named `producer.py`:

```python
import redis
import time
from datetime import datetime

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Event stream name
STREAM_KEY = "events:stream"

# Sample events to simulate
events = [
    {"event_type": "user_signup", "user_id": 101, "country": "US"},
    {"event_type": "user_login", "user_id": 102, "country": "CA"},
    {"event_type": "purchase", "user_id": 103, "country": "GB"},
    {"event_type": "user_logout", "user_id": 101, "country": "US"},
    {"event_type": "purchase", "user_id": 104, "country": "DE"},
]

print("Redis Event Producer")
print("=" * 50)
print(f"Publishing events to stream: {STREAM_KEY}")
print()

# Publish events
for idx, event in enumerate(events, 1):
    event_data = {
        "event_id": idx,
        "event_type": event["event_type"],
        "user_id": event["user_id"],
        "event_timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "country": event["country"],
    }
    
    # Add to Redis stream
    stream_id = r.xadd(STREAM_KEY, event_data)
    
    print(f"✓ Event {idx}: {event['event_type']} (user={event['user_id']}, id={stream_id})")
    time.sleep(0.5)  # Small delay between events

print()
print(f"✓ {len(events)} events published to Redis stream")
```

## Step 5: Create the event consumer script

Create a file named `consumer.py`:

```python
import redis
import teradatasql
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Redis connection
redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = int(os.getenv("REDIS_PORT", 6379))

# Teradata connection
teradata_host = os.getenv("TERADATA_HOST")
teradata_user = os.getenv("TERADATA_USER")
teradata_password = os.getenv("TERADATA_PASSWORD")

if not all([teradata_host, teradata_user, teradata_password]):
    raise ValueError("Missing TERADATA_HOST, TERADATA_USER, or TERADATA_PASSWORD environment variables")

# Connect to Redis
try:
    r = redis.Redis(host=redis_host, port=redis_port, decode_responses=True)
    r.ping()
    print(f"✓ Connected to Redis at {redis_host}:{redis_port}")
except Exception as e:
    print(f"✗ Failed to connect to Redis at {redis_host}:{redis_port}")
    print(f"  Error: {e}")
    exit(1)

# Connect to Teradata
try:
    conn = teradatasql.connect(
        host=teradata_host,
        user=teradata_user,
        password=teradata_password
    )
    print(f"✓ Connected to Teradata at {teradata_host}")
except Exception as e:
    print(f"✗ Failed to connect to Teradata")
    print(f"  Error: {e}")
    exit(1)

cursor = conn.cursor()

STREAM_KEY = "events:stream"
CONSUMER_GROUP = "teradata-consumer"
CONSUMER_NAME = "consumer-1"

print()
print("Redis Event Consumer")
print("=" * 50)
print(f"Listening on stream: {STREAM_KEY}")
print()

# Create consumer group if it doesn't exist
try:
    r.xgroup_create(STREAM_KEY, CONSUMER_GROUP, id="0", mkstream=True)
    print("✓ Consumer group created")
except redis.ResponseError as e:
    if "already exists" in str(e):
        print("✓ Consumer group already exists")
    else:
        raise

print()

# Read events from the stream
events_processed = 0

try:
    while True:
        # Read from consumer group
        messages = r.xreadgroup(
            groupname=CONSUMER_GROUP,
            consumername=CONSUMER_NAME,
            streams={STREAM_KEY: ">"},
            count=10,
            block=1000  # Block for 1 second if no messages
        )
        
        if not messages:
            print("Waiting for events...")
            continue
        
        for stream_key, message_list in messages:
            for message_id, message_data in message_list:
                try:
                    # Extract event data
                    event_id = int(message_data.get("event_id", 0))
                    event_type = message_data.get("event_type", "unknown")
                    user_id = int(message_data.get("user_id", 0))
                    event_timestamp = message_data.get("event_timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
                    country = message_data.get("country", "Unknown")
                    
                    # Insert into Teradata using parameterized query
                    insert_query = """
                    INSERT INTO event_data (
                        event_id, event_type, user_id, event_timestamp, country
                    ) VALUES (
                        ?, ?, ?, ?, ?
                    );
                    """
                    
                    cursor.execute(insert_query, (event_id, event_type, user_id, event_timestamp, country))
                    conn.commit()
                    
                    # Acknowledge the message only after successful commit
                    r.xack(STREAM_KEY, CONSUMER_GROUP, message_id)
                    
                    events_processed += 1
                    print(f"✓ Event {events_processed}: {event_type} (user={user_id}) → Teradata")
                    
                except Exception as e:
                    conn.rollback()
                    print(f"✗ Error processing event: {e}")
                    
except KeyboardInterrupt:
    print()
    print("✓ Consumer stopped")
finally:
    cursor.close()
    conn.close()
    r.close()
    print(f"✓ Processed {events_processed} events total")
```

## Step 6: Set up environment variables

Create a `.env` file in the same directory as `consumer.py`:

```
TERADATA_HOST=<your-host>
TERADATA_USER=<your-user>
TERADATA_PASSWORD=<your-password>
REDIS_HOST=localhost
REDIS_PORT=6379
```

Replace the placeholders with your actual Teradata credentials.

## Step 7: Run the streaming pipeline

Open two terminal windows:

**Terminal 1 — Start the consumer** (runs continuously, waiting for events):

```bash
uv run python consumer.py
```

The consumer will wait for events, showing:
```
✓ Connected to Redis at localhost:6379
✓ Connected to Teradata at <your-host>

Redis Event Consumer
==================================================
Listening on stream: events:stream

✓ Consumer group created

Waiting for events...
```

**Terminal 2 — Run the producer** (publishes events once):

```bash
uv run python producer.py
```

You'll see events appear in Terminal 1 as they're ingested into Teradata:

```
✓ Event 1: user_signup (user=101) → Teradata
✓ Event 2: user_login (user=102) → Teradata
✓ Event 3: purchase (user=103) → Teradata
✓ Event 4: user_logout (user=101) → Teradata
✓ Event 5: purchase (user=104) → Teradata
✓ Processed 5 events total
```

To stop the consumer, press `Ctrl+C` in Terminal 1.

## Step 8: Verify the data in Teradata

Query the table to confirm all events were ingested:

```sql
SELECT COUNT(*) as total_events FROM event_data;
```

Expected output: `5`

See event details:

```sql
SELECT event_id, event_type, user_id, country
FROM event_data
ORDER BY event_id;
```

Expected output:
```
event_id | event_type  | user_id | country
---------|-------------|---------|--------
1        | user_signup | 101     | US
2        | user_login  | 102     | CA
3        | purchase    | 103     | GB
4        | user_logout | 101     | US
5        | purchase    | 104     | DE
```

## Step 9: Clean up

To stop and remove the Redis container:

```bash
docker stop redis-events
docker rm redis-events
```

To drop the Teradata table:

```sql
DROP TABLE event_data;
```

## Extending the guide

### Run the producer in a loop

To continuously generate events, modify `producer.py`:

```python
while True:
    # ... publish events ...
    time.sleep(5)  # Republish every 5 seconds
```

### Add multiple consumers

Start multiple consumer instances with different `CONSUMER_NAME` values to scale horizontally:

```bash
python -c "import consumer; consumer.CONSUMER_NAME = 'consumer-2'" &
python -c "import consumer; consumer.CONSUMER_NAME = 'consumer-3'" &
```

### Filter events by type

In the consumer, add filtering:

```python
if event_type == "purchase":
    # Only process purchase events
    cursor.execute(insert_query, (event_id, event_type, user_id, event_timestamp, country))
    conn.commit()
```

### Monitor Redis stream

Check stream size and lag:

```bash
redis-cli XLEN events:stream
redis-cli XINFO STREAM events:stream
redis-cli XINFO GROUPS events:stream
```

## Troubleshooting

**Redis connection refused:**
```
redis.exceptions.ConnectionError: Error -2 while writing to socket.
```
→ Ensure Redis is running. Check with `redis-cli ping`

**Teradata connection failed:**
```
teradatasql.OperationalError: [Error 8017] [SQLState HY000] Connection to database failed
```
→ Verify credentials and network access to Teradata instance

**Consumer group error:**
```
redis.exceptions.ResponseError: BUSYGROUP Consumer Group name already exists
```
→ The consumer group already exists from a previous run. You can either:
- Use a different `CONSUMER_GROUP` name
- Reset with: `redis-cli XGROUP DESTROY events:stream teradata-consumer`

**Missing environment variables:**
```
ValueError: Missing TERADATA_HOST, TERADATA_USER, or TERADATA_PASSWORD environment variables
```
→ Ensure your `.env` file exists in the same directory as `consumer.py` and contains all required variables.

## Summary

We now have a working local event streaming pipeline:
- **Redis** manages event queues with built-in consumer groups
- **Producer** simulates event sources (easily replaced with real data)
- **Consumer** durably ingests events into Teradata with transaction management
- **Teradata** stores the event history for analytics

This architecture scales from development to production by simply pointing to managed Redis and Teradata services.
