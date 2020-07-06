---
description: Secure communication using TLS
---

# Configure TLS

Configure TLS communication from the command line to allow clients (for example a dApp, or curl)
and Eth2Signer to communicate securely.

Eth2Signer provides multiple options to configure client TLS access:

* Specify one or more authorized clients using a [known clients file](#create-the-known-clients-file).
* [Allow all clients with trusted CA certificates to connect].
* [Allow any client to connect].

This example uses a known clients file to limit access to specified clients.

## Prerequisites

**Eth2Signer prerequisites**:

* Eth2Signer's password-protected PKCS #12 keystore.
* File containing the keystore password.

**Client prerequisites**:

* The client must be configured for TLS.
* Client's PKCS #12 keystore information.

## Create the known clients file

Create a file (in this example, `knownClients.txt`) that lists one or more clients
that are trusted to connect to Eth2Signer. The file can contain clients that use trusted CA
or self-signed certificates.

The file contents use the format `<common_name> <hex-string>` where:

* `<common_name>` is the Common Name used for the client's keystore
* `<hex-string>` is the SHA-256 fingerprint of the client's keystore.

!!! example

    ```
    curl_client DF:65:B8:02:08:5E:91:82:0F:91:F5:1C:96:56:92:C4:1A:F6:C6:27:FD:6C:FC:31:F2:BB:90:17:22:59:5B:50
    ```

You can use [OpenSSL](https://www.openssl.org/) or
[keytool](https://docs.oracle.com/javase/6/docs/technotes/tools/solaris/keytool.html)
to display the client's Common Name and fingerprint. For example:

!!! example

    ```
    keytool -list -v -keystore <keystore> -storetype PKCS12 -storepass <password>
    ```

## Start Eth2Signer

```bash
eth2signer --key-store-path=/Users/me/keyFiles/ \
--tls-keystore-file=/Users/me/certs/eth2signerKeystore.p12 \
--tls-keystore-password-file=/Users/me/certs/password.txt \
--tls-known-clients-file=/Users/me/certs/knownClients.txt
```

The command line:

* Specifies the location of the signing key configuration files
    with the [`--key-store-path`](../Reference/CLI/CLI-Syntax.md#key-store-path) options
* Specifies the Eth2Signer keystore using the
    [`--tls-keystore-file`](../Reference/CLI/CLI-Syntax.md#tls-keystore-file) option.
* Specifies the file that contains the password to decrypt the keystore using the
    [`--tls-keystore-password-file`](../Reference/CLI/CLI-Syntax.md#tls-keystore-password-file) option.
* [Specifies the clients](#create-the-known-clients-file) that are trusted to connect to Eth2Signer
    using the [`tls-known-clients-file`](../Reference/CLI/CLI-Syntax.md#tls-known-clients-file) option.

!!! note
    Use the [`--tls-allow-any-client`](../Reference/CLI/CLI-Syntax.md#tls-allow-any-client) option to allow
    access to any client, or [`--tls-allow-ca-clients`](../Reference/CLI/CLI-Syntax.md#tls-allow-ca-clients)
    to allow access to any client with a trusted CA certificate.

    [`--tls-allow-any-client`](../Reference/CLI/CLI-Syntax.md#tls-allow-any-client) cannot be used with [`tls-known-clients-file`](../Reference/CLI/CLI-Syntax.md#tls-known-clients-file) or [`--tls-allow-ca-clients`](../Reference/CLI/CLI-Syntax.md#tls-allow-ca-clients).

<!-- links -->
[Allow all clients with trusted CA certificates to connect]: ../Reference/CLI/CLI-Syntax.md#tls-allow-ca-clients
[Allow any client to connect]: ../Reference/CLI/CLI-Syntax.md#tls-allow-any-client
