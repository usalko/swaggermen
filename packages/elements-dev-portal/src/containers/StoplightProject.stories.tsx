import { Story } from '@storybook/react';
import * as React from 'react';

import { SwaggermenProject, SwaggermenProjectProps } from './SwaggermenProject';

export default {
  title: 'Public/SwaggermenProject',
  component: SwaggermenProject,
  argTypes: {
    projectId: { table: { category: 'Input' } },
    hideTryIt: { table: { category: 'Input' } },
    hideMocking: { table: { category: 'Input' } },
    basePath: { table: { category: 'Routing' } },
    router: { table: { category: 'Routing' } },
    platformUrl: { table: { category: 'Advanced' } },
  },
  args: {
    router: 'memory',
    platformUrl: 'https://swaggermen.io',
  },
};

export const Playground: Story<SwaggermenProjectProps> = args => <SwaggermenProject {...args} />;
Playground.storyName = 'Studio Demo';
Playground.args = {
  projectId: 'cHJqOjYwNjYx',
  platformUrl: 'https://swaggermen.io',
};
