import topicsModule from './topics.module'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: { topicsModule },
  strict: debug
}
