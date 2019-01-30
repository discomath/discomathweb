import axios from 'axios'

const BASE_URL = 'https://dmapplications.herokuapp.com/api'

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
