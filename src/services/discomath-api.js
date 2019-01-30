import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://dmapplications.herokuapp.com/api' : 'http://localhost:8080/api'

export default {
  /**
   * Queries the backend divisibility application.
   *
   * @param divisor - divides the number
   * @param number - the number being divided by the divisor
   */
  async divisibilityTest (divisor, number) {
    const res = await axios.get(`${BASE_URL}/applications/divisibility/${divisor}?number=${number}`)
    return res.data
  }
}
