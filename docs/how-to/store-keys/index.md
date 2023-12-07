---
title: Store signing keys
description: Store BLS12-381 and secp256k1 signing keys.
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store signing keys

Web3Signer supports BLS12-381 or secp256k1 signing keys stored in:

- Raw unencrypted files
- [Keystore files](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md)
- Vaults:
  - [HashiCorp Vault](vaults/hashicorp.md)
  - [Azure Key Vault](vaults/azure.md)
  - [AWS Secrets Manager](vaults/aws/aws-secrets-manager-consensuslayer.md)
- Hardware Security Modules (HSMs):
  - [YubiHSM 2](hsm/yubihsm2.md)
  - [USB Armory Mk II](hsm/usb-armory.md)

After storing keys, [load keys into Web3Signer](../load-keys.md).
