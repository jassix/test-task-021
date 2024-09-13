import { setup, type Preview } from "@storybook/vue3";
import { createPinia } from 'pinia';
import { vueRouter } from 'storybook-vue3-router'
import { App } from "vue";

const pinia = createPinia()

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  decorators: [
    vueRouter()
  ],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
