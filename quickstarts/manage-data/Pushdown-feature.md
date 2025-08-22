# Pushdown Functionality
The Teradata connector supports pushdown for different operations.

* Join pushdown

  - Cost-based join pushdown

* Limit pushdown

* Top N pushdown

* Projection pushdown

* Predicate pushdown

* Aggregate pushdown

## Join pushdown
Join pushdown allows the Teradata connector to delegate the table join operation to the Teradata. This can result in performance gains and allows Trino to perform the remaining query processing on a smaller amount of data.

## Cost-based join pushdown
The Teradata connector supports cost-based Join pushdown to make intelligent decisions about whether to push down a join operation to the Teradata. This is based on a catalog configuration property.

When cost-based join pushdown is enabled, the connector only pushes down join operations if statistics of joining tables are available incase of join pushdown strategy is ```AUTOMATIC```. 

The following table describes catalog configuration properties for join pushdown.

| Property name | Description | Default value |
|---------------|-------------|---------------|
| join-pushdown.enabled | Enable join pushdown. `join_pushdown_enabled` is the equal catalog session property. | true |
| join-pushdown.strategy | Strategy used to evaluate whether join operations are pushed down. Set to AUTOMATIC to enable cost-based join pushdown, or EAGER to pushdown joins. Note that EAGER can push down joins even when table statistics are unavailable. | AUTOMATIC |

The connector does not support pushdown of range predicates, such as ```>```, ```<```, or ```BETWEEN```, on columns with character string types like ```CHAR``` or ```VARCHAR```. Equality predicates, such as ```IN``` or ```=```, and inequality predicates, such as ```!=``` on columns with textual types are pushed down. This ensures correctness of results since the remote data source may sort strings differently than Trino. 

## Limit pushdown
A LIMIT reduces the number of returned rows for a SQL SELECT statement. Limit pushdown enables connector to push processing of such queries of unsorted records to Teradata. A pushdown of this clause can improve the performance of the query and significantly reduce the amount of data transferred from Teradata to Trino.

Teradata converts Trino LIMIT to Teradata equivalent TOP clause.

```SELECT id, name FROM teradata.public.company LIMIT 5;```

Trino query will be converted to 

```SELECT TOP 5 id, name FROM teradata.public.company;```

## TOP N pushdown
The combination of a LIMIT with ORDER BY clause creates a small set of records to return out of a large sorted dataset. The pushdown for a query involving LIMIT with ORDER BY is called a Top N pushdown. It enabled the Teradata connector to push the processing of Queries involved in LIMIT with ORDER BY clause to Teradata database, and therefore significantly reduces the amount of data transferred to Trino.

```SELECT id, name FROM teradata.public.company ORDER BY id LIMIT 5;``` 

Trino query will be converted to Teradata supported syntax 

```SELECT TOP 5 id, name from (SELECT id, name FROM teradata.public.company) as t ORDER BY id;```

## Projection pushdown
Projection pushdown optimizes column-based filtering. It uses the column specified in the SELECT clause and other parts of the query to limit access to these columns. The processing is pushed down to the Teradata database by Teradata connector and then Teradata reads and returns only necessary columns.

Teradata connector inherits the TRINO JDBC framework implementation. Teradata connector doesn’t have any custom implementation with respect to Projection Pushdown. 

## Predicate pushdown
Predicate pushdown optimizes row-based filtering. It uses filtering specified in WHERE clause to omit unnecessary rows. The processing is pushed down to Teradata database by the Teradata connector and Teradata only reads and returns the filter matched rows only.

The predicate pushdown supports SQL statements with following arithmetic, boolean, comparision operators and functions.

* =

* <>

* <

* <=

* \>

* \>=

* \+

* \-

* \*

* /

* MOD

* -Value

* IS NOT NULL

* NOT

* IS NULL

* NULLIF

* IN

* LIKE

* LIKE ESCAPE

## Aggregate pushdown
Teradata supports Aggregation pushdown for below specified cases.

### Numeric Data
* CountAll 

* Count

* Count Distinct

* Min

* Max

* Sum

* Avg Float

* Avg Decimal

* Avg Bigint

* Statistical Aggregation

  - StddevSamp

  - StddevPop

  - VarianceSamp

  - VariancePop

* Correlation and Regression Aggregation

  - CovarianceSamp

  - CovariancePop

  - Corr

  - RegrIntercept

  - RegrSlope

* String Data

* No Aggregation Pushdown for CHAR and VARCHAR type data
