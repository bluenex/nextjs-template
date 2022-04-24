const componentsOrder = ['Navbar', 'Footer', 'Layout', 'Dropzone', 'ProbGauge']

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": {
      hidden: true,
    },
  },
  options: {
    storySort: {
      order: ['chakra-ui', componentsOrder, 'tailwind', componentsOrder, 'example'],
    },
  }
};
