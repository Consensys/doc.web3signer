---
description: Web3Signer command line interface subcommands
---

# Subcommands

The Web3Signer subcommands are used to specify the platform being used:

* `web3signer [Options] eth2 [Eth2 Options]`
* `web3signer [Options] eth2 export [Eth2 Export Options]`
* `web3signer [Options] eth2 import [Eth2 Import Options]`
* `web3signer [Options] eth1`
* `web3signer [Options] filecoin [Filecoin Options]`

## Specifying subcommand options

The subcommand must be specified on the command line, but the subcommand options can be specified:

* On the command line
* As [environment variables](#environment-variables)
* In a YAML configuration file.

For example, you can set the options for the `filecoin` subcommand in an environment variables
`export WEB3SIGNER_FILECOIN_NETWORK=TESTNET`, but the subcommand must be specified in the command line

!!! example

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ filecoin
    ```

## Environment variables

For each subcommand option, the equivalent environment variable is:

* Upper-case
* `_` replaces `-`
* Has a `WEB3SIGNER_` + `<SIGNING_OPTION>_` prefix. For example set `filecoin --network`
    using the `WEB3SIGNER_FILECOIN_NETWORK` environment variable.

!!! note

    Only subcommand options can be set in environment variables. The actual subcommand must be
    specified in the command line.

## View help

To view the command line help for the subcommands:

* [`web3signer help eth1`](#eth1)
* [`web3signer help eth2`](#eth2)
* [`web3signer help filecoin`](#filecoin)

## Options

### `eth1`

### `eth2`

#### `azure-vault-enabled`

=== "Syntax"

    ```bash
    --azure-vault-enabled=<BOOLEAN>
    ```

=== "Command Line"

    ```bash
    --azure-vault-enabled=true
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_ENABLED=true
    ```

=== "Configuration File"

    ```bash
    eth2.azure-vault-enabled: true
    ```

Allow Web3Signer to bulk load all keys from the specified Azure Vault.

#### `azure-client-id`

=== "Syntax"

    ```bash
    --azure-client-id=<STRING>
    ```

=== "Command Line"

    ```bash
    --azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_CLIENT_ID=87efaa5b-4029-4b54-98bb2e2e8a11
    ```

=== "Configuration File"

    ```bash
    eth2.azure-client-id: "87efaa5b-4029-4b54-98bb2e2e8a11"
    ```

ID used to authenticate with Azure Key Vault.

Required when [`--azure-vault-auth-mode`](#azure-vault-auth-mode) is `CLIENT_SECRET` or
`USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-client-secret`

=== "Syntax"

    ```bash
    --azure-client-secret=<STRING>
    ```

=== "Command Line"

    ```bash
    --azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_CLIENT_SECRET=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
    ```

=== "Configuration File"

    ```bash
    eth2.azure-client-secret: "0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z"
    ```

The secret used to access the vault along with the ID specified in [`azure-client-id`](#azure-client-id).

#### `azure-tenant-id`

=== "Syntax"

    ```bash
    --azure-tenant-id=<STRING>
    ```

=== "Command Line"

    ```bash
    --azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_TENANT_ID=34255fb0-379b-4a1a-bd47-d211ab86df81
    ```

=== "Configuration File"

    ```bash
    eth2.azure-tenant-id: "34255fb0-379b-4a1a-bd47-d211ab86df81"
    ```

The tenant ID of the Azure Portal instance being used.

#### `azure-vault-auth-mode`

=== "Syntax"

    ```bash
    --azure-vault-auth-mode=<STRING>
    ```

=== "Command Line"

    ```bash
    --azure-vault-auth-mode=USER_ASSIGNED_MANAGED_IDENTITY
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_AUTH_MODE=USER_ASSIGNED_MANAGED_IDENTITY
    ```

=== "Configuration File"

    ```bash
    eth2.azure-vault-auth-mode: "USER_ASSIGNED_MANAGED_IDENTITY"
    ```

Authentication mode for Azure Vault. Options are `CLIENT_SECRET`, `SYSTEM_ASSIGNED_MANAGED_IDENTITY`,
and `USER_ASSIGNED_MANAGED_IDENTITY`. Defaults to `CLIENT_SECRET`.

Set [`--azure-client-id`](#azure-client-id) if using `CLIENT_SECRET` or
`USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-vault-name`

=== "Syntax"

    ```bash
    --azure-vault-name=<STRING>
    ```

=== "Command Line"

    ```bash
    --azure-vault-name=AzureKeyVault
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_NAME=AzureKeyVault
    ```

=== "Configuration File"

    ```bash
    eth2.azure-vault-name: "AzureKeyVault"
    ```

Name of the vault to access. Sub-domain of vault.azure.net.

#### `slashing-protection-db-password`

=== "Syntax"

    ```bash
    --slashing-protection-db-password=<PASSWORD>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-db-password=changeme
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_PASSWORD=change
    ```

=== "Configuration File"

    ```bash
    eth2.slashing-protection-db-password: "changeme"
    ```

The password to connect to the slashing protection database.

#### `slashing-protection-db-url`

=== "Syntax"

    ```bash
    --slashing-protection-db-url=<JDBC_URL>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-db-url=jdbc:postgresql://localhost/web3signer
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_URL=jdbc:postgresql://localhost/web3signer
    ```

=== "Configuration File"

    ```bash
    eth2.slashing-protection-db-url: "jdbc:postgresql://localhost/web3signer"
    ```

The Java Database Connectivity (JDBC) URL of the slashing protection database.

!!! note

    If using a non-default port number for your PostgreSQL database, then
    [include the port number in the database URL].

#### `slashing-protection-db-username`

=== "Syntax"

    ```bash
    --slashing-protection-db-username=<USERNAME>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-db-username=postgres
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_USERNAME=postgres
    ```

=== "Configuration File"

    ```bash
    eth2.slashing-protection-db-username: "postgres"
    ```

The username to use when connecting to the slashing protection database.

#### `slashing-protection-enabled`

=== "Syntax"

    ```bash
    --slashing-protection-db-enabled=<BOOLEAN>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-db-enabled=false
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_ENABLED=false
    ```

=== "Configuration File"

    ```bash
    eth2.slashing-protection-db-enabled: false
    ```

Enables Web3Signer [slashing protection]. If `true`, then all signing operations are validated against
historical data before signing.

The default is `true`.

#### `slashing-protection-pruning-enabled`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-enabled=<BOOLEAN>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-pruning-enabled=true
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_ENABLED=true
    ```

=== "Configuration File"

    ```yaml
    eth2.slashing-protection-pruning-enabled: true
    ```

Enables [slashing protection database pruning](../../HowTo/Configure-Slashing-Protection.md#prune-the-slashing-protection-database).

The default is `false`.

#### `slashing-protection-pruning-epochs-to-keep`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-epochs-to-keep=<LONG>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-pruning-epochs-to-keep=12000
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_EPOCHS_TO_KEEP=12000
    ```

=== "Configuration File"

    ```yaml
    eth2.slashing-protection-pruning-epochs-to-keep: 12000
    ```

Number of epochs to keep when pruning the slashing protection database.

The default is 10000.

#### `slashing-protection-pruning-interval`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-interval=<LONG>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-pruning-interval=48
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_INTERVAL=48
    ```

=== "Configuration File"

    ```yaml
    eth2.slashing-protection-pruning-interval: 48
    ```

Hours between slashing protection database pruning operations.

The default is 24.

#### `slashing-protection-pruning-slots-per-epoch`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-slots-per-epoch=<LONG>
    ```

=== "Command Line"

    ```bash
    --slashing-protection-pruning-slots-per-epoch=20
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_SLOTS_PER_EPOCH=20
    ```

=== "Configuration File"

    ```yaml
    eth2.slashing-protection-pruning-slots-per-epoch: 20
    ```

Number of slots per epoch to use when calculating the number of slots to prune in the slashing protection database.

This typically does not need changing and defaults to 32, the value used on mainnet.

### `eth2 export`

Exports the slashing protection database to a file.

#### `to`

=== "Syntax"

    ```bash
    --to=<FILE>
    ```

=== "Command Line"

    ```bash
    --to=/Users/me/my_node/interchange.json
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_EXPORT_TO=/Users/me/my_node/interchange.json
    ```

=== "Configuration File"

    ```bash
    eth2.export.to: /Users/me/my_node/interchange.json
    ```

The file to export the slashing protection database to. The exported file uses the
[validator client interchange format].

### `eth2 import`

Import a slashing protection database from a file.

#### `from`

=== "Syntax"

    ```bash
    --from=<FILE>
    ```

=== "Command Line"

    ```bash
    --from=/Users/me/my_node/interchange.json
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_ETH2_IMPORT_FROM=/Users/me/my_node/interchange.json
    ```

=== "Configuration File"

    ```bash
    eth2.import.from: /Users/me/my_node/interchange.json
    ```

The file to import the slashing protection database from. The file must be formatted in the
[validator client interchange format]

### `filecoin`

#### `network`

=== "Syntax"

    ```bash
    --network=<NETWORK>
    ```

=== "Command Line"

    ```bash
    --network=TESTNET
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_FILECOIN_NETWORK=TESTNET
    ```

=== "Configuration File"

    ```bash
    filecoin.network: "TESTNET"
    ```

Predefined network configuration. Accepts a predefined network name. The default is `TESTNET`.

<!-- links -->
[include the port number in the database URL]: https://jdbc.postgresql.org/documentation/head/connect.html
[slashing protection]: ../../Concepts/Slashing-Protection.md
[validator client interchange format]: https://eips.ethereum.org/EIPS/eip-3076
