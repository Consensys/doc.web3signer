---
description: Describe how slash protection works in Web3Signer
---

# Slashing protection

Slashing refers to penalties that are applied to validators that sign conflicting blocks or
attestations.

Web3Signer provides slashing protection to prevent validators from signing blocks or attestations
based on what it has already signed. A slashing protection database records each block
or attestation signed by a validator.

Slashing protection is enabled by default, and you are responsible for creating and maintaining the
required Postgres database.
