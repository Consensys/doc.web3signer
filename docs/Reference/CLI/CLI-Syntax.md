---
description: Eth2Signer command line interface reference
---

# Eth2Signer command line

## Options

### data-path

```bash tab="Syntax"
--data-path=<PATH>
```

```bash tab="Example"
--data-path=/Users/me/my_node/data
```

Directory in which to store temporary files.

### key-store-path

```bash tab="Syntax"
--key-store-path=<PATH>
```

```bash tab="Example"
--key-store-path=/Users/me/keys
```

Path to the directory containing the YAML files required to access keys.

### key-cache-limit

```bash tab="Syntax"
--key-cache-limit=<LONG>
```

```bash tab="Example"
--key-cache-limit=1500
```

Maximum number of keys to cache in memory.

### logging

```bash tab="Syntax"
-l, --logging=<LEVEL>
```

```bash tab="Example"
--logging=DEBUG
```

Sets logging verbosity. Log levels are `OFF`, `FATAL`, `WARN`, `INFO`, `DEBUG`, `TRACE`,
`ALL`. The default is `INFO`.

### http-listen-host

```bash tab="Syntax"
--http-listen-host=<httpListenHost>
```

```bash tab="Example"
--http-listen-host=8.8.8.8
```

Host on which HTTP listens. Default is `localhost`.

### http-listen-port

```bash tab="Syntax"
--http-listen-port=<httpListenPort>
```

```bash tab="Example"
--http-lisentport=6174
```

Port on which HTTP listens. Default is 9000.

### metrics-enabled

```bash tab="Syntax"
--metrics-enabled
```

```bash tab="Example"
--metrics-enabled=true
```

Enables the metrics exporter. The default is `false`.

### metrics-host

```bash tab="Syntax"
--metrics-host=<HOST>
```

```bash tab="Example"
--metrics-host=127.0.0.1
```

The host on which [Prometheus](https://prometheus.io/) accesses metrics.
The default is `127.0.0.1`.

### metrics-port

```bash tab="Syntax"
--metrics-port=<PORT>
```

```bash tab="Example"
--metrics-port=6174
```

The port (TCP) on which [Prometheus](https://prometheus.io/) accesses
metrics. The default is `9001`. 

### metrics-category

```bash tab="Syntax"
--metrics-category=<metrics-category>[,metrics-category...]...
```

```bash tab="Syntax"
--metrics-category=BLOCKCHAIN,PEERS,PROCESS
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
