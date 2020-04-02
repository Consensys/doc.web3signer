---
description: Using signing keys
---

# Signing keys

Eth2Signer supports multiple validator signing keys that can be stored in:

* Raw unencrypted files
* BLS keystore file
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md).

Each key requires a separate YAML file that defines the parameters to access the key.
The YAML files must be placed in a single directory specified using the 
[`--key-store-path`](../Reference/CLI/CLI-Syntax.md#key-store-path) option.

!!! tip
    Files can be added or removed from the directory without needing to
    restart Eth2Signer.

The YAML file name must use the format `[<prefix>]<validatorPublicKeyAddress>.yaml`. The
prefix can be anything you want. No two YAML files can have the same key address
in the file name, even if the prefix differs.

The `0x` portion of the validator's public key must be removed.
For example,
`b65c2a1dc6a8eaadae03d5849dd6ac614b32dc5f8af37e2eb4ced0c72fd69fabe90fc783b0435f5a36ff1338385ef837.yaml`.