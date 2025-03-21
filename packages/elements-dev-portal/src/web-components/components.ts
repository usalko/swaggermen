import { createElementClass } from '@swaggermen/swaggermen-core';

import { SwaggermenProject } from '../containers/SwaggermenProject';

export const SwaggermenProjectElement = createElementClass(SwaggermenProject, {
  projectId: { type: 'string', defaultValue: '' },
  hideTryIt: { type: 'boolean' },
  hideServerInfo: { type: 'boolean' },
  hideSecurityInfo: { type: 'boolean' },
  hideMocking: { type: 'boolean' },
  hideExport: { type: 'boolean' },
  basePath: { type: 'string' },
  staticRouterPath: { type: 'string' },
  router: { type: 'string' },
  platformUrl: { type: 'string' },
  collapseTableOfContents: { type: 'boolean' },
  tryItCredentialsPolicy: { type: 'string' },
  tryItCorsProxy: { type: 'string' },
});
