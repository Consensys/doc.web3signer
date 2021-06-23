---
description: Getting started with Web3Signer
---

# Start Web3Signer

**Prerequisites**:

* [Signing key configuration files] to access the required signing keys.

Web3Signer supports the Ethereum 1, Ethereum 2, and Filecoin platforms, so you must specify the
signing mode, and the location of the signing key configuration files when starting Web3Signer.

=== "Ethereum 1.0"

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ eth1
    ```

=== "Ethereum 2.0"

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

## Ethereum 2.0 considerations

Ethereum 2.0 [slashing protection] is enabled by default, and you must specify
the details the [slashing protection database], or disable slashing protection using the
[`--slashing-protection-db-enabled`](../../Reference/CLI/CLI-Subcommands.md#slashing-protection-enabled)
command line option.

!!! note

     Web3Signer also allows you to [bulk load Ethereum 2.0 signing keys] stored in Azure Key Vault.

Start the client, for example [Teku] by specifying the Web3Signer details.

!!! important

    The [`--network`](../../Reference/CLI/CLI-Subcommands.md#network) option must match the
    network used by the Teku client.

    If Teku connects to a network other than `mainnet`, then the
    [`--network`](../../Reference/CLI/CLI-Subcommands.md#network) option must be specified.

<!-- Links -->
[Signing key configuration files]: ../Use-Signing-Keys.md
[Teku]: https://docs.teku.consensys.net/en/latest/HowTo/External-Signer/Use-External-Signer/
[subcommand]: ../../Reference/CLI/CLI-Subcommands.md
[bulk load Ethereum 2.0 signing keys]: ../Use-Signing-Keys.md#bulk-loading-ethereum-20-keys
[slashing protection]: ../../Concepts/Slashing-Protection.md
[slashing protection database]: ../../HowTo/Configure-Slashing-Protection.md
