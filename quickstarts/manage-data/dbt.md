---
id: dbt
sidebar_position: 4
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: July 12th, 2023
description: Use dbt (data build tool) with Teradata Vantage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, dbt.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'
import tabsDBT from '../_partials/tabsDBT.mdx'

# dbt with Teradata Vantage

## Overview

This tutorial demonstrates how to use dbt (Data Build Tool) with Teradata Vantage. It's based on the original [dbt Jaffle Shop tutorial](https://github.com/dbt-labs/jaffle_shop-dev). A couple of models have been adjusted to the SQL dialect supported by Vantage.

## Prerequisites

* Access to a Teradata Vantage instance.

<ClearscapeDocsNote />
* Python *3.7*, *3.8*, *3.9*, *3.10* or *3.11* installed.

## Install dbt

1. Clone the tutorial repository and cd into the project directory:
```
git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
cd jaffle_shop
```

2. Create a new python environment to manage dbt and its dependencies. Activate the environment:
<tabsDBT/>


3. Install `dbt-teradata` module and its dependencies. The core dbt module is included as a dependency so you don't have to install it separately:
```
pip install dbt-teradata
```

## Configure dbt

We will now configure dbt to connect to your Vantage database. Create file `$HOME/.dbt/profiles.yml` with the following content. Adjust `<host>`, `<user>`, `<password>` to match your Teradata instance.

:::note
* Database setup

The following dbt profile points to a database called `jaffle_shop`. 
If the database doesn't exist on your Teradata Vantage instance, it will be created. You can also change `schema` value to point to an existing database in your instance.
:::

```
jaffle_shop:
  outputs:
    dev:
      type: teradata
      host: <host>
      user: <user>
      password: <password>
      logmech: TD2
      schema: jaffle_shop
      tmode: ANSI
      threads: 1
      timeout_seconds: 300
      priority: interactive
      retries: 1
  target: dev
```

Now, that we have the profile file in place, we can validate the setup:

```
dbt debug
```

If the debug command returned errors, you likely have an issue with the content of `profiles.yml`.

## About the Jaffle Shop warehouse

`jaffle_shop` is a fictional e-commerce store. This dbt project transforms raw data from an app database into a dimensional model with customer and order data ready for analytics.

The raw data from the app consists of customers, orders, and payments, with the following entity-relationship diagram:

![](../images/dbt1.svg)

dbt takes these raw data table and builds the following dimensional model, which is more suitable for analytics tools:

![](../images/dbt2.svg)

## Run dbt

### Create raw data tables

In real life, we will be getting raw data from platforms like Segment, Stitch, Fivetran or another ETL tool. In our case, we will use dbt's `seed` functionality to create tables from csv files. The csv files are located in `./data` directory. Each csv file will produce one table. dbt will inspect the files and do type inference to decide what data types to use for columns.

```
dbt seed
```

You should now see 3 tables in your `jaffle_shop` database: `raw_customers`, `raw_orders`, `raw_payments`. The tables should be populated with data from the csv files.

### Create the dimensional model

Now that we have the raw tables, we can instruct dbt to create the dimensional model:
```
dbt run
```

So what exactly happened here? dbt created additional tables using `CREATE TABLE/VIEW FROM SELECT` SQL. In the first transformation, dbt took raw tables and built denormalized join tables called `customer_orders`, `order_payments`, `customer_payments`. You will find the definitions of these tables in `./marts/core/intermediate`.
In the second step, dbt created `dim_customers` and `fct_orders` tables. These are the dimensional model tables that we want to expose to our BI tool.

### Test the data

dbt applied multiple transformations to our data. How can we ensure that the data in the dimensional model is correct? dbt allows us to define and execute tests against the data. The tests are defined in `./marts/core/schema.yml`. The file describes each column in all relationships. Each column can have multiple tests configured under `tests` key. For example, we expect that `fct_orders.order_id` column will contain unique, non-null values. To validate that the data in the produced tables satisfies the test conditions run:

```
dbt test
```

### Generate documentation

Our model consists of just a few tables. Imagine a scenario where where we have many more sources of data and a much more complex dimensional model. We could also have an intermediate zone between the raw data and the dimensional model that follows the Data Vault 2.0 principles. Would it not be useful, if we had the inputs, transformations and outputs documented somehow? dbt allows us to generate documentation from its configuration files:

```
dbt docs generate
```

This will produce html files in `./target` directory.

You can start your own server to browse the documentation. The following command will start a server and open up a browser tab with the docs' landing page:

```
dbt docs serve
```

## Summary

This tutorial demonstrated how to use dbt with Teradata Vantage. The sample project takes raw data and produces a dimensional data mart. We used multiple dbt commands to populate tables from csv files (`dbt seed`), create models (`dbt run`), test the data (`dbt test`), and generate and serve model documentation (`dbt docs generate`, `dbt docs serve`).

## Further reading
* [dbt documentation](https://docs.getdbt.com/docs/)
* [dbt-teradata plugin documentation](https://github.com/Teradata/dbt-teradata)

<CommunityLink />
