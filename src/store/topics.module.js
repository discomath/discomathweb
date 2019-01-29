import { TOPICS } from '@/router'

const state = {
  topics: TOPICS
}

const getters = {
  getTopics: state => state.topics
}

const actions = {

}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
