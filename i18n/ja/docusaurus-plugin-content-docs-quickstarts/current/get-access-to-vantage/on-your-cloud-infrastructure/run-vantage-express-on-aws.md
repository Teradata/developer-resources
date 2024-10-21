---
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 12 月 12 日
description: AWS で Vantage Express を実行する方法
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, AWS]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';

# AWS で Vantage Express を実行する方法

<UseCase />

## 概要

このハウツーでは、AWS で Vantage Express を実行する方法を説明します。Vantage Express は、完全に機能する Teradata SQL エンジンを含む、フットプリントの小さい構成です。


:::info
<b>クラウド料金</b>

Vantage Express は仮想マシン イメージとして配布されます。このハウツーでは、EC2 `c5n.metal` インスタンス タイプを使用します。これは、1 時間あたり 3 ドルを超えるベアメタル インスタンスです。

より安価なオプションが必要な場合は、ネストされた仮想化をサポートし、安価なVMでVantage Expressを実行できる [Google Cloud](./vantage-express-gcp.md)と [Azure](run-vantage-express-on-microsoft-azure.md)を試してください。

クラウドの使用料を支払いたくない場合は、 [https://clearscape.teradata.com/](https://clearscape.teradata.com/)で Vantage の無料ホストインスタンスを入手できます。または、 [VMware](../on-your-local/getting-started-vmware.md)、 [VirtualBox](../on-your-local/getting-started-vbox.md)、または [UTM](../on-your-local/getting-started-utm.md)を使用して Vantage Express をローカルにインストールすることもできます。
:::

## 前提条件

* AWS アカウント。新しいアカウントを作成する必要がある場合は、 [AWSの公式インストラクション](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)に従ってください。
* `awscli` コマンドライン ユーティリティがマシンにインストールされ、構成されています。インストール手順については、 [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)を参照してください。

## インストール


* インターネットに面したサブネットを持つ VPC が必要です。利用可能な VPC がない場合は、次の方法で作成できます。

```bash
# Copied from https://cloudaffaire.com/how-to-create-a-custom-vpc-using-aws-cli/

# Create VPC
AWS_VPC_ID=$(aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --query 'Vpc.{VpcId:VpcId}' \
  --output text)

# Enable DNS hostname for your VPC
aws ec2 modify-vpc-attribute \
  --vpc-id $AWS_VPC_ID \
  --enable-dns-hostnames "{"Value":true}"

# Create a public subnet
AWS_SUBNET_PUBLIC_ID=$(aws ec2 create-subnet \
  --vpc-id $AWS_VPC_ID --cidr-block 10.0.1.0/24 \
  --query 'Subnet.{SubnetId:SubnetId}' \
  --output text)

# Enable Auto-assign Public IP on Public Subnet
aws ec2 modify-subnet-attribute \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --map-public-ip-on-launch

# Create an Internet Gateway
AWS_INTERNET_GATEWAY_ID=$(aws ec2 create-internet-gateway \
  --query 'InternetGateway.{InternetGatewayId:InternetGatewayId}' \
  --output text)

# Attach Internet gateway to your VPC
aws ec2 attach-internet-gateway \
  --vpc-id $AWS_VPC_ID \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID

# Create a route table
AWS_CUSTOM_ROUTE_TABLE_ID=$(aws ec2 create-route-table \
  --vpc-id $AWS_VPC_ID \
  --query 'RouteTable.{RouteTableId:RouteTableId}' \
  --output text )

# Create route to Internet Gateway
aws ec2 create-route \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $AWS_INTERNET_GATEWAY_ID \
  --output text

# Associate the public subnet with route table
AWS_ROUTE_TABLE_ASSOID=$(aws ec2 associate-route-table  \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \
  --output text | head -1)

# Create a security group
aws ec2 create-security-group \
  --vpc-id $AWS_VPC_ID \
  --group-name myvpc-security-group \
  --description 'My VPC non default security group' \
  --output text

# Get security group ID's
AWS_DEFAULT_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'SecurityGroups[?GroupName == `default`].GroupId' \
  --output text) &&
  AWS_CUSTOM_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'SecurityGroups[?GroupName == `myvpc-security-group`].GroupId' \
  --output text)

# Create security group ingress rules
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \
  --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow SSH"}]}]' \
  --output text

# Add a tag to the VPC
aws ec2 create-tags \
  --resources $AWS_VPC_ID \
  --tags "Key=Name,Value=vantage-express-vpc"

# Add a tag to public subnet
aws ec2 create-tags \
  --resources $AWS_SUBNET_PUBLIC_ID \
  --tags "Key=Name,Value=vantage-express-vpc-public-subnet"

# Add a tag to the Internet-Gateway
aws ec2 create-tags \
  --resources $AWS_INTERNET_GATEWAY_ID \
  --tags "Key=Name,Value=vantage-express-vpc-internet-gateway"

# Add a tag to the default route table
AWS_DEFAULT_ROUTE_TABLE_ID=$(aws ec2 describe-route-tables \
  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \
  --query 'RouteTables[?Associations[0].Main != `false`].RouteTableId' \
  --output text) &&
  aws ec2 create-tags \
  --resources $AWS_DEFAULT_ROUTE_TABLE_ID \
  --tags "Key=Name,Value=vantage-express-vpc-default-route-table"

# Add a tag to the public route table
aws ec2 create-tags \
  --resources $AWS_CUSTOM_ROUTE_TABLE_ID \
  --tags "Key=Name,Value=vantage-express-vpc-public-route-table"

# Add a tags to security groups
aws ec2 create-tags \
  --resources $AWS_CUSTOM_SECURITY_GROUP_ID \
  --tags "Key=Name,Value=vantage-express-vpc-security-group" &&
  aws ec2 create-tags \
  --resources $AWS_DEFAULT_SECURITY_GROUP_ID \
  --tags "Key=Name,Value=vantage-express-vpc-default-security-group"

```

* VM を作成するには、SSH キー ペアが必要です。まだない場合は作成してください。
```bash
aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem
```

* 秘密鍵へのアクセスを制限します。 `<path_to_private_key_file>` を前のコマンドで返された秘密鍵のパスに置き換えます。

```bash
chmod 600 vantage-key.pem
```
* リージョンの最新のUbuntuイメージのAMI IDを取得します。
```bash
AWS_AMI_ID=$(aws ec2 describe-images \
  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \
  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \
  | sort -k3 -r | head -n1 | cut -f 2)
```
* 4 つの CPU、8 GB の RAM、および 70 GB のディスクを備えた Ubuntu VM を作成します。 
```bash
AWS_INSTANCE_ID=$(aws ec2 run-instances \
  --image-id $AWS_AMI_ID \
  --count 1 \
  --instance-type c5n.metal \
  --block-device-mapping DeviceName=/dev/sda1,Ebs={VolumeSize=70} \
  --key-name vantage-key \
  --security-group-ids $AWS_CUSTOM_SECURITY_GROUP_ID \
  --subnet-id $AWS_SUBNET_PUBLIC_ID \
  --query 'Instances[0].InstanceId' \
  --output text)
```
* VMにsshで接続します。
```bash
AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \
  --query "Reservations[*].Instances[*].PublicIpAddress" \
  --output=text --instance-ids $AWS_INSTANCE_ID)
ssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP
```

* VM に接続したら、`root`  ユーザーに切り替えます。
```bash
sudo -i
```

* Vantage Express用のダウンロードディレクトリを準備する。
```bash
mkdir /opt/downloads
cd /opt/downloads
```
<InstallVeInPublic />

* インターネットから Vantage Express に接続する場合は、VM へのファイアウォールの穴を開ける必要があります。また、デフォルトのパスワードを `dbc` ユーザーに変更する必要があります。
*  `dbc` ユーザーのパスワードを変更するには、VM に移動して bteq を開始する。
```bash
bteq
```

* ユーザー名とパスワードとして `dbc` を使用してデータベースにログインする。
```bash
.logon localhost/dbc
```

*  `dbc` ユーザーのパスワードを変更する。
```bash
MODIFY USER dbc AS PASSWORD = new_password;
```

* これで、ポート 1025 をインターネットに開くことができます。
```bash
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \
  --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]'
```

## クリーンアップする
料金の発生を停止するには、すべてのリソースを削除します。
```bash
# Delete the VM
aws ec2 terminate-instances --instance-ids $AWS_INSTANCE_ID --output text

# Wait for the VM to terminate

# Delete custom security group
aws ec2 delete-security-group \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID

# Delete internet gateway
aws ec2 detach-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID \
  --vpc-id $AWS_VPC_ID &&
  aws ec2 delete-internet-gateway \
  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID

# Delete the custom route table
aws ec2 disassociate-route-table \
  --association-id $AWS_ROUTE_TABLE_ASSOID &&
  aws ec2 delete-route-table \
  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID

# Delete the public subnet
aws ec2 delete-subnet \
  --subnet-id $AWS_SUBNET_PUBLIC_ID

# Delete the vpc
aws ec2 delete-vpc \
  --vpc-id $AWS_VPC_ID
```

## 次のステップ
* [オブジェクトストレージに保存されたクエリーデータ](../../manage-data/nos.md)

## さらに詳しく
* [Teradata®Studio™およびStudio™Expressインストール ガイド](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [BTEQ の紹介](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink />


