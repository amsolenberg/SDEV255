import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store.js';
import vueRouter from 'vue-router';
import Messages from './components/Messages.vue';
import NewMessage from './components/NewMessage.vue';
import Message from './components/Message.vue';

Vue.use(vueRouter);

const routes = [
  {
    path: '/',
    component: Messages,
  },
  {
    path: '/NewMessage',
    component: NewMessage,
  },
  {
    path: '/Message/:id',
    component: Message,
  },
];

// const router = new vueRouter({ routes });
const router = new vueRouter({ routes, mode: 'history' }); // `mode: history` gets rid of the `#` in the address bar

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
