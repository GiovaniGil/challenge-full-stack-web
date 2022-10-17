import Vue from 'vue';
import { RouterLinkStub } from '@vue/test-utils';
import Vuetify from 'vuetify';
import VueTheMask from 'vue-the-mask';

const VueTestUtils = require('@vue/test-utils');

 VueTestUtils.config.mocks.$t = (key) => key;
 VueTestUtils.config.mocks.$d = (key) => key;
 VueTestUtils.config.stubs.RouterLink = RouterLinkStub;


jest.mock('Arch/router', () => ({
  currentRoute: {
    query: {},
  },
}));

Vue.use(Vuetify);
Vue.use(VueTheMask);

const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);
