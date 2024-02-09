---
id: subscribe-image-csp
title: Subscribe to AI Unlimited Image from your CSP marketplace
description: Learn how to subscribe to AI Unlimited image from CSP marketplace.
sidebar_position: 3
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Prerequisites to install AI Unlimited
  - Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Subscribe at your CSP's marketplace

***MEM: For the title, how about "Subscribe to the engine image". That might reinforce, a little, that this subscription has nothing to do with the CSP resources they pay for. And, in the topic body, we tell them where to go--they'll find out soon enough. The title in the left nav and title in the topic should be the same of course.***

To use AI Unlimited, you must have an Amazon Machine Image (AMI) or Azure VM Image subscription based on your choice of CSP.

***MEM: Removing "based on your choice of CSP" would be good. That choice was made clear in the previous topic.***

***MEM: Thinking... including each CSP's image term in this intro will get busier when we add GCP. I'm thinking those terms can be in each step 3 on the tabs.***

***MEM: So then for an intro, we could just say "Complete the steps for your cloud service provider (CSP)." Maybe not necessary to spell out cloud service provider (we already did that in "Before you begin") but it feels friendly here. But after this the references to it in this QS workflow seem fine as just "CSP."***

***MEM: I asked the channel if for PPP they will have to contact Support first to get a license. Seems they should go straight to the marketplace? Islum said yes, straight to the marketplace, so I removed the sentence.***

To subscribe, do the following:
<Tabs>
<TabItem value="aws" label="AWS" default>
1. Log on to your AWS account.

***MEM: I asked chatGPT: "In content produced by AWS, what's more commonly seen, "sign in to your AWS account" or "log on to your AWS account." It said "sign in." That's consistent with similar Q&A I've had with Bard (WFIW, the new name for Bard = Gemini). "Sign in" is website-y. Both ways are ok, we see lots of both, but "sign in" is less formal and more modern. Same change for Azure.***

2. Open the [AWS Marketplace](https://aws.amazon.com/marketplace) page for Teradata AI Unlimited and choose **Continue**.

***MEM: I guess we'll get a link to go directly to the AI Unlimited page. Same for Azure.***

3. Review and accept the terms and conditions for the engine images.

    * Leader: https://aws.amazon.com/marketplace/pp/prodview-6vip7ar4pi6ey?ref_=aws-mp-console-subscription-detail
    * Follower: https://aws.amazon.com/marketplace/pp/prodview-xcwypvttluuiw?ref_=aws-mp-console-subscription-detail

***MEM: Per Jack, there will be only 1 image. So we can say "Review and accept the terms and conditions for the [CSP-specific image term]." The link text can be "terms and conditions" and we'll have to get the new url. Same for Azure.***

***MEM: So they can go to the t & c from the marketplace page or from this topic. Curious... what is the benefit of providing the link to the t & c in this topic if they have to be signed in to their CSP account and have to go to the marketplace, where they see the same link? Maybe to review the t & c later? If they click the t & c link first, then they have to sign in to the AWS account. Do they end up in the marketplace? Probably. Including the t & c link seems fine though. And the steps, as they are, are great--they orient the user. Maybe clicking the t & c link is an alternative to step 1. That's fine though. And I think it's fine not to say so--just include the link. Overthinking?! :-)***

</TabItem>
<TabItem value="azure" label="Azure">
1. Log on to your Azure account.

2. Open the [Azure Marketplace](https://azuremarketplace.microsoft.com) page for Teradata AI Unlimited and choose **Get It Now**.

3. Review and accept the terms and conditions for the engine images.

    * Leader:
    * Follower:
</TabItem>
</Tabs>

