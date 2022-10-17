import Vue from 'vue';
import Vuex from 'vuex';

import studentStore from '@/app/store/student';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    studentStore,
  },
});
