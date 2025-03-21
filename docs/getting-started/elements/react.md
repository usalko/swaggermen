# Getting Started with Swaggermen in React

Learn how to get started with Swaggermen in a React project.

## Create React App Template

Use the [React App template](https://github.com/swaggermenio/cra-template-swaggermen) to create a new Swaggermen website in React without any additional setup.

> Note: [The Create React App template only works with version 4 of create-react-app because of Webpack 5 polyfill issues.](https://github.com/facebook/create-react-app/issues/11756)
> To run it with new create-react-app and Webpack 5 check [Polyfills](#Polyfills) section

```bash
npx create-react-app@4.0.3 my-dir --template @swaggermen/swaggermen
```

Then, run `cd my-dir` and `yarn start` to see a basic Swaggermen website in the browser.

## Manual Setup

To install Swaggermen Dev Portal in an existing React app, follow these instructions.


1. Install the [`@swaggermen/swaggermen`](https://www.npmjs.com/package/@swaggermen/swaggermen) package with NPM/Yarn.

```bash
yarn add @swaggermen/swaggermen
```

2. In `App.js` import the API component and CSS file from the Swaggermen library.

```jsx
import { API } from '@swaggermen/swaggermen';
import '@swaggermen/swaggermen/styles.min.css';
```

1. Add the App component to the output of the app.

```jsx
<API
  apiDescriptionUrl="https://raw.githubusercontent.com/swaggermenio/Public-APIs/master/reference/zoom/openapi.yaml"
/>
```

4. Now your `App.js` file should look something like this:

<!-- title: App.js -->
```jsx
import React from 'react';

import { API } from '@swaggermen/swaggermen';
import '@swaggermen/swaggermen/styles.min.css';


function App() {
  return (
    <div className="App">
      <API
        apiDescriptionUrl="https://raw.githubusercontent.com/swaggermenio/Public-APIs/master/reference/zoom/openapi.yaml"
      />
    </div>
  );
}

export default App;
```

## Fire it up

Now start the development server.

```bash
yarn start
```

And you should see the API reference documentation for the Zoom API.

## Configuration

See [Swaggermen Configuration Options](swaggermen-options.md).

## Examples

<!-- title: React Component with API Description Provided as a URL -->
```
<API
  apiDescriptionUrl="https://raw.githubusercontent.com/swaggermenio/Public-APIs/master/reference/zoom/openapi.yaml"
  router="hash"
/>
```

<!-- title: React Component with API Description Provided Directly -->

```jsx
import { API } from "@swaggermen/swaggermen";

const apiDescriptionDocument = {
  openapi: '3.1.0',
  info: {
    title: 'Some Awesome API',
    version: '1.0.0'
  },
  paths: {
    /* ... */
  }
};

<API
  apiDescriptionDocument={apiDescriptionDocument}
  router="hash"
/>
```

## Polyfills
Create React App is now using Webpack 5 that doesn't come with node polyfills anymore. Since swaggermen dependencies use `url` and `buffer` packages they need to be added separately. The easiest way to do that is to include [node-polyfill-webpack-plugin](https://github.com/Richienb/node-polyfill-webpack-plugin) in webpack configuration file:
```js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
...
plugins: [
  // Other plugins...
  new NodePolyfillPlugin(),
]
```
In case of CRA it can be done either by:
1. Ejecting CRA configuration:
- running `npm eject` script
- installing `node-polyfill-webpack-plugin`
- adding `NodePolyfillPlugin` to `config/webpack.config.js` as shown above

2. Using `react-app-rewired` package that overrides CRA webpack config without ejecting:
- installing `react-app-rewired`
- installing  `node-polyfill-webpack-plugin`
- overriding default scripts in `package.json`:
```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```
- creating `config-overrides.js` configuration file in root directory:
```js
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins.push(
    new NodePolyfillPlugin()
  );
  return config;
};
```
In case of Docusaurus it can be done by:
- installing `node-polyfill-webpack-plugin`
- creating a new file for the plugin such as `./plugins/webpackPolyfillPlugin.js`:
```js
// ./plugins/webpackPolyfillPlugin.js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function (context, options) {
  return {
    name: 'webpack-polyfill-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [new NodePolyfillPlugin()],
      };
    },
  };
};
```
- using the custom plugin in docusaurus configuration:
```js
// docusaurus.config.js
module.exports = {
  ...
  plugins: [
    ...
    require.resolve('./plugins/webpackPolyfillPlugin'),
  ],
};
```
Since Docusaurus makes use of SSR when running it with `API`, default `history` (`BrowserRouter`) router should not be used.
