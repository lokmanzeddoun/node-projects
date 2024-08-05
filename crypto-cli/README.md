# Crypto CLI

Crypto CLI is a command-line interface (CLI) application for fetching and displaying information about cryptocurrencies. It uses `yargs` for handling command-line arguments and a customizable display format for cryptocurrency data.

## Features

- Fetch and display cryptocurrency data
- Customize the display format with visibility levels: `less`, `normal`, and `all`
- Uses an external API to retrieve the latest cryptocurrency information

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/lokmanzeddoun/node-projects/new/main/crypto-cli
    cd crypto-cli
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Usage

### Basic Command

```sh
ts-node index.ts list --limit=<limit-number> --visibility <visibility-level>
```
```sh
ts-node index.ts show --id=<crypto-id> 
```
