import type { IServer } from '@stoplight/types';

import { getServersToDisplay, getServerUrlWithVariableValues } from '../IServer';

describe('IServer', () => {
  describe('getServerUrlWithVariableValues()', () => {
    it('should handle invalid server URLs', () => {
      const server: IServer = {
        id: 'http-server-https://[env].swaggermen.io/v1',
        url: 'https://[env].swaggermen.io/v1',
      };

      expect(getServerUrlWithVariableValues(server, {})).toBe('https://[env].swaggermen.io/v1');
    });
  });

  describe('getServersToDisplay', () => {
    it('given inlineDefaults, should expand the URL', () => {
      const servers: IServer[] = [
        {
          id: 'http-server-https://{env}.swaggermen.io:{port}',
          url: 'https://{env}.swaggermen.io:{port}',
          variables: {
            env: {
              default: 'int',
            },
            port: {
              default: '443',
            },
          },
        },
      ];

      expect(getServersToDisplay(servers, undefined, true)).toStrictEqual([
        {
          id: 'http-server-https://{env}.swaggermen.io:{port}',
          description: 'Live Server',
          url: 'https://int.swaggermen.io:443',
          variables: {
            env: {
              default: 'int',
            },
            port: {
              default: '443',
            },
          },
        },
      ]);
    });
  });
});
