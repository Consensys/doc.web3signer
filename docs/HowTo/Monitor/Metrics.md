---
description: Monitoring and metrics
---

# Use metrics to monitor performance

Enable the [Prometheus](https://prometheus.io/) monitoring and alerting service for
Web3Signer metrics using the [`--metrics-enabled`](../../Reference/CLI/CLI-Syntax.md#metrics-enabled)
option.

## Install Prometheus

To use Prometheus with Web3Signer, install the
[Prometheus main component](https://prometheus.io/download/). On MacOS, install with
[Homebrew](https://formulae.brew.sh/formula/prometheus):

 ```bash
 brew install prometheus
 ```

## Setting up and running Prometheus with Web3Signer

To configure Prometheus and run with Web3Signer:

1. Configure Prometheus to poll Web3Signer. For example, add the following yaml fragment to the
   `scrape_configs` block of the `prometheus.yml` file:

    !!! example "Example configuration"

        ```yml
        global:
          scrape_interval: 15s
        scrape_configs:
          - job_name: "prometheus"
            static_configs:
            - targets: ["localhost:9090"]
          - job_name: "web3signer-dev"
            scrape_timeout: 10s
            metrics_path: /metrics
            scheme: http
            static_configs:
            - targets: ["localhost:9001"]
        ```

1. [Start Teku] by specifying the Web3Signer details.

1. Start Web3Signer with the
    [`--metrics-enabled`](../../Reference/CLI/CLI-Syntax.md#metrics-enabled) option.

    ```bash
    web3signer --key-store-path=/Users/me/keyFiles/ --metrics-enabled
    ```

    The `HTTP`, `SIGNING`, `JVM`, and `PROCESS` metrics categories are enabled by default.
    Use the [`--metrics-category`](../../Reference/CLI/CLI-Syntax.md#metrics-category)
    command line option to update the available categories.

1. In another terminal, run Psrometheus specifying the `prometheus.yml` file:

    ```bash
    prometheus --config.file=prometheus.yml
    ```

1. View the [Prometheus graphical interface](#view-prometheus-graphical-interface).

## View Prometheus graphical interface

1. Open a web browser to `http://localhost:9090` to view the Prometheus graphical interface.

1. Choose **Graph** from the menu bar and click the **Console** tab below.

1. From the **Insert metric at cursor** drop-down, select a metric such as
   `http_server_request_time` or `client_request_time` and click **Execute**. The
   values display.

The following Web3Signer metrics are available.

| Name                       | Definition                                         |
|----------------------------|----------------------------------------------------|
| `client_request_time`      | Time taken to process client HTTP requests. For example, from Hashicorp Vault. |
| `http_server_request_time` | Time taken to process incoming HTTP requests. For example, from Teku. |
|`signing_private_key_retrieval_time` | Time taken to retrieve the signing key from a [raw unencrypted or keystore] file. |

<!-- Links -->
[Start Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[raw unencrypted or keystore]: ../Use-Signing-Keys.md
