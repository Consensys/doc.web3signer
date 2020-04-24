---
description: Eth2Signer command line interface reference
---

# Eth2Signer command line

This reference describes the syntax of the Eth2Signer Command Line Interface (CLI) options.

## Specifying Options

Eth2Signer options can be specified:

* On the command line
* As an [environment variable](#eth2signer-environment-variables)
* In a YAML configuration file.

If you specify an option in more than one place, the order of priority is command line, environment
variable, configuration file.

### Eth2Signer environment variables

For each command line option, the equivalent environment variable is:

* Upper-case
* `_` replaces `-`
* Has an `ETH2SIGNER_` prefix

For example, set `--data-path` using the `ETH2SIGNER_DATA_PATH` environment variable.

## Options

### data-path

```bash tab="Syntax"
--data-path=<PATH>
```

```bash tab="Command Line"
--data-path=/Users/me/my_node/data
```

```bash tab="Configuration File"
data-path: "/Users/me/my_node/data"
```

```bash tab="Environment Variable"
ETH2SIGNER_DATA_PATH=/Users/me/my_node/data
```

Directory in which to store temporary files.

### key-store-path

```bash tab="Syntax"
--key-store-path=<PATH>
```

```bash tab=""
--key-store-path=/Users/me/keys
```

```bash tab="Configuration File"
key-store-path: "/Users/me/keys"
```

```bash tab="Environment Variable"
ETH2SIGNER_KEY_STORE_PATH=/Users/me/keys
```

Path to the directory containing the YAML files required to access keys.

### key-cache-limit

```bash tab="Syntax"
--key-cache-limit=<LONG>
```

```bash tab="Command Line"
--key-cache-limit=1500
```

```bash tab="Configuration File"
key-cache-limit: 1500
```

```bash tab="Environment Variable"
ETH2SIGNER_KEY_CACHE_LIMIT=1500
```

Maximum number of keys to cache in memory.

### logging

```bash tab="Syntax"
-l, --logging=<LEVEL>
```

```bash tab="Command Line"
--logging=DEBUG
```

```bash tab="Configuration File"
logging: "DEBUG"
```

```bash tab="Environment Variable"
ETH2SIGNER_LOGGING=DEBUG
```

Sets logging verbosity. Log levels are `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`,
`ALL`. The default is `INFO`.

### http-listen-host

```bash tab="Syntax"
--http-listen-host=<httpListenHost>
```

```bash tab="Command Line"
--http-listen-host=8.8.8.8
```

```bash tab="Configuration File"
http-listen-host: "8.8.8.8"
```

```bash tab="Environment Variable"
ETH2SIGNER_HTTP_LISTEN_HOST=8.8.8.8
```

Host on which HTTP listens. Default is `localhost`.

### http-listen-port

```bash tab="Syntax"
--http-listen-port=<httpListenPort>
```

```bash tab="Command Line"
--http-listen-port=6174
```

```bash tab="Configuration File"
http-listen-port: 6174
```

```bash tab="Environment Variable"
ETH2SIGNER_HTTP_LISTEN_PORT=6174
```

Port on which HTTP listens. Default is 9000.

### metrics-enabled

```bash tab="Syntax"
--metrics-enabled
```

```bash tab="Command Line"
--metrics-enabled=true
```

```bash tab="Configuration File"
metrics-enabled: true
```

```bash tab="Environment Variable"
ETH2SIGNER_METRICS_ENABLED=true
```

Enables the metrics exporter. The default is `false`.

### metrics-host

```bash tab="Syntax"
--metrics-host=<HOST>
```

```bash tab="Command Line"
--metrics-host=127.0.0.1
```

```bash tab="Configuration File"
metrics-host: "127.0.0.1"
```

```bash tab="Environment Variable"
ETH2SIGNER_METRICS_HOST=127.0.0.1
```

The host on which [Prometheus](https://prometheus.io/) accesses metrics.
The default is `127.0.0.1`.

### metrics-port

```bash tab="Syntax"
--metrics-port=<PORT>
```

```bash tab="Command Line"
--metrics-port=6174
```

```bash tab="Configuration File"
metrics-port: 6174
```

```bash tab="Environment Variable"
ETH2SIGNER_METRICS_PORT=6174
```

The port (TCP) on which [Prometheus](https://prometheus.io/) accesses
metrics. The default is `9001`. 

### metrics-category

```bash tab="Syntax"
--metrics-categories=<metrics-category>[,metrics-category...]...
```

```bash tab="Syntax"
--metrics-categories=HTTP,SIGNING,JVM
```

```bash tab="Configuration File"
metrics-categories: ["HTTP", "SIGNING", "JVM"]
```

```bash tab="Environment Variable"
ETH2SIGNER_METRICS_CATEGORIES=HTTP,SIGNING,JVM
```

A comma-separated list of categories for which to track metrics. The defaults are `HTTP`, `SIGNING`, `JVM`, `PROCESS`.

### `help`

```bash tab="Syntax"
-h, --help
```

Displays the help and exits.

### `version`

```bash tab="Syntax"
-V, --version
```

Displays the version and exits.
