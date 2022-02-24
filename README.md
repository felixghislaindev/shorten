<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

# Project title

Shorten is a simple full-stack application that provides URL shortening functionality,it uses NanoId in the backend.

## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Tech/framework used

<b>FRONT END</b>

- [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/)
- [Graphql](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

<b>BACK END</b>

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Graphql](https://graphql.org/)
- [NanoId](https://graphql.org/)

## Installation

Step-by-step series of examples and explanations about the installation and running of the app to get you smoothly developing.
**1. Cloning the project**

```sh
# Clone with SSH:
git@github.com:felixghislaindev/shorten.git
# Clone with HTTPS:
https://github.com/felixghislaindev/shorten.git
```

**2. Install required project dependencies**

```sh
# install all required packages:
npm install
```

**3.Start/Run the project.**

    1. Navigate to the server(to run the back-end server).

    ```
    create .env file
    npm install
    npm run start
    ```
    2. Navigate to shorten-front-end (to run the front-end server).

    ```
    npm install
    npm run start
    ```

To run the required unit test for the project

```sh
# run all tests for the project:
npm run test
```

## 🧐 What's inside?

```
shorten
├─ server
│  ├─ .env
│  ├─ .eslintrc.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ database
│  │  │  └─ index.ts
│  │  ├─ graphql
│  │  │  ├─ index.ts
│  │  │  ├─ resolvers.ts
│  │  │  └─ typeDefs.ts
│  │  └─ lib
│  │     └─ types.ts
│  └─ tsconfig.json
└─ shorten-front-end
   ├─ .babelrc
   ├─ README.md
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ setupTests.js
   ├─ src
   │  ├─ App.css
   │  ├─ App.tsx
   │  ├─ components
   │  │  ├─ button
   │  │  │  └─ Button.tsx
   │  │  ├─ index.tsx
   │  │  ├─ navBar
   │  │  │  └─ Navbar.tsx
   │  │  ├─ previousShortenUrls
   │  │  │  ├─ PreviousShortenUrls.test.tsx
   │  │  │  └─ PreviousShortenUrls.tsx
   │  │  ├─ shortUrlSection
   │  │  │  ├─ ShortUrlSection.test.tsx
   │  │  │  └─ ShortUrlSection.tsx
   │  │  ├─ shortenInfo
   │  │  │  └─ ShortenInfo.tsx
   │  │  └─ shortenUrlClipboard
   │  │     ├─ shortemUrlClipboard.test.tsx
   │  │     └─ shortenUrlClipboard.tsx
   │  ├─ index.tsx
   │  ├─ lib
   │  │  └─ api
   │  │     ├─ index.ts
   │  │     ├─ server.ts
   │  │     └─ useQuery.ts
   │  ├─ mockProvider
   │  │  └─ myMockProvider.js
   │  ├─ styles
   │  │  └─ index.css
   │  └─ types
   │     └─ index.ts
   ├─ tailwind.config.js
   └─ tsconfig.json

```

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Dev Team

[Felix Ghislain](https://gitlab.com/felixghislain)

## License

A short snippet describing the license (MIT, Apache, etc.)

MIT ©

<!-- AUTO-GENERATED-CONTENT:END -->
