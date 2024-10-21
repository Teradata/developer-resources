---
sidebar_position: 5
id: perform-time-series-analysis-using-teradata-vantage
author: Remi Turpaud
email: remi.turpaud@teradata.com
page_last_update: 15 de abril 2022
description: Realizar análisis de series temporales mediante Teradata Vantage
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, time series, time series analysis]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Realizar análisis de series temporales mediante Teradata Vantage

## Información general

Las series temporales son series de puntos de datos indexados en orden temporal. Son datos producidos y recopilados continuamente por una amplia gama de aplicaciones y dispositivos, incluido, entre otros, el Internet de las cosas. Teradata Vantage ofrece varias funcionalidades para simplificar el análisis de datos de las series temporales.

## Prerrequisitos

Necesita acceso a una instancia de Teradata Vantage. Las funcionalidades de serie temporal y NOS están habilitadas en todas las ediciones de Vantage, desde Vantage Express hasta Developer, DYI y Vantage as a Service a partir de la versión 17.10.

<ClearscapeDocsNote />

## Importar conjuntos de datos desde AWS S3 mediante Vantage NOS

Nuestros conjuntos de datos de muestra están disponibles en el depósito S3 y se puede acceder a ellos desde Vantage directamente usando Vantage NOS. Los datos están en formato CSV y los incorporaremos a Vantage para nuestro análisis de series temporales.

Echemos un vistazo primero a los datos. La siguiente consulta recuperará 10 filas del depósito S3.

```sql
SELECT TOP 10 * FROM (
	LOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'
) AS d;
```

Esto es lo que tenemos:

```sql

Location					        		vendor_id	pickup_datetime		dropoff_datetime	passenger_count		trip_distance		pickup_longitude	        pickup_latitude		rate_code	store_and_fwd_flag	dropoff_longitude	dropoff_latitude	payment_type	fare_amount	surcharge	mta_tax		tip_amount	tolls_amount	total_amount
------------------------------------------------------------------	---------	-----------------	-----------------	----------------	--------------		-----------------		----------------	----------	-------------------	------------------	-----------------	-------------	------------	----------	--------	----------	------------	------------
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:18	25/11/2013 15:33	1			1			-73.992423			40.749517		1		N 			-73.98816		40.746557		CRD   		10		0		0.5		2.22		0		12.72
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 5:34		25/11/2013 5:48		1			3.6			-73.971555			40.794548		1		N 			-73.975399		40.755404		CRD   		14.5		0.5		0.5		1		0		16.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 8:31		25/11/2013 8:55		1			5.9			-73.94764			40.830465		1		N 			-73.972323		40.76332		CRD   		21		0		0.5		3		0		24.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 7:00		25/11/2013 7:04		1			1.2			-73.983357			40.767193		1		N 			-73.978394		40.75558		CRD   		5.5		0		0.5		1		0		7
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:24	25/11/2013 15:30	1			0.5			-73.982313			40.764827		1		N 			-73.982129		40.758889		CRD   		5.5		0		0.5		3		0		9
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 15:53	25/11/2013 16:00	1			0.6			-73.978104			40.752966		1		N 			-73.985756		40.762685		CRD   		6		1		0.5		1		0		8.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 6:49		25/11/2013 7:04		1			3.8			-73.976005			40.744481		1		N 			-74.016063		40.717298		CRD   		14		0		0.5		2.9		0		17.4
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 21:20	25/11/2013 21:26	1			1.1			-73.946371			40.775369		1		N 			-73.95309		40.785103		CRD   		6.5		0.5		0.5		1.5		0		9
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 10:02	25/11/2013 10:17	1			2.2			-73.952625			40.780962		1		N 			-73.98163		40.777978		CRD   		12		0		0.5		2		0		14.5
/S3/s3.amazonaws.com/nyc-tlc/csv_backup/yellow_tripdata_2013-11.csv	CMT   		25/11/2013 9:43		25/11/2013 10:02	1			3.3			-73.982013			40.762507		1		N 			-74.006854		40.719582		CRD   		15		0		0.5		2		0		17.5

```

Extraigamos los datos completos y llevémoslos a Vantage para su posterior análisis.

```sql

CREATE TABLE trip
(
  vendor_id varchar(10) character set latin NOT casespecific,
  rate_code          integer,
  pickup_datetime timestamp(6),
  dropoff_datetime timestamp(6),
  passenger_count   smallint,
  trip_distance float,
  pickup_longitude float,
  pickup_latitude float,
  dropoff_longitude float,
  dropoff_latitude float
)
NO PRIMARY INDEX ;



INSERT INTO trip
SELECT TOP 200000 vendor_id ,
  rate_code,
  pickup_datetime,
  dropoff_datetime ,
  passenger_count,
   trip_distance ,
  pickup_longitude,
  pickup_latitude ,
  dropoff_longitude ,
  dropoff_latitude FROM (
	LOCATION='/s3/nos-demo-apj.s3.amazonaws.com/taxi/2014/11/data_2014-11-25.csv'
) AS d;

```

Resultado:

```sql
200000 rows affected.
```

Vantage ahora obtendrá los datos de S3 y los insertará en la tabla de viajes que acabamos de crear.

## Operaciones básicas de series temporales

Ahora que estamos familiarizados con el conjunto de datos, podemos utilizar las capacidades de Vantage para analizarlo rápidamente. Primero, identifiquemos cuántos pasajeros se recogen por hora en el mes de noviembre.

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

Para obtener más información sobre [GROUP BY TIME](https://www.docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Time-Series-Aggregates-and-SELECT-Extensions/GROUP-BY-TIME-Clause).

Resultado:

```sql
TIMECODE_RANGE							time_bucket_start			passenger_count
---------------------------------------------------------	---------------------------------	----------------
(2013-11-04 11:00:00.000000, 2013-11-04 12:00:00.000000)	2013-11-04 11:00:00.000000-05:00	4
(2013-11-04 12:00:00.000000, 2013-11-04 13:00:00.000000)	2013-11-04 12:00:00.000000-05:00	2
(2013-11-04 14:00:00.000000, 2013-11-04 15:00:00.000000)	2013-11-04 14:00:00.000000-05:00	5
(2013-11-04 15:00:00.000000, 2013-11-04 16:00:00.000000)	2013-11-04 15:00:00.000000-05:00	2
(2013-11-04 16:00:00.000000, 2013-11-04 17:00:00.000000)	2013-11-04 16:00:00.000000-05:00	9
(2013-11-04 17:00:00.000000, 2013-11-04 18:00:00.000000)	2013-11-04 17:00:00.000000-05:00	11
(2013-11-04 18:00:00.000000, 2013-11-04 19:00:00.000000)	2013-11-04 18:00:00.000000-05:00	41
(2013-11-04 19:00:00.000000, 2013-11-04 20:00:00.000000)	2013-11-04 19:00:00.000000-05:00	2791
(2013-11-04 20:00:00.000000, 2013-11-04 21:00:00.000000)	2013-11-04 20:00:00.000000-05:00	15185
(2013-11-04 21:00:00.000000, 2013-11-04 22:00:00.000000)	2013-11-04 21:00:00.000000-05:00	27500


```

Sí, esto también se puede lograr extrayendo la hora del tiempo y luego agregándola; es código/trabajo adicional, pero se puede hacer sin una funcionalidad específica de la serie temporal.

Pero ahora vayamos un paso más allá para identificar cuántos pasajeros están siendo recogidos y cuál es la duración promedio del viaje por proveedor cada 15 minutos en noviembre.

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

Resultado:

```sql

TIMECODE_RANGE							vendor_id	passenger_count		avg_trip_time_in_mins
--------------------------------------------------------	----------	----------------	----------------------
(2013-11-04 11:00:00.000000, 2013-11-04 11:15:00.000000)	VTS		1			16
(2013-11-04 11:15:00.000000, 2013-11-04 11:30:00.000000)	VTS		1			10
(2013-11-04 11:45:00.000000, 2013-11-04 12:00:00.000000)	VTS		2			6
(2013-11-04 12:00:00.000000, 2013-11-04 12:15:00.000000)	VTS		1			11
(2013-11-04 12:15:00.000000, 2013-11-04 12:30:00.000000)	VTS		1			57
(2013-11-04 14:15:00.000000, 2013-11-04 14:30:00.000000)	VTS		1			3
(2013-11-04 14:30:00.000000, 2013-11-04 14:45:00.000000)	VTS		2			19
(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)	VTS		2			9
(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)	VTS		1			11
(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)	VTS		1			31


```

Este es el poder de la funcionalidad de series temporales de Vantage. Sin necesidad de una lógica complicada y engorrosa, podemos encontrar la duración promedio del viaje por proveedor cada 15 minutos simplemente modificando la cláusula de grupo por tiempo. Veamos ahora lo sencillo que es construir medias móviles basadas en esto. Primero, comencemos creando una vista como se muestra a continuación.

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

Calculemos un promedio móvil de 2 horas en nuestra serie temporal de 15 minutos. 2 horas son períodos de 8 * 15 minutos.

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


Resultado:

```sql

time_bucket_per							vendor_id	passenger_cnt		avg_trip_time_in_mins	passenger_cnt_smavg
---------------------------------------------------------	--------------	----------------------	--------------------	--------------------
(2013-11-04 14:45:00.000000, 2013-11-04 15:00:00.000000)	VTS		2			9			1.375
(2013-11-04 15:15:00.000000, 2013-11-04 15:30:00.000000)	VTS		1			11			1.375
(2013-11-04 15:30:00.000000, 2013-11-04 15:45:00.000000)	VTS		1			31			1.375
(2013-11-04 16:15:00.000000, 2013-11-04 16:30:00.000000)	VTS		2			16			1.375
(2013-11-04 16:30:00.000000, 2013-11-04 16:45:00.000000)	VTS		1			3			1.375
(2013-11-04 16:45:00.000000, 2013-11-04 17:00:00.000000)	VTS		6			38			2
(2013-11-04 17:15:00.000000, 2013-11-04 17:30:00.000000)	VTS		2			29.5			2.125
(2013-11-04 17:45:00.000000, 2013-11-04 18:00:00.000000)	VTS		9			20.33333333		3
(2013-11-04 18:00:00.000000, 2013-11-04 18:15:00.000000)	VTS		6			23.4			3.5
(2013-11-04 18:15:00.000000, 2013-11-04 18:30:00.000000)	VTS		4			15.66666667		3.875
(2013-11-04 18:30:00.000000, 2013-11-04 18:45:00.000000)	VTS		8			24.5			4.75
(2013-11-04 18:45:00.000000, 2013-11-04 19:00:00.000000)	VTS		23			38.33333333		7.375
(2013-11-04 19:00:00.000000, 2013-11-04 19:15:00.000000)	VTS		195			26.61538462		31.625
(2013-11-04 19:15:00.000000, 2013-11-04 19:30:00.000000)	VTS		774			13.70083102		127.625
(2013-11-04 19:30:00.000000, 2013-11-04 19:45:00.000000)	VTS		586			12.38095238		200.625
(2013-11-04 19:45:00.000000, 2013-11-04 20:00:00.000000)	VTS		1236			15.54742097		354
(2013-11-04 20:00:00.000000, 2013-11-04 20:15:00.000000)	VTS		3339			11.78947368		770.625
(2013-11-04 20:15:00.000000, 2013-11-04 20:30:00.000000)	VTS		3474			10.5603396		1204.375
(2013-11-04 20:30:00.000000, 2013-11-04 20:45:00.000000)	VTS		3260			12.26484323		1610.875
(2013-11-04 20:45:00.000000, 2013-11-04 21:00:00.000000)	VTS		5112			12.05590062		2247



```

:::note
Además de las operaciones de series temporales anteriores, Vantage también proporciona tablas de series temporales especiales con índice de tiempo primario (Primary Time Index, PTI). Estas son tablas Vantage regulares con PTI definido en lugar de un índice primario (Primary Index, PI). Aunque las tablas con PTI no son obligatorias para las funciones/operaciones de series temporales, PTI optimiza la forma en que se almacenan físicamente los datos de las series temporales y, por lo tanto, mejora considerablemente el rendimiento en comparación con las tablas normales.
:::

## Resumen

En este inicio rápido, hemos aprendido lo fácil que es analizar conjuntos de datos de series temporales utilizando las capacidades de series temporales de Vantage.

## Lectura adicional
* [Teradata Vantage™: operaciones y tablas de series temporales](https://docs.teradata.com/r/Teradata-VantageTM-Time-Series-Tables-and-Operations/July-2021/Introduction-to-Teradata-Time-Series-Tables-and-Operations)
* [Consultar datos almacenados en el almacenamiento de objetos](../manage-data/nos.md)
* [Teradata Vantage™: Guía de introducción a Native Object Storage](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
