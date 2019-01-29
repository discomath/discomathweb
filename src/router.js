import Home from './views/Home.vue'
import Divisibility from './views/applications/Divisibility.vue'

export default {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/applications/divisibility',
      name: 'divisibility',
      component: Divisibility
    }
  ]
}
