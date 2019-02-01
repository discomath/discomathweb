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

  async primeTest (number) {
    const res = await axios.get(`${BASE_URL}/applications/prime-numbers/test?number=${number}`)
    return res.data
  }
}
