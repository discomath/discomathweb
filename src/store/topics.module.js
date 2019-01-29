import discreteMathApplicationsApi from '@/services/dmapplications-api'

const state = {
  topics: {

  },

  applications: {

  }
}

const getters = {
  getTopics: state => state.topics,
  getApplications: state => state.applications
}

const actions = {
  async fetchTopics ({ commit }) {
    let data = await discreteMathApplicationsApi.getTopics()

    data.forEach(topic => {
      commit('SET_TOPICS_DATA', topic)
      topic.subTopics.forEach(subTopic => {
        commit('SET_APPLICATION', subTopic)
      })
    })
  }
}

const mutations = {
  SET_TOPICS_DATA (state, topic) {
    state.topics[topic.id] = topic
  },

  SET_APPLICATION (state, application) {
    state.applications[application.id] = application
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
