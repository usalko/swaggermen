import '@swaggermen/swaggermen-core/styles.css';

import { API } from '@swaggermen/swaggermen';
import { Box } from '@swaggermen/mosaic';
import React, { useContext } from 'react';

import { GlobalContext } from '../context';

export const SwaggermenAPI: React.FC = () => {
  const { apiDescriptionUrl, layout } = useContext(GlobalContext);

  const specUrlWithProxy =
    apiDescriptionUrl && window.location.origin === 'https://swaggermen-demo.swaggermen.io'
      ? `https://swaggermen.io/cors-proxy/${apiDescriptionUrl}`
      : apiDescriptionUrl;

  return (
    <Box flex={1} overflowY={layout !== 'stacked' ? 'hidden' : undefined}>
      <API apiDescriptionUrl={specUrlWithProxy} router="history" layout={layout} />
    </Box>
  );
};
