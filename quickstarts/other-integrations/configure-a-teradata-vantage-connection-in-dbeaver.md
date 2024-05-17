---
experimental:
page-author: Adam Tworkiewicz
page-email: adam.tworkiewicz@teradata.com
page-revdate: March 6th, 2022
description: Configure a Teradata Vantage connection in DBeaver.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, dbeaver, dbeaver prod, sql ide]
---

# Configure a Teradata Vantage connection in DBeaver

## Overview

This how-to demonstrates how to create a connection to Teradata Vantage with DBeaver.

## Prerequisites

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.md'

* Access to a Teradata Vantage instance.
  <ClearscapeDocsNote />
* DBeaver installed. See [DBeaver Community](https://dbeaver.io/download) or [DBeaver PRO](https://dbeaver.com/download) for installation options.

## Add a Teradata connection to DBeaver

1. Start the new connection wizard by clicking on the plug icon (![Add Connection Plug Icon](./images/configure-a-teradata-connection-in-dbeaver/plug-icon.png)) in the upper left corner of the application window or go to `Database -> New Database Connection`.
2. On `Select your database` screen, start typing `teradata` and select the Teradata icon.
![Select your database](./images/configure-a-teradata-connection-in-dbeaver/select-your-database-windows.png)]
3. On the main tab, you need to set all primary connection settings. The required ones include `Host`, `Port`, `Database`, `Username`, and `Password`.
:::tip
In Teradata Vantage, when a user is created a corresponding database with the same is created as well. DBeaver requires that you enter the database. If you don't know what database you want to connect to, use your username in the `database` field.
:::
:::tip
With DBeaver PRO, you can not only use the standard ordering of tables but also hierarchically link tables to a specific database or user. Expanding and collapsing the databases or users will help you navigate from one area to another without swamping the Database Navigator window. Check the `Show databases and users hierarchically` box to enable this setting.
:::
:::tip
In many environments Teradata Vantage can only be accessed using the TLS protocol. When in DBeaver PRO, check `Use TLS protocol` option to enable TLS.
:::
![Teradata connection settings](./images/configure-a-teradata-connection-in-dbeaver/teradata-connection-settings-windows.png)
4. Click on `Finish`.

## Optional: Logon Mechanisms

The default logon mechanism when creating a DBeaver connection is TD2. To add other logon mechanisms, follow the steps below:

1. Navigate to the database menu and click on Driver Manager.
2. From the list of driver names, select Teradata and click "Copy".
![Copy the Teradata driver](./images/configure-a-teradata-connection-in-dbeaver/copy-driver.png)
3. In the "URL Template" field, define your selected logon mechanism.
+
`jdbc:teradata://\{host}/LOGMECH=LDAP,DATABASE=\{database},DBS_PORT=\{port}`
![Configure connection string](./images/configure-a-teradata-connection-in-dbeaver/configure-driver-string.png)
4. Click "OK".
5. The new driver is now available to create connections with the selected logon mechanism.
![Create a connection](./images/configure-a-teradata-connection-in-dbeaver/create-connection.png)
6. The process for setting up a new connection with the alternative mechanism is the same as described above for adding a new connection.
![Configure connection](./images/configure-a-teradata-connection-in-dbeaver/teradata-connection-settings-windows-ldap.png)

## Optional: SSH tunneling

If your database cannot be accessed directly, you can use an SSH tunnel. All settings are available on the `SSH` tab. DBeaver supports the following authentication methods: user/password, public key, SSH agent authentication.

![Teradata connection settings SSH](./images/configure-a-teradata-connection-in-dbeaver/teradata-connection-settings-ssh-windows.png)

## Summary

This how-to demonstrated how to create a connection to Teradata Vantage with DBeaver.

import CommunityLinkPartial from '../_partials/community_link.md';

<CommunityLinkPartial />
