import discreteMathApplicationsApi from '@/services/dmapplications-api'

const state = {
  result: {}
}

const getters = {
  getResult: state => state.result
}

const actions = {
  fetchDivisibilityTest ({ commit }, payload) {
    discreteMathApplicationsApi.divisibilityTest(payload.divisor, payload.number).then(data => {
      data.computationalSteps.map((step, i) => {
        step.number = i + 1
      })
      commit('SET_RESULT', data)
    })
  }
}

const mutations = {
  SET_RESULT: (state, payload) => {
    state.result = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
