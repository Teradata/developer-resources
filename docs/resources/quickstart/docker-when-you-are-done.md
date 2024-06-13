---
id: docker-when-you're-done
title: QuickStart | When you're done
description: Learn what to do when you're done using the QuickStart.
sidebar_label: When you're done 
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# When you're done

To avoid incurring charges for unneeded engine resources, [suspend projects](../manage-ai-unlimited/suspend-and-restore-project.md) you're not working on. You can always restore them.

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

You can also remove any local directory or files, containing engine data, that you mounted to the Docker containers. 

