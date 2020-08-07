---
title: Signing key configuration file parameters
---

# Signing key configuration file parameters

A [signing key configuration file] is a YAML file that defines the parameters to access the
signing key.

The YAML file name must use the format `<validatorPublicKeyAddress>.yaml`. For example
`b65c2a1dc6a8eaadae03d5849dd6ac614b32dc5f8af37e2eb4ced0c72fd69fabe90fc783b0435f5a36ff1338385ef837.yaml`

## Raw unencrypted files

Stores the private key as an unencrypted value directly in the key configuration file.

!!! example

    ```
    type: "file-raw"
    privateKey: "0x25b1166a43c109cb330af8945d364722757c65ed2bfed5444b5a2f057f82d391"
    ```

| Key                  | Description                           |
|----------------------|---------------------------------------|
| **type**             | Type of key signing. Use `file-raw`.|
| **privateKey**       | Hexadecimal encoded private key string.|

## Keystore file

Use the private key stored in a [keystore file].

!!! example

    ```
    type: "file-keystore"
    keystoreFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.json"
    keystorePasswordFile: "95e57532ede3c1dd879061153f9cfdcdefa9dc5fb9c954a6677bc6641b8d26e39f70b660bbaa732c47277c0096e11400.password”
    ```

| Key                      | Description                           |
|--------------------------|---------------------------------------|
| **type**                 | Type of key signing. Use `file-keystore`.|
| **keystoreFile**         | Location of the keystore file. |
| **keystorePasswordFile** | Text file containing the password to decrypt the keystore file. |

## Hashicorp Vault

Use the private key stored in Hashicorp Vault.

!!! example

    ```
    type: "hashicorp"
    tlsEnabled: "true"
    keyPath: "/v1/secret/data/secretPath"
    keyName: "secretName"
    tlsKnownServersPath: "/Users/me/project/knownhosts"
    serverHost: "localhost"
    serverPort: "32895"
    timeout: "10000"
    token: "s.MuZwBqZ0iE1HzvD64v3HMlhT”
    ```

| Key                     | Description                           |
|-------------------------|---------------------------------------|
| **type**                | Type of key signing. Use `hashicorp`.|
| **tlsEnabled**          | Enable or disable TLS. Defaults to `true` |
| **keyPath**             | Path to secret in the Hashicorp Vault containing the private key. |
| **keyName**             | Name of the key storing the private key in the vault.|
| **tlsKnownServersPath** | Path to the file containing a list of trusted Hashicorp Vault servers.|
| **serverHost**          | Host of the Hashicorp Vault server.  |
| **serverPort**          | Port of the Hashicorp Vault server.  |
| **timeout**             | Timeout in milliseconds for requests to the Hashicorp Vault server. |
| **token**               | The root token displayed by the Hashicorp Vault server. |

<!-- Links -->
[signing key configuration file]: ../HowTo/Use-Signing-Keys.md
[keystore file]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2335.md
