---
description: Configure Ethereum 2.0 slashing protection
---

# Configure Ethereum 2.0 slashing protection

Configure [slashing protection] to prevent Ethereum 2.0 validators from being penalized for signing
conflicting blocks or attestations.

You need to install and manage the PostgreSQL database that stores the validator signing history for
one or more Web3Signer instances.

The steps to configure slashing protection are:

1. [Install the PostgreSQL database](#install-the-postgresql-database).
1. [Load the database schema](#load-the-database-schema).
1. [Start Web3Signer and specify the database details](#start-web3signer).

## Install the PostgreSQL database

[Install the PostgreSQL database], or use [Docker] to [run the PostgreSQL database in a container].
The following example uses a Docker container.

Create the database with the default `postgres` user, and specify the password and database name.

```no-lang
docker run -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres -e POSTGRES_DB=web3signer -p 5432:5432 postgres
```

!!! note

    Use `-p 5432:5432` to bind the default Postgres database port to the host's port. 

## Load the database schema

Web3Signer provides a database schema to configure the database. Find the schema in
`/migrations/postgresql/` in the Web3Signer installation directory.

The following examples show how to load the schema using the [Flyway] database migration tool or
the PostgreSQL command line tool.

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
web3signer --key-store-path=/Users/me/keys eth2 --slashing-protection-db-url="jdbc:postgresql://localhost/web3signer" --slashing-protection-db-username=postgres --slashing-protection-db-password=password
```

!!! note

    If using a non-default port number for your PostgreSQL database, then
    [include the port number in the database URL].

<!-- links -->
[slashing protection]: ../Concepts/Slashing-Protection.md
[Install the PostgreSQL database]: https://www.postgresql.org/download/
[Docker]: https://docs.docker.com/install/
[run the PostgreSQL database in a container]: https://hub.docker.com/_/postgres/
[Flyway]: https://flywaydb.org/documentation/
[include the port number in the database URL]: https://jdbc.postgresql.org/documentation/head/connect.html