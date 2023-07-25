---
title: Use signing keys
description: Use BLS12-381 and secp256k1 signing keys.
sidebar_position: 2
---

# Use signing keys

Web3Signer supports BLS12-381 or secp256k1 signing keys stored in:

- Raw unencrypted files
- [Keystore files](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md)
- Vaults:
  - [HashiCorp Vault](store-keys-vaults/hashicorp.md)
  - [Azure Key Vault](store-keys-vaults/azure.md)
  - [AWS Secrets Manager](store-keys-vaults/aws.md)
- Hardware Security Modules (HSMs):
  - [YubiHSM 2](store-keys-hsm/yubihsm2.md)
  - [USB Armory Mk II](store-keys-hsm/usb-armory.md)

You can configure access to the signing key by:

- [Creating a key configuration file].
- Using the [`eth2` subcommand options](../Reference/CLI/subcommands.md#eth2) to bulk load consensus
  layer signing keys stored in [Azure Key Vault](#azure-key-vault), [AWS Secrets Manager](#aws-secrets-manager),
  or [keystore files](#keystore-files).
- Using the [`eth1` subcommand options](../Reference/CLI/subcommands.md#eth1) to bulk load execution
    layer signing keys stored in [Azure Key Vault](#azure-key-vault).

:::note
Bulk loading is only available when using keys stored in Azure Key Vault, AWS Secrets Manager,
or keystore files, and can be used in combination with key configuration files.
:::

## Use key configuration files

For each signing key, define the parameters to access the key in a [key configuration file].
You can create a separate configuration file for each key, or specify multiple configurations in a
single file by adding a triple-dash separator (`---`) between configurations.

The configuration file must be YAML-formatted, and can use any naming format, but must have the `.yaml` extension.

Place one or more key configuration files in a single directory which you specify when starting Web3Signer.
Use the [`--key-store-path`](../Reference/CLI/options.md#key-store-path) option to specify the
location of the key configuration files.

```bash
web3signer --key-store-path=/Users/me/keyFiles/ eth2
```

## Bulk load keys

### Azure Key Vault

You can bulk load consensus layer keys that are stored in Azure Key Vault using the Web3Signer
[`eth2` subcommand options](../Reference/CLI/subcommands.md#eth2).

<!--tabs-->

# Consensus layer client

```bash
web3signer eth2 --azure-vault-enabled=true --azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11 \
--azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z \
--azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81 \
--azure-vault-name=AzureKeyVault
```

# Execution layer client

```bash
web3signer eth1 --azure-vault-enabled=true --azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11 \
--azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z \
--azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81 \
--azure-vault-name=AzureKeyVault
```

<!--/tabs-->

### AWS Secrets Manager

You can bulk load consensus layer keys that are stored in AWS Secrets Manager using the Web3Signer
[`eth2` subcommand options](../Reference/CLI/subcommands.md#eth2).

The AWS bulk load mode supports loading multiple consensus layer keys from the same secret, if keys
are stored with a line terminating character such as `\n`.
This saves cost when dealing with a large number of keys.
Up to 200 keys can be stored under a secret name.

```bash
web3signer eth2 --aws-secrets-enabled=true --aws-secrets-access-key-id=AKIA...EXAMPLE \
--aws-secrets-secret-access-key=sk...EXAMPLE \
--aws-secrets-region=us-east-2
```

### Keystore files

You can bulk load consensus layer keys that are stored as keystore files using the Web3Signer
[`eth2` subcommand options](../Reference/CLI/subcommands.md#eth2).

```bash
web3signer eth2 --keystores-path=/Users/me/keystores \
--keystores-passwords-path=/Users/me/passwds
```

Use [`--keystores-password-file`](../Reference/CLI/subcommands.md#keystores-password-file) or
[`--keystores-passwords-path`](../Reference/CLI/subcommands.md#keystores-passwords-path) to specify
keystore passwords.

## Reload new keys

If you add new keys to an existing set of validators, or modify the key configuration files, reload
the keys to ensure Web3Signer registers the new or modified keys.
Use the [`reload`](https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Reload-Signer-Keys)
endpoint to reload the keys in Web3Signer.

<!--tabs-->

# curl request

```bash
curl -X POST http://localhost:9000/reload
```

# Result

```json
200 Call is successful
```

<!--/tabs-->

## Manage keys

You can manage your keys using the [key manager API
endpoints](https://consensys.github.io/web3signer/web3signer-eth2.html#tag/Keymanager).
You can [list keys](#list-keys), [import keystores](#import-keystores), and [delete keys](#delete-keys).

Enable the key manager API by running Web3Signer using the
[`--key-manager-api-enabled`](../Reference/CLI/subcommands.md#key-manager-api-enabled) subcommand option.

:::caution warning
The key manager API is an early access feature and is still in development.
:::

### List keys

List all validating public keys known to and decrypted by the keystore using the
[`list keys` endpoint](https://consensys.github.io/web3signer/web3signer-eth2.html#operation/KEYMANAGER_LIST).

<!--tabs-->

# curl request

```bash
curl -X GET http://localhost:9000/eth/v1/keystores
```

# Result

```json
{
  "data": [
    {
      "validating_pubkey": "0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a",
      "derivation_path": "m/12381/3600/0/0/0",
      "readonly": true
    }
  ]
}
```

<!--/tabs-->

### Import keystores

Import keystores generated by the consensus layer deposit CLI tooling using the
[`import keystores` endpoint](https://consensys.github.io/web3signer/web3signer-eth2.html#operation/KEYMANAGER_IMPORT).

<!--tabs-->

# curl request

```bash
curl -X POST http://127.0.0.1:9000/eth/v1/keystores --header "Content-Type: application/json"
--data '{
  "keystores": [
    "{\"version\":4,\"uuid\":\"9f75a3fa-1e5a-49f9-be3d-f5a19779c6fa\",\"path\":\"m/12381/3600/0/0/0\",\"pubkey\":\"0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a\",\"crypto\":{\"kdf\":{\"function\":\"pbkdf2\",\"params\":{\"dklen\":32,\"c\":262144,\"prf\":\"hmac-sha256\",\"salt\":\"8ff8f22ef522a40f99c6ce07fdcfc1db489d54dfbc6ec35613edf5d836fa1407\"},\"message\":\"\"},\"checksum\":{\"function\":\"sha256\",\"params\":{},\"message\":\"9678a69833d2576e3461dd5fa80f6ac73935ae30d69d07659a709b3cd3eddbe3\"},\"cipher\":{\"function\":\"aes-128-ctr\",\"params\":{\"iv\":\"31b69f0ac97261e44141b26aa0da693f\"},\"message\":\"e8228bafec4fcbaca3b827e586daad381d53339155b034e5eaae676b715ab05e\"}}}"
  ],
  "passwords": [
    "ABCDEFGH01234567ABCDEFGH01234567"
  ],
    "slashing_protection": "{\"metadata\":{\"interchange_format_version\":\"5\",\"genesis_validators_root\":\"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2\"},\"data\":[{\"pubkey\":\"0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a\",\"signed_blocks\":[],\"signed_attestations\":[]}]}"
  }'
```

# Result

```json
{
  "data": [
    {
      "status": "imported",
      "message": "string"
    }
  ]
}
```

<!--/tabs-->

### Delete keys

Delete keys using the [`delete keys`
endpoint](https://consensys.github.io/web3signer/web3signer-eth2.html#operation/KEYMANAGER_DELETE).

<!--tabs-->

# curl request

```bash
curl -X DELETE http://localhost:9000/eth/v1/keystores --data '{"pubkeys": ["0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a"]}'
```

# Result

```json
{
  "data": [
    {
      "status": "deleted",
      "message": "string"
    }
  ],
  "slashing_protection": "{\"metadata\":{\"interchange_format_version\":\"5\",\"genesis_validators_root\":\"0xcf8e0d4e9587369b2301d0790347320302cc0943d5a1884560367e8208d920f2\"},\"data\":[{\"pubkey\":\"0x93247f2209abcacf57b75a51dafae777f9dd38bc7053d1af526f220a7489a6d3a2753e5f3e8b1cfe39b56f43611df74a\",\"signed_blocks\":[],\"signed_attestations\":[]}]}"
}
```

<!--/tabs-->

<!-- Link -->

[key configuration file]: ../Reference/key-config-file-params.md
[Creating a key configuration file]: #use-key-configuration-files
