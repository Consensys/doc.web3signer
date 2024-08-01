---
title: Store signing keys
description: Store BLS12-381 and secp256k1 signing keys in Web3Signer.
sidebar_position: 2
keywords: [Hashicorp Vault, Azure Key Vault, AWS Secrets Manager, GCP Secret Manager, YubiHSM, USB Armory Mk II]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store signing keys

Web3Signer supports BLS12-381 (`Eth2`) or secp256k1 (`Eth1`) signing keys stored in the following ways:

| Key storage                          | SECP256K1 | BLS |
|--------------------------------------|:---------:|:---:|
| Raw files                            |     x     |  x  |
| [Keystore files]                     |     x     |  x  | 
| **Vaults**                           |
| [Hashicorp Vault]                    |     x     |  x  | 
| [Azure Key Vault]                    |     x     |  x  | 
| [AWS Secrets Manager]                |           |  x  | 
| [AWS KMS]                            |     x     |     | 
| [GCP Secret Manager]                 |           |  x  |
| **Hardware Security Modules (HSMs)** |           |     |
| [YubiHSM 2]                          |     x     |  x  |
| [USB Armory Mk II]                   |     x     |  x  |

Web3Signer supports `Eth1` signing from HSMs and Vaults, but needs to load private keys into memory for `Eth2` signing.  Make sure to follow [best practices](../../get-started/key-best-practices.md) when storing private keys.

After storing keys, [load keys into Web3Signer](../load-keys.md).

<!-- links -->

[Keystore files]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md
[HashiCorp Vault]: vaults/hashicorp.md
[Azure Key Vault]: vaults/azure.md
[AWS Secrets Manager]: vaults/aws/secrets-manager-consensus-layer.md
[AWS KMS]: vaults/aws/kms-execution-layer.md
[GCP Secret Manager]: vaults/gcp.md
[YubiHSM 2]: hsm/yubihsm2.md
[USB Armory Mk II]: hsm/usb-armory.md


