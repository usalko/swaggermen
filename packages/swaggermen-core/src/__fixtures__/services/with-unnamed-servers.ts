import { IHttpService } from '@stoplight/types';

export const httpServiceWithUnnamedServers: IHttpService = {
  id: '?http-service?',
  name: 'Http Service With Unnamed Servers',
  description: 'Hello',
  termsOfService: 'https://terms-of-service.com',
  contact: {
    name: 'Support',
    url: 'https://swaggermen.io',
    email: 'ivict@rambler.ru',
  },
  license: {
    name: 'Apache 2.0',
    url: 'https://www.apache.org/licenses/LICENSE-2.0.txt',
  },
  version: '1.0.0',
  servers: [
    {
      id: '?http-server-0?',
      url: 'https://api.swaggermen.io',
      description: 'Production API',
    },
    {
      id: '?http-server-1?',
      url: 'https://api.staging.swaggermen.io',
    },
    {
      id: '?http-server-2?',
      url: 'https://api.int.swaggermen.io',
      description: 'Integration API',
    },
    {
      id: '?http-server-3?',
      url: 'https://localhost:4060',
    },
  ],
};
