# bluenex-starter-kit

This is a repository to keep potentially reusable templates/components that I have implemented. I have no skill in design at all so some of them might be dull. Also, it may or may not follow the best practice, but consistency will be my priority.

I personally enjoy writing components with styled-components. However, I discovered Chakra UI recently and think it provides an intuitive styled system that helps me a lot. So I am personally attached to these 2 libraries and so that I include them in the storybook. I also have an interest in Tailwind CSS for a while but currently doesn't have much experience with it yet, still add it to the template anyway.

This repository contains templates for a new project with Next.js + TypeScript + (Chakra UI / styled-components / Tailwind CSS).

## Requirements

- Node 16+

## Stacks

- Next.js + TypeScript
- Chakra UI / styled-components / Tailwind CSS

## Create a new project

To create a new project from this template, run the following command:

```sh
npx create-next-app -e https://github.com/bluenex/bluenex-storybook

# optional, cleanup components and stories
cd scripts
./new-proj-cleanup.sh
```

## Update favicon

Get an icon file (prefer .SVG) and uses that file to generate favicons from this website https://realfavicongenerator.net/. The path to keep favicon is `public/favicon` and the path to refer to favicon files is `/favicon`.

## Dev

To run the development server for Next.js:

```sh
npm run dev
```

For storybook please check [its README](./stories/README.md).

## Deployment

The Storybook is deployed on Vercel and can be redirected from my personal website https://bluenex.dev/storybook.