# Osapiens Frontend — Bug Bounty Challenge

A React + TypeScript demo application used as a frontend coding challenge. The app displays a list of known issues and invites developers to find and fix them.

## Tech Stack

| Layer | Library / Version |
|---|---|
| UI Framework | React 17 |
| Language | TypeScript 4.4 |
| Component Library | MUI v5 |
| State Management | MobX 6 + mobx-react 7 |
| Routing | React Router 5 |
| Internationalisation | i18next + react-i18next |
| Build Tooling | react-scripts 4 (webpack 4) |

## Prerequisites

- Node.js ≥ 18 (tested on v22)
- npm

> **Node.js 22 note:** webpack 4 uses a legacy OpenSSL API that is not available in Node.js 17+. If you encounter an `ERR_OSSL_EVP_UNSUPPORTED` error, prefix the command with `NODE_OPTIONS=--openssl-legacy-provider` (e.g. `NODE_OPTIONS=--openssl-legacy-provider npm start`).

## Getting Started

```bash
npm install
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Build for production |
| `npm test` | Run the test suite |
| `npm run eject` | Eject from react-scripts (irreversible) |

## Project Structure

```
src/
  api/services/User/    # MobX UserStore + React context provider
  components/
    AppHeader/          # App bar with countdown, language switcher, avatar
    AvatarMenu/         # User avatar with dropdown menu
  hooks/
    useCountDown.ts     # Custom countdown timer hook
  i18n/
    locales/            # Translation files (en.json, de.json)
  pages/
    Home/               # Issue list page
    Root/               # App shell (routing, loading state, app bar)
    AccessDenied/       # 403 page
  themes/               # MUI theme tokens
  types/                # Shared TypeScript types
  utils/                # Helper utilities
```

## Issues Addressed

The following issues were tracked on GitHub and fixed on individual branches:

| # | Title | Branch |
|---|---|---|
| 1 | 🐞 Console error: Warning: Each child in a list should have a unique "key" prop. | `1-unique-key-prop` |
| 2 | 🐞 The word "known" should be displayed bold in the introduction text. | `2-the-word-known-should-be-displayed-bold` |
| 3 | 🐞 User avatar in app bar is missing, although user should be fetched on app start correctly. | `3-user-avatar-in-app-bar-is-missing` |
| 4 | 🐞 Optional: Countdown is broken sometimes (hard to reproduce). | `4-countdown-is-broken-sometimes` |
| 5 | ⭐️ Optional: It would be great to be able to switch the language. | `5-it-would-be-great-to-be-able-to-switch-the-language` |

## Internationalisation

The app supports English (`en`) and German (`de`). Translation files are located in `src/i18n/locales/`. The language can be switched at runtime using the selector in the app bar.
