---
description: Signing transactions with multiple keys.
---

# Start EthSigner with multiple signing keys

EthSigner supports transaction signing using [multiple keys](../HowTo/Use-Multiple-Signers.md).

This tutorial covers configuring multiple keys using V3 keystore files. To
configure keys for [Hashicorp Vault](../HowTo/Store-Keys/Use-Hashicorp.md)
or [Azure Key Vault](../HowTo/Store-Keys/Use-Azure.md), update the
[TOML configuration file](../Reference/Multikey-Parameters.md) accordingly.

## Prerequisites

* [EthSigner](../HowTo/Get-Started/Install-Binaries.md)
* [Hyperledger Besu](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Install-Binaries/)
* [Node.js](https://nodejs.org/en/download/)
* [web3.js](https://github.com/ethereum/web3.js/)

## Start Besu

[Start Besu](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Starting-node/) with the
[`--rpc-http-port`](https://besu.hyperledger.org/en/stable/Reference/CLI/CLI-Syntax/#rpc-http-port)
option set to `8590`.

!!! example

    ```bash
    besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-whitelist=* --rpc-http-enabled --rpc-http-port=8590 --data-path=/Users/me/Datadir
    ```

## Create password and key files

You can create one or more password and V3 Keystore key files. Create a text
file containing the password for the V3 Keystore key file to be created
(for example, `passwordFile`).

!!! attention "Password text file must not contain characters other than those used in your password"
    EthSigner reads the password file as binary and any character in the file is
    considered part of your password.

    _Some POSIX compliant editors automatically add an end-of-line in text files.
    If your editor adds an end-of-line character, the end-of-line is considered
    part of your password._

    Use the following command to ensure the password file is correct:

    ```bash
    echo -n "Type your password:";read -s password;echo -ne $password > passwordFile;
    ```

    Enter the password when prompted.

Use the [web3.js library](https://github.com/ethereum/web3.js/) to create a key file where:

* `<AccountPrivateKey>` is the private key of the account with which EthSigner
   will sign transactions.
* `<Password>` is the password for the key file being created. The password must
   match the password saved in the  password file created previously
   (`passwordFile` in this example).

!!! example

    ```javascript linenums="1" tab="Create Key File"
    const Web3 = require('web3')

    // Web3 initialization (should point to the JSON-RPC endpoint)
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8590'))

    var V3KeyStore = web3.eth.accounts.encrypt("<AccountPrivateKey>", "<Password>");
    console.log(JSON.stringify(V3KeyStore));
    process.exit();
    ```

    ```javascript linenums="1" tab="Example"
    const Web3 = require('web3')

    // Web3 initialization (should point to the JSON-RPC endpoint)
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8590'))

    var V3KeyStore = web3.eth.accounts.encrypt("0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63", "password");
    console.log(JSON.stringify(V3KeyStore));
    process.exit();
    ```

Copy and paste the example JS script to a file (for example, `createKeyFile.js`)
and replace the placeholders.

Use the JS script to display the text for the key file:

```bash
node createKeyFile.js
```

Copy and paste the text to a file (for example, `keyFile`). The file is your
V3 Keystore key file. Each key file requires a TOML file.

## Create the TOML File

Create the TOML file that contains the settings to access the key file.
Each key that signs transactions requires a TOML file.

The file name must use the format `[<prefix>]<accountAddress>.toml`. The `0x`
portion of the account address must be removed.
For example, `78e6e236592597c09d5c137c2af40aecd42d12a2.toml`.

!!! example

    ```
    [metadata]
    createdAt = 2019-11-05T08:15:30-05:00
    description = "File based configuration"

    [signing]
    type = "file-based-signer"
    key-file = "/Users/me/project/keyFile"
    password-file = "/Users/me/project/passwordFile"
    ```

## Start EthSigner

Start EthSigner with options:

* `chain-id` is the chain ID specified in the [Besu genesis file](https://besu.hyperledger.org/en/stable/Reference/Config-Items/).

* `downstream-http-port` is the `rpc-http-port` specified for Besu
  (`8590` in this example).

* `directory` is the location of TOML file [created above](#create-the-toml-file).

!!! example

    ```
    ethsigner --chain-id=2018 --downstream-http-port=8590 multikey-signer --directory=/Users/me/project
    ```

## Confirm EthSigner is up

Use the `upcheck` endpoint to confirm EthSigner is running.

!!! example

    ```bash tab="curl HTTP request"
    curl -X GET http://127.0.0.1:8545/upcheck
    ```

    ```json tab="Result"
    I'm up
    ```

## Confirm EthSigner passing requests to Besu

Request the current block number using [`eth_blockNumber`](https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_blocknumber)
with the EthSigner JSON-RPC endpoint (`8545` in this example):

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":51}' http://127.0.0.1:8545
```

You can now [use EthSigner to sign transactions](../HowTo/Transactions/Make-Transactions.md) with
the keys stored in the V3 Keystore key files.
