import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import routerConfig from './router'
import storeConfig from './store/'

import 'materialize-css/dist/css/materialize.css' // globally applied materialize css stylesheet

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Router)

const store = new Vuex.Store(storeConfig)
const router = new Router(routerConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
