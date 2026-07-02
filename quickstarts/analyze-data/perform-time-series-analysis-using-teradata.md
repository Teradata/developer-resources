---
sidebar_position: 5
id: perform-time-series-analysis-using-teradata
author: Remi Turpaud, Daniel Herrera
email: developer.relations@teradata.com
page_last_update: June 22nd, 2026
description: Perform time series analysis using Teradata
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, time series, time series analysis]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Perform time series analysis using Teradata

## Overview

Time series is series of data points indexed in time order. It is data continuously produced and collected by a wide range of applications and devices including but not limited to Internet of Things. Teradata offers various functionalities to simplify time series data analysis.

## Prerequisites

You need access to a Teradata instance. Time series functionalities and NOS are enabled in Teradata starting from version 17.10.

<TrialDocsNote />

## Import data sets from GCS using Native Object Store (NOS)

Our sample data set is available in a Google Cloud Storage bucket and can be accessed from Teradata directly using Native Object Store (NOS). The data is in CSV format; let's ingest it into Teradata for our time series analysis.

First, create an authorization object (an empty one is sufficient for public buckets):

```sql
CREATE AUTHORIZATION nos_auth USER '' PASSWORD '';
```

Let's have a look at the data first. The query below fetches 10 rows from the GCS bucket.

```sql
SELECT TOP 10 vendor_id, pickup_datetime, dropoff_datetime, passenger_count, rate_code
FROM (
  LOCATION='/gs/storage.googleapis.com/clearscape_analytics_demo_data/DEMO_RideHailing/ride_hailing_full.csv'
  AUTHORIZATION=nos_auth
) AS d;
```

Here is what we've got:

```sql
vendor_id    pickup_datetime        dropoff_datetime       passenger_count  rate_code
-----------  ---------------------  ---------------------  ---------------  ---------
SwiftGo      2014-11-25 13:53:00    2014-11-25 13:58:00    1                1
StarRider    2014-11-25 6:41:00     2014-11-25 6:43:00     6                1
RideWise     2014-11-25 22:19:00    2014-11-25 22:31:00    1                1
StarRider    2014-11-25 1:31:00     2014-11-25 1:39:00     1                1
ZippyRide    2014-11-25 7:11:00     2014-11-25 7:33:00     1                1
GoMoto       2014-11-25 7:23:00     2014-11-25 7:33:00     1                1
DriveEasy    2014-11-25 4:35:00     2014-11-25 4:53:00     1                1
SwiftGo      2014-11-25 13:56:00    2014-11-25 14:01:00    1                1
SwiftGo      2014-11-25 8:55:00     2014-11-25 9:15:00     2                1
SwiftGo      2014-11-25 3:20:00     2014-11-25 3:38:00     1                1
```

Let's extract the complete data and bring it into Teradata for further analysis. Because the CSV stores timestamps without a leading zero for single-digit hours, we use a staging table and an explicit `CAST` to load correctly typed data.

```sql
-- Step 1: load raw strings from NOS into a staging table
CREATE TABLE trip_raw AS (
  SELECT TOP 20000
    vendor_id(CHAR(20))        AS vendor_id,
    pickup_datetime(CHAR(30))  AS pickup_datetime,
    dropoff_datetime(CHAR(30)) AS dropoff_datetime,
    CAST(passenger_count AS SMALLINT) AS passenger_count,
    CAST(rate_code AS INTEGER)        AS rate_code
  FROM (
    LOCATION='/gs/storage.googleapis.com/clearscape_analytics_demo_data/DEMO_RideHailing/ride_hailing_full.csv'
    AUTHORIZATION=nos_auth
  ) AS d
) WITH DATA NO PRIMARY INDEX;

-- Step 2: create the typed trip table from the staging table
CREATE TABLE trip AS (
  SELECT
    TRIM(vendor_id)(CHAR(10)) AS vendor_id,
    rate_code,
    CAST(
      CASE CHAR_LENGTH(TRIM(pickup_datetime))
        WHEN 18 THEN SUBSTR(TRIM(pickup_datetime),1,11)||'0'||SUBSTR(TRIM(pickup_datetime),12)
        ELSE TRIM(pickup_datetime)
      END AS TIMESTAMP(6) FORMAT 'YYYY-MM-DDBHH:MI:SS'
    ) AS pickup_datetime,
    CAST(
      CASE CHAR_LENGTH(TRIM(dropoff_datetime))
        WHEN 18 THEN SUBSTR(TRIM(dropoff_datetime),1,11)||'0'||SUBSTR(TRIM(dropoff_datetime),12)
        ELSE TRIM(dropoff_datetime)
      END AS TIMESTAMP(6) FORMAT 'YYYY-MM-DDBHH:MI:SS'
    ) AS dropoff_datetime,
    passenger_count,
    CAST(NULL AS FLOAT) AS trip_distance,
    CAST(NULL AS FLOAT) AS pickup_longitude,
    CAST(NULL AS FLOAT) AS pickup_latitude,
    CAST(NULL AS FLOAT) AS dropoff_longitude,
    CAST(NULL AS FLOAT) AS dropoff_latitude
  FROM trip_raw
) WITH DATA NO PRIMARY INDEX;

DROP TABLE trip_raw;
```

Result:

```sql
20000 rows affected.
```

Teradata has fetched the data from GCS and loaded it into the trip table we just created.

## Basic time series operations

Now that we are familiar with the data set, we can use Teradata capabilities to quickly analyse the data set. First, let's identify how many passengers are being picked up by hour in the month of November.

```sql

SELECT TOP 10
	$TD_TIMECODE_RANGE
	,begin($TD_TIMECODE_RANGE) time_bucket_start
	,sum(passenger_count) passenger_count
FROM trip
WHERE extract(month from pickup_datetime)=11
GROUP BY TIME(HOURS(1))
USING TIMECODE(pickup_datetime)
ORDER BY 1;

```

Result:

```sql
TIMECODE_RANGE                                                    time_bucket_start              passenger_count
---------------------------------------------------------         ---------------------------------  ---------------
(2014-11-25 00:00:00.000000, 2014-11-25 01:00:00.000000)         2014-11-25 00:00:00+00:00          1105
(2014-11-25 01:00:00.000000, 2014-11-25 02:00:00.000000)         2014-11-25 01:00:00+00:00          727
(2014-11-25 02:00:00.000000, 2014-11-25 03:00:00.000000)         2014-11-25 02:00:00+00:00          486
(2014-11-25 03:00:00.000000, 2014-11-25 04:00:00.000000)         2014-11-25 03:00:00+00:00          333
(2014-11-25 04:00:00.000000, 2014-11-25 05:00:00.000000)         2014-11-25 04:00:00+00:00          355
(2014-11-25 05:00:00.000000, 2014-11-25 06:00:00.000000)         2014-11-25 05:00:00+00:00          455
(2014-11-25 06:00:00.000000, 2014-11-25 07:00:00.000000)         2014-11-25 06:00:00+00:00          1055
(2014-11-25 07:00:00.000000, 2014-11-25 08:00:00.000000)         2014-11-25 07:00:00+00:00          2361
(2014-11-25 08:00:00.000000, 2014-11-25 09:00:00.000000)         2014-11-25 08:00:00+00:00          2477
(2014-11-25 09:00:00.000000, 2014-11-25 10:00:00.000000)         2014-11-25 09:00:00+00:00          2668
```

Yes, this can also be achieved by extracting the hour from time and then aggregating - it's additional code/work, but can be done without timeseries specific functionality.

But, now let's go a step further to identify how many passengers are being picked up and what is the average trip duration by vendor every 15 minutes in November.

```sql
SELECT TOP 10
    $TD_TIMECODE_RANGE,
    vendor_id,
    SUM(passenger_count),
    AVG((dropoff_datetime - pickup_datetime ) MINUTE (4)) AS avg_trip_time_in_mins
FROM trip
GROUP BY TIME (MINUTES(15) AND vendor_id)
USING TIMECODE(pickup_datetime)
WHERE EXTRACT(MONTH FROM pickup_datetime)=11
ORDER BY 1,2;
```

Result:

```sql
TIMECODE_RANGE                                                    vendor_id    SUM(passenger_count)  avg_trip_time_in_mins
---------------------------------------------------------         ----------   --------------------  ---------------------
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         CityLift     54                    14
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         CruiseOn     45                    11
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         DriveEasy    21                    12
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         GoMoto       29                    12
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         RideWise     28                    11
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         StarRider    14                    11
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         SwiftGo      44                    9
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         VeloCab      38                    14
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         ZippyRide    18                    11
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)         ZoomTransit  30                    15
```

This is the power of Teradata time series functionality. Without needing complicated, cumbersome logic we are able to find average trip duration by vendor every 15 minutes just by modifying the group by time clause. Let's now look at how simple it is to build moving averages based on this. First, let's start by creating a view as below.

```sql
REPLACE VIEW NYC_taxi_trip_ts as
SELECT
	$TD_TIMECODE_RANGE time_bucket_per
	,vendor_id
	,sum(passenger_count) passenger_cnt
	,avg(CAST((dropoff_datetime - pickup_datetime MINUTE(4) ) AS INTEGER))  avg_trip_time_in_mins
FROM trip
GROUP BY TIME (MINUTES(15) and vendor_id)
USING TIMECODE(pickup_datetime)
WHERE extract(month from pickup_datetime)=11

```

Let's calculate a 2 hours moving average on our 15-minutes time series. 2 hour is 8 * 15 minutes periods.

```sql
SELECT * FROM MovingAverage (
  ON NYC_taxi_trip_ts PARTITION BY vendor_id ORDER BY time_bucket_per
  USING
  MAvgType ('S')
  WindowSize (8)
  TargetColumns ('passenger_cnt')
) AS dt
WHERE begin(time_bucket_per)(date) = '2014-11-25'
ORDER BY vendor_id, time_bucket_per;
```

Result:

```sql
time_bucket_per                                                    vendor_id    passenger_cnt  avg_trip_time_in_mins   passenger_cnt_smavg
---------------------------------------------------------          ----------   -------------  ---------------------   -------------------
(2014-11-25 00:00:00.000000, 2014-11-25 00:15:00.000000)          CityLift     116            15.47826086956522       116.0
(2014-11-25 00:15:00.000000, 2014-11-25 00:30:00.000000)          CityLift     118            13.93877551020408       117.0
(2014-11-25 00:30:00.000000, 2014-11-25 00:45:00.000000)          CityLift     107            13.19607843137255       113.66666666666667
(2014-11-25 00:45:00.000000, 2014-11-25 01:00:00.000000)          CityLift     97             15.384615384615385      109.5
(2014-11-25 01:00:00.000000, 2014-11-25 01:15:00.000000)          CityLift     80             12.0                    103.6
(2014-11-25 01:15:00.000000, 2014-11-25 01:30:00.000000)          CityLift     64             14.36170212765957       97.0
(2014-11-25 01:30:00.000000, 2014-11-25 01:45:00.000000)          CityLift     46             14.02857142857143       89.71428571428571
(2014-11-25 01:45:00.000000, 2014-11-25 02:00:00.000000)          CityLift     85             15.421052631578948      89.625
(2014-11-25 02:00:00.000000, 2014-11-25 02:15:00.000000)          CityLift     48             13.208333333333334      80.625
(2014-11-25 02:15:00.000000, 2014-11-25 02:30:00.000000)          CityLift     40             14.047619047619047      70.875
(2014-11-25 02:30:00.000000, 2014-11-25 02:45:00.000000)          CityLift     33             11.969696969696969      61.625
(2014-11-25 02:45:00.000000, 2014-11-25 03:00:00.000000)          CityLift     43             10.25                   54.875
(2014-11-25 03:00:00.000000, 2014-11-25 03:15:00.000000)          CityLift     41             14.0                    47.5
(2014-11-25 03:15:00.000000, 2014-11-25 03:30:00.000000)          CityLift     29             11.137931034482758      45.625
(2014-11-25 03:30:00.000000, 2014-11-25 03:45:00.000000)          CityLift     24             12.333333333333334      42.875
(2014-11-25 03:45:00.000000, 2014-11-25 04:00:00.000000)          CityLift     16             12.5625                 39.25
(2014-11-25 04:00:00.000000, 2014-11-25 04:15:00.000000)          CityLift     24             15.5                    37.0
(2014-11-25 04:15:00.000000, 2014-11-25 04:30:00.000000)          CityLift     33             13.818181818181818      35.25
(2014-11-25 04:30:00.000000, 2014-11-25 04:45:00.000000)          CityLift     24             15.0                    33.0
(2014-11-25 04:45:00.000000, 2014-11-25 05:00:00.000000)          CityLift     17             13.0                    26.0
```

:::note
In addition to above time series operations, Teradata also provides special time series tables with Primary Time Index (PTI). These are regular Teradata tables with PTI defined rather than a Primary Index (PI). Though tables with PTI are not mandatory for time series functionality/operations, PTI optimizes how the time series data is stored physically and hence improves performance considerably compared to regular tables.
:::

## Summary

In this quick start we have learnt how easy it is to analyse time series datasets using Teradata's time series capabilities.

## Further reading
* [Teradata - Time Series Tables and Operations](https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations)
* [Query data stored in object storage](../manage-data/nos.md)
* [Teradata - Native Object Store Getting Started Guide](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)
