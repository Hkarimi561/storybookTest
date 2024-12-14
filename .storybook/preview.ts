import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
// .storybook/preview.js
import { withThemeByDataAttribute } from '@storybook/addon-themes';

/* snipped for brevity */


setCompodocJson(docJson);
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      emerald: 'emerald',
      dark: 'dark',
    },
    defaultTheme: 'emerald',
    attributeName: 'data-theme',
  }),
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
