---
description: Getting started with Eth2Signer
---

# Start Eth2Signer

**Prerequisites**:

* [Signing key configuration files] for the required validators.

Start Eth2Signer and specify the location of the signing key configuration files
with the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option.

!!! example

    ```bash
    eth2signer --key-store-path=/Users/me/keyFiles/
    ```

[Start Teku] by specifying the Eth2Signer details.

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Start Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/Get-Started/Use-External-Signer/