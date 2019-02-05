/**
 * Vuex Store module dealing with application health management.
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
import discoMathActuator from '@/services/discomath-actuator'

const state = {
  isUp: false
}

const getters = {
  /**
   * @returns {boolean} True if the backend service is healthy
   */
  backendIsUp: state => state.isUp
}

const actions = {
  /**
   * fetches the health check from the backend
   */
  fetchHealthCheck ({ commit }) {
    discoMathActuator.healthCheck().then(data => {
      if (data.status === 'UP') {
        commit('SET_HEALTH_STATUS', true)
      } else {
        commit('SET_HEALTH_STATUS', false)
      }
    })
  }
}

const mutations = {
  SET_HEALTH_STATUS: (state, payload) => {
    state.isUp = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
