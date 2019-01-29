import topics from './topics.module'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: { topics },
  strict: debug
}
