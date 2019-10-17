import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import VModal from 'vue-js-modal'
import axios from 'axios'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
global.jQuery = require("jquery");
let $ = global.jQuery;
global.$ = $;
Vue.use(VModal)

Vue.config.productionTip = false
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://creative-code.local/api'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
