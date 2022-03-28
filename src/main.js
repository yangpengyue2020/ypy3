import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setRem from "../setRem";
import { Icon } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Icon);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
setRem(600, 100);
if(process.env.NODE_ENV==='development'){
  require('./mock/index')
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
