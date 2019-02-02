/**
 * Vuex Store module dealing with computation results received from backend.
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
import discreteMathApplicationsApi from '@/services/discomath-api'

function addStepsNumbersToResult (result) {
  result.computationalSteps.map((step, i) => {
    step.number = i + 1
  })
}

const state = {
  result: {}
}

const getters = {
  /**
   * @returns {object} The most recently retreived computational result
   */
  getResult: state => state.result
}

const actions = {
  /**
   * Clears the result state
   */
  flushResult ({ commit }) {
    commit('SET_RESULT', {})
  },

  /**
   * Calls the backend divisibility service with the provided payload
   *
   * @param {number} payload.divisor - divisor
   * @param {number} payload.number - number being tested
   */
  fetchDivisibilityTest ({ commit }, payload) {
    discreteMathApplicationsApi.divisibilityTest(payload.divisor, payload.number).then(data => {
      addStepsNumbersToResult(data)
      commit('SET_RESULT', data)
    })
  },

  /**
   * Calls the backend prime test service with the provided payload
   *
   * @param {number} payload.number - number being tested
   */
  fetchPrimeTest ({ commit }, payload) {
    discreteMathApplicationsApi.primeTest(payload.number).then(data => {
      addStepsNumbersToResult(data)
      commit('SET_RESULT', data)
    })
  },

  /**
   * Calls the backend prime factorization service with the provided payload
   *
   * @param {number} payload.number - number being factored
   */
  fetchPrimeFactorization ({ commit }, payload) {
    discreteMathApplicationsApi.primeFactorization(payload.number).then(data => {
      addStepsNumbersToResult(data)
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
