import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication.js'
import products from './modules/products.js'
import alerts from './modules/alerts.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        authentication,
        products,
        alerts
    }
})
