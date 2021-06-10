import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import config from '@/config';
import moment from 'moment';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.prototype.$config = config;

moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.prototype.GlobalCliObj = {
  name: 'liubei',
  age: 18,
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
