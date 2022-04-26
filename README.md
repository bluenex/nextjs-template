# bluenex-frontend-collection

This is a repository to collect components I have implemented in React using Chakra-UI and Tailwind CSS. I personally enjoy writing components with styled-components. However, I discovered Chakra UI recently and think it provides an intuitive styled system that helps me a lot. I also have an interest in Tailwind CSS for a while but doesn't have much experience with it yet.

The components showcase uses [React Cosmos](https://reactcosmos.org/) to display components in a Storybook-like style. I tried Storybook and faced multiple issues during the setup for Chakra-UI and Tailwind CSS. After a couple of days I found React Cosmos and very happy with its simplicity.

This repository also contains templates for easy startup of a new project. Here is a current repository structure:

```sh
├── README.md
├── cra-ts-cosmos
├── nextjs-tailwind
└── nextjs-ts-chakra-ui
```

## Requirements

- Node 16+ with NPM 8+

## Stacks

- Next.js [+ TypeScript]
- Chakra UI / Tailwind CSS

## Dev

To run the development server for Cosmos:

```sh
npm run cosmos
```

## Deployment

To export Cosmos as a static site:

```sh
npm run cosmos:export
```

The Cosmos is deployed on GitHub Pages so it can be accessed from my personal website [https://bluenex.dev/frontend-collection](https://bluenex.dev/frontend-collection).

## Create a new project

To create a new project from this template, run the following command:

```sh
npx create-next-app -e https://github.com/bluenex/frontend-collection --example-path <base-template>
```

Where available `base-template`s are:

- `nextjs-ts-chakra-ui`
- `nextjs-tailwind`

### Update favicon

Get an icon file (prefer .SVG) and uses that file to generate favicons from this website https://realfavicongenerator.net/. The path to keep favicon is `public/favicon` and the path to refer to favicon files is `/favicon`.