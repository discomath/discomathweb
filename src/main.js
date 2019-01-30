/**
 * Injects App.vue into public/index.html body.  Initializes
 * Vue instance with a Vuex store and a Vue Router.
 *
 * discomathweb is a web service for studying topics in discrete math.
 * Copyright (C) 2019  discomath
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://github.com/discomath/discomathweb/blob/dev/LICENSE>.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import routerConfig from './router'
import storeConfig from './store/'

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
