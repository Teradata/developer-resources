---
sidebar_position: 2
id: teradatasql
author: Krutik Pathak, Janeth Graziani
email: developer.relations@teradata.com
page_last_update: June 17, 2026
description: How to connect to Teradata using teradatasql Python database driver
keywords: [data warehouses, compute storage separation, teradata, cloud data platform, teradatasql, python applications, business intelligence, enterprise analytics]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Connect to Teradata using Python

## Overview

This how-to demonstrates how to connect to Teradata using [teradatasql](https://github.com/Teradata/python-driver) Python database driver for Teradata.

## Prerequisites

* 64-bit Python 3.8 or later.

* A Python virtual environment. The recommended workflow using system `venv` is shown below. If you have `uv` installed, an alternative workflow is provided.
```bash
# Recommended (system venv):
python3 -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
pip install teradatasql
 
# Alternative (uv):
uv venv .venv
uv pip install teradatasql
```

:::note
`teradatasql` package runs on Windows, macOS (10.14 Mojave or later) and Linux. For Linux, currently only Linux x86-64 architecture is supported.  
:::

* Access to a Teradata instance. Currently driver is supported for use with Teradata Database 16.10 and later releases.

<TrialDocsNote />

## Code to send a query

Create a file called `app.py` and paste in the following code. Fill in your host, username, and password before running:

```python
import teradatasql

DB_URL = ""                                 #Add Host
USER = ""                                   #Add Username
PASS = ""                                   #Add Password

try:
    # Establish a connection to the Teradata database
    with teradatasql.connect(host=DB_URL, user=USER, password=PASS) as con:
        # Create a cursor to execute queries
        with con.cursor() as cur:
            try:
                # Creating the table SampleEmployee
                cur.execute (f"CREATE SET TABLE {USER}.SampleEmployee \
                            (Associate_Id     INTEGER, \
                            Associate_Name   CHAR(25), \
                            Job_Title        VARCHAR(25)) \
                            UNIQUE PRIMARY INDEX (Associate_Id);")
                
                print(f"Sample table {USER}.SampleEmployee created.")

                # Adding sample data into SampleEmployee table
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (1, 'Richard Hendricks','CEO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (2, 'Jared Dunn','CFO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (3, 'Jian Yang','Intern')")

                print(f"Sample data added to table {USER}.SampleEmployee.")

                # Execute the SELECT query to get the results from SampleEmployee table 
                cur.execute(f"SELECT * FROM {USER}.SampleEmployee")

                # Extract data from the result set and print it
                for row in cur:
                    print(f"Associate ID: {row[0]}, Associate_Name: {row[1]}, Job_Title:{row[2]}")

                

            except teradatasql.DatabaseError as db_err:
                # Handle any errors that occur during query execution
                print("Error while executing the query:", db_err)

except teradatasql.DatabaseError as db_err:
    # Handle any errors that occur during the database connection
    print("Error while connecting to the Teradata database:", db_err)
```

Run the script from your terminal:
 
```bash
python app.py
```

## Summary

This how-to demonstrated how to connect to Teradata using `teradatasql` Python database driver. It described a sample Python code to send SQL queries to Teradata  using `teradatasql`.

## Further reading
* [teradatasql Python driver reference](https://github.com/Teradata/python-driver)