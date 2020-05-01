---
description: Run Eth2Signer from Docker image
---

# Run Eth2Signer from Docker image

A Docker image is provided to run Eth2Signer in a Docker container.

## Prerequisites

* [Docker](https://docs.docker.com/install/)

* MacOS or Linux

    !!! important
        The Docker image does not run on Windows.

## Run Docker image

Display the Eth2Signer command line help using the Docker image:

```bash tab="develop"
docker run pegasyseng/eth2signer:develop --help
```

## Expose listening port

To use the default listening port (`9000`) or the port specified using
`--http-listen-port`, you must expose the listening port.

To run Eth2Signer exposing listening port for access:

```bash
docker run -p <listenPort>:9000 pegasyseng/eth2signer:develop <options>
```