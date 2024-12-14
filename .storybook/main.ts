// .storybook/main.ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', {
    name: '@storybook/addon-styling-webpack', // 👈🏽 This part
    options: {
      rules: [
        {
          test: /^globals\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: { implementation: require.resolve('postcss') },
            },
          ],
        },
      ],
    },
  }, "@storybook/addon-themes"],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};

export default config;


