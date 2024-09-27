---
sidebar_position: 1
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 12 de diciembre de 2022
description: Ejecutar Vantage Express en AWS
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, AWS]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';

# Ejecutar Vantage Express en AWS

<UseCase />

## Información general

Este tutorial demuestra cómo ejecutar Vantage Express en AWS. Vantage Express es una configuración de tamaño reducido que contiene un motor Teradata SQL completamente funcional.


:::important
<b>Cargos del entorno de nube</b>

Vantage Express se distribuye como una imagen de máquina virtual. Este tutorial utiliza el tipo de instancia EC2 `c5n.metal`. Es una instancia básica que cuesta más de 3 $/h.

Si quiere una opción más económica, pruebe [google cloud](./vantage-express-gcp.md) y [Azure](run-vantage-express-on-microsoft-azure.md), que admiten la virtualización anidada y pueden ejecutar Vantage Express en máquinas virtuales económicas.

Si no quiere pagar por el uso de la nube, puede obtener una instancia alojada gratuita de Vantage en [https://clearscape.teradata.com/](https://clearscape.teradata.com/). Alternativamente, puede instalar Vantage Express localmente usando [VMware](../on-your-local/getting-started-vmware.md), [VirtualBox](../on-your-local/getting-started-vbox.md) o [UTM](../on-your-local/getting-started-utm.md).
:::

## Prerrequisitos

* Una cuenta de AWS. Si necesita crear una nueva cuenta, siga [las instrucciones oficiales de AWS](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* Utilidad de línea de comandos `awscli` instalada y configurada en su máquina. Puede encontrar instrucciones de instalación aquí: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

## Instalación


* Necesitará una VPC con una subred con acceso a Internet. Si no tiene una disponible, así es como puede crearla:

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

* Para crear una máquina virtual, necesitará un par de claves ssh. Si aún no lo tiene, cree uno:
```bash
aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem
```

* Restrinja el acceso a la clave privada. Reemplace `<path_to_private_key_file>` con la ruta de la clave privada devuelta por el comando anterior:

```bash
chmod 600 vantage-key.pem
```
* Obtenga la identificación de AMI de la última imagen de Ubuntu en su región:
```bash
AWS_AMI_ID=$(aws ec2 describe-images \
  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \
  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \
  | sort -k3 -r | head -n1 | cut -f 2)
```
* Cree una máquina virtual Ubuntu con 4 CPU, 8 GB de RAM y un disco de 70 GB. 
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
* ssh a su máquina virtual:
```bash
AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \
  --query "Reservations[*].Instances[*].PublicIpAddress" \
  --output=text --instance-ids $AWS_INSTANCE_ID)
ssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP
```

* Una vez en la máquina virtual, cambie al usuario `root`:
```bash
sudo -i
```

* Prepare el directorio de descarga de Vantage Express:
```bash
mkdir /opt/downloads
cd /opt/downloads
```
<InstallVeInPublic />

* Si desea conectarse a Vantage Express desde Internet, deberá abrir agujeros de firewall en su máquina virtual. También debe cambiar la contraseña predeterminada al usuario `dbc`:
* Para cambiar la contraseña del usuario `dbc`, vaya a su máquina virtual e inicie bteq:
```bash
bteq
```

* Inicie sesión en su base de datos usando `dbc` como usuario y contraseña:
```bash
.logon localhost/dbc
```

* Cambie la contraseña para el usuario `dbc`:
```bash
MODIFY USER dbc AS PASSWORD = new_password;
```

* Ahora puede abrir el puerto 1025 a Internet:
```bash
aws ec2 authorize-security-group-ingress \
  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \
  --ip-permissions '[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]'
```

## Limpiar
Para dejar de incurrir en cargos, elimine todos los recursos:
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

## Siguientes pasos
* [Consultar datos almacenados en el almacenamiento de objetos](../../manage-data/nos.md)

## Lectura adicional
* [Guía de instalación de Teradata® Studio™ y Studio™ Express](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introducción a BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink />


