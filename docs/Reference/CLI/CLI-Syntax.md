---
description: Web3Signer command line interface reference
---

# Web3Signer command line

This reference describes the syntax of the Web3Signer Command Line Interface (CLI) options.

## Specifying Options

Web3Signer options can be specified:

* On the command line
* As an [environment variable](#web3signer-environment-variables)
* In a YAML configuration file.

If you specify an option in more than one place, the order of priority is command line, environment
variable, configuration file.

### Web3Signer environment variables

For each command line option, the equivalent environment variable is:

* Upper-case
* `_` replaces `-`
* Has an `WEB3SIGNER_` prefix

For example, set `--data-path` using the `WEB3SIGNER_DATA_PATH` environment variable.

## Options

### config-file

The path to the [YAML configuration file](../../HowTo/Use-Configuration-File.md).
The default is `none`.

=== "Syntax"

    ```bash
    --config-file=<FILE>
    ```

=== "Example"

    ```bash
    --config-file=/home/me/me_node/config.yaml
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_CONFIG_FILE=/home/me/me_node/config.yaml
    ```

### data-path

=== "Syntax"

    ```bash
    --data-path=<PATH>
    ```

=== "Command Line"

    ```bash
    --data-path=/Users/me/my_node/data
    ```

=== "Configuration File"

    ```bash
    data-path: "/Users/me/my_node/data"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_DATA_PATH=/Users/me/my_node/data
    ```

Directory in which to store temporary files.

### key-store-path

=== "Syntax"

    ```bash
    --key-store-path=<PATH>
    ```

=== "Command Line"

    ```bash
    --key-store-path=/Users/me/keys
    ```

=== "Configuration File"

    ```bash
    key-store-path: "/Users/me/keys"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_KEY_STORE_PATH=/Users/me/keys
    ```

Path to the directory containing the [YAML files required to access keys].

### logging

=== "Syntax"

    ```bash
    -l, --logging=<LEVEL>
    ```

=== "Command Line"

    ```bash
    --logging=DEBUG
    ```

=== "Configuration File"

    ```bash
    logging: "DEBUG"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_LOGGING=DEBUG
    ```

Sets logging verbosity. Log levels are `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`,
`ALL`. The default is `INFO`.

### http-listen-host

=== "Syntax"

    ```bash
    --http-listen-host=<httpListenHost>
    ```

=== "Command Line"

    ```bash
    --http-listen-host=8.8.8.8
    ```

=== "Configuration File"

    ```bash
    http-listen-host: "8.8.8.8"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_HTTP_LISTEN_HOST=8.8.8.8
    ```

Host on which HTTP listens. Default is `localhost`.

### http-listen-port

=== "Syntax"

    ```bash
    --http-listen-port=<httpListenPort>
    ```

=== "Command Line"

    ```bash
    --http-listen-port=6174
    ```

=== "Configuration File"

    ```bash
    http-listen-port: 6174
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_HTTP_LISTEN_PORT=6174
    ```

Port on which HTTP listens. The default is 9000.

### http-host-allowlist

=== "Syntax"

    ```bash
    --http-host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

=== "Command Line"

    ```bash
    --http-host-allowlist=medomain.com,meotherdomain.com
    ```

=== "Configuration File"

    ```bash
    http-host-allowlist: ["medomain.com", "meotherdomain.com"]
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_HTTP_HOST_ALLOWLIST=medomain.com,meotherdomain.com
    ```

A comma-separated list of hostnames to allow access to the REST APIs. By default, Web3Signer
accepts access from `localhost` and `127.0.0.1`.

!!! tip

    To allow all hostnames, use `"*"`. We don't recommend allowing all hostnames for production
    environments.

### idle-connection-timeout-seconds

=== "Syntax"

    ```bash
    --idle-connection-timeout-seconds=<TIMEOUT>
    ```

=== "Command Line"

    ```bash
    --idle-connection-timeout-seconds=60
    ```

=== "Configuration File"

    ```bash
    idle-connection-timeout-seconds: 60
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_IDLE_CONNECTION_TIMEOUT_SECONDS=60
    ```

Number of seconds to wait before terminating an idle connection. Defaults to 30.

### metrics-enabled

=== "Syntax"

    ```bash
    --metrics-enabled[=<BOOLEAN>]
    ```

=== "Command Line"

    ```bash
    --metrics-enabled=true
    ```

=== "Configuration File"

    ```bash
    metrics-enabled: true
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_METRICS_ENABLED=true
    ```

Enables the metrics exporter. The default is `false`.

### metrics-host

=== "Syntax"

    ```bash
    --metrics-host=<HOST>
    ```

=== "Command Line"

    ```bash
    --metrics-host=186.10.10.1
    ```

=== "Configuration File"

    ```bash
    metrics-host: "186.10.10.1"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_METRICS_HOST=186.10.10.1
    ```

The host on which [Prometheus](https://prometheus.io/) accesses metrics.
The default is `127.0.0.1`.

### metrics-port

=== "Syntax"

    ```bash
    --metrics-port=<PORT>
    ```

=== "Command Line"

    ```bash
    --metrics-port=6174
    ```

=== "Configuration File"

    ```bash
    metrics-port: 6174
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_METRICS_PORT=6174
    ```

The port (TCP) on which [Prometheus](https://prometheus.io/) accesses
metrics. The default is `9001`.

### metrics-category

=== "Syntax"

    ```bash
    --metrics-category=<metrics-category>[,metrics-category...]...
    ```

=== "Command"

    ```bash
    --metrics-category=HTTP,SIGNING,JVM
    ```

=== "Configuration File"

    ```bash
    metrics-category: ["HTTP", "SIGNING", "JVM"]
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_METRICS_CATEGORY=HTTP,SIGNING,JVM
    ```

A comma-separated list of categories for which to track metrics. The defaults are `HTTP`, `SIGNING`, `FILECOIN`, `ETH2_SLASHING_PROTECTION`, `JVM`, `PROCESS`.

### metrics-host-allowlist

=== "Syntax"

    ```bash
    --metrics-host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

=== "Command Line"

    ```bash
    --metrics-host-allowlist=medomain.com,meotherdomain.com
    ```

=== "Configuration File"

    ```bash
    metrics-host-allowlist: ["medomain.com", "meotherdomain.com"]
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_METRICS_HOST_ALLOWLIST=medomain.com,meotherdomain.com
    ```

A comma-separated list of hostnames to allow access to the [Web3Signer metrics]. By
default, Web3Signer accepts access from `localhost` and `127.0.0.1`.

!!! tip

    To allow all hostnames, use `"*"`. We don't recommend allowing all hostnames for production
    environments.

### tls-keystore-file

=== "Syntax"

    ```bash
    --tls-keystore-file=<keystoreFile>
    ```

=== "Command"

    ```bash
    --tls-keystore-file=/Users/me/my_node/certificate.pfx
    ```

=== "Configuration File"

    ```bash
    tls-keystore-file: "/Users/me/my_node/certificate.pfx"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_KEYSTORE_FILE=/Users/me/my_node/certificate.pfx
    ```

PKCS #12 formatted keystore. Used to enable TLS for [client connections](../../HowTo/Configure-TLS.md).

### tls-keystore-password-file

=== "Syntax"

    ```bash
    --tls-keystore-password-file=<passwordFile>
    ```

=== "Command"

    ```bash
    --tls-keystore-password-file=/Users/me/my_node/password.txt
    ```

=== "Configuration File"

    ```bash
    tls-keystore-password-file: "/Users/me/my_node/password.txt"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_KEYSTORE_PASSWORD_FILE=/Users/me/my_node/password.txt
    ```

Password file used to decrypt the keystore.

### tls-allow-any-client

=== "Syntax"

    ```bash
    --tls-allow-any-client
    ```

=== "Configuration File"

    ```bash
    tls-allow-any-client
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_ALLOW_ANY_CLIENT
    ```Allows any client to connect.

!!! important
    Cannot be used with [`--tls-allow-ca-clients`](#tls-allow-ca-clients)
    and [`--tls-known-clients-file`](#tls-known-clients-file)

### tls-known-clients-file

=== "Syntax"

    ```bash
    --tls-known-clients-file=<clientsFile>
    ```

=== "Command"

    ```bash
    --tls-known-clients-file=/Users/me/my_node/knownClients.txt
    ```

=== "Configuration File"

    ```bash
    tls-known-clients-file: "/Users/me/my_node/knownClients.txt"
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_KNOWN_CLIENTS_FILE=/Users/me/my_node/knownClients.txt
    ```

File containing the Common Names and SHA-256 fingerprints
of [authorized clients](../../HowTo/Configure-TLS.md#create-the-known-clients-file).

### tls-allow-ca-clients

=== "Syntax"

    ```bash
    --tls-allow-ca-clients
    ```

=== "Configuration File"

    ```bash
    tls-allow-ca-clients
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_ALLOW_CA_CLIENTS
    ```

Allows clients signed with trusted CA certificates to connect.

### help

=== "Syntax"

    ```bash
    -h, --help
    ```

Displays the help and exits.

### version

=== "Syntax"

    ```bash
    -V, --version
    ```

Displays the version and exits.

<!-- links -->
[YAML files required to access keys]: ../Key-Configuration-Files.md
[Web3Signer metrics]: ../../HowTo/Monitor/Metrics.md
