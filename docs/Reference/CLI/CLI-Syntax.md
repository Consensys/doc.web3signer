---
description: EthSigner command line interface reference
---

# EthSigner command line

This reference describes the syntax of the EthSigner Command Line Interface (CLI) options. EthSigner
signs transaction with a key stored in an encrypted file or an external vault (for example, Hashicorp):

* `ethsigner [Options] file-based-signer [File Options]`
* `ethsigner [Options] hashicorp-signer [Hashicorp Options]`
* `ethsigner [Options] azure-signer [Azure Options]`
* `ethsigner [Options] multikey-signer [Multikey Options]`

!!! note

    * The [`file-based-signer`](#file-options), [`hashicorp-signer`](#hashicorp-options), and [`azure-signer`](#azure-options)
    command line options are used for a [single key only](../../Tutorials/Start-EthSigner.md).
    * The [`multikey-signer`](#multikey-options) command line option is used for
    [one or more keys](../../Tutorials/Multifile.md).

!!! tip
    To view the command line help for the subcommands:

    * [`ethsigner help file-based-signer`](#file-options)
    * [`ethsigner help hashicorp-signer`](#hashicorp-options)
    * [`ethsigner help azure-signer`](#azure-options)
    * [`ethsigner help multikey-signer`](#multikey-options)

## Options

### `chain-id`

Chain ID of the network to receive the signed transactions.

```bash tab="Syntax"
--chain-id=<chainId>
```

```bash tab="Example"
--chain-id=2017
```

### `data-path`

Directory in which to store temporary files.

```bash tab="Syntax"
--data-path=<PATH>
```

```bash tab="Example"
--data-path=/Users/me/my_node/data
```

### `downstream-http-host`

Endpoint to which received requests are forwarded. Default is `localhost`.

```bash tab="Syntax"
--downstream-http-host=<downstreamHttpHost>
```

```bash tab="Example"
--downstream-http-host=192.168.05.14
```

### `downstream-http-port`

Endpoint to which received requests are forwarded.

```bash tab="Syntax"
--downstream-http-port=<downstreamHttpPort>
```

```bash tab="Example"
--downstream-http-port=6174
```

### `downstream-http-request-timeout`

Timeout period (in milliseconds) for downstream requests. Default is 5000.

```bash tab="Syntax"
--downstream-http-request-timeout=<downstreamHttpRequestTimeout>
```

```bash tab="Example"
--downstream-http-request-timeout=3000
```

### `downstream-http-tls-enabled`

Enable or disable [TLS for server connections](../../Concepts/TLS.md).
Defaults to `false`.

```bash tab="Syntax"
--downstream-http-tls-enabled[=<true|false>]
```

```bash tab="Example"
--downstream-http-tls-enabled
```

### `downstream-http-tls-ca-auth-enabled`

Allow connections to servers with trusted CAs.

Defaults to `true`.

```bash tab="Syntax"
--downstream-http-tls-ca-auth-enabled[=<true|false>]
```

```bash tab="Example"
--downstream-http-tls-enabled=false
```

### `downstream-http-tls-keystore-file`

Keystore file (in PKCS #12 format) that contains the private key and certificate
presented to the server during authentication.

```bash tab="Syntax"
--downstream-http-tls-keystore-file=<keystoreFile>
```

```bash tab="Example"
--downstream-http-tls-keystore-file=/Users/me/my_node/keystore.pfx
```

### `downstream-http-tls-keystore-password-file`

Password file used to decrypt the keystore.

```bash tab="Syntax"
--downstream-http-tls-keystore-password-file=<passwordFile>
```

```bash tab="Example"
--downstream-http-tls-keystore-password-file=/Users/me/my_node/password
```

### `downstream-http-tls-known-servers-file`

File containing the hostnames, ports, and SHA256 certificate fingerprints
of [trusted servers](../../HowTo/Configure-TLS.md#create-the-known-servers-file).

```bash tab="Syntax"
--downstream-http-tls-known-servers-file=<serversFile>
```

```bash tab="Example"
--downstream-http-tls-known-servers-file=/Users/me/my_node/knownServers
```

### `http-listen-host`

Host on which JSON-RPC HTTP listens. Default is `localhost`.

```bash tab="Syntax"
--http-listen-host=<httpListenHost>
```

```bash tab="Example"
--http-listen-host=8.8.8.8
```

### `http-listen-port`

Port on which JSON-RPC HTTP listens. Default is 8545.

```bash tab="Syntax"
--http-listen-port=<httpListenPort>
```

```bash tab="Example"
--http-lisentport=6174
```

### `logging`

Logging verbosity levels. Options are: `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`, `ALL`.
Default is `INFO`.

```bash tab="Syntax"
-l, --logging=<LOG VERBOSITY LEVEL>
```

```bash tab="Example"
--logging=DEBUG
```

### `help`

Displays the help and exits.

```bash tab="Syntax"
-h, --help
```

### `tls-allow-any-client`

Allows any client to connect.

!!! important
    Cannot be used with `--tls-allow-ca-clients` and `--tls-known-clients-file`

```bash tab="Syntax"
--tls-allow-any-client
```

### `tls-allow-ca-clients`

Allows clients signed with trusted CA certificates to connect.

```bash tab="Syntax"
--tls-allow-ca-clients
```

### `tls-keystore-file`

PKCS #12 formatted keystore. Used to enable TLS for [client connections](../../Concepts/TLS.md).

```bash tab="Syntax"
--tls-keystore-file=<keystoreFile>
```

```bash tab="Example"
--tls-keystore-file=/Users/me/my_node/certificate.pfx
```

### `tls-keystore-password-file`

Password file used to decrypt the keystore.

```bash tab="Syntax"
--tls-keystore-password-file=<passwordFile>
```

```bash tab="Example"
--tls-keystore-password-file=/Users/me/my_node/password
```

### `tls-known-clients-file`

File containing the SHA-256 fingerprints of [authorized clients](../../HowTo/Configure-TLS.md#create-the-known-clients-file).

```bash tab="Syntax"
--tls-known-clients-file=<clientsFile>
```

```bash tab="Example"
--tls-keystore-file=/Users/me/my_node/knownClients
```

### `version`

Displays the version and exits.

```bash tab="Syntax"
-V, --version
```

## File options

### `key-file`

File containing [key with which transactions are signed](../../Tutorials/Start-EthSigner.md#create-password-and-key-files).

```bash tab="Syntax"
-k, --key-file=<keyFile>
```

```bash tab="Example"
--key-file=/Users/me/my_node/transactionKey
```

### `password-file`

File containing password for the [key with which transactions are signed](../../Tutorials/Start-EthSigner.md#create-password-and-key-files).

```bash tab="Syntax"
-p, --password-file=<passwordFile>
```

```bash tab="Example"
--password-file=/Users/me/my_node/password
```

## Hashicorp options

### `auth-file`

File containing authentication data for Hashicorp Vault. The authentication data is the [root token displayed by
the Hashicorp Vault server](../../HowTo/Store-Keys/Use-Hashicorp.md#storing-private-key-in-hashcorp-vault).

```bash tab="Syntax"
--auth-file=<authFile>
```

```bash tab="Example"
--auth-file=/Users/me/my_node/auth_file
```

### `host`

Host of the Hashicorp Vault server. Default is `localhost`.

```bash tab="Syntax"
--host=<serverHost>
```

```bash tab="Example"
--host="http://host.com"
```

### `port`

Port of the Hashicorp Vault server. Default is 8200.

```bash tab="Syntax"
--port=<serverPort>
```

```bash tab="Example"
--port=23000
```

### `signing-key-path`

Path to secret in the Hashicorp Vault containing the private key for signing transactions. Default is
` /secret/data/ethsignerSigningKey`.

```bash tab="Syntax"
--signing-key-path=<signingKeyPath>
```

```bash tab="Example"
--signing-key-path=/my_secret/ethsignerSigningKey
```

### `timeout`

Timeout in milliseconds for requests to the Hashicorp Vault server. Default is 10000.

```bash tab="Syntax"
--timeout=<timeout>
```

```bash tab="Example"
--timeout=5000
```

### tls-enabled

Connect to Hashicorp Vault server using TLS. Default is `true`.

```bash tab="Syntax"
--tls-enabled[=<true|false>]
```

```bash tab="Example"
--tls-enabled=false
```

### tls-known-server-file

File containing the hostname, port, and SHA256 certificate fingerprint
of the Hashicorp Vault server.

```bash tab="Syntax"
--tls-known-server-file=<hashicorpServerFile>
```

```bash tab="Example"
--tls-known-server-file=/Users/me/my_node/knownHashicorpServers
```

## Azure options

### `client-id`

ID used to authenticate with Azure Key Vault.

```bash tab="Syntax"
--client-id=<clientID>
```

```bash tab="Example"
--client-id="MyClientID"
```

### `client-secret-path`

Path to file containing secret used to access the vault.

```bash tab="Syntax"
--client-secret-path=<clientSecretPath>
```

```bash tab="Example"
--client-secret-path=/Path/MySecret
```

### `key-name`

Name of key to be used.

```bash tab="Syntax"
--key-name=<keyName>
```

```bash tab="Example"
--key-name="MyKey"
```

### `key-version`

Version of the specified key to use.

```bash tab="Syntax"
--key-version=<keyVersion>
```

```bash tab="Example"
--key-version="7c01fe58d68148bba5824ce418241092"
```

### `keyvault-name`

Name of the vault to access. Sub-domain of `vault.azure.net`.

```bash tab="Syntax"
--keyvault-name=<keyVaultName>
```

```bash tab="Example"
--keyvault-name="MyKeyVault"
```

## Multikey Options

### `directory`

Path to the directory containing the [TOML files](../Multikey-Parameters.md)
required to access keys.

```bash tab="Syntax"
--directory=<directoryPath>
```

```bash tab="Example"
--directory=/Users/me/keys
```
