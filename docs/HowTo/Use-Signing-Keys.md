---
description: Using signing keys
---

# Signing keys

Web3Signer supports BLS12-381 or secp256k1 signing keys stored in:

* Raw unencrypted files
* [Keystore files](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md)
* [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md)
* [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md).

[Each key requires a separate YAML configuration file] that defines how to access it.
The YAML files must be placed in a single directory specified using the
[`--key-store-path`](../Reference/CLI/CLI-Syntax.md#key-store-path) option. The `.yaml` file can
use any naming format.

!!! tip
    Files can be added or removed from the directory without needing to
    restart Web3Signer.

<!-- Link -->
[Each key requires a separate YAML configuration file]: ../Reference/Key-Configuration-Files.md
