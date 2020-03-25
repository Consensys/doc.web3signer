---
description: Building Eth2Signer from source code
---

# Build from source

## Prerequisites

* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

!!!important
    Eth2Signer requires Java 11 or later releases.

* [Git](https://git-scm.com/downloads) or [GitHub Desktop](https://desktop.github.com/)

## Installation on Linux / Unix / macOS

### Clone the Eth2Signer Repository

Clone the `PegaSysEng/eth2signer` repository:

```bash
git clone https://github.com/PegaSysEng/eth2signer.git
```

### Build Eth2Signer

After cloning, go to the `eth2signer` directory.

Build Eth2Signer with the Gradle wrapper `gradlew`:

```bash
./gradlew build
```

Go to the distribution directory:

```bash
cd build/distributions/
```

Expand the distribution archive:

```bash
tar -xzf eth2signer-<version>.tar.gz
```

Move to the expanded folder and display the Eth2Signer help to confirm installation.

````bash
cd eth2signer-<version>/
bin/eth2signer --help
````

## Installation on Windows

### Install Eth2Signer

Clone the `PegaSysEng/eth2signer` repository:

```bat
git clone https://github.com/PegaSysEng/eth2signer.git
```

### Build Eth2Signer

Go to the `eth2signer` directory:

```bat
cd eth2signer
```

Build Eth2Signer with the Gradle wrapper `gradlew`:

```bat
.\gradlew build
```

!!!note
    To run `gradlew`, you must have the **JAVA_HOME** system variable set to the Java installation directory.
    For example: `JAVA_HOME = C:\Program Files\Java\jdk1.8.0_181`.

Go to the distribution directory:

```bat
cd build\distributions
```

Expand the distribution archive:

```bat
tar -xzf eth2signer-<version>.tar.gz
```

Go to the expanded folder and display the Eth2Signer help to confirm installation.

```bat
cd eth2signer-<version>
bin\eth2signer --help
```
