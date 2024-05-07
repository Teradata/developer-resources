---
id: docker-when-you're-done
title: When you're done
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# When you're done

To avoid incurring charges for unneeded engine resources, [suspend projects](/docs/manage-ai-unlimited/suspend-and-resume-project.md) you're not working on. You can always restore them.

If you are done with the QuickStart, and want to free up resources on your computer, run this command to stop and remove all of the containers and networks that were created.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

***This next sentence needs verification and more context--so it jibes with the previous page. Is it about using a local volume to pass CSP credentials to Docker?***

You can also remove any local directory or files, containing engine data, that you mounted to the Docker containers. 

