import resultModule from './result.module'
import topicsModule from './topics.module'

const debug = process.env.NODE_ENV !== 'production'

export default {
  modules: { resultModule, topicsModule },
  strict: debug
}
