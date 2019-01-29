import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api'

export default {
  async getTopics () {
    const res = await axios.get(`${BASE_URL}/topics`)
    return res.data
  }
}
