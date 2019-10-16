import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
global.jQuery = require("jquery");
let $ = global.jQuery;
global.$ = $;
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
