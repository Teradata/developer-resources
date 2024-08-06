---
sidebar_position: 9
author: Janeth Graziani
email: Janeth.graziani@teradata.com
page_last_update: February 28, 2024
description: Use Terraform to manage Teradata data pipelines in Airbyte using Terraform.
keywords: [Terraform, Airbyte, Teradata Vantage, data engineering, ELT, automation, data integration, CI/CD, version control]  
---

import YouTubeVideo from '../_partials/terraform-video.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage 


### Overview 

This quickstart explains how to use Terraform to manage Airbyte data pipelines as code. Instead of manual configurations through the WebUI, we'll use code to create and manage Airbyte resources. The provided example illustrates a basic ELT pipeline from Google Sheets to Teradata Vantage using Airbyte's Terraform provider.

The Airbyte Terraform provider is available for users on Airbyte Cloud, OSS & Self-Managed Enterprise. 

Watch this concise explanation of how this integration works:

<YouTubeVideo />

### Introduction
[Terraform](https://www.terraform.io) is a leading open-source tool in the Infrastructure as Code (IaC) space. It enables the automated provisioning and management of infrastructure, cloud platforms, and services via configuration files, instead of manual setup. Terraform uses plugins, known as Terraform providers, to communicate with infrastructure hosts, cloud providers, APIs, and SaaS platforms. 

Airbyte, the data integration platform, has a Terraform provider that communicates directly with [Airbyte's API](https://reference.airbyte.com/reference/start). This allows data engineers to manage Airbyte configurations, enforce version control, and apply good data engineering practices within their ELT pipelines.

### Prerequisites
* [Airbyte Cloud Account](https://airbyte.com/connectors/teradata-vantage). Start with a 14-day free trial that begins after the first successful sync.
- Generate an Airbyte API Key by logging into the [developer portal](https://portal.airbyte.com).
* Teradata Vantage Instance. You will need a database `Host`, `Username`, and `Password` for Airbyte’s Terraform configuration. 
- [Create a free Teradata instance on ClearScape Analytics Experience](../get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae.md)

* Source Data. For demonstration purposes we will use a [sample Google Sheets,](https://docs.google.com/spreadsheets/d/1XNBYUw3p7xG6ptfwjChqZ-dNXbTuVwPi7ToQfYKgJIE/edit#gid=0). Make a copy of it into a personal Google worspace. 

* [Google Cloud Platform API enabled for your personal or organizational account](https://support.google.com/googleapi/answer/6158841?hl=en]=). You’ll need to authenticate your Google account via OAuth or via Service Account Key Authenticator. In this example, we use [Service Account Key Authenticator](https://cloud.google.com/iam/docs/keys-create-delete).

### Install Terraform 
* Apply the respective commands to install Terraform on your Operating System. Find additional options on the [Terraform site](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).


```mdx-code-block
<Tabs>
  <TabItem value="MacOS" label="MacOS" default>
    First, install the HashiCorp tap, a repository of all [Homebrew](https://brew.sh) packages.
    ```bash
      brew tap hashicorp/tap
    ```
    Next, install Terraform with hashicorp/tap/terraform.
    ```bash
      brew install hashicorp/tap/terraform
    ```
  </TabItem>
  <TabItem value="Windows" label="Windows">
    [Chocolatey](https://chocolatey.org) is a free and open-source package management system for Windows. Install the Terraform package from the command-line.
    ```bash
      choco install terraform
    ```
  </TabItem>
  <TabItem value="Linux" label="Linux">
    ```bash
    wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
    sudo apt update && sudo apt install terraform 
    ```
  </TabItem>
</Tabs>
```

### Environment preparation

Prepare the environment by creating a directory for the Terraform configuration and initialize two files: `main.tf` and `variables.tf`.

``` bash
mkdir terraform_airbyte
cd terraform_airbyte
touch main.tf variables.tf
```

### Define a data pipeline
Define the data source, destination and connection within the `main.tf` file. Open the newly created `main.tf` file in Visual Studio Code or any preferred code editor.

- If using Visual Studio Code, install [HashiCorp Terraform Extensions](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform) to add autocompletion and syntax highlighting. You can also add [Terraform by Anton Kuliko](https://marketplace.visualstudio.com/items?itemName=4ops.terraform) for configuration language support. 

![Terraform Extensions on Visual Studio Code](../elt/images/terraform-airbyte-provider/extensions.png)

Populate the main.tf file with the template provided.
``` bash
# Provider Configuration
terraform {
  required_providers {
    airbyte = {
      source = "airbytehq/airbyte"
      version = "0.4.1"  // Latest Version https://registry.terraform.io/providers/airbytehq/airbyte/latest
    }
  }
}
provider "airbyte" {
  // If running on Airbyte Cloud, generate & save the API key from https://portal.airbyte.com
  bearer_auth = var.api_key
}
# Google Sheets Source Configuration
resource "airbyte_source_google_sheets" "my_source_gsheets" {
  configuration = {
    source_type = "google-sheets"
     credentials = {
      service_account_key_authentication = {
        service_account_info = var.google_private_key
      }
    }
    names_conversion = true,
    spreadsheet_id = var.spreadsheet_id
  }
  name = "Google Sheets"
  workspace_id = var.workspace_id
}
# Teradata Vantage Destination Configuration
# For optional parameters visit https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata 
resource "airbyte_destination_teradata" "my_destination_teradata" {
  configuration = {
    host            = var.host
    password        = var.password
    schema          = "airbyte_td_two"
    ssl             = false
    ssl_mode = {
      allow = {}
    }
    username = var.username
  }
  name          = "Teradata"
  workspace_id  = var.workspace_id
}
# Connection Configuration 
resource "airbyte_connection" "googlesheets_teradata" {
  name = "Google Sheets - Teradata"
  source_id = airbyte_source_google_sheets.my_source_gsheets.source_id
  destination_id = airbyte_destination_teradata.my_destination_teradata.destination_id
    schedule = {
      schedule_type = "cron" // "manual"
      cron_expression = "0 15 * * * ?" # This sets the data sync to run every 15 minutes of the hour
    }
  }
```

Note that this example uses a cron expression to schedule the data transfer to run every 15 minutes past the hour. 

In our `main.tf` file we reference variables which are held in the `variables.tf` file, including the API key, workspace ID, Google Sheet id, Google private key and Teradata Vantage credentials. Copy the following template into the `variables.tf` file and populate with the appropriate configuration values in the `default` attribute.

### Configuring the variables.tf file

``` bash
#log in to https://portal.airbyte.com generate, save and populate the variable with an API key
variable "api_key" {
    type = string
    default = ""
}
#workspace_id is found in the url to the Airbyte Cloud account https://cloud.airbyte.com/workspaces/<workspace_id>/settings/dbt-cloud 
variable "workspace_id" {
    type = string
    default = ""
} 

#Google spreadsheet id and Google private key
variable "spreadsheet_id" {
    type = string
    default = ""
}
variable "google_private_key" {
  type = string
  default =  ""
}
# Teradata Vantage connection credentials
variable "host" {
  type = string
  default = ""
  }
variable "username" {
  type = string
  default = "demo_user"
  }
  variable "password" {
  type = string
  default = ""
  }
```

### Execution Commands

Run `terraform init` pull down provider plugin from terraform provider page and initialize a working Terraform directory.

This command should only be run after writing a new Terraform configuration or cloning an existing one from version control.

![Initialize Terraform with Terraform init command](../elt/images/terraform-airbyte-provider/terraforminit.png)

Run `terraform plan` to display the execution plan Terraform will use to create resource and make modifications to infrastructure. 

For this example a plan for 3 new resources is created:

Connection: # airbyte_connection.googlesheets_teradata will be created

Destination: # airbyte_connection.googlesheets_teradata will be created

Source: # airbyte_source_google_sheets.my_source_gsheets will be created
  
![View Terraform execution plan with terraform plan command](../elt/images/terraform-airbyte-provider/terraformplan.png)

Run `terraform apply` and `yes` to generate a plan and carry out the plan.

![Apply the Terraform plan with terraform apply command](../elt/images/terraform-airbyte-provider/terraformapply.png)

The `terraform.tfstate` file is created after running `terraform apply` for the first time. This file tracks the status of all sources, destinations, and connections managed by Terraform. For subsequent executions of `Terraform apply`, Terraform compares the code in the `main.tf` file with the code stored in the `tfstate` file. If resources are added or removed in `main.tf`, Terraform automatically updates both deployment and the `.tfstate` file accordingly upon deployment. Do not modify this file by hand.

You now have a Source, Destination and Connection on Airbyte Cloud created and managed via Terraform. 

![Airbyte Connection in Airbyte Cloud UI](../elt/images/terraform-airbyte-provider/airbyteconnection.png)

### Additional Resources 

- [Use Airbyte to load data from external sources to Teradata Vantage](./use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.md)
- [Transform data Loaded with Airbyte using dbt](./transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt.md)
- [Airbyte API reference documentation](https://reference.airbyte.com/reference/createsource).
- [Terraform Airbyte Provider Docs](https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata#example-usage)