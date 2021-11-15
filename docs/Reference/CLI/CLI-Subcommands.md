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

=== "Example"

    ```bash
    --azure-vault-enabled=true
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_ENABLED=true
    ```

=== "Configuration file"

    ```bash
    eth2.azure-vault-enabled: true
    ```

Allow Web3Signer to bulk load all keys from the specified Azure Vault.

#### `azure-client-id`

=== "Syntax"

    ```bash
    --azure-client-id=<STRING>
    ```

=== "Example"

    ```bash
    --azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_CLIENT_ID=87efaa5b-4029-4b54-98bb2e2e8a11
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_CLIENT_SECRET=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
    ```

=== "Configuration file"

    ```bash
    eth2.azure-client-secret: "0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z"
    ```

The secret used to access the vault along with the ID specified in [`azure-client-id`](#azure-client-id).

#### `azure-tenant-id`

=== "Syntax"

    ```bash
    --azure-tenant-id=<STRING>
    ```

=== "Example"

    ```bash
    --azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_TENANT_ID=34255fb0-379b-4a1a-bd47-d211ab86df81
    ```

=== "Configuration file"

    ```bash
    eth2.azure-tenant-id: "34255fb0-379b-4a1a-bd47-d211ab86df81"
    ```

The tenant ID of the Azure Portal instance being used.

#### `azure-vault-auth-mode`

=== "Syntax"

    ```bash
    --azure-vault-auth-mode=<STRING>
    ```

=== "Example"

    ```bash
    --azure-vault-auth-mode=USER_ASSIGNED_MANAGED_IDENTITY
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_AUTH_MODE=USER_ASSIGNED_MANAGED_IDENTITY
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --azure-vault-name=AzureKeyVault
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_AZURE_VAULT_NAME=AzureKeyVault
    ```

=== "Configuration file"

    ```bash
    eth2.azure-vault-name: "AzureKeyVault"
    ```

Name of the vault to access. Sub-domain of vault.azure.net.

#### network

=== "Syntax"

    ```bash
    --network=<NETWORK>
    ```

=== "Example"

    ```bash
    --network=mainnet
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_NETWORK=mainnet
    ```

=== "Configuration file"

    ```bash
    network: "mainnet"
    ```

Predefined network configuration.
Accepts a predefined network name, or file path or URL to a YAML configuration file. See the
[Ethereum 2.0 specification] for examples.

The default is `mainnet`.

!!! important

    If Teku connects to a network other than `mainnet`, then this option must be specified, and it
    must match the [`--network` value of the connected Teku client](https://docs.teku.consensys.net/HowTo/External-Signer/Use-External-Signer/).

Possible values are:

| Network   | Chain   | Type       | Description                                      |
|:----------|:--------|:-----------|:-------------------------------------------------|
| `mainnet` | Eth 2.0 | Production | Main network.                                    |
| `minimal` | Eth 2.0 | Test       | Used for local testing and development networks. |
| `pyrmont` | Eth 2.0 | Test       | Multi-client testnet.                            |
| `prater`  | Eth 2.0 | Test       | Multi-client testnet.                            |

#### `slashing-protection-db-password`

=== "Syntax"

    ```bash
    --slashing-protection-db-password=<PASSWORD>
    ```

=== "Example"

    ```bash
    --slashing-protection-db-password=changeme
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_PASSWORD=change
    ```

=== "Configuration file"

    ```bash
    eth2.slashing-protection-db-password: "changeme"
    ```

The password to connect to the slashing protection database.

#### `slashing-protection-db-pool-configuration-file`

=== "Syntax"

    ```bash
    --slashing-protection-db-pool-configuration-file=<FILE>
    ```

=== "Example"

    ```bash
    --slashing-protection-db-pool-configuration-file=/Users/me/config/HikariConfig.properties
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_POOL_CONFIGURATION_FILE=/Users/me/config/HikariConfig.properties
    ```

=== "Configuration file"

    ```bash
    eth2.slashing-protection-db-pool-configuration-file: "/Users/me/config/HikariConfig.properties"
    ```

[HikariCP connection pool configuration file](https://github.com/brettwooldridge/HikariCP#gear-configuration-knobs-baby).

Web3Signer uses HikariCP to manage database connections, and uses the default configuration values. The defaults perform
well in most deployments, but you can be override them with this option.

#### `slashing-protection-db-url`

=== "Syntax"

    ```bash
    --slashing-protection-db-url=<JDBC_URL>
    ```

=== "Example"

    ```bash
    --slashing-protection-db-url=jdbc:postgresql://localhost/web3signer
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_URL=jdbc:postgresql://localhost/web3signer
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --slashing-protection-db-username=postgres
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_USERNAME=postgres
    ```

=== "Configuration file"

    ```bash
    eth2.slashing-protection-db-username: "postgres"
    ```

The username to use when connecting to the slashing protection database.

#### `slashing-protection-enabled`

=== "Syntax"

    ```bash
    --slashing-protection-enabled=<BOOLEAN>
    ```

=== "Example"

    ```bash
    --slashing-protection-enabled=false
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_ENABLED=false
    ```

=== "Configuration file"

    ```bash
    eth2.slashing-protection-enabled: false
    ```

Enables Web3Signer [slashing protection]. If `true`, then all signing operations are validated against
historical data before signing.

The default is `true`.

#### `slashing-protection-pruning-at-boot-enabled`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-at-boot-enabled=<BOOLEAN>
    ```

=== "Example"

    ```bash
    --slashing-protection-pruning-at-boot-enabled=false
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_AT_BOOT_ENABLED=false
    ```

=== "Configuration file"

    ```yaml
    eth2.slashing-protection-pruning-at-boot-enabled: false
    ```

When set to `false`, [slashing protection database pruning](../../HowTo/Configure-Slashing-Protection.md#prune-the-slashing-protection-database)
is disabled at boot and only takes place at the scheduled [pruning intervals](#slashing-protection-pruning-interval).

The default is `true`.

#### `slashing-protection-pruning-enabled`

=== "Syntax"

    ```bash
    --slashing-protection-pruning-enabled=<BOOLEAN>
    ```

=== "Example"

    ```bash
    --slashing-protection-pruning-enabled=true
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_ENABLED=true
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --slashing-protection-pruning-epochs-to-keep=12000
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_EPOCHS_TO_KEEP=12000
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --slashing-protection-pruning-interval=48
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_INTERVAL=48
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --slashing-protection-pruning-slots-per-epoch=20
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_SLOTS_PER_EPOCH=20
    ```

=== "Configuration file"

    ```yaml
    eth2.slashing-protection-pruning-slots-per-epoch: 20
    ```

Number of slots per epoch.
This number multiplied by the number of epochs to keep determines what blocks to keep when pruning the slashing protection database.

The default is 32 as defined on MainNet.

### `eth2 export`

Exports the slashing protection database to a file.

#### `to`

=== "Syntax"

    ```bash
    --to=<FILE>
    ```

=== "Example"

    ```bash
    --to=/Users/me/my_node/interchange.json
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_EXPORT_TO=/Users/me/my_node/interchange.json
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --from=/Users/me/my_node/interchange.json
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_ETH2_IMPORT_FROM=/Users/me/my_node/interchange.json
    ```

=== "Configuration file"

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

=== "Example"

    ```bash
    --network=TESTNET
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_FILECOIN_NETWORK=TESTNET
    ```

=== "Configuration file"

    ```bash
    filecoin.network: "TESTNET"
    ```

Predefined network configuration. Accepts a predefined network name. The default is `TESTNET`.

<!-- links -->
[include the port number in the database URL]: https://jdbc.postgresql.org/documentation/head/connect.html
[slashing protection]: ../../Concepts/Slashing-Protection.md
[validator client interchange format]: https://eips.ethereum.org/EIPS/eip-3076
[Ethereum 2.0 specification]: https://github.com/ethereum/eth2.0-specs/tree/master/configs
