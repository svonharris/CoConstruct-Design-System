import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'CoConstruct Design System',
    brandUrl: './',
    brandImage: './CoConstruct_Logo-square.png',
  }),
});