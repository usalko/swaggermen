import '@swaggermen/swaggermen/styles.min.css';

import { SwaggermenProject } from '@swaggermen/swaggermen-dev-portal';
import React from 'react';

export const SwaggermenProjectDocs: React.FC = () => {
  return (
    <SwaggermenProject
      router="history"
      basePath="swaggermen-project"
      platformUrl="https://swaggermen.io"
      projectId="cHJqOjYwNjYx"
    />
  );
};
