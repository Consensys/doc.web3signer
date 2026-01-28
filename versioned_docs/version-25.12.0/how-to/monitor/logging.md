---
description: Configure Web3Signer's log level settings and log formatting.
sidebar_position: 2
---

# Configure logging

Web3Signer provides two methods to configure logging:

- [Basic](#basic-log-level-setting) - changes the log level.
- [Advanced](#advanced-custom-logging) - configures the output and format of the logs.

## Basic log level setting

Use the [`--logging`](../../reference/cli/options.md#logging) command line option to specify logging verbosity.
The [`--logging`](../../reference/cli/options.md#logging) option changes the volume of events
displayed in the log.
Valid log levels are `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, `ALL`.
The default level is `INFO`.

## Advanced custom logging

You can provide your own logging configuration using the standard Log4J2 configuration mechanisms.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration level="INFO">
  <Properties>
    <Property name="root.log.level">INFO</Property>
    <Property name="dependency.log.level">INFO</Property>
  </Properties>

  <Appenders>
    <Console name="Console" target="SYSTEM_OUT">
      <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSSZZZ} | %t | %-5level | %c{1} | %msg%n"/>
    </Console>
  </Appenders>
  <Loggers>
    <Logger name="com.azure.security.keyvault.secrets.SecretAsyncClient"
      level="${dependency.log.level}" additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Logger name="com.networknt.schema" level="${env:dependency.log.level}" additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Logger name="org.jdbi.v3.core" level="${env:dependency.log.level}" additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Logger name="com.zaxxer.hikari" level="${env:dependency.log.level}" additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Logger name="io.swagger.v3" level="${env:dependency.log.level}"
      additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Logger name="io.netty" level="${env:dependency.log.level}" additivity="false">
      <AppenderRef ref="Console"/>
    </Logger>
    <Root level="${sys:root.log.level}">
      <AppenderRef ref="Console"/>
    </Root>
  </Loggers>
</Configuration>
```

To use your custom configuration, set the environment variable `JAVA_OPTS` to the location of your
configuration file.

```bash
export JAVA_OPTS="-Dlog4j.configurationFile=<path_to_file>"
```

The above is an example, you can tune your requirements and create your own
[log4j2 configuration](https://logging.apache.org/log4j/2.x/manual/configuration.html).

For Bash-based executions, you can set the variable for only the scope of the program execution by
setting it before starting Web3Signer.

```bash title="Set the custom logging and start Web3Signer"
JAVA_OPTS="-Dlog4j.configurationFile=/Users/me/debug.xml" web3signer --key-store-path=/Users/me/keyFiles/ eth2
```
