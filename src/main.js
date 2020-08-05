import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});