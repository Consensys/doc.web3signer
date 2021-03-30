---
description: Configure Ethereum 2.0 slashing protection
---

# Configure Ethereum 2.0 slashing protection

Configure [slashing protection] to prevent Ethereum 2.0 validators from being penalized for signing
conflicting blocks or attestations.

Install and manage the PostgreSQL database that stores the validator signing history for
one or more Web3Signer instances.

!!! note

    Ethereum 2.0 [slashing protection] is enabled by default. You therefore must configure a
    slashing protection database, or disable slashing protection using the
    [`--slashing-protection-db-enabled`](../Reference/CLI/CLI-Subcommands.md#slashing-protection-enabled)
    command line option.

The steps to configure slashing protection are:

1. [Install the PostgreSQL database](#install-the-postgresql-database).
1. [Load the database schema](#load-the-database-schema).
1. [Start Web3Signer and specify the database details](#start-web3signer).

## Install the PostgreSQL database

[Install the PostgreSQL database], or use [Docker] to [run the PostgreSQL database in a container].
The following example uses a Docker container.

!!! note

    Web3Signer only supports PostgreSQL for creating the slashing protection database.

As an example, create the database with the default `postgres` user, and specify the password and
database name.

```bash
docker run -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres -e POSTGRES_DB=web3signer -p 5432:5432 postgres
```

!!! note

    In the example we use `-p 5432:5432` to bind the default Postgres database port to the host's
    port. This allows you to [connect to the database] using the
    `jdbc:postgresql://localhost/web3signer` URL.

## Load the database schema

Web3Signer provides a database schemas to configure the database. Find the schemas in
`/migrations/postgresql/` in the Web3Signer installation directory.

The following examples show how to load the schema using the [Flyway] database migration tool or
the PostgreSQL command line tool.

!!! note

    If loading each schema individually, then ensure you load them in order. For example
    `V1_initial.sql`, `V2__removeUniqueConstraints.sql`, then `V3__addLowWatermark.sql`. Use the
    [Flyway] migration tool to automatically load them in order.

=== "Flyway DB migration tool"

    ```bash
    flyway migrate -url="jdbc:postgresql://localhost/web3signer" -locations="filesystem:/Users/me/web3signer-0.2.1-SNAPSHOT/migrations/postgresql"
    ```

=== "Postgres command line"

    ```bash
    psql --echo-all --host=localhost --port=5432 --dbname=web3signer --username=postgres -f /Users/me/web3signer-0.2.1-SNAPSHOT/migrations/postgresql/postgresql/V1__initial.sql
    ```

!!! note

    If using the PostgreSQL command line inside a docker container, ensure you mount the `/migrations/postgresql/`
    directory to the docker container to access the schema file.

## Start Web3Signer

Start Web3Signer and specify the PostgreSQL connection options.

```bash
web3signer --key-store-path=/Users/me/keys eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password --slashing-protection-pruning-enabled=true
```

!!! note

    If using a non-default port number for your PostgreSQL database, then
    [include the port number in the database URL].

Including [`--slashing-protection-pruning-enabled=true`](../Reference/CLI/CLI-Subcommands.md#slashing-protection-pruning-enabled) enables [slashing protection database pruning].

Start the client, for example [Teku] by specifying the Web3Signer details.

## Import or export a slashing protection database

You can import or export the slashing protection database. When importing, additional entries are
added to the existing database.

Web3Signer supports importing or exporting using the [validator client interchange format]. Use the
[`eth2 import`](../Reference/CLI/CLI-Subcommands.md#eth2-import) and
[`eth2 export`](../Reference/CLI/CLI-Subcommands.md#eth2-export) to import or export files.

To import a slashing protection database file into the Postgres database, run:

!!! example

    ```bash
    web3signer eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password import --from=/Users/me/my_node/interchange.json
    ```

To export the Postgres database to a file run:

!!! example

    ```bash
    web3signer eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password export --to=/Users/me/my_node/interchange.json
    ```

You must supply the Postgres database connection details when importing or exporting the slashing
protection database.

## Prune the slashing protection database

You can enable periodic pruning of the slashing protection database to manage its size.

Enable pruning by setting [`--slashing-protection-pruning-enabled`](../Reference/CLI/CLI-Subcommands.md#slashing-protection-pruning-enabled) to `true`.
You can include additional optional pruning configuration options. For example, run:

!!! example

    ```bash
    web3signer eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password --slashing-protection-pruning-enabled=true --slashing-protection-pruning-epochs-to-keep=5000 --slashing-protection-pruning-interval=18
    ```
Web3Signer prunes the database on startup, and then after each pruning interval.

!!! warning

    Do not use slashing protection database pruning while [importing or exporting the database](#import-or-export-a-slashing-protection-database).

<!-- links -->
[slashing protection]: ../Concepts/Slashing-Protection.md
[slashing protection database pruning]: #prune-the-slashing-protection-database
[Install the PostgreSQL database]: https://www.postgresql.org/download/
[Docker]: https://docs.docker.com/install/
[run the PostgreSQL database in a container]: https://hub.docker.com/_/postgres/
[Flyway]: https://flywaydb.org/documentation/
[include the port number in the database URL]: https://jdbc.postgresql.org/documentation/head/connect.html
[Teku]: https://docs.teku.pegasys.tech/en/latest/HowTo/External-Signer/Use-External-Signer/
[connect to the database]: https://jdbc.postgresql.org/documentation/head/connect.html
[validator client interchange format]: https://eips.ethereum.org/EIPS/eip-3076
