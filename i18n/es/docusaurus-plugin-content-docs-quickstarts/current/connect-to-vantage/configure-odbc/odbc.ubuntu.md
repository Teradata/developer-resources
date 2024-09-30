---
id: ubuntu
title: Ubuntu
sidebar_position: 1
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 5 de enero de 2022
description: Utilizar Vantage con ODBC en Ubuntu
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, odbc, ubuntu]
---

import ClearscapeDocsNote from '../../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../../_partials/community_link.mdx'

# Utilizar Vantage con ODBC en Ubuntu

## Información general

Este tutorial demuestra cómo utilizar el controlador ODBC con Teradata Vantage en Ubuntu.

## Prerrequisitos

* Acceso a una instancia de Teradata Vantage.
    <ClearscapeDocsNote/>
* Acceso root a una máquina Ubuntu.

## Instalación

* Instalar dependencias:

```bash
apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev iodbc python3-pip
```

* Instale el controlador ODBC de Teradata para Ubuntu:
```bash
wget https://downloads.teradata.com/download/cdn/connectivity/odbc/17.10.x.x/tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && tar -xzf tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && dpkg -i tdodbc1710/tdodbc1710-17.10.00.14-1.x86_64.deb
```

* Configure ODBC, creando el archivo `/etc/odbcinst.ini` con el siguiente contenido:
```bash
[ODBC Drivers]
Teradata Database ODBC Driver 17.10=Installed

[Teradata Database ODBC Driver 17.10]
Description=Teradata Database ODBC Driver 17.10
Driver=/opt/teradata/client/17.10/odbc_64/lib/tdataodbc_sb64.so
```

## Usar ODBC

Validaremos la instalación con una aplicación Python de muestra. Cree el archivo `test.py` con el siguiente contenido.
Reemplace `DBCName=192.168.86.33;UID=dbc;PWD=dbc` con la dirección IP de su instancia de Teradata Vantage, nombre de usuario y contraseña:

```python
import pyodbc

print(pyodbc.drivers())

cnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 17.10};DBCName=192.168.86.33;UID=dbc;PWD=dbc;')
cursor = cnxn.cursor()

cursor.execute("SELECT CURRENT_DATE")
for row in cursor.fetchall():
    print(row)
EOF
```

Ejecute la aplicación de prueba:

```python
python3 test.py
```

Debería obtener un resultado similar a:

```python
['ODBC Drivers', 'Teradata Database ODBC Driver 17.10']
(datetime.date(2022, 1, 5), )
```

## Resumen

Este tutorial demostró cómo usar ODBC con Teradata Vantage en Ubuntu. El tutorial muestra cómo instalar el controlador ODBC de Teradata y las dependencias. Luego muestra cómo configurar ODBC y validar la conectividad con una aplicación Python simple.

## Lectura adicional
* [Guía del usuario del controlador ODBC para Teradata®](https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update)

<CommunityLink />