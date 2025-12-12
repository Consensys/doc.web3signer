# OpenAPI Specifications

This directory contains OpenAPI specifications synced from the [Web3Signer repository](https://github.com/Consensys/web3signer).

> **Note:** These specs are in `src/` because they are only used at build time to generate the API documentation. They are not included in the final site output.

## Files

- `eth2/` - Original ETH2 OpenAPI spec files (synced from Web3Signer)
- `eth1/` - Original ETH1 OpenAPI spec files (synced from Web3Signer)
- `eth2-bundled.yaml` - Bundled ETH2 spec with all `$ref` resolved
- `eth1-bundled.yaml` - Bundled ETH1 spec with all `$ref` resolved

## Syncing

These files are automatically synced from the Web3Signer repository via the `sync-openapi.yml` GitHub Action workflow.

To manually sync:

1. Run the workflow from the Actions tab, or
2. Run locally:
   ```bash
   npm run gen-api-docs
   ```

## Generated Documentation

The generated API documentation is output to:
- `docs/reference/api/eth2/` - Consensus layer API docs
- `docs/reference/api/eth1/` - Execution layer API docs

