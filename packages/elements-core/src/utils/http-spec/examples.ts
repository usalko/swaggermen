import { INodeExample, INodeExternalExample } from '@swaggermen/types';

export const isNodeExample = (example: INodeExample | INodeExternalExample): example is INodeExample => {
  return example.hasOwnProperty('value');
};
