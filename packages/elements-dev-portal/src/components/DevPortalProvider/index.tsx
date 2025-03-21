import { withMosaicProvider, withPersistenceBoundary, withQueryClientProvider } from '@swaggermen/swaggermen-core';
import * as React from 'react';

export type DevPortalProviderProps = {
  platformUrl?: string;
  platformAuthToken?: string;
  isLoggedIn?: boolean;
};

export const PlatformContext = React.createContext<DevPortalProviderProps>({ platformUrl: 'https://swaggermen.io' });

const PlatformProvider: React.FC<DevPortalProviderProps> = ({
  platformUrl = 'https://swaggermen.io',
  platformAuthToken,
  isLoggedIn,
  children,
}) => {
  return (
    <PlatformContext.Provider value={{ platformUrl, platformAuthToken, isLoggedIn }}>
      {children}
    </PlatformContext.Provider>
  );
};

export const DevPortalProvider = withPersistenceBoundary(withQueryClientProvider(withMosaicProvider(PlatformProvider)));
