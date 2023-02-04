# Upland Stats

A Chrome extension to give additional property and neighbourhood stats for play.upland.me

Get neighbourhood rental rates as you nav around Upland:

<img width="450" alt="Screen Shot 2023-02-03 at 7 26 54 pm" src="https://user-images.githubusercontent.com/705261/216741975-f2e73fae-1b71-47c9-8165-3c23fe3784ba.png">

Zoom viewscreen into a neighbourhood (must be only 1 nighbourhood in viewscreen), and get property data.

<img width="450" alt="Screen Shot 2023-02-03 at 7 27 25 pm" src="https://user-images.githubusercontent.com/705261/216741979-66e82688-62d4-4cc2-9f33-10f581682154.png">

Save properties to your stash to track and compare.

<img width="450" alt="Screen Shot 2023-02-04 at 12 39 55 pm" src="https://user-images.githubusercontent.com/705261/216742228-acc1954f-2493-4f10-a643-a71605bd9bd3.png">

Compare your property list and track the base Return on Investment (ROI) on each.

<img width="450" alt="Screen Shot 2023-02-04 at 12 40 07 pm" src="https://user-images.githubusercontent.com/705261/216742230-723a22b9-55e4-430b-a3a8-72b9fca77f82.png">

## Layout & Tech

* Typescript + JS
* Chrome Extension Manifest v3
* Lib / Services Layer - plumbing coordinating upland api calls
* UI - The Upland Stats extension popup uses Vue 3 in Vite
* Worker - A background worker is responsible for monitoring play.upland.me nd echoes state to the UI's vue reactive store. Specifically it:
  * Monitors play.upland.me requests for viewing context
  * Can fetch / parse play.upland.me html on demand

## State of things

ATM its just a POC / hack for fun thing - no tests (yet ;)) - tho feel free to add any needed - Playwright and vitest are setup.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
