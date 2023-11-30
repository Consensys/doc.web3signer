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
  - [HashiCorp Vault](../store-keys/store-keys-vaults/hashicorp.md)
  - [Azure Key Vault](../store-keys/store-keys-vaults/azure.md)
  - [AWS Secrets Manager](../store-keys/store-keys-vaults/aws.md)
- Hardware Security Modules (HSMs):
  - [YubiHSM 2](../store-keys/store-keys-hsm/yubihsm2.md)
  - [USB Armory Mk II](../store-keys/store-keys-hsm/usb-armory.md)


