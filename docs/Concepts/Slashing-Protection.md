---
description: Describe how slashing protection works in Web3Signer
---

# Slashing protection

Slashing refers to penalties that are applied to Ethereum 2.0 validators that sign conflicting
blocks or attestations.

Web3Signer provides slashing protection to prevent validators from signing blocks or attestations
based on what it has already signed. A slashing protection database records each block
or attestation signed by a validator.

Slashing protection is enabled by default, and you are responsible for [creating and maintaining]
the required PostgreSQL database, or you can disable slashing protection by setting
[`--slashing-protection-db-enabled`](../Reference/CLI/CLI-Subcommands.md#slashing-protection-enabled)
to `false`.

!!! note

    Web3Signer only supports PostgreSQL for creating the slashing protection database.

Multiple Web3Signer instances can connect to the slashing protection database to ensure
the same validator key is not used by more than one Web3Signer instance.

<!--links-->
[creating and maintaining]: ../HowTo/Configure-Slashing-Protection.md
