import * as React from 'react';

import type { DocsProps } from '../components/Docs';

const DEFAULT_CONTEXT: SwaggermenOptionsContextProps = {};

export type SwaggermenOptionsContextProps = Pick<DocsProps, 'nodeHasChanged' | 'renderExtensionAddon'>;

export const SwaggermenOptionsContext = React.createContext<SwaggermenOptionsContextProps>(DEFAULT_CONTEXT);

export const useOptionsCtx = () => {
  return React.useContext(SwaggermenOptionsContext) || DEFAULT_CONTEXT;
};

export type ProviderProps = Partial<SwaggermenOptionsContextProps> & {
  children: React.ReactNode;
};

export function SwaggermenOptionsProvider({ children, nodeHasChanged, renderExtensionAddon }: ProviderProps) {
  return (
    <SwaggermenOptionsContext.Provider
      value={Object.assign({}, DEFAULT_CONTEXT, { nodeHasChanged, renderExtensionAddon })}
    >
      {children}
    </SwaggermenOptionsContext.Provider>
  );
}
