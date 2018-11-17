import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'
import BootstrapVue from 'bootstrap-vue'
import Element from 'element-ui'
import 'vue-awesome/icons'
import 'element-ui/lib/theme-chalk/index.css';
import Icon from 'vue-awesome/components/Icon'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(BootstrapVue);
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
