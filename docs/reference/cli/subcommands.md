---
title: Subcommands
description: Web3Signer subcommands reference
sidebar_position: 2
---

# Subcommands

:::caution Filecoin deprecation notice

Web3Signer has deprecated Filecoin and will remove it in a future release. If you still require this feature, we encourage
community members to maintain the code by creating a fork and submitting pull requests. Alternatively, you can continue
using an older version of Web3Signer that still supports Filecoin.

:::

Use the Web3Signer subcommands to specify the platform being used:

- `web3signer [options] eth2 [Eth2 options]`
- `web3signer [options] eth2 export [Eth2 export options]`
- `web3signer [options] eth2 import [Eth2 import options]`
- `web3signer [options] eth1`
- `web3signer [options] filecoin [Filecoin options]`
- `web3signer [options] watermark-repair [watermark repair options]`

:::note
This documentation has been updated in line with the name changes [recommended by the Ethereum
Foundation](https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/).
The `eth1` subcommands relate to the execution layer, previously called “Ethereum 1.0.”
The `eth2` subcommands relate to the consensus layer, previously called “Ethereum 2.0.”
:::

## Specify subcommand options

The subcommand must be specified on the command line, but the subcommand options can be specified:

- On the command line.
- As environment variables. For each subcommand option, the equivalent environment variable is:
  - Uppercase.
  - `_` replaces `-`.
  - Has a `WEB3SIGNER_` + `<SIGNING_OPTION>_` prefix.
- In a YAML configuration file.

For example, you can set the `--network` option for the `filecoin` subcommand in an environment
variable `export WEB3SIGNER_FILECOIN_NETWORK=TESTNET`, but the subcommand must be specified in the
command line.

```bash
web3signer --key-store-path=/Users/me/keyFiles/ filecoin
```

## View help

To view the command line help for the subcommands:

- [`web3signer help eth1`](#eth1)
- [`web3signer help eth2`](#eth2)
- [`web3signer help filecoin`](#filecoin)
- [`web3signer help watermark-repair`](#watermark-repair)

## Options

### `eth1`

#### `aws-connection-cache-size`

<!--tabs-->

# Syntax

```bash
--aws-connection-cache-size=<LONG>
```

# Example

```bash
--aws-connection-cache-size=5
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_CONNECTION_CACHE_SIZE=5
```

# Configuration file

```bash
eth1.aws-connection-cache-size: 5
```

<!--/tabs-->

When [loading multiple keys from AWS Secrets
Manager](../../how-to/store-keys-vaults/aws.md#cache-aws-secrets-manager-when-loading-multiple-keys),
set to the maximum number of connections to cache.
The default is 1.

#### `aws-endpoint-override`

<!--tabs-->

# Syntax

```bash
--aws-endpoint-override=<ENDPOINT_URL>
```

# Example

```bash
--aws-endpoint-override=http://localstack:4566
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_ENDPOINT_OVERRIDE=http://localstack:4566
```

# Configuration file

```bash
eth1.aws-endpoint-override="http://localstack:4566"
```

<!--/tabs-->

Endpoint override for AWS KMS.
This is useful for local testing against LocalStack.

#### `aws-kms-access-key-id`

<!--tabs-->

# Syntax

```bash
--aws-kms-access-key-id=<STRING>
```

# Example

```bash
--aws-kms-access-key-id=AKIA...EXAMPLE
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_ACCESS_KEY_ID=AKIA...EXAMPLE
```

# Configuration file

```bash
eth1.aws-kms-access-key-id: "AKIA...EXAMPLE"
```

<!--/tabs-->

AWS Access Key ID to authenticate AWS KMS. Required for `SPECIFIED` authentication mode.

#### `aws-kms-auth-mode`

<!--tabs-->

# Syntax

```bash
--aws-kms-auth-mode=<STRING>
```

# Example

```bash
--aws-kms-auth-mode=ENVIRONMENT
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_SECRETS_AUTH_MODE=ENVIRONMENT
```

# Configuration file

```bash
eth1.aws-secrets-auth-mode: "ENVIRONMENT"
```

<!--/tabs-->

Authentication mode for AWS KMS.
Options are `SPECIFIED` and `ENVIRONMENT`.
The default is `SPECIFIED`.

Set [`--aws-kms-access-key-id`](#aws-kms-access-key-id),
[`--aws-kms-secret-access-key`](#aws-kms-secret-access-key), and
[`--aws-kms-region`](#aws-kms-region) if using `SPECIFIED`.

#### `aws-kms-client-cache-size`

<!--tabs-->

# Syntax

```bash
--aws-kms-client-cache-size=<LONG>
```

# Example

```bash
--aws-kms-client-cache-size=5
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_CLIENT_CACHE_SIZE=5
```

# Configuration file

```bash
eth1.aws-kms-client-cache-size: "5"
```

<!--/tabs-->

Specifies the AWS KMS client cache size. Set based on the number of credentials 
used to access the service, plus the number of regions the service is accessed from. The default is 1.

#### `aws-kms-enabled`

<!--tabs-->

# Syntax

```bash
--aws-kms-enabled=<BOOLEAN>
```

# Example

```bash
--aws-kms-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_ENABLED=true
```

# Configuration file

```bash
eth1.aws-kms-enabled: "true"
```

<!--/tabs-->

Set to true to enable bulk loading from the AWS KMS. The default is false. 

#### `aws-kms-region`

<!--tabs-->

# Syntax

```bash
--aws-kms-region=<STRING>
```

# Example

```bash
--aws-kms-region=us-east-2
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_REGION=us-east-2
```

# Configuration file

```bash
eth1.aws-kms-region: "us-east-2"
```

<!--/tabs-->

AWS region where AWS KMS is available.

Required when [`--aws-kms-auth-mode`](#aws-kms-auth-mode) is `SPECIFIED`.

#### `aws-kms-secret-access-key`

<!--tabs-->

# Syntax

```bash
--aws-kms-secret-access-key=<STRING>
```

# Example

```bash
--aws-kms-secret-access-key=sk...EXAMPLE
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_SECRET_ACCESS_KEY=sk...EXAMPLE
```

# Configuration file

```bash
eth1.aws-kms-secret-access-key: "sk...EXAMPLE"
```

<!--/tabs-->

AWS secret access key to authenticate AWS KMS. Required for [`SPECIFIED`](#aws-kms-auth-mode) authentication mode.

#### `aws-kms-tag-names-filter`

<!--tabs-->

# Syntax

```bash
--aws-kms-tag-names-filter=<STRING>[,<STRING>,...]
```

# Example

```bash
--aws-kms-tag-names-filter=tagName1,tagName2
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_TAG_NAMES_FILTER=tagName1,tagName2
```

# Configuration file

```bash
eth1.aws-kms-tag-names-filter: ["tagName1","tagName2"]

```

<!--/tabs-->

Optional comma-separated list of tag names filter to apply while fetching key IDs from AWS KMS.
Applied as `AND` operation with other filters.

#### `aws-kms-tag-values-filter`

<!--tabs-->

# Syntax

```bash
--aws-kms-tag-values-filter=<STRING>[,<STRING>,...]
```

# Example

```bash
--aws-kms-tag-values-filter=tagValue1,tagValue2
```

# Environment variable

```bash
WEB3SIGNER_ETH1_AWS_KMS_TAG_VALUES_FILTER=tagValue1,tagValue2
```

# Configuration file

```bash
eth1.aws-kms-tag-values-filter: ["tagValue1","tagValue2"]
```

<!--/tabs-->

Optional comma-separated list of tag values filter to apply while fetching key IDs from AWS KMS.
Applied as `AND` operation with other filters.

#### `azure-vault-enabled`

<!--tabs-->

# Syntax

```bash
--azure-vault-enabled=<BOOLEAN>
```

# Example

```bash
--azure-vault-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_ENABLED=true
```

# Configuration file

```bash
eth2.azure-vault-enabled: true
```

<!--/tabs-->

Enables [bulk loading keys from Azure Key Vault](../../how-to/use-signing-keys.md#azure-key-vault).
The default is `false`.

#### `azure-client-id`

<!--tabs-->

# Syntax

```bash
--azure-client-id=<STRING>
```

# Example

```bash
--azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_CLIENT_ID=87efaa5b-4029-4b54-98bb2e2e8a11
```

# Configuration file

```bash
eth2.azure-client-id: "87efaa5b-4029-4b54-98bb2e2e8a11"
```

<!--/tabs-->

ID used to authenticate with Azure Key Vault.

Required when [`--azure-vault-auth-mode`](#azure-vault-auth-mode) is `CLIENT_SECRET` or
`USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-client-secret`

<!--tabs-->

# Syntax

```bash
--azure-client-secret=<STRING>
```

# Example

```bash
--azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_CLIENT_SECRET=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
```

# Configuration file

```bash
eth2.azure-client-secret: "0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z"
```

<!--/tabs-->

The secret used to access the vault along with the ID specified in [`azure-client-id`](#azure-client-id).

#### `azure-tags`

<!--tabs-->

# Syntax

```bash
--azure-tags=<TAG_NAME=TAG_VALUE>
```

# Example

```bash
--azure-tags=ENV=prod
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_TAGS=ENV=prod
```

# Configuration file

```bash
eth2.azure-tags: "ENV=prod"
```

<!--/tabs-->

Tags to filter on with Azure Key Vault.

#### `azure-tenant-id`

<!--tabs-->

# Syntax

```bash
--azure-tenant-id=<STRING>
```

# Example

```bash
--azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_TENANT_ID=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Configuration file

```bash
eth2.azure-tenant-id: "34255fb0-379b-4a1a-bd47-d211ab86df81"
```

<!--/tabs-->

The tenant ID of the Azure Portal instance being used.

#### `azure-vault-auth-mode`

<!--tabs-->

# Syntax

```bash
--azure-vault-auth-mode=<STRING>
```

# Example

```bash
--azure-vault-auth-mode=USER_ASSIGNED_MANAGED_IDENTITY
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_AUTH_MODE=USER_ASSIGNED_MANAGED_IDENTITY
```

# Configuration file

```bash
eth2.azure-vault-auth-mode: "USER_ASSIGNED_MANAGED_IDENTITY"
```

<!--/tabs-->

Authentication mode for Azure Vault.
Options are `CLIENT_SECRET`, `SYSTEM_ASSIGNED_MANAGED_IDENTITY`, and `USER_ASSIGNED_MANAGED_IDENTITY`.
The default is `CLIENT_SECRET`.

Set [`--azure-client-id`](#azure-client-id) if using `CLIENT_SECRET` or `USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-vault-name`

<!--tabs-->

# Syntax

```bash
--azure-vault-name=<STRING>
```

# Example

```bash
--azure-vault-name=AzureKeyVault
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_NAME=AzureKeyVault
```

# Configuration file

```bash
eth2.azure-vault-name: "AzureKeyVault"
```

<!--/tabs-->

Name of the vault to access.
Subdomain of `vault.azure.net`.

#### `downstream-http-host`

<!--tabs-->

# Syntax

```bash
--downstream-http-host=<downstreamHttpHost>
```

# Example

```bash
--downstream-http-host=192.168.05.14
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_HOST=192.168.05.14
```

# Configuration file

```bash
eth1.downstream-http-host="192.168.05.14"
```

<!--/tabs-->

Host to which received requests are forwarded.
The default is `localhost`.

#### `downstream-http-path`

<!--tabs-->

# Syntax

```bash
--downstream-http-path=<downstreamHttpPath>
```

# Example

```bash
--downstream-http-path=/v3/d0e63ca5bb1e4eef2284422efbc51a56
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PATH=/v3/d0e63ca5bb1e4eef2284422efbc51a56
```

# Configuration file

```bash
eth1.downstream-http-path="/v3/d0e63ca5bb1e4eef2284422efbc51a56"
```

<!--/tabs-->

Path to which received requests are forwarded.
The default is `/`.

This might be required if connecting to a cloud-based Ethereum client such as [Infura](https://infura.io/).

#### `downstream-http-port`

<!--tabs-->

# Syntax

```bash
--downstream-http-port=<downstreamHttpPort>
```

# Example

```bash
--downstream-http-port=6174
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PORT=6174
```

# Configuration file

```bash
eth1.downstream-http-port: 6174
```

<!--/tabs-->

Port to which received requests are forwarded.

#### `downstream-http-proxy-host`

<!--tabs-->

# Syntax

```bash
--downstream-http-proxy-host=<HOST>
```

# Example

```bash
--downstream-http-proxy-host=192.168.05.14
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PROXY_HOST=192.168.05.14
```

# Configuration file

```bash
eth1.downstream-http-proxy-host: "192.168.05.14"
```

<!--/tabs-->

Hostname for proxy.
There's no proxy if set to `null`.
The default is `null`.

#### `downstream-http-proxy-port`

<!--tabs-->

# Syntax

```bash
--downstream-http-proxy-port=<PORT>
```

# Example

```bash
--downstream-http-proxy-port=8545
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PROXY_PORT=8545
```

# Configuration file

```bash
eth1.downstream-http-proxy-port: 8545
```

<!--/tabs-->

Port for proxy.
The default is `80`.

#### `downstream-http-proxy-username`

<!--tabs-->

# Syntax

```bash
--downstream-http-proxy-username=<username>
```

# Example

```bash
--downstream-http-proxy-username=user
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PROXY_USERNAME=user
```

# Configuration file

```bash
eth1.downstream-http-proxy-username: "user"
```

<!--/tabs-->

Username for proxy.
There's no authentication if set to `null`.
The default is `null`.

#### `downstream-http-proxy-password`

<!--tabs-->

# Syntax

```bash
--downstream-http-proxy-password=<password>
```

# Example

```bash
--downstream-http-proxy-password=password
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_PROXY_PASSWORD=password
```

# Configuration file

```bash
eth1.downstream-http-proxy-password: "password"
```

<!--/tabs-->

Password for proxy.
There's no authentication if set to `null`.
The default is `null`.

#### `downstream-http-request-timeout`

<!--tabs-->

# Syntax

```bash
--downstream-http-request-timeout=<downstreamHttpRequestTimeout>
```

# Example

```bash
--downstream-http-request-timeout=3000
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_REQUEST_TIMEOUT=3000
```

# Configuration file

```bash
eth1.downstream-http-request-timeout: 3000
```

<!--/tabs-->

Timeout period (in milliseconds) for downstream requests.
The default is 5000.

#### `downstream-http-tls-enabled`

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-enabled=<BOOLEAN>
```

# Example

```bash
--downstream-http-tls-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH1_DOWNSTREAM_HTTP_TLS_ENABLED=true
```

# Configuration file

```bash
eth1.downstream-http-tls-enabled: true
```

<!--/tabs-->

Enables or disables [TLS for server connections](../../concepts/tls.md).
The default is `false`.

#### `downstream-http-tls-known-servers-file`

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-known-servers-file=<FILE>
```

# Example

```bash
--downstream-http-tls-known-servers-file=/Users/me/my_node/knownServers
```

# Environment variable

```bash
WEB3SIGNER_DOWNSTREAM_HTTP_TLS_KNOWN_SERVERS_FILE=/Users/me/my_node/knownServers
```

# Configuration file

```bash
eth1.downstream-http-tls-known-servers-file=/Users/me/my_node/knownServers
```

<!--/tabs-->

File containing the hostnames, ports, and SHA256 certificate fingerprints of [trusted
servers](../../how-to/configure-tls.md#create-the-known-servers-file).

#### `downstream-http-tls-ca-auth-enabled`

<!--tabs-->

# Syntax

```bash
--downstream-http-tls-ca-auth-enabled=<BOOLEAN>
```

# Example

```bash
--downstream-http-tls-ca-auth-enabled=false
```

# Environment variable

```bash
WEB3SIGNER_ETH1_HTTP_TLS_CA_AUTH_ENABLED=false
```

# Configuration file

```bash
eth1.downstream-http-tls-ca-auth-enabled: false
```

<!--/tabs-->

Enables or disables connections to servers with trusted CAs.
The default is `true`.

#### `keystores-password-file`

<!--tabs-->

# Syntax

```bash
--keystores-password-file=<FILE>
```

# Example

```bash
--keystores-password-file=/Users/me/passwds/keystore_passwords.txt
```

# Environment variable

```bash
WEB3SIGNER_ETH1_KEYSTORES_PASSWORD_FILE=/Users/me/passwds/keystore_passwords.txt
```

# Configuration file

```bash
eth1.keystores-password-file: "/Users/me/passwds/keystore_passwords.txt"
```

<!--/tabs-->

File that contains the password used by all keystores.
Cannot be set if [`--keystores-passwords-path`](#keystores-passwords-path) is also specified.

:::note
Alternatively, use [`--keystores-passwords-path`](#keystores-passwords-path) to specify a directory
containing a separate password file for each keystore.
:::

#### `keystores-passwords-path`

<!--tabs-->

# Syntax

```bash
--keystores-passwords-path=<PATH>
```

# Example

```bash
--keystores-passwords-path=/Users/me/passwds
```

# Environment variable

```bash
WEB3SIGNER_ETH1_KEYSTORES_PASSWORDS_PATH=/Users/me/passwds
```

# Configuration file

```bash
eth1.keystores-passwords-path: "/Users/me/passwds"
```

<!--/tabs-->

Directory containing password files for corresponding keystores.
Each password file name must match the corresponding keystore filename, but with a `.txt` extension.

Cannot be set if [`--keystores-password-file`](#keystores-password-file) is also specified.

:::note
Alternatively, use [`--keystores-password-file`](#keystores-password-file) to specify a single
password file that contains the password used by all keystores.
:::

#### `keystores-path`

<!--tabs-->

# Syntax

```bash
--keystores-path=<PATH>
```

# Example

```bash
--keystores-path=/Users/me/keystores
```

# Environment variable

```bash
WEB3SIGNER_ETH1_KEYSTORES_PATH=/Users/me/keystores
```

# Configuration file

```bash
eth1.keystores-path: "/Users/me/keystores"
```

<!--/tabs-->

Directory that stores the keystore files.
Keystore files must use a `.json` file extension.

Use [`--keystores-password-file`](#keystores-password-file) or
[`--keystores-passwords-path`](#keystores-passwords-path) to specify keystore passwords.

:::caution Important
Restart Web3Signer if you want to pick up new keystores added to the directory since Web3Signer started.
:::

### `eth2`

#### `aws-connection-cache-size`

<!--tabs-->

# Syntax

```bash
--aws-connection-cache-size=<LONG>
```

# Example

```bash
--aws-connection-cache-size=5
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_CONNECTION_CACHE_SIZE=5
```

# Configuration file

```bash
eth2.aws-connection-cache-size: 5
```

<!--/tabs-->

When [loading multiple keys from AWS Secrets
Manager](../../how-to/store-keys-vaults/aws.md#cache-aws-secrets-manager-when-loading-multiple-keys),
set to the maximum number of connections to cache.
The default is 1.

#### `aws-endpoint-override`

<!--tabs-->

# Syntax

```bash
--aws-endpoint-override=<ENDPOINT_URL>
```

# Example

```bash
--aws-endpoint-override=http://localstack:4566
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_ENDPOINT_OVERRIDE=http://localstack:4566
```

# Configuration file

```bash
eth2.aws-endpoint-override="http://localstack:4566"
```

<!--/tabs-->

Endpoint override for AWS Secrets Manager.
This is useful for local testing against LocalStack.

#### `aws-secrets-enabled`

<!--tabs-->

# Syntax

```bash
--aws-secrets-enabled=<BOOLEAN>
```

# Example

```bash
--aws-secrets-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_ENABLED=true
```

# Configuration file

```bash
eth2.aws-secrets-enabled: true
```

<!--/tabs-->

Enables or disables [bulk loading keys from AWS Secrets
Manager](../../how-to/use-signing-keys.md#aws-secrets-manager).
The default is `false`.

#### `aws-secrets-auth-mode`

<!--tabs-->

# Syntax

```bash
--aws-secrets-auth-mode=<STRING>
```

# Example

```bash
--aws-secrets-auth-mode=ENVIRONMENT
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_AUTH_MODE=ENVIRONMENT
```

# Configuration file

```bash
eth2.aws-secrets-auth-mode: "ENVIRONMENT"
```

<!--/tabs-->

Authentication mode for AWS Secrets Manager.
Options are `SPECIFIED` and `ENVIRONMENT`.
The default is `SPECIFIED`.

Set [`--aws-secrets-access-key-id`](#aws-secrets-access-key-id),
[`--aws-secrets-secret-access-key`](#aws-secrets-secret-access-key), and
[`--aws-secrets-region`](#aws-secrets-region) if using `SPECIFIED`.

#### `aws-secrets-access-key-id`

<!--tabs-->

# Syntax

```bash
--aws-secrets-access-key-id=<STRING>
```

# Example

```bash
--aws-secrets-access-key-id=AKIA...EXAMPLE
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_ACCESS_KEY_ID=AKIA...EXAMPLE
```

# Configuration file

```bash
eth2.aws-secrets-access-key-id: "AKIA...EXAMPLE"
```

<!--/tabs-->

AWS access key ID to authenticate AWS Secrets Manager.

Required when [`--aws-secrets-auth-mode`](#aws-secrets-auth-mode) is `SPECIFIED`.

#### `aws-secrets-secret-access-key`

<!--tabs-->

# Syntax

```bash
--aws-secrets-secret-access-key=<STRING>
```

# Example

```bash
--aws-secrets-secret-access-key=sk...EXAMPLE
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_SECRET_ACCESS_KEY=sk...EXAMPLE
```

# Configuration file

```bash
eth2.aws-secrets-secret-access-key: "sk...EXAMPLE"
```

<!--/tabs-->

AWS secret access key to authenticate AWS Secrets Manager.

Required when [`--aws-secrets-auth-mode`](#aws-secrets-auth-mode) is `SPECIFIED`.

#### `aws-secrets-region`

<!--tabs-->

# Syntax

```bash
--aws-secrets-region=<STRING>
```

# Example

```bash
--aws-secrets-region=us-east-2
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_REGION=us-east-2
```

# Configuration file

```bash
eth2.aws-secrets-region: "us-east-2"
```

<!--/tabs-->

AWS region where AWS Secrets Manager is available.

Required when [`--aws-secrets-auth-mode`](#aws-secrets-auth-mode) is `SPECIFIED`.

#### `aws-secrets-prefixes-filter`

<!--tabs-->

# Syntax

```bash
--aws-secrets-prefixes-filter=<STRING>[,<STRING>,...]
```

# Example

```bash
--aws-secrets-prefixes-filter=prefix1,prefix2
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_PREFIXES_FILTER=prefix1,prefix2
```

# Configuration file

```bash
eth2.aws-secrets-prefixes-filter: ["prefix1","prefix2"]
```

<!--/tabs-->

Optional comma-separated list of secret name prefixes filter to apply while fetching secrets from
AWS Secrets Manager.
Applied as `AND` operation with other filters.

#### `aws-secrets-tag-names-filter`

<!--tabs-->

# Syntax

```bash
--aws-secrets-tag-names-filter=<STRING>[,<STRING>,...]
```

# Example

```bash
--aws-secrets-tag-names-filter=tagName1,tagName2
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_TAG_NAMES_FILTER=tagName1,tagName2
```

# Configuration file

```bash
eth2.aws-secrets-tag-names-filter: ["tagName1","tagName2"]

```

<!--/tabs-->

Optional comma-separated list of tag names filter to apply while fetching secrets from AWS Secrets Manager.
Applied as `AND` operation with other filters.

#### `aws-secrets-tag-values-filter`

<!--tabs-->

# Syntax

```bash
--aws-secrets-tag-values-filter=<STRING>[,<STRING>,...]
```

# Example

```bash
--aws-secrets-tag-values-filter=tagValue1,tagValue2
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AWS_SECRETS_TAG_VALUES_FILTER=tagValue1,tagValue2
```

# Configuration file

```bash
eth2.aws-secrets-tag-values-filter: ["tagValue1","tagValue2"]
```

<!--/tabs-->

Optional comma-separated list of tag values filter to apply while fetching secrets from AWS Secrets Manager.
Applied as `AND` operation with other filters.

#### `azure-vault-enabled`

<!--tabs-->

# Syntax

```bash
--azure-vault-enabled=<BOOLEAN>
```

# Example

```bash
--azure-vault-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_ENABLED=true
```

# Configuration file

```bash
eth2.azure-vault-enabled: true
```

<!--/tabs-->

Enables [bulk loading keys from Azure Key Vault](../../how-to/use-signing-keys.md#azure-key-vault).
The default is `false`.

#### `azure-client-id`

<!--tabs-->

# Syntax

```bash
--azure-client-id=<STRING>
```

# Example

```bash
--azure-client-id=87efaa5b-4029-4b54-98bb2e2e8a11
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_CLIENT_ID=87efaa5b-4029-4b54-98bb2e2e8a11
```

# Configuration file

```bash
eth2.azure-client-id: "87efaa5b-4029-4b54-98bb2e2e8a11"
```

<!--/tabs-->

ID used to authenticate with Azure Key Vault.

Required when [`--azure-vault-auth-mode`](#azure-vault-auth-mode) is `CLIENT_SECRET` or
`USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-client-secret`

<!--tabs-->

# Syntax

```bash
--azure-client-secret=<STRING>
```

# Example

```bash
--azure-client-secret=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_CLIENT_SECRET=0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z
```

# Configuration file

```bash
eth2.azure-client-secret: "0DgK4V_YA99RPk7.f_1op0-em_a46wSe.Z"
```

<!--/tabs-->

The secret used to access the vault along with the ID specified in [`azure-client-id`](#azure-client-id).

#### `azure-tags`

<!--tabs-->

# Syntax

```bash
--azure-tags=<TAG_NAME=TAG_VALUE>
```

# Example

```bash
--azure-tags=ENV=prod
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_TAGS=ENV=prod
```

# Configuration file

```bash
eth2.azure-tags: "ENV=prod"
```

<!--/tabs-->

Tags to filter on using Azure Key Vault.

#### `azure-tenant-id`

<!--tabs-->

# Syntax

```bash
--azure-tenant-id=<STRING>
```

# Example

```bash
--azure-tenant-id=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_TENANT_ID=34255fb0-379b-4a1a-bd47-d211ab86df81
```

# Configuration file

```bash
eth2.azure-tenant-id: "34255fb0-379b-4a1a-bd47-d211ab86df81"
```

<!--/tabs-->

The tenant ID of the Azure Portal instance being used.

#### `azure-vault-auth-mode`

<!--tabs-->

# Syntax

```bash
--azure-vault-auth-mode=<STRING>
```

# Example

```bash
--azure-vault-auth-mode=USER_ASSIGNED_MANAGED_IDENTITY
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_AUTH_MODE=USER_ASSIGNED_MANAGED_IDENTITY
```

# Configuration file

```bash
eth2.azure-vault-auth-mode: "USER_ASSIGNED_MANAGED_IDENTITY"
```

<!--/tabs-->

Authentication mode for Azure Vault.
Options are `CLIENT_SECRET`, `SYSTEM_ASSIGNED_MANAGED_IDENTITY`, and `USER_ASSIGNED_MANAGED_IDENTITY`.
The default is `CLIENT_SECRET`.

Set [`--azure-client-id`](#azure-client-id) if using `CLIENT_SECRET` or `USER_ASSIGNED_MANAGED_IDENTITY`.

#### `azure-vault-name`

<!--tabs-->

# Syntax

```bash
--azure-vault-name=<STRING>
```

# Example

```bash
--azure-vault-name=AzureKeyVault
```

# Environment variable

```bash
WEB3SIGNER_ETH2_AZURE_VAULT_NAME=AzureKeyVault
```

# Configuration file

```bash
eth2.azure-vault-name: "AzureKeyVault"
```

<!--/tabs-->

Name of the vault to access.
Subdomain of `vault.azure.net`.

#### `key-manager-api-enabled`

<!--tabs-->

# Syntax

```bash
--key-manager-api-enabled=<BOOLEAN>
```

# Example

```bash
--key-manager-api-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_KEY_MANAGER_API_ENABLED=true
```

# Configuration file

```bash
eth2.key-manager-api-enabled: true
```

<!--/tabs-->

Enables the [key manager API](../../how-to/use-signing-keys.md#manage-keys).
The default is `false`.

:::caution Warning
The key manager API is an early access feature and is still in development.
:::

#### `keystores-password-file`

<!--tabs-->

# Syntax

```bash
--keystores-password-file=<FILE>
```

# Example

```bash
--keystores-password-file=/Users/me/passwds/keystore_passwords.txt
```

# Environment variable

```bash
WEB3SIGNER_ETH2_KEYSTORES_PASSWORD_FILE=/Users/me/passwds/keystore_passwords.txt
```

# Configuration file

```bash
eth2.keystores-password-file: "/Users/me/passwds/keystore_passwords.txt"
```

<!--/tabs-->

File that contains the password used by all keystores.
Cannot be set if [`--keystores-passwords-path`](#keystores-passwords-path) is also specified.

:::note
Alternatively, use [`--keystores-passwords-path`](#keystores-passwords-path) to specify a directory
containing a separate password file for each keystore.
:::

#### `keystores-passwords-path`

<!--tabs-->

# Syntax

```bash
--keystores-passwords-path=<PATH>
```

# Example

```bash
--keystores-passwords-path=/Users/me/passwds
```

# Environment variable

```bash
WEB3SIGNER_ETH2_KEYSTORES_PASSWORDS_PATH=/Users/me/passwds
```

# Configuration file

```bash
eth2.keystores-passwords-path: "/Users/me/passwds"
```

<!--/tabs-->

Directory containing password files for corresponding keystores.
Each password file name must match the corresponding keystore filename, but with a `.txt` extension.

Cannot be set if [`--keystores-password-file`](#keystores-password-file) is also specified.

:::note
Alternatively, use [`--keystores-password-file`](#keystores-password-file) to specify a single
password file that contains the password used by all keystores.
:::

#### `keystores-path`

<!--tabs-->

# Syntax

```bash
--keystores-path=<PATH>
```

# Example

```bash
--keystores-path=/Users/me/keystores
```

# Environment variable

```bash
WEB3SIGNER_ETH2_KEYSTORES_PATH=/Users/me/keystores
```

# Configuration file

```bash
eth2.keystores-path: "/Users/me/keystores"
```

<!--/tabs-->

Directory that stores the keystore files.
Keystore files must use a `.json` file extension.

Use [`--keystores-password-file`](#keystores-password-file) or
[`--keystores-passwords-path`](#keystores-passwords-path) to specify keystore passwords.

:::caution Important
Restart Web3Signer if you want to pick up new keystores added to the directory since Web3Signer started.
:::

#### `network`

<!--tabs-->

# Syntax

```bash
--network=<NETWORK>
```

# Example

```bash
--network=mainnet
```

# Environment variable

```bash
WEB3SIGNER_ETH2_NETWORK=mainnet
```

# Configuration file

```bash
eth2.network: "mainnet"
```

<!--/tabs-->

Predefined network configuration.
Accepts a predefined network name, or file path or URL to a YAML configuration file.
See the [consensus specification] for examples.

The default is `mainnet`.

:::caution Important
If Teku connects to a network other than `mainnet`, then this option must be specified, and it must
match the [`--network` value of the connected Teku client](https://docs.teku.consensys.net/how-to/use-external-signer/use-web3signer).
:::

Possible values are:

| Network    | Chain            | Type       | Description                                      |
| :--------- | :--------------- | :--------- | :----------------------------------------------- |
| `mainnet`  | Consensus layer  | Production | Ethereum main network.                           |
| `minimal`  | Consensus layer  | Test       | Used for local testing and development networks. |
| `goerli`   | Consensus layer  | Test       | Multi-client testnet.                            |
| `holesky`  | Consensus layer  | Test       | Multi-client testnet.                            |
| `lukso`    | Consensus layer  | Production | Lukso main network.                              |
| `gnosis`   | Consensus layer  | Production | Gnosis main network.                             |
| `chiado`   | Consensus layer  | Test       | Multi-client Gnosis testnet.                     |

#### `slashing-protection-db-health-check-interval-milliseconds`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-health-check-interval-milliseconds=<INTERVAL>
```

# Example

```bash
--slashing-protection-db-health-check-interval-milliseconds=20000
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_HEALTH_CHECK_INTERVAL_MILLISECONDS=20000
```

# Configuration file

```bash
eth2.slashing-protection-db-health-check-interval-milliseconds: 20000
```

<!--/tabs-->

Milliseconds between the slashing protection database health checks.
The default is 30000.

The service responds with a `200` message if healthy, and `503` if unhealthy.

#### `slashing-protection-db-health-check-timeout-milliseconds`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-health-check-timeout-milliseconds=<INTERVAL>
```

# Example

```bash
--slashing-protection-db-health-check-timeout-milliseconds=2000
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_HEALTH_CHECK_TIMEOUT_MILLISECONDS=2000
```

# Configuration file

```bash
eth2.slashing-protection-db-health-check-timeout-milliseconds: 2000
```

<!--/tabs-->

Milliseconds after which to fail the database health check.
For example, if the health check connects to the slashing protection database, but does not report
back in a timely manner.

The default is 3000.

#### `slashing-protection-db-password`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-password=<PASSWORD>
```

# Example

```bash
--slashing-protection-db-password=changeme
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_PASSWORD=changeme
```

# Configuration file

```bash
eth2.slashing-protection-db-password: "changeme"
```

<!--/tabs-->

The password to connect to the slashing protection database.

#### `slashing-protection-db-pool-configuration-file`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-pool-configuration-file=<FILE>
```

# Example

```bash
--slashing-protection-db-pool-configuration-file=/Users/me/config/HikariConfig.properties
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_POOL_CONFIGURATION_FILE=/Users/me/config/HikariConfig.properties
```

# Configuration file

```bash
eth2.slashing-protection-db-pool-configuration-file: "/Users/me/config/HikariConfig.properties"
```

<!--/tabs-->

[HikariCP connection pool configuration file](https://github.com/brettwooldridge/HikariCP#gear-configuration-knobs-baby).

Web3Signer uses HikariCP to manage database connections, and uses the default configuration values.
The defaults perform well in most deployments, but you can override them using this option.

#### `slashing-protection-db-url`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-url=<JDBC_URL>
```

# Example

```bash
--slashing-protection-db-url=jdbc:postgresql://localhost/web3signer
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_URL=jdbc:postgresql://localhost/web3signer
```

# Configuration file

```bash
eth2.slashing-protection-db-url: "jdbc:postgresql://localhost/web3signer"
```

<!--/tabs-->

The Java Database Connectivity (JDBC) URL of the slashing protection database.

:::note
If using a non-default port number for your PostgreSQL database, then [include the port number in the database URL].
:::

#### `slashing-protection-db-username`

<!--tabs-->

# Syntax

```bash
--slashing-protection-db-username=<USERNAME>
```

# Example

```bash
--slashing-protection-db-username=postgres
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_DB_USERNAME=postgres
```

# Configuration file

```bash
eth2.slashing-protection-db-username: "postgres"
```

<!--/tabs-->

The username to use when connecting to the slashing protection database.

#### `slashing-protection-enabled`

<!--tabs-->

# Syntax

```bash
--slashing-protection-enabled=<BOOLEAN>
```

# Example

```bash
--slashing-protection-enabled=false
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_ENABLED=false
```

# Configuration file

```bash
eth2.slashing-protection-enabled: false
```

<!--/tabs-->

Enables Web3Signer [slashing protection].
If `true`, then all signing operations are validated against historical data before signing.

The default is `true`.

#### `slashing-protection-pruning-at-boot-enabled`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-at-boot-enabled=<BOOLEAN>
```

# Example

```bash
--slashing-protection-pruning-at-boot-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_AT_BOOT_ENABLED=true
```

# Configuration file

```yaml
eth2.slashing-protection-pruning-at-boot-enabled: true
```

<!--/tabs-->

When set to `true`, [slashing protection database
pruning](../../how-to/configure-slashing-protection.md#prune-the-slashing-protection-database) is
enabled at startup and at the defined [pruning intervals](#slashing-protection-pruning-interval).

The default is `false`.

#### `slashing-protection-pruning-db-pool-configuration-file`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-db-pool-configuration-file=<FILE>
```

# Example

```bash
--slashing-protection-pruning-db-pool-configuration-file=/Users/me/config/HikariConfig.properties
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_DB_POOL_CONFIGURATION_FILE=/Users/me/config/HikariConfig.properties
```

# Configuration file

```bash
eth2.slashing-protection-pruning-db-pool-configuration-file: "/Users/me/config/HikariConfig.properties"
```

<!--/tabs-->

[HikariCP connection pool configuration file](https://github.com/brettwooldridge/HikariCP#gear-configuration-knobs-baby)
used by the pruning process.

Web3Signer uses HikariCP to manage database connections, and uses the default configuration values.
The defaults perform well in most deployments, but you can override them using this option.

#### `slashing-protection-pruning-enabled`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-enabled=<BOOLEAN>
```

# Example

```bash
--slashing-protection-pruning-enabled=true
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_ENABLED=true
```

# Configuration file

```yaml
eth2.slashing-protection-pruning-enabled: true
```

<!--/tabs-->

Enables [slashing protection database pruning](../../how-to/configure-slashing-protection.md#prune-the-slashing-protection-database).
The default is `false`.

#### `slashing-protection-pruning-epochs-to-keep`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-epochs-to-keep=<LONG>
```

# Example

```bash
--slashing-protection-pruning-epochs-to-keep=64
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_EPOCHS_TO_KEEP=64
```

# Configuration file

```yaml
eth2.slashing-protection-pruning-epochs-to-keep: 64
```

<!--/tabs-->

Number of epochs to keep when pruning the slashing protection database.

The default is 250.

#### `slashing-protection-pruning-interval`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-interval=<LONG>
```

# Example

```bash
--slashing-protection-pruning-interval=48
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_INTERVAL=48
```

# Configuration file

```yaml
eth2.slashing-protection-pruning-interval: 48
```

<!--/tabs-->

Hours between slashing protection database pruning operations.

The default is 24.

#### `slashing-protection-pruning-slots-per-epoch`

<!--tabs-->

# Syntax

```bash
--slashing-protection-pruning-slots-per-epoch=<LONG>
```

# Example

```bash
--slashing-protection-pruning-slots-per-epoch=20
```

# Environment variable

```bash
WEB3SIGNER_ETH2_SLASHING_PROTECTION_PRUNING_SLOTS_PER_EPOCH=20
```

# Configuration file

```yaml
eth2.slashing-protection-pruning-slots-per-epoch: 20
```

<!--/tabs-->

Number of slots per epoch.
This number multiplied by the number of epochs to keep determines what blocks to keep when pruning
the slashing protection database.

The default is 32 as defined on Mainnet.

### `eth2 export`

Exports the slashing protection database to a file.

#### `to`

<!--tabs-->

# Syntax

```bash
--to=<FILE>
```

# Example

```bash
--to=/Users/me/my_node/interchange.json
```

# Environment variable

```bash
WEB3SIGNER_ETH2_EXPORT_TO=/Users/me/my_node/interchange.json
```

# Configuration file

```bash
eth2.export.to: /Users/me/my_node/interchange.json
```

<!--/tabs-->

The file to export the slashing protection database to.
The exported file uses the [validator client interchange format].

### `eth2 import`

Imports a slashing protection database from a file.

#### `from`

<!--tabs-->

# Syntax

```bash
--from=<FILE>
```

# Example

```bash
--from=/Users/me/my_node/interchange.json
```

# Environment variable

```bash
WEB3SIGNER_ETH2_IMPORT_FROM=/Users/me/my_node/interchange.json
```

# Configuration file

```bash
eth2.import.from: /Users/me/my_node/interchange.json
```

<!--/tabs-->

The file to import the slashing protection database from.
The file must be formatted in the [validator client interchange format].

### `filecoin`

#### `network`

<!--tabs-->

# Syntax

```bash
--network=<NETWORK>
```

# Example

```bash
--network=TESTNET
```

# Environment variable

```bash
WEB3SIGNER_FILECOIN_NETWORK=TESTNET
```

# Configuration file

```bash
filecoin.network: "TESTNET"
```

<!--/tabs-->

Predefined network configuration.
Accepts a predefined network name.
The default is `TESTNET`.

### `watermark-repair`

Updates the [slashing protection low or high watermark](https://eips.ethereum.org/EIPS/eip-3076) for all validators.
You can only increase the low watermark, not decrease it.
If you set the high watermark, you should set this to a future epoch and slot.
Setting a high watermark prevents the validator from signing at or beyond this point.

:::caution
We only recommend this subcommand for advanced users.
:::

#### `epoch`

<!--tabs-->

# Syntax

```bash
--epoch=<LONG>
```

# Example

```bash
--epoch=30000
```

# Environment variable

```bash
WEB3SIGNER_WATERMARK_REPAIR_EPOCH=30000
```

# Configuration file

```bash
watermark-repair.epoch: 30000
```

<!--/tabs-->

Low watermark to set the attestation source and target to.
(Sets the high watermark epoch when [`--set-high-watermark`](#set-high-watermark) is `true`.)

#### `slot`

<!--tabs-->

# Syntax

```bash
--slot=<LONG>
```

# Example

```bash
--slot=20000
```

# Environment variable

```bash
WEB3SIGNER_WATERMARK_REPAIR_SLOT=20000
```

# Configuration file

```bash
watermark-repair.slot: 20000
```

<!--/tabs-->

Low watermark to set the block slot to.
(Sets the high watermark slot when [`--set-high-watermark`](#set-high-watermark) is `true`.)

#### `remove-high-watermark`

<!--tabs-->

# Syntax

```bash
--remove-high-watermark=<BOOLEAN>
```

# Example

```bash
--remove-high-watermark=true
```

# Environment variable

```bash
WEB3SIGNER_REMOVE_HIGH_WATERMARK=true
```

# Configuration file

```bash
watermark-repair.remove-high-watermark: true
```

<!--/tabs-->

Removes the high watermark.
When set to `true`, all other `watermark-repair` options are ignored.
The default is `false`.

#### `set-high-watermark`

<!--tabs-->

# Syntax

```bash
--set-high-watermark=<BOOLEAN>
```

# Example

```bash
--set-high-watermark=true
```

# Environment variable

```bash
WEB3SIGNER_SET_HIGH_WATERMARK=true
```

# Configuration file

```bash
watermark-repair.set-high-watermark: true
```

<!--/tabs-->

Sets the high watermark to the specified [epoch](#epoch) and [slot](#slot).
(Sets the low watermark when [`--set-high-watermark`](#set-high-watermark) is `false`.)
The default is `false`.

<!-- links -->

[include the port number in the database URL]: https://jdbc.postgresql.org/documentation/head/connect.html
[slashing protection]: ../../concepts/slashing-protection.md
[validator client interchange format]: https://eips.ethereum.org/EIPS/eip-3076
[consensus specification]: https://github.com/ethereum/consensus-specs/tree/master/configs
