import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import animationPolyfill from './animationPolyfill.js'

animationPolyfill.polyfill();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
