---
sidebar_position: 4
id: sto
title: Run scripts on Teradata
author: Adam Tworkiewicz, Vidhan Bhonsle
email: developer.relations@teradata.com
ft:lastEdition: "2026-07-13"
description: Run Applications on Teradata - use Script Table Operator to run applications on your data without data movement.
keywords: [data warehouses, compute storage separation, teradata, script table operator, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Run scripts on Teradata

## Overview

Sometimes, you need to apply complex logic to your data that can't be easily expressed in SQL. One option is to wrap your logic in a User Defined Function (UDF). What if you already have this logic coded in a language that is not supported by UDF? Script Table Operator is a Teradata feature that allows you to bring your logic to the data and run it on Teradata. The advantage of this approach is that you don't have to retrieve data from Teradata to operate on it. Also, by running your data applications on Teradata, you leverage its parallel nature. You don't have to think how your applications will scale. You can let Teradata take care of it.

## Prerequisites

You need access to a Teradata instance.

<TrialDocsNote />

## Hello World

Let's start with something simple. What if we wanted the database to print "Hello World"?

```sql
SELECT *
FROM
  SCRIPT(
    SCRIPT_COMMAND('echo Hello World!')
    RETURNS ('Message varchar(512)'));
```

Here is what we've got:
```sql
Message
------------
Hello World!
Hello World!
Hello World!
Hello World!
```

Let's analyze what just happened here. The SQL includes `echo Hello World!`, which is a Bash command. The script runs once on each AMP, so the number of returned rows depends on the number of AMPs in your Teradata system.

```sql
-- Teradata magic that returns the number of AMPs in a system
SELECT hashamp()+1 AS number_of_amps;
```

Returns:
```sql
number_of_amps
--------------
             4
```

This simple script demonstrates the idea behind the Script Table Operator (STO). You provide your script and the database runs it in parallel, once for each AMP. This is an attractive model in case you have transformation logic in a script and a lot of data to process. Normally, you would need to build concurrency into your application. By letting STO do it, you let Teradata select the right concurrency level for your data.

## Supported languages

We used `echo` in Bash, but Bash is hardly a productive environment for expressing complex logic. What other languages are supported? The good news is that any binary that can run on Teradata nodes can be used in STO. Remember that the binary and all its dependencies must be installed on all your Teradata nodes. In practice, the available options depend on what your administrator is willing and able to maintain on the servers. Python is a popular choice.

## Uploading scripts

`Hello World` is useful for testing, but what if you have existing logic in a larger file? You likely do not want to paste the entire script and escape quotes in an SQL query. The User Installed Files (UIF) feature solves the script upload issue.

Say you have `helloworld.py` script with the following content:

```bash
print("Hello World!")
```

Create this file on your local machine. On Linux/macOS, place it at `/tmp/helloworld.py`. On Windows, use a path like `C:\\Temp\\helloworld.py`.

First, we need to setup permissions in Teradata. We are going to do this using a new database to keep it clean.

```sql
-- Create a new database called STO
CREATE DATABASE STO
AS PERMANENT = 60e6, -- 60MB
    SPOOL = 120e6; -- 120MB

-- Check the current Teradata user
SELECT USER;

-- Replace <CURRENT_USER_VALUE> with the value returned by SELECT USER
GRANT CREATE EXTERNAL PROCEDURE ON STO TO <CURRENT_USER_VALUE>;
```

You can upload the script to Teradata using the following procedure call. 
!!! note
    Adjust the path to match your client OS and where the local file is located.

Linux/macOS example:

```sql
CALL SYSUIF.install_file('helloworld', 'helloworld.py', 'cz!/tmp/helloworld.py');
```

Windows example:

```sql
CALL SYSUIF.install_file('helloworld', 'helloworld.py', 'cz!C:/Temp/helloworld.py');
```

Now that the script has been uploaded, you can call it like this. Note: Run this as a separate statement from the CALL above, or issue an ET/NULL if required by your client.

```sql
-- We switch to STO database
DATABASE STO; 

-- We tell Teradata where to look for the script. This can be
-- any string and it will create a symbolic link to the directory
-- where our script got uploaded. By convention, we use the
-- database name.
SET SESSION SEARCHUIFDBPATH = sto;

-- We now call the script. Note how we use a relative path that
-- starts with `./sto/`, which is where SEARCHUIFDBPATH
-- is pointing.
SELECT *
FROM SCRIPT(
  SCRIPT_COMMAND('python3 ./sto/helloworld.py')
  RETURNS ('Message varchar(512)'));
```

The last call should return:
```sql
Message
------------
Hello World!
Hello World!
Hello World!
Hello World!
```

That was a lot of work and we are still at Hello World. Let's try to pass some data into `SCRIPT`.

## Passing data stored in Teradata to SCRIPT

So far, we have been using `SCRIPT` operator to run standalone scripts. But the main purpose to run scripts on Teradata is to process data that is in Teradata. Let's see how we can retrieve data from Teradata and pass it to `SCRIPT`.

We will start by creating a table with a few rows.

```sql
-- Switch to STO database.
DATABASE STO;

-- Create a table with a few urls
CREATE TABLE urls(url varchar(10000));
```

Now insert the data. Insert each row in a separate statement:

```sql
INSERT INTO urls VALUES ('https://www.google.com/finance?q=NYSE:TDC');
INSERT INTO urls VALUES ('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');
INSERT INTO urls VALUES ('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');
INSERT INTO urls VALUES ('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');
```

We will use the following script to parse out query parameters:

```python
from urllib.parse import urlparse
from urllib.parse import parse_qsl
import sys

for line in sys.stdin:
    # remove leading and trailing whitespace
    url = line.strip()
    parsed_url = urlparse(url)
    query_params = parse_qsl(parsed_url.query)

    for element in query_params:
        print("\t".join(element))
```

Note how the script assumes that urls will be fed into `stdin` one by one, line by line. Also, note how it prints results line by line, using the tab character as a delimiter between values.

Let's install the script.

Linux/macOS example:

```sql
CALL SYSUIF.install_file('urlparser', 'urlparser.py', 'cz!/tmp/urlparser.py');
```

Windows example:

```sql
CALL SYSUIF.install_file('urlparser', 'urlparser.py', 'cz!C:/Temp/urlparser.py');
```

With the script installed, we will now retrieve data from `urls` table and feed it into the script to retrieve query parameters:

```sql
-- We inform Teradata to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto;

SELECT *
  FROM SCRIPT(
    ON(SELECT url FROM urls)
    SCRIPT_COMMAND('python3 ./sto/urlparser.py')
    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));
```

As a result, we get query params and their values. There are as many rows as key/value pairs. Also, since we inserted a tab between the key and the value output in the script, we get 2 columns from STO.
```sql
param_key   |param_value
-----------------------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Inserting SCRIPT output into a table

We have learned how to take data from Teradata, pass it to a script and get output. Is there an easy way to store this output in a table? Sure, there is. We can use the following pattern:

```sql
-- We inform Teradata to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto;

-- First, create the table structure
CREATE MULTISET TABLE url_params
  (param_key varchar(512), param_value varchar(512))
NO PRIMARY INDEX;

-- Then insert the SCRIPT results
INSERT INTO url_params
SELECT *
FROM SCRIPT(
  ON(SELECT url FROM urls)
  SCRIPT_COMMAND('python3 ./sto/urlparser.py')
  RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));
```

Now, let's inspect the contents of `url_params` table:

```sql
SELECT * FROM url_params;
```

You should see the following output:
```sql
param_key   |param_value
------------+-----------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Summary

In this quick start, we learned how to run scripts against data in Teradata. We ran scripts using Script Table Operator (STO). The operator allows us to bring logic to the data. It offloads concurrency considerations to the database by running our scripts in parallel, one per AMP. All you need to do is provide a script and the database will execute it in parallel.

## Further reading
* [Teradata SQL Operators and User-Defined Functions - SCRIPT](https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug)
* [R and Python Analytics with SCRIPT Table Operator](https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1)