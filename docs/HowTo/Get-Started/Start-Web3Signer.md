---
description: Getting started with Web3Signer
---

# Start Web3Signer

!!! note

    This documentation has been updated in line with the name changes [recommended by the Ethereum Foundation](https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/).
    The execution layer is formerly "Ethereum 1.0." The consensus layer is formerly "Ethereum 2.0."

**Prerequisites**:

* [Signing key configuration files] to access the required signing keys.

Web3Signer supports execution layer clients, consensus layer clients, and Filecoin platforms, so you must specify the
signing mode, and the location of the signing key configuration files when starting Web3Signer.

=== "Execution layer client"

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth1
    ```

=== "Consensus layer client"

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password
    ```

=== "Filecoin"

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ filecoin
    ```

In the command line:

* Use the [`--key-store-path`](../../Reference/CLI/CLI-Syntax.md#key-store-path) option to specify
    the location of the signing key configuration files.
* Specify the [subcommand] to indicate which signing mode to use. Valid subcommands are `eth1`,
    `eth2`, and `filecoin`. You can only specify one signing mode when starting Web3Signer.

## Consensus layer considerations

Consensus layer [slashing protection] is enabled by default, and you must specify
the details the [slashing protection database], or disable slashing protection using the
[`--slashing-protection-db-enabled`](../../Reference/CLI/CLI-Subcommands.md#slashing-protection-enabled)
command line option.

!!! note

     Web3Signer also allows you to [bulk load consensus layer signing keys] stored in Azure Key Vault.

Start the client, for example [Teku] by specifying the Web3Signer details.

!!! important

    If Teku connects to a network other than `mainnet`, then the
    [`--network`](../../Reference/CLI/CLI-Subcommands.md#network) option must be specified, and it
    must match the network used by the Teku client.

## Confirm Web3Signer is running

Use the [`upcheck`](https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Server-Status) endpoint
to confirm Web3Signer is connected and running.

!!! example

    === "curl request"

        ```bash
        curl -X GET http://localhost:9000/upcheck
        ```

    === "Result"

        ```json
        200 OK
        ```

Web3Signer by default also performs a health check on the
[slashing protection database](../../HowTo/Configure-Slashing-Protection.md).

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Teku]: https://docs.teku.consensys.net/en/latest/HowTo/External-Signer/Use-External-Signer/
[subcommand]: ../../Reference/CLI/CLI-Subcommands.md
[bulk load consensus layer signing keys]: ../Use-Signing-Keys.md#bulk-loading-consensus-layer-keys
[slashing protection]: ../../Concepts/Slashing-Protection.md
[slashing protection database]: ../../HowTo/Configure-Slashing-Protection.md
