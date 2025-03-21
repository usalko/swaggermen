import { IHttpOperation } from '@swaggermen/types';

export const operation: IHttpOperation = {
  id: '?http-operation-id?',
  iid: 'GET-simple',
  method: 'get',
  path: '/todos',
  summary: 'Get 200',
  responses: [
    {
      id: '?http-response-200?',
      code: '200',
      description: 'OK',
    },
  ],
};
