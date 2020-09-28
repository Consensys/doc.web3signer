---
description: Web3Signer command line interface subcommands
---

# Subcommands

The Web3Signer subcommands are used to specify the platform being used:

* `web3signer [Options] eth2 [Eth2 Options]`
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

### eth1

### eth2

#### azure-vault-enabled

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

#### azure-client-id

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

#### azure-client-secret

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

#### azure-tenant-id

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

#### azure-vault-name

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

### filecoin

#### network

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