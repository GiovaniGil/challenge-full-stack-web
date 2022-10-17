import Vue from 'vue';
import App from './App.vue';
import store from '@/app/store';
import router from '@/app/arch/router';
import vuetify from './plugins/vuetify';
import './plugins/loading';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueTheMask from 'vue-the-mask';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);
Vue.use(VueTheMask);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
