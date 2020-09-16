---
description: Getting started with Web3Signer
---

# Start Web3Signer

**Prerequisites**:

* [Signing key configuration files] to access the required signing keys.

Start Web3Signer and specify the location of the signing key configuration files
with the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option.

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/
    ```

Start the client, for example [Teku] by specifying the Web3Signer details.

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
