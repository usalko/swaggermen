import { IHttpOperation } from '@swaggermen/types';

export const httpOperation: IHttpOperation = {
  id: '?http-operation-id?',
  iid: 'POST_todos',
  method: 'post',
  path: '/todos',
  summary: 'Create Todo',
  responses: [
    {
      id: '?http-response-200?',
      code: '200',
    },
  ],
  servers: [
    {
      id: '?http-server-todos.swaggermen.io?',
      url: 'https://todos.swaggermen.io',
    },
  ],
  request: {
    body: {
      id: '?http-request-body?',
      contents: [
        {
          id: '?http-request-body-media?',
          mediaType: 'multipart/form-data',
          schema: {
            type: 'object',
            properties: {
              someFile: {
                type: 'string',
                contentEncoding: 'base64',
              },
            },
          },
        },
      ],
    },
  },
};

export default httpOperation;
