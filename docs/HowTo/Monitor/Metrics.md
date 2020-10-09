---
description: Monitoring and metrics
---

# Use metrics to monitor performance

Enable the [Prometheus](https://prometheus.io/) monitoring and alerting service for
Web3Signer metrics using the [`--metrics-enabled`](../../Reference/CLI/CLI-Syntax.md#metrics-enabled)
option.

Web3Signer provides metrics for secp256k1 and BLS12-381 key types.

## Install Prometheus

To use Prometheus with Web3Signer, install the
[Prometheus main component](https://prometheus.io/download/). On MacOS, install with
[Homebrew](https://formulae.brew.sh/formula/prometheus):

 ```bash
 brew install prometheus
 ```

## Setting up and running Prometheus with Web3Signer

To configure Prometheus and run with Web3Signer:

1. Configure Prometheus to poll Web3Signer. For example, add the following YAML fragment to the
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

1. In another terminal, run Prometheus specifying the `prometheus.yml` file:

    ```bash
    prometheus --config.file=prometheus.yml
    ```

1. View the [Prometheus graphical interface](#view-prometheus-graphical-interface).

## View Prometheus graphical interface

1. Open a web browser to `http://localhost:9090` to view the Prometheus graphical interface.

1. Choose **Graph** from the menu bar and click the **Console** tab below.

1. From the **Insert metric at cursor** drop-down, select a metric and click **Execute**. The
   values display.

The following Web3Signer metrics are available.

Filecoin JSON RPC metrics:

| Name                            | Definition                                         |
|---------------------------------|----------------------------------------------------|
|`<keytype>_signing_request_count`| Number of signing requests made for the key type.  |
|`wallet_list_count`              | Number of `Filecoin.WalletList` API requests received.  |
|`wallet_has_count`               | Number of `Filecoin.WalletHas` API requests received.  |
|`wallet_sign_message_count`      | Number of `Filecoin.WalletSignMessage` API requests received.  |
|`wallet_sign_duration`           | The duration of signing operations.  |
|`total_request_count`            | Total number of Filecoin requests received.  |

HTTP API metrics:

| Name                               | Definition                                         |
|------------------------------------|----------------------------------------------------|
|`<keytype>_malformed_request_count` | Number of requests received which had illegally formatted body.  |
|`<keytype>_signing_duration`        | Duration of a signing event.  |
|`<keytype>_missing_identifier_count`| Number of signing requests for which no keys were available.  |
|`signers_loaded_count`              | Total number of SECP256k1 and BLS12-381 keys loaded.  |
|`signing_private_key_retrieval_time`| Time taken to retrieve [BLS signing keys].  |

<!-- Links -->
[Start Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[BLS signing keys]: ../Use-Signing-Keys.md
