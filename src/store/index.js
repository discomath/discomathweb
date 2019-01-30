/**
 * Exports configuration for Vue Router
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
import navigationModule from './navigation.module'
import resultModule from './result.module'
import topicsModule from './topics.module'

const debug = process.env.NODE_ENV !== 'production'

/**
 * Configuration for Vue Router
 */
export default {
  modules: {
    navigationModule,
    resultModule,
    topicsModule
  },
  strict: debug
}
