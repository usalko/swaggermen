
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // brand
  brandTitle: 'Swaggermen',
  brandUrl: 'https://gihub.com/usalko/swaggermen.git',
  brandImage: 'https://gihub.com/usalko/swaggermen.git/logo-blue-black.png',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#ced9e0',
  appBorderRadius: 0,
  colorSecondary: '#008eff',

  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', system-ui, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
  fontCode: 'Inconsolata, Monaco, Consolas, \'Courier New\', Courier, monospace',
});
