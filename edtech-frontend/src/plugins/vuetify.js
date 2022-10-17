import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00418A',
        secondary: '#EE7900',
        input: '#757575',
        background: '#FCFCFC',
        text: '#757575',
        'text-active': '#fff',
      },
      dark: {
        primary: 'white',
        secondary: '#333',
        input: '#333',
        background: '#333',
        text: '#333',
        'text-active': '#333',
      },
    },
    options: {
      customProperties: true,
    },
  },
  breakpoint: {
    mobileBreakpoint: 'sm',
  },
  icons: {
    values: {
      search: 'mdi-magnify',
      notification: 'mdi-bell',
    },
  },
});
