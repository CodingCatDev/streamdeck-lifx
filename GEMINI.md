# Gemini Code Assistant Report

## Project Overview

This project is a Stream Deck plugin for controlling LIFX smart lights. It is written in TypeScript and uses the `@elgato/streamdeck` library for communication with the Stream Deck software. The plugin is bundled using Rollup.js.

The main entry point for the plugin is `src/plugin.ts`. This file registers the action handlers and connects to the Stream Deck. The action handlers are located in the `src/actions/` directory.

The plugin's manifest file is `dev.codingcat.streamdeck-lifx.sdPlugin/manifest.json`. This file defines the plugin's name, author, version, and other metadata. It also defines the actions that the plugin provides.

## Building and Running

To build and run the plugin, you will need to have Node.js and npm installed.

1.  Install the dependencies:

    ```bash
    npm install
    ```

2.  Build the plugin:

    ```bash
    npm run build
    ```

3.  Run the plugin in watch mode:

    ```bash
    npm run watch
    ```

    This will build the plugin and then watch for changes. When a change is detected, the plugin will be rebuilt and the Stream Deck software will be restarted.

## Development Conventions

The project uses TypeScript for all of its code. The code is formatted using Prettier.

The project also uses ESLint for linting. You can run the linter with the following command:

```bash
npm run lint
```

All new code should be accompanied by unit tests. The tests are located in the `src/tests/` directory. You can run the tests with the following command:

```bash
npm run test
```