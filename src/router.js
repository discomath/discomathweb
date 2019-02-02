/**
 * Configuration for Vue Router.  Exports routed information for use
 * in Vuex store, and Vue components.
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
import Topics from './views/Topics.vue'
import Divisibility from './views/applications/Divisibility.vue'
import PrimeFactorization from './views/applications/PrimeFactorization.vue'
import PrimeTest from './views/applications/PrimeTest.vue'

/**
 * Routed paths in a format applicable to components and Vuex store.
 */
export const TOPICS = [
  {
    name: 'Number Theory',
    applications: [
      {
        name: 'Divisibility',
        link: 'divisibility'
      },
      {
        name: 'Prime Numbers',
        link: 'prime-numbers/test'
      },
      {
        name: 'Prime Factorization',
        link: 'prime-numbers/factors'
      }
    ]
  }
]

/**
 * Vue Router configuration
 */
export default {
  routes: [
    {
      path: '/',
      redirect: '/topics'
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/applications/divisibility',
      name: 'divisibility',
      component: Divisibility
    },
    {
      path: '/applications/prime-numbers/factors',
      name: 'prime-factors',
      component: PrimeFactorization
    },
    {
      path: '/applications/prime-numbers/test',
      name: 'prime-test',
      component: PrimeTest
    }
  ]
}
