---
description: Run Web3Signer from Docker image
---

# Run Web3Signer from Docker image

A Docker image is provided to run Web3Signer in a Docker container.

## Prerequisites

* [Docker](https://docs.docker.com/install/)

* MacOS or Linux

    !!! important
        The Docker image does not run on Windows.

## Run Docker image

Display the Web3Signer command line help using the Docker image:

=== "develop"

    ```bash
    docker run pegasyseng/web3signer:develop --help
    ```

## Expose listening port

To use the default listening port (`9000`) or the port specified using
`--http-listen-port`, you must expose the listening port.

To run Web3Signer exposing listening port for access:

```bash
docker run -p <listenPort>:9000 pegasyseng/web3signer:develop [options] [subcommand] [options]
```
