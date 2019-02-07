/**
 * Interface for DiscoMath api.
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
import axios from 'axios'

/**
 * URL to the backend or a locally running instance
 */
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://dmapplications.herokuapp.com/api' : 'http://localhost:8080/api'

/**
 * Methods to interact with the backend
 */
export default {
  /**
   * Queries the backend divisibility service.
   *
   * @param {number} divisor - divides the number
   * @param {number} number - the number being divided by the divisor
   */
  async divisibilityTest (divisor, number) {
    const res = await axios.get(`${BASE_URL}/applications/divisibility/${divisor}?number=${number}`)
    return res.data
  },

  /**
   * Queries the backend prime test service
   *
   * @param {number} number - the number being tested
   */
  async primeTest (number) {
    const res = await axios.get(`${BASE_URL}/applications/prime-numbers/test?number=${number}`)
    return res.data
  },

  /**
   * Queries the backend prime factorization service
   *
   * @param {number} number - the number being factored
   */
  async primeFactorization (number) {
    const res = await axios.get(`${BASE_URL}/applications/prime-numbers/factors?number=${number}`)
    return res.data
  },

  /**
   * Queries the backend gcf service
   *
   * @param {Array} numbers - the numbers being commonly factored
   */
  async gcf (numbers) {
    let query = `?n1=${numbers.shift()}&n2=${numbers.shift()}`
    if (numbers.length) {
      numbers.forEach(number => { query += `&n=${number}` })
    } else {
      query += '&n='
    }
    const res = await axios.get(`${BASE_URL}/applications/prime-numbers/gcf${query}`)
    return res.data
  }
}
