---
description: Web3Signer command line interface reference
---

# Web3Signer command line

This reference describes the syntax of the Web3Signer Command Line Interface (CLI) options.

## Specify options

Web3Signer options can be specified:

* On the command line.
* As an environment variable.
  For each command line option, the equivalent environment variable is:
    * Upper-case.
    * `_` replaces `-`.
    * Has a `WEB3SIGNER_` prefix.
* In a YAML configuration file.

If you specify an option in more than one place, the order of priority is command line, environment
variable, configuration file.

## Options

### `config-file`

Path to the [YAML configuration file](../../HowTo/Use-Configuration-File.md).
The default is `none`.

=== "Syntax"

    ```bash
    --config-file=<FILE>
    ```

=== "Example"

    ```bash
    --config-file=/home/me/me_node/config.yaml
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_CONFIG_FILE=/home/me/me_node/config.yaml
    ```

### `data-path`

=== "Syntax"

    ```bash
    --data-path=<PATH>
    ```

=== "Example"

    ```bash
    --data-path=/Users/me/my_node/data
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_DATA_PATH=/Users/me/my_node/data
    ```

=== "Configuration file"

    ```bash
    data-path: "/Users/me/my_node/data"
    ```

Directory in which to store temporary files.

### `key-store-path`

=== "Syntax"

    ```bash
    --key-store-path=<PATH>
    ```

=== "Example"

    ```bash
    --key-store-path=/Users/me/keys
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_KEY_STORE_PATH=/Users/me/keys
    ```

=== "Configuration file"

    ```bash
    key-store-path: "/Users/me/keys"
    ```

Path to the directory containing the [YAML files required to access keys].

### `logging`

=== "Syntax"

    ```bash
    -l, --logging=<LEVEL>
    ```

=== "Example"

    ```bash
    --logging=DEBUG
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_LOGGING=DEBUG
    ```

=== "Configuration file"

    ```bash
    logging: "DEBUG"
    ```

Sets logging verbosity. Log levels are `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`,
`ALL`. The default is `INFO`.

### `http-cors-origins`

A list of domain URLs for CORS validation. You must enclose the URLs in double quotes and separate
them with commas.

Listed domains can access the node using REST API. If your client interacts with Web3Signer using a
browser app, you must allow the client domains.

The default value is `none`. If you do not allow any domains, browser apps cannot interact with your
Web3Signer node.

!!! tip

    For testing and development purposes, use `"all"` or `"*"` to accept requests from any domain.
    We don't recommend accepting requests from any domain for production environments.

=== "Syntax"

    ```bash
    --http-cors-origins=<httpListenHost>
    ```

=== "Example"

    ```bash
    --http-cors-origins=""http://medomain.com"
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_HTTP_CORS_ORIGINS=""http://medomain.com"
    ```

=== "Configuration file"

    ```bash
    http-cors-origins=["https://meotherdomain.com"]
    ```

### `http-listen-host`

=== "Syntax"

    ```bash
    --http-listen-host=<httpListenHost>
    ```

=== "Example"

    ```bash
    --http-listen-host=8.8.8.8
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_HTTP_LISTEN_HOST=8.8.8.8
    ```

=== "Configuration file"

    ```bash
    http-listen-host: "8.8.8.8"
    ```

Host on which HTTP listens. The default is `localhost`.

### `http-listen-port`

=== "Syntax"

    ```bash
    --http-listen-port=<httpListenPort>
    ```

=== "Example"

    ```bash
    --http-listen-port=6174
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_HTTP_LISTEN_PORT=6174
    ```

=== "Configuration file"

    ```bash
    http-listen-port: 6174
    ```

Port on which HTTP listens. The default is 9000.

### `http-host-allowlist`

=== "Syntax"

    ```bash
    --http-host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

=== "Example"

    ```bash
    --http-host-allowlist=medomain.com,meotherdomain.com
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_HTTP_HOST_ALLOWLIST=medomain.com,meotherdomain.com
    ```

=== "Configuration file"

    ```bash
    http-host-allowlist: ["medomain.com", "meotherdomain.com"]
    ```

A comma-separated list of hostnames to allow access to the REST APIs. By default, Web3Signer
accepts access from `localhost` and `127.0.0.1`.

!!! tip

    To allow all hostnames, use `"*"`. We don't recommend allowing all hostnames for production
    environments.

### `idle-connection-timeout-seconds`

=== "Syntax"

    ```bash
    --idle-connection-timeout-seconds=<TIMEOUT>
    ```

=== "Example"

    ```bash
    --idle-connection-timeout-seconds=60
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_IDLE_CONNECTION_TIMEOUT_SECONDS=60
    ```

=== "Configuration file"

    ```bash
    idle-connection-timeout-seconds: 60
    ```

Number of seconds to wait before terminating an idle connection. The default is 30.

### `metrics-enabled`

=== "Syntax"

    ```bash
    --metrics-enabled[=<BOOLEAN>]
    ```

=== "Example"

    ```bash
    --metrics-enabled=true
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_METRICS_ENABLED=true
    ```

=== "Configuration file"

    ```bash
    metrics-enabled: true
    ```

Enables the metrics exporter. The default is `false`.

### `metrics-host`

=== "Syntax"

    ```bash
    --metrics-host=<HOST>
    ```

=== "Example"

    ```bash
    --metrics-host=186.10.10.1
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_METRICS_HOST=186.10.10.1
    ```

=== "Configuration file"

    ```bash
    metrics-host: "186.10.10.1"
    ```

The host on which [Prometheus](https://prometheus.io/) accesses metrics.
The default is `127.0.0.1`.

### `metrics-port`

=== "Syntax"

    ```bash
    --metrics-port=<PORT>
    ```

=== "Example"

    ```bash
    --metrics-port=6174
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_METRICS_PORT=6174
    ```

=== "Configuration file"

    ```bash
    metrics-port: 6174
    ```

The port (TCP) on which [Prometheus](https://prometheus.io/) accesses
metrics. The default is `9001`.

### `metrics-category`

=== "Syntax"

    ```bash
    --metrics-category=<metrics-category>[,metrics-category...]...
    ```

=== "Example"

    ```bash
    --metrics-category=HTTP,SIGNING,JVM
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_METRICS_CATEGORY=HTTP,SIGNING,JVM
    ```

=== "Configuration file"

    ```bash
    metrics-category: ["HTTP", "SIGNING", "JVM"]
    ```

A comma-separated list of categories for which to track metrics. The defaults are `HTTP`, `SIGNING`, `FILECOIN`, `ETH2_SLASHING_PROTECTION`, `JVM`, `PROCESS`.

### `metrics-host-allowlist`

=== "Syntax"

    ```bash
    --metrics-host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

=== "Example"

    ```bash
    --metrics-host-allowlist=medomain.com,meotherdomain.com
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_METRICS_HOST_ALLOWLIST=medomain.com,meotherdomain.com
    ```

=== "Configuration file"

    ```bash
    metrics-host-allowlist: ["medomain.com", "meotherdomain.com"]
    ```

A comma-separated list of hostnames to allow access to the [Web3Signer metrics]. By
default, Web3Signer accepts access from `localhost` and `127.0.0.1`.

!!! tip

    To allow all hostnames, use `"*"`. We don't recommend allowing all hostnames for production
    environments.

### `swagger-ui-enabled`

=== "Syntax"

    ```bash
    --swagger-ui-enabled[=<BOOLEAN>]
    ```

=== "Example"

    ```bash
    --swagger-ui-enabled
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_SWAGGER-UI_ENABLED=true
    ```

=== "Configuration file"

    ```bash
    swagger-ui-enabled: true
    ```

Set to true to interact with APIs using [Swagger UI]. The default is `false`.

Access Swagger UI at `http:<interface>:<port>/swagger-ui` where:

* `interface` is specified using [`--http-listen-host`](#http-listen-host)
* `port` is specified using [`http-listen-port`](#http-listen-port)

The default location is `http://localhost:9000/swagger-ui`.

### `tls-keystore-file`

=== "Syntax"

    ```bash
    --tls-keystore-file=<keystoreFile>
    ```

=== "Example"

    ```bash
    --tls-keystore-file=/Users/me/my_node/certificate.pfx
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_TLS_KEYSTORE_FILE=/Users/me/my_node/certificate.pfx
    ```

=== "Configuration file"

    ```bash
    tls-keystore-file: "/Users/me/my_node/certificate.pfx"
    ```

PKCS #12 formatted keystore. Used to enable TLS for [client connections](../../HowTo/Configure-TLS.md).

### `tls-keystore-password-file`

=== "Syntax"

    ```bash
    --tls-keystore-password-file=<passwordFile>
    ```

=== "Example"

    ```bash
    --tls-keystore-password-file=/Users/me/my_node/password.txt
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_TLS_KEYSTORE_PASSWORD_FILE=/Users/me/my_node/password.txt
    ```

=== "Configuration file"

    ```bash
    tls-keystore-password-file: "/Users/me/my_node/password.txt"
    ```

Password file used to decrypt the keystore.

### `tls-allow-any-client`

=== "Syntax"

    ```bash
    --tls-allow-any-client=<BOOLEAN>
    ```

=== "Example"

    ```bash
    --tls-allow-any-client=true
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_TLS_ALLOW_ANY_CLIENT=true
    ```

=== "Configuration file"

    ```bash
    tls-allow-any-client: true
    ```

Allows any client to connect. The default is `false`.

!!! important

    You can't use this option with [`--tls-allow-ca-clients`](#tls-allow-ca-clients)
    and [`--tls-known-clients-file`](#tls-known-clients-file).

### `tls-known-clients-file`

=== "Syntax"

    ```bash
    --tls-known-clients-file=<clientsFile>
    ```

=== "Example"

    ```bash
    --tls-known-clients-file=/Users/me/my_node/knownClients.txt
    ```

=== "Environment variable"

    ```bash
    WEB3SIGNER_TLS_KNOWN_CLIENTS_FILE=/Users/me/my_node/knownClients.txt
    ```

=== "Configuration file"

    ```bash
    tls-known-clients-file: "/Users/me/my_node/knownClients.txt"
    ```

File containing the Common Names and SHA-256 fingerprints
of [authorized clients](../../HowTo/Configure-TLS.md#create-the-known-clients-file).

### `tls-allow-ca-clients`

=== "Syntax"

    ```bash
    --tls-allow-ca-clients
    ```

=== "Environment Variable"

    ```bash
    WEB3SIGNER_TLS_ALLOW_CA_CLIENTS
    ```

=== "Configuration file"

    ```bash
    tls-allow-ca-clients
    ```

Allows clients signed with trusted CA certificates to connect.

### `help`

=== "Syntax"

    ```bash
    -h, --help
    ```

Displays the help and exits.

### `version`

=== "Syntax"

    ```bash
    -V, --version
    ```

Displays the version and exits.

<!-- links -->
[YAML files required to access keys]: ../Key-Configuration-Files.md
[Web3Signer metrics]: ../../HowTo/Monitor/Metrics.md
[Swagger UI]: https://swagger.io/tools/swagger-ui/
