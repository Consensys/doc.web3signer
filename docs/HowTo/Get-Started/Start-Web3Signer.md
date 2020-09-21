---
description: Getting started with Web3Signer
---

# Start Web3Signer

**Prerequisites**:

* [Signing key configuration files] to access the required signing keys.

Start Web3Signer by specifying the platform to use, and the location of the signing key
configuration files.

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth2
    ```

In the command line:

* Use the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option to specify
    the location of the signing key configuration files.
* Specify the [subcommand] to indicate which platform to use. Valid commands are `eth1`, `eth2`, and
    `filecoin`. You can only specify one platform when starting Web3Signer. 

Start the client, for example [Teku] by specifying the Web3Signer details.

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[subcommand]: ../../Reference/CLI/CLI-Subcommands.md