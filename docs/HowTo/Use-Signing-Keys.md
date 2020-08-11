---
description: Using signing keys
---

# Signing keys

Eth2Signer supports using validator signing keys stored in:

* Raw unencrypted files
* [Keystore files](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md)
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md).

[Each key requires a separate YAML configuration file] that defines how to access it.
The YAML files must be placed in a single directory specified using the
[`--key-store-path`](../Reference/CLI/CLI-Syntax.md#key-store-path) option.

!!! tip
    Files can be added or removed from the directory without needing to
    restart Eth2Signer.

The YAML file name must use the format `<validatorPublicKeyAddress>.yaml`. No two YAML
files can have the same key address in the file name.

!!! note
    The `0x` portion of the validator's public key is optional. For example,
    `b65c2a1dc6a8eaadae03d5849dd6ac614b32dc5f8af37e2eb4ced0c72fd69fabe90fc783b0435f5a36ff1338385ef83.yaml`
    is also acceptable.

<!-- Link -->
[Each key requires a separate YAML configuration file]: ../Reference/Key-Configuration-Files.md
