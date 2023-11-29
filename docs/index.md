---
title: Web3Signer
description: Web3Signer is an open-source signing service developed under the Apache 2.0 license and written in Java.
sidebar_position: 1
slug: /
---

# Web3Signer

:::caution Filecoin deprecation notice

Web3Signer has deprecated Filecoin and will remove it in a future release. If you still require this feature, we encourage
community members to maintain the code by creating a fork and submitting pull requests. Alternatively, you can continue
using an older version of Web3Signer that still supports Filecoin.

:::

Web3Signer is an open-source signing service developed under the Apache 2.0 license and written in Java.

## What can you do with Web3Signer?

Web3Signer can sign on multiple platforms using private keys stored in an external vault, or encrypted on a disk.

Web3Signer can sign payloads using secp256k1 and BLS12-381 signing keys, and supports the following platforms:

- Execution layer (formerly called Ethereum 1.0)
- Consensus layer (formerly called Ethereum 2.0)
- [Filecoin](https://filecoin.io/)

## New to Web3Signer?

Get started by running Web3Signer with Docker or installing Web3Signer. You can:

- [Run Web3Signer from a Docker image](get-started/use-docker.md)
- [Install the binary distribution](get-started/install-binaries.mdx)
- [Build from source](get-started/build-from-source.md)
