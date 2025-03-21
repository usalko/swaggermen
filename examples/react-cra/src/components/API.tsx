import '@swaggermen/swaggermen/styles.min.css';

import { API } from '@swaggermen/swaggermen';
import React from 'react';

export const SwaggermenAPI: React.FC = () => {
  return (
    <API
      router="history"
      basePath="zoom-api"
      apiDescriptionUrl="https://raw.githubusercontent.com/swaggermenio/Public-APIs/master/reference/zoom/openapi.yaml"
    />
  );
};
