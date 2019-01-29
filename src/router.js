import Topics from './views/Topics.vue'
import Divisibility from './views/applications/Divisibility.vue'

export const TOPICS = [
  {
    name: 'Number Theory',
    applications: [
      {
        name: 'Divisibility',
        link: 'divisibility'
      }
    ]
  }
]

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
    }
  ]
}
