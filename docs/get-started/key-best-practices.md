---
title: Private Key Management Best Practices
description: Apply best practices to keep keys and Web3Signer secure.
sidebar_position: 5
---

When running Web3Signer, there are several best practices to be aware of for proper key management. 

- Generate secure BLS keys
- Store keys in a vault or HSM - Ideally this should be encrypted which can’t be done right now
- Use environment authentication rather than password and token authentication where possible with vaults or HSMs
- Only expose the validator signing API on the necessary network interface
- Enable TLS authentication between the validator client and web3signer
- Restrict host access to Web3Signer with `--http-host-allowlist`
- Disable the key manager API
    - Alternatively, restrict access to the API entirely
- Configure the Postgres database with TLS authentication
- Restrict access to the key config, limiting read access to Web3Signer
- Run web3signer in a secure enclave e.g. https://aws.amazon.com/blogs/database/aws-nitro-enclaves-for-running-ethereum-validators-part-2