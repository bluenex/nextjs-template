## Not working note

Cannot get tailwind to work with storybook. I have tried adding common configs as follows:

- add postcss addon

```sh
npm i --save-dev @storybook/addon-postcss
```

- add addon config in `.storybook/main.js`

```js
{
  name: "@storybook/addon-postcss",
  options: {
    postcssLoaderOptions: {
      implementation: require("postcss")
    }
  }
}
```

- import `src/index.css` in `.storybook/preview.js`

```js
import "../src/index.css"
```

This still cause the error on build like so:

```sh
$ npm run storybook

> cra-ts-storybook@0.1.0 storybook
> BROWSER=none start-storybook -p 6006 -s public

info @storybook/react v6.4.22
info
(node:55160) DeprecationWarning: --static-dir CLI flag is deprecated, see:

https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated---static-dir-cli-flag
(Use `node --trace-deprecation ...` to show where the warning was created)
info => Loading presets
info => Serving static files from ./public at /
info => Loading Webpack configuration from `node_modules/react-scripts`
info => Removing existing JavaScript and TypeScript rules.
info => Modifying Create React App rules.
info => Using PostCSS preset with postcss@8.4.12
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
10% building 0/19 entries 2/19 dependencies 0/2 modules
info => Using cached manager
<i> [webpack-dev-middleware] wait until bundle finished: /__webpack_hmr
99% done plugins webpack-hot-middlewarewebpack built preview 32ae4ab1b020f2a68217 in 11522ms
ModuleBuildError: Module build failed (from ./node_modules/react-scripts/node_modules/postcss-loader/dist/cjs.js):
SyntaxError

(1:1) /cra-ts-storybook/src/index.css Unknown word

> 1 | var api = require("!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
    | ^
  2 |             var content = require("!!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].use[2]!./index.css");
  3 |

    at processResult (/cra-ts-storybook/node_modules/webpack/lib/NormalModule.js:758:19)
    at /cra-ts-storybook/node_modules/webpack/lib/NormalModule.js:860:5
    at /cra-ts-storybook/node_modules/loader-runner/lib/LoaderRunner.js:400:11
    at /cra-ts-storybook/node_modules/loader-runner/lib/LoaderRunner.js:252:18
    at context.callback (/cra-ts-storybook/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at Object.loader (/cra-ts-storybook/node_modules/react-scripts/node_modules/postcss-loader/dist/index.js:140:7)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at runNextTicks (node:internal/process/task_queues:65:3)
    at processImmediate (node:internal/timers:437:9)

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.
```

There is also the same issue reported on GitHub at https://github.com/storybookjs/addon-postcss/issues/33.

We will have no story for tailwind components :grimacing: