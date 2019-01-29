import axios from 'axios'

const BASE_URL = 'http://dmapplications.herokuapp.com/api'

export default {
  async getTopics () {
    const res = await axios.get(`${BASE_URL}/topics`)
    return res.data
  },

  async divisibilityTest (factor, number) {
    const res = await axios.get(`${BASE_URL}/applications/divisibility/${factor}?number=${number}`)
    return res.data
  }
}
