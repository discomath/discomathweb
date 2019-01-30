/**
 * Vuex Store module holding data about the various topics and subtopics
 * within the application.
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
import { TOPICS } from '@/router'

function mapSubtopicsFromTopics () {
  let st = {}

  Object.keys(TOPICS).forEach(topic => {
    TOPICS[topic].applications.forEach(application => {
      st[application.name] = application
    })
  })

  return st
}

const state = {
  topics: TOPICS,
  subtopics: mapSubtopicsFromTopics()
}

const getters = {
  /**
   * @returns {object} All mathematical topics in this application.
   */
  getTopics: state => state.topics,

  /**
   * @returns {object} All mathematical subtopics in this application.
   */
  getSubTopics: state => state.subtopics
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
