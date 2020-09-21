---
description: Web3Signer command line interface subcommands
---

# Subcommands

The Web3Signer subcommands are used to specify the platform being used:

* `web3signer [Options] eth2`
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
* [`web3signer help hashicorp-signer`](#eth2)
* [`web3signer help azure-signer`](#filecoin)


## Options

### eth1

### eth2

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