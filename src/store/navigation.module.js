/**
 * Vuex Store module dealing with navigation state.
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
const state = {
  drawer: false
}

const getters = {
  /**
   * @returns {boolean} True if the navigational drawer is open
   */
  drawerIsOpen: state => state.drawer
}

const actions = {
  /**
   * Toggles the boolean state of the navigational drawer
   */
  toggleDrawer ({ commit }) {
    commit('TOGGLE_DRAWER')
  }
}

const mutations = {
  TOGGLE_DRAWER: state => {
    state.drawer = !state.drawer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
