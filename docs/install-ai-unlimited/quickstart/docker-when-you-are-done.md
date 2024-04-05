---
id: docker-when-you're-done
title: When you're done
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 7
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# When you're done

Make sure you have suspended the AI Unlimited engine to avoid incurring charges to your CSP account for the resources used.

Once you’ve finished working on your project, Teradata recommends running the following command to stop and remove all of the containers, and networks that were created. This can be helpful if you want to free up resources on your computer. If you do not plan to restart the engine, you can also use the `-v` option to remove the Docker volume that contains the engine data.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 



