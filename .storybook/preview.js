import 'assets/_design-system.scss';
import 'assets/reset.scss';
import 'assets/global.scss';
import 'assets/typography.scss';
import { app } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { defineRule } from 'vee-validate';
import { required, email, integer, min, min_value as minValue, regex } from '@vee-validate/rules';

// define global vee-validate rules
defineRule('required', required);
defineRule('email', email);
defineRule('integer', integer);
defineRule('min', min);
defineRule('min_value', minValue);
defineRule('regex', regex);

// Mocks
// NuxtLink
app.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to);
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
});
app.mixin({
  created() {
    this.localePath = (path) => path;
    this.$t = (key) => key;
    this.$n = (key) => key;
    this.t = (key) => key;
    this.n = (key) => key;
  },
});
app.mixin({
  created() {
    this.$colorMode = {
      value: 'light',
      preference: 'light',
    };
  },
});

// import icons globally
const icons = import.meta.glob('../src/components/icons/*.vue');

for (const path in icons) {
  icons[path]().then((componentConfig) => {
    const componentName = upperFirst(
      camelCase(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
      ),
    );

    app.component(componentName, componentConfig.default || componentConfig);
  });
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themeSwitcher: {
    themes: [
      { label: 'Light Theme', value: 'light' },
      { label: 'Dark Theme', value: 'dark' },
    ],
  },
  viewport: {
    viewports: {
      phone: {
        name: 'Phone',
        styles: {
          width: '360px',
          height: '740px',
        },
      },
      tabletPortrait: {
        name: 'Tablet Portrait',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      tabletLandscape: {
        name: 'Tablet Landscape',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      smallDesktop: {
        name: 'Small Desktop',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
      largeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};
