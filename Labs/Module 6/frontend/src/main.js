import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store.js';
import vueRouter from 'vue-router';
import Messages from './components/Messages.vue';

Vue.use(vueRouter);

const routes = [
  {
    path: '/',
    component: Messages,
  },
];

const router = new vueRouter({routes})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
