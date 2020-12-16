---
title: Load keystores generated using the Eth 2.0 Launchpad tool
---

# Load Launchpad keystores

The Launchpad tool is used to create validators that participate in the Ethereum 2.0
proof-of-stake network. The tool generates an encrypted keystore file containing the validator
details. Load this keystore into Web3Signer to sign attestations and blocks with the validator
details.

This tutorial uses Teku and Web3Signer to run validators created on the Pyrmont testnet.
 
**Prerequisites**:

* [Teku installed].
* [Web3Signer installed].
* Web3Signer [slashing protection database].

## 1. Sync the Teku beacon node

Sync the Teku beacon chain node before submitting your deposit to avoid incurring inactivity
penalties if the validator is unable to perform its duties when the deposit is processed and
activated.

```bash
teku --network=pyrmont --metrics-enabled --rest-api-enabled
```

## 2. Generate validators

This step generates a validator on the Pyrmont testnet. Use the [ETH 2.0 Pyrmont launchpad] and
follow the step-by-step process to deposit your funds and generate the keystore.

The process includes installing the ETH 2.0 deposit CLI tool, to generate your validator keystores
locally. Keystores are generated in the `eth2.0-deposit-cli/validator_keys` folder. In this example
we generated a keystore named `keystore-m_12381_3600_0_0_0-1606109670.json`

!!! important

    Remember the password used to create the keystore because you'll need it later.

## 3. Create password file

You must create a plain text file that stores the password to decrypt the keystore.
In this example we create the `keystore-m_12381_3600_0_0_0-1606109670.txt` file in
the `eth2.0-deposit-cli/validator_keys` directory.

!!! example "keystore-m_12381_3600_0_0_0-1606109670.txt"

    ```none
    validatorPassword
    ```

## 4. Create the key configuration file

Create a separate key configuration file for each keystore file. The key configuration file defines
the type of signing key being used, and access details.

!!! important

    The configuration files must be YAML-formatted, and can use any naming format, but must have
    the `.yaml` extension.

```yaml
type: "file-keystore"
keyType: "BLS"
keystoreFile: "/Users/me/eth2.0-deposit-cli/validator_keys/keystore-m_12381_3600_0_0_0-1606109670.file"
keystorePasswordFile: "/Users/me/eth2.0-deposit-cli/validator_keys/keystore-m_12381_3600_0_0_0-1606109670.txt"
```

Store all key configuration files in a single directory. In his example `Users/me/keys`

## 5. Start Web3Signer

Start Web3Signer and specify the location of the key configuration files and
[slashing protection database].

```bash
web3signer --key-store-path=/Users/me/keys eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password
```

## 5. Start Teku
<!-- links -->
[Teku installed]: https://docs.teku.pegasys.tech/en/latest/HowTo/Get-Started/Installation-Options/Install-Binaries/
[Web3Signer installed]: ../HowTo/Get-Started/Install-Binaries.md
[ETH 2.0 Pyrmont launchpad]: https://pyrmont.launchpad.ethereum.org/
[slashing protection database]: ../HowTo/Configure-Slashing-Protection.md



