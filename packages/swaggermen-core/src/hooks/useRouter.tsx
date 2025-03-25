import { Dictionary } from '@stoplight/types';
import * as React from 'react';
import { BrowserRouter, HashRouter, MemoryRouter, StaticRouter } from 'react-router-dom';

import { RouterType } from '../types';

const RouterComponent: Dictionary<React.ComponentType, RouterType> = {
  history: BrowserRouter,
  memory: MemoryRouter as any,
  hash: HashRouter,
  static: StaticRouter as any,
};

interface RouterProps {
  basename?: string;
  location?: string;
  children?: any;
  window?: any;
}

export const useRouter = (router: RouterType, basePath: string, staticRouterPath?: string) => {
  /* @ts-expect-error */
  const Router: JSX.Element = RouterComponent[router];
  const routerProps: RouterProps = {
    ...(router !== 'memory' && { basename: basePath }),
    ...(router === 'static' && { location: staticRouterPath }),
  };

  return {
    Router,
    routerProps,
  };
};
