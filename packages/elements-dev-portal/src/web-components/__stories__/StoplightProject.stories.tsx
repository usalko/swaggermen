import '../index';

import { Story } from '@storybook/react';
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicSwaggermen {
      'swaggermen-swaggermen-project': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const Template: Story = (props: any) => <swaggermen-swaggermen-project {...props} />;

export default {
  title: 'web-components/SwaggermenProject',
  argTypes: {
    projectId: { control: 'text' },
    platformUrl: { control: 'text' },
    router: {
      control: { type: 'inline-radio', options: ['history', 'hash', 'memory'] },
      defaultValue: 'history',
    },
  },
};

export const defaultProject = Template.bind({});
defaultProject.storyName = "Swaggermen's Demo workspace";
defaultProject.args = {
  projectId: 'cHJqOjYwNjYx',
  platformUrl: 'https://swaggermen.io',
};
