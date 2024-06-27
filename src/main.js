import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import vuetify from './plugins/my-extensions';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
 
  render: h => h(App),
}).$mount('#app')
