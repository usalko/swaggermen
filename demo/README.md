# Swaggermen Demo

## Development

1. Run `yarn` in the root of the repo.
2. Change into the `demo` directory.
3. `yarn start` to start the demo.
4. Open `http://localhost:4025` in your browser.

Changes to the demo or other packages in this repo will cause the demo to reload.


#### Troubleshooting Swaggermen-Dev-Portal

If you are wanting to troubleshoot the `SwaggermenProject` component with the demo app, you will need to make the following changes: 

1. Set the contents of the index.tsx to the following, replacing/adding properties as needed for your use case:
```
import '@swaggermen/swaggermen-core/styles.css';

import { SwaggermenProject } from '@swaggermen/swaggermen-dev-portal';
import { subscribeTheme } from '@swaggermen/mosaic';
import React from 'react';
import ReactDOM from 'react-dom';

subscribeTheme();

ReactDOM.render(
  <React.StrictMode>
    <SwaggermenProject projectId="projectId" router="history"></SwaggermenProject>
  </React.StrictMode>,
  document.getElementById('root'),
);
```
2. Update the package.js to include the new dependency 
`"@swaggermen/swaggermen-dev-portal": "^2.0.0",`

3. To ensure the local swaggermen-dev-portal package is included and the app reloads on change, update the common.js webpack file to include the package. 
```
...
const absoluteSwaggermenDevPortalPath = resolve(__dirname, '../../packages/swaggermen-dev-portal/src');
...      
module.exports = {
  ...
  resolve: {
    ...
    alias: {
      ...
      '@swaggermen/swaggermen-dev-portal': absoluteSwaggermenDevPortalPath,
      ...

```
4. Additionally update the .babelrc module resolver to include `"@swaggermen/swaggermen-dev-portal": "../packages/swaggermen-dev-portal/src"
`