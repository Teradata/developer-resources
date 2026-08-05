---
id: ubuntu
title: Ubuntu
sidebar_position: 1
author: Adam Tworkiewicz, Janeth Graziani
email: adam.tworkiewicz@teradata.com
ft:lastEdition: "2026-07-10"
ft:description: Use Teradata with ODBC on Ubuntu
keywords: [data warehouses, compute storage separation, teradata, cloud data platform, object storage, business intelligence, enterprise analytics, odbc, ubuntu]
---

import TrialDocsNote from '../../_partials/teradata_trial.mdx'

# Use Teradata with ODBC on Ubuntu

## Overview

This how-to demonstrates how to use the ODBC driver with Teradata on Ubuntu.

## Prerequisites

* Access to a Teradata instance.
    <TrialDocsNote/>
* Root access to an Ubuntu machine. If you don't have a local Ubuntu machine, you can use an AWS EC2 instance as described in the steps below.
* An AWS account (if using EC2).

## Installation

### Option 1: Launch an Ubuntu instance on AWS EC2

If you don't have a local Ubuntu machine, follow these steps to launch one on AWS EC2:

1. Go to the [AWS EC2 Console](https://console.aws.amazon.com/ec2/) and click **Launch Instance**.
2. Enter a name for your instance.
3. Under **Application and OS Images**, select **Ubuntu** and choose **Ubuntu Server 22.04 LTS** as the AMI.
4. Under **Instance type**, select `t2.micro` or `t3.micro`.
5. Under **Key pair**, click **Create new key pair**. Name it, keep the defaults (RSA, .pem), and click **Create key pair**. The `.pem` file will download automatically — save it to `~/.ssh/`.
6. Under **Network settings**, ensure **Allow SSH traffic** is checked and set the source to **My IP**.
7. Click **Launch Instance**.
8. Once the instance is running, copy the **Public IPv4 address** from the instance details page.
9. Set permissions on your key file and connect via SSH:

```bash
chmod 400 ~/.ssh/
ssh -i ~/.ssh/<your-key.pem> ubuntu@<your-public-ip>
```

10. Once connected, get root access:

```bash
sudo su
```

### Install dependencies

```bash
apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev python3-pip alien
```

### Install Teradata ODBC driver

Download the Teradata ODBC driver for Linux from the [Teradata Downloads page](https://downloads.teradata.com/download/connectivity/odbc-driver/linux). A Teradata account is required to download the driver. Download the file `tdodbc2000__linux_x8664.20.00.00.66-1.tar.gz` to your local machine.

If you are using an AWS EC2 instance, open a new terminal window on your local machine and use `scp` to transfer the file:

```bash
scp -i ~/.ssh/<your-key.pem> ~/Downloads/tdodbc2000__linux_x8664.20.00.00.66-1.tar.gz ubuntu@<your-public-ip>:/home/ubuntu/
```

Back in your SSH session, extract and convert the driver package to a Debian-compatible format, then install it:

```bash
tar -xzf tdodbc2000__linux_x8664.20.00.00.66-1.tar.gz \
    && alien -d tdodbc2000/tdodbc2000-20.00.00.66-1.x86_64.rpm \
    && dpkg -i tdodbc2000_20.00.00.66-2_amd64.deb
```

### Configure ODBC

Create the file `/etc/odbcinst.ini` with the following content:

```bash
cat > /etc/odbcinst.ini << 'EOF'
[ODBC Drivers]
Teradata Database ODBC Driver 20.00=Installed

[Teradata Database ODBC Driver 20.00]
Description=Teradata Database ODBC Driver 20.00
Driver=/opt/teradata/client/20.00/lib64/tdataodbc_sb64.so
EOF
```

## Use ODBC

Install `pyodbc`:

```bash
pip3 install pyodbc --break-system-packages
```

Create a `test.py` file with the following content. Replace `DBCName`, `UID` and `PWD` with your Teradata instance hostname, username and password:

```python
import pyodbc

print(pyodbc.drivers())

cnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 20.00};DBCName=<your-teradata-hostname>;UID=<username>;PWD=<password>;')
cursor = cnxn.cursor()

cursor.execute("SELECT CURRENT_DATE")
for row in cursor.fetchall():
    print(row)
```

Run the test application:

```python
python3 test.py
```

You should get output similar to:

```python
   ['ODBC Drivers', 'Teradata Database ODBC Driver 20.00']
   (datetime.date(2026, 7, 10),)
```
## Summary

This how-to demonstrated how to use ODBC with Teradata on Ubuntu. The how-to shows how to install the ODBC Teradata driver and the dependencies. It then shows how to configure ODBC and validate connectivity with a simple Python application.

## Further reading
* [ODBC Driver for Teradata® User Guide](https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update)
